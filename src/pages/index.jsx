import { Switch, Route } from "react-router-dom";
import ProtectedRoute from './../protected-route';

import { ROUTES } from './../constants/routes';

import { Auth } from './Auth';
import Registration from './Registration';
import Home from './Home';
import Members from './Members';
import MemberProfile from './MemberProfile';
import FacilityProfile from './FacilityProfile';
import PageNotFound from './PageNotFound';

export const Pages = () => {
  return (
    <Switch>
      <ProtectedRoute { ...ROUTES.HOME } component={ Home } />
      <ProtectedRoute { ...ROUTES.MEMBERS } component={ Members } />
      <ProtectedRoute { ...ROUTES.REGISTRATION } component={ Registration } />
      <ProtectedRoute { ...ROUTES.MEMBER_PROFILE } component={ MemberProfile } />
      <ProtectedRoute { ...ROUTES.FACILITY } component={ FacilityProfile } />
      <Route { ...ROUTES.AUTH } >
        <Auth />
      </Route>
      <Route component={ PageNotFound } />
    </Switch>
  )
}

export default Pages;
