import { Switch, Route } from "react-router-dom";
import ProtectedRoute from './../protected-route';

import { ROUTES } from './../constants/routes';

import { Auth } from './Auth';
import Registration from './Registration';
import Home from './Home';
import Members from './Members';
import MemberProfile from './MemberProfile';
import AccountProfile from './AccountProfile';
import Facilities from './Facilities';
import FacilityProfile from './FacilityProfile';
import FacilityMembers from './FacilityMembers';
import PageNotFound from './PageNotFound';

export const Pages = () => {
  return (
    <Switch>
      <ProtectedRoute { ...ROUTES.HOME } component={ Home } />
      <ProtectedRoute { ...ROUTES.REGISTRATION } component={ Registration } />
      <ProtectedRoute { ...ROUTES.MEMBER_PROFILE } component={ MemberProfile } />
      <ProtectedRoute { ...ROUTES.ACCOUNT } component={ AccountProfile } />
      <ProtectedRoute { ...ROUTES.MEMBERS } component={ Members } />
      <ProtectedRoute { ...ROUTES.FACILITIES } component={ Facilities } />
      <ProtectedRoute { ...ROUTES.FACILITY } component={ FacilityProfile } />
      <ProtectedRoute { ...ROUTES.FACILITY_MEMBERS } component={ FacilityMembers } />
      <Route { ...ROUTES.AUTH } >
        <Auth />
      </Route>
      <Route component={ PageNotFound } />
    </Switch>
  )
}

export default Pages;
