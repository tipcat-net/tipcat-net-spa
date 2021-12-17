import { Switch, Route } from 'react-router-dom';
import ProtectedRoute from './../protected-route';

import { ROUTES } from './../constants/routes';

import { Auth } from './Auth';
import Logout from './Logout';
import Registration from './Registration';
import Home from './Home';
import Members from './Members';
import AddMember from './AddMember';
import MemberProfile from './MemberProfile';
import MemberProfileQrCode from './MemberProfileQrCode';
import AccountProfile from './AccountProfile';
import Facilities from './Facilities';
import AddFacility from './AddFacility';
import FacilityProfile from './FacilityProfile';
import FacilityMembers from './FacilityMembers';
import PageNotFound from './PageNotFound';
import Pay from './Pay';
import Transactions from './Transactions';
import PrivacyPolicy from './PrivacyPolicy';

export const Pages = () => {
  return (
    <Switch>
      <ProtectedRoute { ...ROUTES.HOME } component={ Home } />
      <ProtectedRoute { ...ROUTES.REGISTRATION } component={ Registration } />
      <ProtectedRoute { ...ROUTES.ACCOUNT } component={ AccountProfile } />

      <ProtectedRoute { ...ROUTES.MEMBERS } component={ Members } />
      <ProtectedRoute { ...ROUTES.ADD_MEMBER } component={ AddMember } />
      <ProtectedRoute { ...ROUTES.MEMBER_PROFILE } component={ MemberProfile } />
      <ProtectedRoute { ...ROUTES.MEMBER_PROFILE_QRCODE } component={ MemberProfileQrCode } />

      <ProtectedRoute { ...ROUTES.FACILITIES } component={ Facilities } />
      <ProtectedRoute { ...ROUTES.ADD_FACILITY } component={ AddFacility } />
      <ProtectedRoute { ...ROUTES.FACILITY } component={ FacilityProfile } />
      <ProtectedRoute { ...ROUTES.FACILITY_MEMBERS } component={ FacilityMembers } />

      <ProtectedRoute { ...ROUTES.TRANSACTIONS } component={ Transactions } />

      <Route { ...ROUTES.PAY } >
        <Pay />
      </Route>
      <Route { ...ROUTES.AUTH } >
        <Auth />
      </Route>
      <Route { ...ROUTES.LOGOUT } >
        <Logout />
      </Route>
      <Route { ...ROUTES.PRIVACY_POLICY } >
        <PrivacyPolicy />
      </Route>
      <Route component={ PageNotFound } />
    </Switch>
  );
};

export default Pages;
