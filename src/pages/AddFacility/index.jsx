import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Formik, Form } from "formik";

import { Layout } from "../../components/ui/Layout";
import { FormInput } from "../../components/form/form-input";
import { FormErrorRequired } from '../../components/form/error-required';
import { FormCheckbox } from "../../components/form/form-checkbox";
import { Button } from "../../components/ui/Button";
import { Home, Add } from "../../components/ui/Icons";
import { Success } from '../../components/success';

import { ROUTES } from "../../constants/routes";
import { schema } from "../../form-helpers/addFacility/schema";

import { selectMember } from "../../ducks/member/selectors";
import { selectAccount, selectAccountLoading } from "../../ducks/account/selectors";
import { getAccount } from "../../ducks/account/actions";
import { addFacility } from "../../ducks/facility/actions";

import style from './styles.module.scss';

const initialValues = schema.cast({});

export const AddFacility = () => {
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const { t } = useTranslation();
  const put = useDispatch();
  const member = useSelector(selectMember);
  const account = useSelector(selectAccount);
  const accountLoading = useSelector(selectAccountLoading);

  useEffect(() => {
    if (member && !accountLoading) {
      put(getAccount(member.accountId));
    }
  }, [member]);

  const onSubmit = (values) => {
    const data = {
      ...values,
      accountId: account.id
    };
    delete data.useAccountAddress;

    const callback = () => setVisibleSuccess(true)
    put(addFacility(data, callback));
  }

  return (
    <Layout hiddenHeader>
      <Formik
        initialValues={ { ...initialValues, useAccountAddress: false } }
        validationSchema={ schema }
        onSubmit={ onSubmit }
      >
        {
          ({
            values,
            errors,
            touched,
            setValues,
            resetForm,
          }) => {

            const handleChangeUseAddress = (e) => {
              setValues({
                ...values,
                useAccountAddress: e.target.checked,
                address: e.target.checked ? account.address : ''
              });
            }

            const onSuccessBtnAdd = () => {
              resetForm();
              setVisibleSuccess(false);
            }

            return (
              <>
                <div className={ style.create }>
                  <div className={ style.createTitle }>{ t('addFacility.title') }</div>
                  <Form>
                    <FormInput
                      label={ t('addFacility.fields.operatingName.label') }
                      name="name"
                      type="text"
                      value={ values.name }
                      className={ style.registerInputBold }
                      required
                    />
                    <FormInput
                      label={ t('addFacility.fields.address.label') }
                      name="address"
                      type="textarea"
                      value={ values.address }
                      className={ style.registerInputBold }
                    />
                    <FormCheckbox
                      label={ t('addFacility.fields.useAccountAddress.label') }
                      name="useAccountAddress"
                      checked={ values.useAccountAddress }
                      onChange={ handleChangeUseAddress }
                    />
                    <FormErrorRequired
                      touched={ touched }
                      errors={ errors }
                      message={ t('addFacility.formErrorRequired') }
                      className={ style.createError }
                    />
                    <div className={ style.createButtons }>
                      <Button>{ t('addFacility.buttons.back') }</Button>
                      <Button type='submit' primary>{ t('addFacility.buttons.submit') }</Button>
                    </div>
                  </Form>
                </div>
                <Success
                  visible={ visibleSuccess }
                  actionTop={
                    <Button
                      transparent
                      className={ style.createSuccessBtnHome }
                      href={ ROUTES.HOME.path }
                    >
                      <Home className={ style.createSuccessBtnHomeIcon } />Home
                    </Button>
                  }
                  message="Facility created"
                  actionBottom={
                    <Button
                      clear
                      className={ style.createSuccessBtnAdd }
                      onClick={ onSuccessBtnAdd }
                    >
                      <Add className={ style.createSuccessBtnAddIcon } />Add yet facility
                    </Button>
                  }
                />
              </>
            )
          }
        }
      </Formik>
    </Layout>
  )
}

export default AddFacility;
