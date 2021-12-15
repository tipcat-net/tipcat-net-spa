export const ROUTES = {
  HOME: {
    path: '/',
    exact: true,
  },
  AUTH: {
    path: '/auth',
    exact: true,
  },
  LOGOUT: {
    path: '/logout',
    exact: true,
  },
  REGISTRATION: {
    path: '/registration',
    exact: true,
  },
  ACCOUNT: {
    path: '/account',
    exact: true,
  },
  MEMBERS: {
    path: '/members',
    exact: true,
  },
  ADD_MEMBER: {
    path: '/members/new',
    exact: true,
  },
  MEMBER_PROFILE: {
    path: '/members/:memberId',
    exact: true,
    getPath: ({ memberId }) => ROUTES.MEMBER_PROFILE.path.replace(':memberId', memberId),
  },
  MEMBER_PROFILE_QRCODE: {
    path: '/members/:memberId/qrcode',
    exact: true,
    getPath: ({ memberId }) => ROUTES.MEMBER_PROFILE_QRCODE.path.replace(':memberId', memberId),
  },
  FACILITIES: {
    path: '/facility',
    exact: true,
  },
  ADD_FACILITY: {
    path: '/facility/new',
    exact: true,
  },
  FACILITY: {
    path: '/facility/:facilityId',
    exact: true,
    getPath: ({ facilityId }) => ROUTES.FACILITY.path.replace(':facilityId', facilityId),
  },
  FACILITY_MEMBERS: {
    path: '/facility/:facilityId/members',
    exact: true,
    getPath: ({ facilityId }) => ROUTES.FACILITY.path.replace(':facilityId', facilityId),
  },
  SUPPORT: {
    path: '/support',
    exact: true,
  },
  PRIVACY_POLICY: {
    path: '/privacy-policy',
    exact: true,
  },
  TERMS_CONDITIONS: {
    path: '/terms-conditions',
    exact: true,
  },
  ABOUT_TIPCAT: {
    path: '/about',
    exact: true,
  },
  CONTACTS: {
    path: '/contacts',
    exact: true,
  },
  PAY: {
    path: '/:memberCode/pay',
    exact: true,
  },
  TRANSACTIONS: {
    path: '/transactions',
    exact: true,
  },
};

export const ROUTES_KEYS = Object.keys(ROUTES);
