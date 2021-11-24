import React, { useState } from 'react';
import cn from 'classnames';

import { Text as Title } from '../ui/Text';
import { ArrowDown } from '../ui/Icons';


import style from './styles.module.scss';

export const Panel = ({ title, children, className }) => {
  const [visibleContent, setVisibleContent] = useState(false);

  const toggleVisibleContent = () => {
    setVisibleContent(!visibleContent);
  }
  
  return (
    <div className={ cn(style.panel, className) }>
      <div
        className={ style.panelHeader }
        onClick={ toggleVisibleContent }
      >
        <Title
          size='small'
          className={ style.panelHeaderTitle }
        >{ title }</Title>
        <ArrowDown
          className={ cn(style.panelHeaderIcon, visibleContent ? style.panelHeaderIconOpen : null) } />
      </div>
      { visibleContent ? <div className={ style.panelContent }>{ children }</div> : null }
    </div>
  );
}
