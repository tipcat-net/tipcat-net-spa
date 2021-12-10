import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { Title } from '../../ui/Title';
import { Text } from '../../ui/Text';
import { Button } from '../../ui/Button';

import style from './styles.module.scss';

export const ProfileDiagram = ({ current, max }) => {
  const { t } = useTranslation();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress((200 * current) / max);
  }, [current, max]);

  return (
    <div className={ style.diagramWrap }>
      <div className={ style.diagram }>
        <div className={ style.diagramProgress }>
          <svg
            width="289"
            height="171"
            viewBox="0 0 289 171"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.24307 163C8.42336 156.95 8 150.775 8 144.5C8 69.1131 69.1131 8 144.5 8C219.887 8 281 69.1131 281 144.5C281 150.775 280.577 156.95 279.757 163"
              stroke="currentColor"
              strokeWidth="15"
              strokeLinecap="round"
              className={ style.diagramProgressFull } />
            <path
              d="M9.24307 163C8.42336 156.95 8 150.775 8 144.5C8 69.1131 69.1131 8 144.5 8C219.887 8 281 69.1131 281 144.5C281 150.775 280.577 156.95 279.757 163"
              stroke="currentColor"
              strokeWidth="15"
              strokeLinecap="round"
              className={ style.diagramProgressCurrent }
              style={ {
                strokeDasharray: `${progress}%, 200%`,
              } } />
          </svg>
        </div>
        <div className={ style.diagramAvailable }>
          <Text size='small' className={ style.diagramAvailableTitle }>{ t('profileDiagram.availableTitle') }</Text>
          <Title lavel={ 1 } className={ style.diagramAvailableNumber }>
            <span className={ style.diagramAvailableNumberСurrency }>$</span> 84
          </Title>
        </div>
      </div>
      <div className={ style.diagramBottom }>
        <div className={ style.diagramBottomItem }>
          <Text size='small' className={ style.diagramBottomItemNumber }>$ { current }</Text>
          <Text size='superSmall' className={ style.diagramBottomtItemText }>{ t('profileDiagram.currentText') }</Text>
        </div>
        <Button primary={ true }>{ t('profileDiagram.btn') }</Button>
        <div className={ style.diagramBottomItem }>
          <Text size='small' className={ style.diagramBottomItemNumber }>$ { max }</Text>
          <Text size='small' className={ style.diagramBottomItemText }>{ t('profileDiagram.maxText') }</Text>
        </div>
      </div>
    </div>
  );
};
