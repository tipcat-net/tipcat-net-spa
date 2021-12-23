import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Logo } from '../../components/ui/Icons';

import { Layout } from '../../components/ui/Layout';
import { Text } from '../../components/ui/Text';
import { Title } from '../../components/ui/Title';

import style from './styles.module.scss';

export const PrivacyPolicy = () => {
  const { t } = useTranslation();

  return (
    <Layout title={ t('privacyPolicy.headerTitle') }>
      <div className={ style.privacyPolicy }>
        <div className={ style.privacyPolicyLogo }>
          <Logo className={ style.privacyPolicyLogoIcon } />
        </div>
        <Title
          level={ 2 }
          className={ style.privacyPolicyTitle }
        >{ t('privacyPolicy.title') }</Title>
        <Text size='small'>
          <Trans i18nKey="privacyPolicy.text" />
        </Text>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
