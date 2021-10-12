import cn from 'classnames';

import arrow from './svg/arrow.svg';
import loupe from './svg/loupe.svg';
import person from './svg/person.svg';
import burger from './svg/burger.svg';
import actions from './svg/actions.svg';
import add from './svg/add.svg';
import arrowDown from './svg/arrow_down.svg';
import clock from './svg/clock.svg';
import max from './svg/max.svg';
import min from './svg/min.svg';
import position from './svg/position.svg';
import status from './svg/status.svg';

import './styles.scss';

export const Icon = ({ className, children }) => {
  return (
    <span className={ cn("icon", className) }>{ children }</span>
  )
}

export const Arrow = (props) => <Icon { ...props }><img src={ arrow } alt=""/></Icon>
export const Loupe = (props) => <Icon { ...props }><img src={ loupe } alt=""/></Icon>
export const Person = (props) => <Icon { ...props }><img src={ person } alt=""/></Icon>
export const Burger = (props) => <Icon { ...props }><img src={ burger } alt=""/></Icon>
export const Actions = (props) => <Icon { ...props }><img src={ actions } alt=""/></Icon>
export const Add = (props) => <Icon { ...props }><img src={ add } alt=""/></Icon>
export const ArrowDown = (props) => <Icon { ...props }><img src={ arrowDown } alt=""/></Icon>
export const Clock = (props) => <Icon { ...props }><img src={ clock } alt=""/></Icon>
export const Max = (props) => <Icon { ...props }><img src={ max } alt=""/></Icon>
export const Min = (props) => <Icon { ...props }><img src={ min } alt=""/></Icon>
export const Position = (props) => <Icon { ...props }><img src={ position } alt=""/></Icon>
export const Status = (props) => <Icon { ...props }><img src={ status } alt=""/></Icon>