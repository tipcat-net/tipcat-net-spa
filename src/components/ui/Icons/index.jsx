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

export const Arrow = () => <span className="icon icon-arrow"><img src={ arrow } alt=""/></span>
export const Loupe = () => <span className="icon icon-loupe"><img src={ loupe } alt=""/></span>
export const Person = () => <span className="icon icon-persone"><img src={ person } alt=""/></span>
export const Burger = () => <span className="icon icon-burger"><img src={ burger } alt=""/></span>
export const Actions = () => <span className="icon icon-actions"><img src={ actions } alt=""/></span>
export const Add = () => <span className="icon icon-add"><img src={ add } alt=""/></span>
export const ArrowDown = () => <span className="icon icon-arrow-down"><img src={ arrowDown } alt=""/></span>
export const Clock = () => <span className="icon icon-clock"><img src={ clock } alt=""/></span>
export const Max = () => <span className="icon icon-max"><img src={ max } alt=""/></span>
export const Min = () => <span className="icon icon-min"><img src={ min } alt=""/></span>
export const Position = () => <span className="icon icon-position"><img src={ position } alt=""/></span>
export const Status = () => <span className="icon icon-status"><img src={ status } alt=""/></span>