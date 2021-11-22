import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from '../../ui/Button';

import style from './styles.module.scss';

export const Diagram = ({ current, max }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress((200 * current) / max);
  }, [current, max]);

  return (
    <div className={ style.diagramWrap }>
      <div className={ style.diagram }>
        <div className={ style.diagramProgress }>
          <svg width="289" height="171" viewBox="0 0 289 171" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9.24307 163C8.42336 156.95 8 150.775 8 144.5C8 69.1131 69.1131 8 144.5 8C219.887 8 281 69.1131 281 144.5C281 150.775 280.577 156.95 279.757 163"
              stroke="currentColor"
              stroke-width="15"
              stroke-linecap="round"
              className={ style.diagramProgressFull } />
            <path
              d="M9.24307 163C8.42336 156.95 8 150.775 8 144.5C8 69.1131 69.1131 8 144.5 8C219.887 8 281 69.1131 281 144.5C281 150.775 280.577 156.95 279.757 163"
              stroke="currentColor"
              stroke-width="15"
              stroke-linecap="round"
              className={ style.diagramProgressCurrent }
              style={ {
                strokeDasharray: `${progress}%, 200%`
              } } />
          </svg>
        </div>
        <div className={ style.diagramAvailable }>
          <div className={ style.diagramAvailableTitle }>Available for payment</div>
          <div className={ style.diagramAvailableNumber }>$ 84</div>
        </div>
      </div>
      <div className={ style.diagramBottom }>
        <div className={ style.diagramCurrent }>
          <div className={ style.diagramCurrentNumber }>${ current }</div>
          <div className={ style.diagramCurrentText }>last 30 days</div>
        </div>
        <Button primary>Withdraw</Button>
        <div className={ style.diagramMax }>
          <div className={ style.diagramMaxNumber }>${ max }</div>
          <div className={ style.diagramMaxText }>record</div>
        </div>
      </div>
    </div>
  )
}
