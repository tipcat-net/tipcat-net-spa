import { Switch, Route } from "react-router-dom";

import { RouteGuard } from './../components/route-guard';

import { ROUTES } from './../constants/routes';

import { Auth } from './Auth';
import Registration from './Registration';
import Home from './Home';
import Members from './Members';
import Profile from './Profile';

export const Pages = () => {
  return (
    <Switch>
      <RouteGuard { ...ROUTES.HOME } Component={ Home } />
      <RouteGuard { ...ROUTES.MEMBERS } Component={ Members } />
      <RouteGuard { ...ROUTES.REGISTRATION } Component={ Registration } />
      <RouteGuard { ...ROUTES.PROFILE } Component={ Profile } />
      <Route { ...ROUTES.AUTH } >
        <Auth />
      </Route>
    </Switch>
  )
}

export default Pages;