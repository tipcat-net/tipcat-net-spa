import React from 'react';
import cn from 'classnames';

import Header from "../../header";
import { Footer } from "../../footer";

import style from './styles.module.scss';

export const Layout = ({ children, title, hiddenHeader, footer, logo, background }) => {
  const classNameBackground = background ? style.layoutBackground : null;

  return (
    <div className={ cn(style.layout, classNameBackground) }>
      {
        hiddenHeader ?
          null
          : <Header logo={ logo } title={ title } className={ style.layoutHeader } />
      }
      <div className={ cn(style.layoutContent, footer ? style.layoutContentHeightAuto : null) }>{ children }</div>
      { footer ? <Footer /> : null }
    </div>
  );
}
