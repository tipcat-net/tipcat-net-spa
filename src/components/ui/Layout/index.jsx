import Header from "../../header";

import style from './styles.module.scss';

export const Layout = ({ children }) => (
  <div className={ style.layout }>
    <Header />
    <div className={ style.layoutContent }>{ children }</div>
  </div>
);
