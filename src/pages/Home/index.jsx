import React from 'react';
import { useTranslation } from "react-i18next";
import { Layout } from '../../components/ui/Layout';

export const Home = () => {
  const { t } = useTranslation();

  return (
    <Layout title={ t('home.headerTitle') }>
      <h1>{ t('home.headerTitle') }</h1>
    </Layout>
  )
};

export default Home;
