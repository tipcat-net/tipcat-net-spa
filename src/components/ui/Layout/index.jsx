import Header from "../../header";

import style from './styles.module.scss';

export const Layout = ({ children, title }) => (
  <div className={ style.layout }>
    <Header title={ title } />
    <div className={ style.layoutContent }>{ children }</div>
  </div>
);
