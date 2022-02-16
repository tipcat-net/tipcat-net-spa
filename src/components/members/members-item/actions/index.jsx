import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';


import { Button } from '../../../ui/Button';
import { Actions, Arrow, ArrowDown, ChevronBigLeft, ChevronDown } from '../../../ui/Icons';
import { Input } from '../../../ui/Input';
import { EditProfileItem } from '../../../profile/edit/item';

import { useComponentUnderCursor } from '../../../../hooks/useComponentUnderCursor';
import { schema } from '../../../../form-helpers/member-edit/schema';
import { getInitialValues } from '../../../../form-helpers/member-edit/mapping';
import { selectAccount } from '../../../../ducks/account/selectors';
import { updateMember, deleteMember, deactivateMember, transferMember } from '../../../../ducks/member/actions';

import style from './styles.module.scss';

export const MembersItemActions = ({ member, openVisibleSuccess }) => {
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
    setVisivbleField(field);
  };

  useEffect(() => {
    if (visibleActions && !isComponentUnderCursor) {
      toggleVisibleActions();
      toggleVisivbleField();
    }
  }, [isComponentUnderCursor]);

  const closeEditProfile = () => {
    toggleVisibleActions();
    toggleVisivbleField();
    openVisibleSuccess();
  };

  const onSubmit = (values) => {
    const { transfer, ...data } = values;

    if (values.transfer.selected) {
      put(transferMember(transfer.selected, closeEditProfile));
    } else {
      put(updateMember(values, closeEditProfile));
    }
  };

  const isErrors = (errors) => {
    return Object.keys(errors).length === 0 ? false : true;
  };

  return (
    <div ref={ ref } className={ style.membersItemActions }>
      { visibleActions ?
        <div
          className={ cn(
            style.membersItemActionsBlock,
            visibleActions ? style.membersItemActionsBlockVisible : null,
            visivbleField ? style.membersItemActionsBlockVisibleField : null,
          ) }
        >
          <Formik
            initialValues={ {
              ...getInitialValues(initialValues, member),
              transfer: {
                name: '',
                list: [],
                selected: null,
              },
            } }
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

                const onCancelTransfer = () => {
                  setFieldValue('transfer', {
                    name: '',
                    list: [],
                    selected: null,
                  });
                  toggleVisivbleField();
                };

                const selectedTransfer = (id) => {
                  const select = account.facilities.find(item => item.id === id);

                  if (select) {
                    setFieldValue('transfer', {
                      name: select.name,
                      list: [],
                      selected: select ? {
                        accountId: select.accountId,
                        memberId: member.id,
                        facilityId: select.id,
                      } : null,
                    });
                  }

                };

                const handleChangeTransfer = (e) => {
                  const name = e.target.value;
                  const list = account.facilities.filter(item => {
                    if (name.length > 3
                      && item.id !== member.facilityId
                      && item.name.toLowerCase().indexOf(name.toLowerCase()) >= 0) {
                      return item;
                    }
                  });
                  const select = list.length === 1 ?
                    list[0]
                    : account.facilities.find(item =>
                      item.id !== member.facilityId && item.name.toLowerCase() === name.toLowerCase(),
                    );

                  setFieldValue('transfer', {
                    name: name,
                    list: list,
                    selected: select ? {
                      accountId: select.accountId,
                      memberId: member.id,
                      facilityId: select.id,
                    } : null,
                  });
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
                    <EditProfileItem
                      title={ t('memberItemActionBlock.transferTheMemberTo') }
                      name="transfer"
                      className={ style.membersItemActionsItem }
                      visivbleField={ visivbleField }
                      toggleVisivbleField={ isErrors(errors) ? null : toggleVisivbleField }
                      onCancel={ onCancelTransfer }
                    >
                      <div
                        className={ style.membersItemActionsFacility }
                      >
                        <Input
                          name="transfer"
                          value={ values.transfer.name }
                          onChange={ handleChangeTransfer }
                          autoComplete="off"
                        />
                        <Button
                          borderNone={ true }
                          primary={ true }
                          className={ style.membersItemActionsFacilityArrow }
                          icon={ <ChevronBigLeft className={ style.membersItemActionsFacilityArrowIcon } /> }
                          onClick={ () => {
                            selectedTransfer(values.transfer.selected.facilityId);
                          } }
                          disabled={ !values.transfer.selected }
                        ></Button>
                        {
                          values.transfer.list.length > 0 ?
                            <div
                              className={ style.membersItemActionsFacilityList }
                            >
                              {
                                values.transfer.list.map(item => (
                                  <div key={ item.id }>
                                    <Button
                                      borderNone={ true }
                                      onClick={ () => selectedTransfer(item.id) }
                                    >{ item.name }</Button>
                                  </div>
                                ))
                              }
                            </div>
                            : null
                        }
                      </div>
                    </EditProfileItem>
                  </Form>
                );
              }
            }
          </Formik>
        </div>
        : null
      }
      <Button
        clear={ true }
        className={ style.membersItemActionsBtn }
        onClick={ toggleVisibleActions }
        icon={ <Actions /> }
      ></Button>
    </div>
  );
};
