import cn from 'classnames';

import { ReactComponent as ActionsSvg } from './svg/actions.svg';
import { ReactComponent as AddSvg } from './svg/add.svg';
import { ReactComponent as ArrowDownSvg } from './svg/arrow_down.svg';
import { ReactComponent as ArrowSvg } from './svg/arrow.svg';

import { ReactComponent as BurgerSvg } from './svg/burger.svg';

import { ReactComponent as ClockSvg } from './svg/clock.svg';

import { ReactComponent as HomeSvg } from './svg/home.svg';

import { ReactComponent as ImageSvg } from './svg/image.svg';

import { ReactComponent as LoupeSvg } from './svg/loupe.svg';

import { ReactComponent as MaxSvg } from './svg/max.svg';
import { ReactComponent as MinSvg } from './svg/min.svg';

import { ReactComponent as PenSvg } from './svg/pen.svg';
import { ReactComponent as PersonSvg } from './svg/person.svg';
import { ReactComponent as PositionSvg } from './svg/position.svg';

import { ReactComponent as StatusSvg } from './svg/status.svg';

import './styles.scss';

export const Icon = ({ className, children }) => {
  return (
    <span className={ cn("icon", className) }>{ children }</span>
  )
}

export const Actions = (props) => <Icon { ...props }><ActionsSvg /></Icon>
export const Add = (props) => <Icon { ...props }><AddSvg /></Icon>
export const ArrowDown = (props) => <Icon { ...props }><ArrowDownSvg /></Icon>
export const Arrow = (props) => <Icon { ...props }><ArrowSvg /></Icon>

export const Burger = (props) => <Icon { ...props }><BurgerSvg /></Icon>

export const Clock = (props) => <Icon { ...props }><ClockSvg /></Icon>

export const Home = (props) => <Icon { ...props }><HomeSvg /></Icon>

export const Image = (props) => <Icon { ...props }><ImageSvg /></Icon>

export const Loupe = (props) => <Icon { ...props }><LoupeSvg /></Icon>

export const Max = (props) => <Icon { ...props }><MaxSvg /></Icon>
export const Min = (props) => <Icon { ...props }><MinSvg /></Icon>

export const Pen = (props) => <Icon { ...props }><PenSvg /></Icon>
export const Person = (props) => <Icon { ...props }><PersonSvg /></Icon>
export const Position = (props) => <Icon { ...props }><PositionSvg /></Icon>

export const Status = (props) => <Icon { ...props }><StatusSvg /></Icon>
