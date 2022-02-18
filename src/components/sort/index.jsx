import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Substrate } from '../profile/substrate';
import { Button } from '../ui/Button';
import { ChevronDown } from '../ui/Icons';

import style from './styles.module.scss';

export const Sort = ({ data, onToggleSelected }) => {
  const { t } = useTranslation();
  const [visibleSubstrate, setVisibleSubstrate] = useState(false);

  const selected = (value) => {
    return data.list.find(item => item.value === value);
  };

  const onToggleVisibleSubstrate = () => {
    setVisibleSubstrate(!visibleSubstrate);
  };

  const handleSelected = (value) => {
    onToggleSelected(value);
    onToggleVisibleSubstrate();
  };

  return (
    <div className={ style.sort }>
      <div className={ style.sortAction }>
        <Button
          icon={ selected(data.selected).icon }
          borderNone={ true }
          onClick={ onToggleVisibleSubstrate }
          className={ style.sortSelected }
        >
          { selected(data.selected).text }
          <ChevronDown className={ style.sortSelectedArrow } />
        </Button>
      </div>
      <Substrate
        visible={ visibleSubstrate }
        closeVisible={ onToggleVisibleSubstrate }
      >
        <ul className={ style.sortList } data-text={ t('sort') }>
          {
            data.list.map(item => (
              <li
                key={ item.value }
                className={ style.sortListItem }
              >
                <Button
                  icon={ item.icon }
                  borderNone={ true }
                  onClick={ () => handleSelected(item.value) }
                >
                  { item.text }
                </Button>
              </li>
            ))
          }
        </ul>
      </Substrate>
    </div>
  );
};
