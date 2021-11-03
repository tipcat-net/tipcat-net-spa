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
    MEMBERS: {
        path: '/members',
        exact: true,
    },
    REGISTRATION: {
        path: '/registration',
        exact: true,
    },
    MEMBER_PROFILE: {
        path: '/member',
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
};

export const ROUTES_KEYS = Object.keys(ROUTES);
