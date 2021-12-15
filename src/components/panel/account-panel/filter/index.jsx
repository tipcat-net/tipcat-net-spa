import React, { useState } from 'react';

import { Text } from '../../../ui/Text';

import style from './styles.module.scss';

export const Filter = ({ list }) => {
  const [currentFilter, setCurrentFilter] = useState(list[0]);

  const toggleFilter = () => {
    setCurrentFilter()
  }

  return (
    <div className={ style.filter }>
      <div>
        <Text size='small'>{ currentFilter.text }</Text>
      </div>
      <ul>
        {
          list.map(item => (
            <li>
              <Text
                size='small'
                onClick={ toggleFilter(item) }
              >{ item.text }</Text>
            </li>
          ))
        }
      </ul>
    </div>
  );
}
