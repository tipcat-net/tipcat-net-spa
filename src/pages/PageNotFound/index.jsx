import React from 'react';
import { Trans, useTranslation } from "react-i18next";

import { Layout } from '../../components/ui/Layout'; 
import { Button } from '../../components/ui/Button';
import { Home } from '../../components/ui/Icons';

import iconPageNotFound from './svg/404.svg'
import style from './styles.module.scss';

export const PageNotFound = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className={ style.pageNotFound }>
        <div className={ style.pageNotFoundInfo }>
          <div className={ style.pageNotFoundInfoNumber }>4 <img src={ iconPageNotFound } alt="" /> 4</div>
          <div className={ style.pageNotFoundInfoTitle }>
            { t("pageNotFound.pageNotFoundInfoTitle") }
          </div>
          <div className={ style.pageNotFoundInfoText }>
            <Trans i18nKey="pageNotFound.pageNotFoundInfoText" />
          </div>
          <Button>{ t("pageNotFound.button.back") }</Button>
        </div>
        <Button transparent className={ style.pageNotFoundBtnHome }><Home className={ style.pageNotFoundBtnHomeIcon } />{ t("pageNotFound.button.home") }</Button>
      </div>
    </Layout>
  )
}

export default PageNotFound;
