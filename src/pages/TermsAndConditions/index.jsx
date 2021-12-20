import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Logo } from '../../components/ui/Icons';

import { Layout } from '../../components/ui/Layout';
import { Text } from '../../components/ui/Text';
import { Title } from '../../components/ui/Title';

import style from './styles.module.scss';

export const TermsAndConditions = () => {
  const { t } = useTranslation();

  return (
    <Layout title={ t('termsAndConditions.headerTitle') }>
      <div className={ style.termsAndConditions }>
        <div className={ style.termsAndConditionsLogo }>
          <Logo />
        </div>
        <Title
          level={ 2 }
          className={ style.termsAndConditionsTitle }
        >{ t('termsAndConditions.title') }</Title>
        <Text size='small'>
          <Trans i18nKey="termsAndConditions.text" />
        </Text>
      </div>
    </Layout>
  );
};

export default TermsAndConditions;
