import Header from "../../header";

export const Layout = ({ children }) => (
  <div>
    <Header />
    <div>{ children }</div>
  </div>
);