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
    FACILITY_PROFILE: {
        path: '/facility',
        exact: true,
    },
};

export const ROUTES_KEYS = Object.keys(ROUTES);
