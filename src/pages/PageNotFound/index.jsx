import React from 'react';

import { Layout } from '../../components/ui/Layout'; 
import { Button } from '../../components/ui/Button';

import iconPageNotFound from './svg/404.svg'
import style from './styles.module.scss';

export const PageNotFound = () => {
  return (
    <Layout>
      <div className={ style.pageNotFound }>
        <div className={ style.pageNotFoundInfo }>
          <div className={ style.pageNotFoundInfoNumber }>4 <img src={ iconPageNotFound } alt="" /> 4</div>
          <div className={ style.pageNotFoundInfoTitle }>Oops!</div>
          <div className={ style.pageNotFoundInfoText }>It seems that such a page <br/> does not exist</div>
          <Button primary>Back</Button>
        </div>
        <Button className={ style.pageNotFoundBtnHome }>Home</Button>
      </div>
    </Layout>
  )
}

export default PageNotFound;
