import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';


import { Button } from '../../../ui/Button';
import { Actions } from '../../../ui/Icons';
import { Input } from '../../../ui/Input';
import { EditProfileItem } from '../../../profile/edit/item';

import { useComponentUnderCursor } from '../../../../hooks/useComponentUnderCursor';
import { schema } from '../../../../form-helpers/member-edit/schema';
import { getInitialValues } from '../../../../form-helpers/member-edit/mapping';
import { selectAccount } from '../../../../ducks/account/selectors';
import { updateMember, deleteMember, deactivateMember } from '../../../../ducks/member/actions';

import style from './styles.module.scss';

export const MembersItemActions = ({ member }) => {
  const { t } = useTranslation();
  const put = useDispatch();
  const account = useSelector(selectAccount);
  const initialValues = schema.cast({});
  const [visibleActions, setVisibleActions] = useState(false);
  const [visivbleField, setVisivbleField] = useState();
  const {ref,
    isComponentUnderCursor,
    setIsComponentUnderCursor,
  } = useComponentUnderCursor(false);

  const toggleVisibleActions = () => {
    setVisibleActions(!visibleActions);
    setIsComponentUnderCursor(!visibleActions);
  };

  const toggleVisivbleField = (field) => {
    if (!field || field === visivbleField) {
      setVisivbleField();
    } else {
      setVisivbleField(field);
    }
  };

  useEffect(() => {
    if (visibleActions && !isComponentUnderCursor) {
      toggleVisibleActions();
    }
  }, [isComponentUnderCursor]);

  const closeEditProfile = () => {
    toggleVisivbleField();
    toggleVisibleSubstrate();
    // openVisibleSuccess();
  };

  const onSubmit = (values) => {
    put(updateMember(values, closeEditProfile));
  };

  const isErrors = (errors) => {
    return Object.keys(errors).length === 0 ? false : true;
  };

  return (
    <div ref={ ref } className={ style.membersItemActions }>
      <div
        className={ cn(
          style.membersItemActionsBlock,
          visibleActions ? style.membersItemActionsBlockVisible : null,
          visivbleField ? style.membersItemActionsBlockVisibleField : null,
        ) }
      >
        <Formik
          initialValues={ getInitialValues(initialValues, member) }
          validationSchema={ schema }
          onSubmit={ onSubmit }
        >
          {
            ({
              values,
              errors,
              setFieldValue,
              handleChange,
            }) => {
              const onCancel = (name) => {
                name.split(',').forEach(item => setFieldValue(item, profile[item]));
                toggleVisivbleField();
              };

              return (
                <Form>
                  {
                    member.isActive ?
                      <EditProfileItem
                        title={ t('memberItemActionBlock.deactivate') }
                        className={ style.membersItemActionsItem }
                        onClick={ () => {
                          put(deactivateMember({
                            id: member.id,
                            accountId: member.accountId,
                          }, closeEditProfile));
                        } }
                      />
                      :
                      <EditProfileItem
                        title={ t('memberItemActionBlock.delete') }
                        className={ style.membersItemActionsItem }
                        onClick={ () => {
                          put(deleteMember({
                            id: member.id,
                            accountId: member.accountId,
                          }, closeEditProfile));
                        } }
                      />
                  }
                  <EditProfileItem
                    title={ t('memberItemActionBlock.hide') }
                    className={ style.membersItemActionsItem }
                  />
                  <EditProfileItem
                    title={ t('memberItemActionBlock.editPosition') }
                    name="position"
                    className={ style.membersItemActionsItem }
                    visivbleField={ visivbleField }
                    toggleVisivbleField={ isErrors(errors) ? null : toggleVisivbleField }
                    onCancel={ onCancel }
                    error={ errors.position }
                  >
                    <Input
                      name="position"
                      value={ values.position }
                      onChange={ handleChange }
                      error={ errors.position }
                      autoComplete="off"
                    />
                  </EditProfileItem>
                </Form>
              );
            }
          }
        </Formik>
      </div>
      <Button
        clear={ true }
        className={ style.membersItemActionsBtn }
        onClick={ toggleVisibleActions }
        icon={ <Actions /> }
      ></Button>
    </div>
  );
};
