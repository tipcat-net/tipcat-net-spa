import Header from "../../header";

import style from './styles.module.scss';

export const Layout = ({ children, title, hiddenHeader }) => (
  <div className={ style.layout }>
    { !hiddenHeader ?  <Header title={ title } className={ style.layoutHeader } /> : null }
    <div className={ style.layoutContent }>{ children }</div>
  </div>
);
