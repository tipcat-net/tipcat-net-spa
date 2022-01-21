import cn from 'classnames';

import { ReactComponent as ActionsSvg } from './svg/actions.svg';
import { ReactComponent as AddSvg } from './svg/add.svg';
import { ReactComponent as ArrowDownCircleSvg } from './svg/arrow_down_circle.svg';
import { ReactComponent as ArrowDownSvg } from './svg/arrow_down.svg';
import { ReactComponent as ArrowSvg } from './svg/arrow.svg';
import { ReactComponent as ChevronBigLeftSvg } from './svg/arrow/chevronBigLeft.svg';
import { ReactComponent as ChevronDownSvg } from './svg/arrow/chevronDown.svg';
import { ReactComponent as CircleUpSvg } from './svg/arrow/circleUp.svg';
import { ReactComponent as HamburgerSvg } from './svg/menu/hamburger.svg';

import { ReactComponent as BadgeSvg } from './svg/user/badge.svg';
import { ReactComponent as BurgerSvg } from './svg/burger.svg';

import { ReactComponent as CardSvg } from './svg/card.svg';
import { ReactComponent as ClockSvg } from './svg/basic/clock.svg';

import { ReactComponent as DiaDownSvg } from './svg/diaDown.svg';
import { ReactComponent as DiaHighSvg } from './svg/diaHigh.svg';

import { ReactComponent as GroupAltSvg } from './svg/user/groupAlt.svg';

import { ReactComponent as HideSvg } from './svg/hide.svg';
import { ReactComponent as HomeSvg } from './svg/home.svg';

import { ReactComponent as ImageSvg } from './svg/image.svg';

import { ReactComponent as LogoSvg } from './svg/logo.svg';
import { ReactComponent as LogOutSvg } from './svg/basic/logOut.svg';
import { ReactComponent as LoupeSvg } from './svg/loupe.svg';

import { ReactComponent as MaxSvg } from './svg/max.svg';
import { ReactComponent as MessageSvg } from './svg/basic/message.svg';
import { ReactComponent as MinSvg } from './svg/min.svg';

import { ReactComponent as NameAscSvg } from './svg/nameAsc.svg';
import { ReactComponent as NameDescSvg } from './svg/nameDesc.svg';

import { ReactComponent as PenSvg } from './svg/pen.svg';
import { ReactComponent as PersonSvg } from './svg/person.svg';
import { ReactComponent as PositionSvg } from './svg/position.svg';
import { ReactComponent as PlusSquareSvg } from './svg/edit/plusSquare.svg';

import { ReactComponent as QrCodeSvg } from './svg/basic/qrCode.svg';

import { ReactComponent as SaveSvg } from './svg/save.svg';
import { ReactComponent as SearchSvg } from './svg/basic/search.svg';
import { ReactComponent as ShowSvg } from './svg/show.svg';
import { ReactComponent as StatusSvg } from './svg/status.svg';

import { ReactComponent as TimeSvg } from './svg/time.svg';
import { ReactComponent as TransactionSvg } from './svg/basic/transaction.svg';
import { ReactComponent as TrashEmptySvg } from './svg/basic/trashEmpty.svg';
import { ReactComponent as TrashFullSvg } from './svg/basic/trashFull.svg';

import { ReactComponent as UserSvg } from './svg/basic/user.svg';

import './styles.scss';

export const Icon = ({ className, children }) => {
  return (
    <span className={ cn('icon', className) }>{ children }</span>
  );
};

export const Actions = (props) => <Icon { ...props }><ActionsSvg /></Icon>;
export const Add = (props) => <Icon { ...props }><AddSvg /></Icon>;
export const ArrowDownCircle = (props) => <Icon { ...props }><ArrowDownCircleSvg /></Icon>;
export const ArrowDown = (props) => <Icon { ...props }><ArrowDownSvg /></Icon>;
export const Arrow = (props) => <Icon { ...props }><ArrowSvg /></Icon>;
export const ChevronBigLeft = (props) => <Icon { ...props }><ChevronBigLeftSvg /></Icon>;
export const ChevronDown = (props) => <Icon { ...props }><ChevronDownSvg /></Icon>;
export const CircleUp = (props) => <Icon { ...props }><CircleUpSvg /></Icon>;
export const Hamburger = (props) => <Icon { ...props }><HamburgerSvg /></Icon>;

export const Badge = (props) => <Icon { ...props }><BadgeSvg /></Icon>;
export const Burger = (props) => <Icon { ...props }><BurgerSvg /></Icon>;

export const Card = (props) => <Icon { ...props }><CardSvg /></Icon>;
export const Clock = (props) => <Icon { ...props }><ClockSvg /></Icon>;

export const DiaDown = (props) => <Icon { ...props }><DiaDownSvg /></Icon>;
export const DiaHigh = (props) => <Icon { ...props }><DiaHighSvg /></Icon>;

export const GroupAlt = (props) => <Icon { ...props }><GroupAltSvg /></Icon>;

export const Hide = (props) => <Icon { ...props }><HideSvg /></Icon>;
export const Home = (props) => <Icon { ...props }><HomeSvg /></Icon>;

export const Image = (props) => <Icon { ...props }><ImageSvg /></Icon>;

export const Logo = (props) => <Icon { ...props }><LogoSvg /></Icon>;
export const LogOut = (props) => <Icon { ...props }><LogOutSvg /></Icon>;
export const Loupe = (props) => <Icon { ...props }><LoupeSvg /></Icon>;

export const Max = (props) => <Icon { ...props }><MaxSvg /></Icon>;
export const Message = (props) => <Icon { ...props }><MessageSvg /></Icon>;
export const Min = (props) => <Icon { ...props }><MinSvg /></Icon>;

export const NameAsc = (props) => <Icon { ...props }><NameAscSvg /></Icon>;
export const NameDesc = (props) => <Icon { ...props }><NameDescSvg /></Icon>;

export const Pen = (props) => <Icon { ...props }><PenSvg /></Icon>;
export const Person = (props) => <Icon { ...props }><PersonSvg /></Icon>;
export const Position = (props) => <Icon { ...props }><PositionSvg /></Icon>;
export const PlusSquare = (props) => <Icon { ...props }><PlusSquareSvg /></Icon>;

export const QrCode = (props) => <Icon { ...props }><QrCodeSvg /></Icon>;

export const Save = (props) => <Icon { ...props }><SaveSvg /></Icon>;
export const Search = (props) => <Icon { ...props }><SearchSvg /></Icon>;
export const Show = (props) => <Icon { ...props }><ShowSvg /></Icon>;
export const Status = (props) => <Icon { ...props }><StatusSvg /></Icon>;

export const Time = (props) => <Icon { ...props }><TimeSvg /></Icon>;
export const Transaction = (props) => <Icon { ...props }><TransactionSvg /></Icon>;
export const TrashEmpty = (props) => <Icon { ...props }><TrashEmptySvg /></Icon>;
export const TrashFull = (props) => <Icon { ...props }><TrashFullSvg /></Icon>;

export const User = (props) => <Icon { ...props }><UserSvg /></Icon>;
