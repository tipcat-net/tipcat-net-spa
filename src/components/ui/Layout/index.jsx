import React from 'react';
import cn from 'classnames';

import Header from "../../header";
import { Footer } from "../../footer";

import style from './styles.module.scss';

export const Layout = ({ children, title, hiddenHeader, footer, logo }) => (
  <div className={ style.layout }>
    { !hiddenHeader ?  <Header logo={ logo } title={ title } className={ style.layoutHeader } /> : null }
    <div className={ cn(style.layoutContent, footer ? style.layoutContentHeightAuto : null) }>{ children }</div>
    { footer ? <Footer /> : null }
  </div>
);
