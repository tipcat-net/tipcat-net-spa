export const ROUTES = {
    HOME: {
        path: '/',
        exact: true,
        private: true,
        title: 'Home',
    },
    AUTH: {
        path: '/auth',
        exact: true,
        title: 'Authorization',
    },
    LOGOUT: {
        path: '/logout',
        exact: true,
        title: 'Logout',
    },
    MEMBERS: {
        path: '/members',
        exact: true,
        title: 'Members',
    },
    REGISTRATION: {
        path: '/registration',
        exact: true,
        title: 'Registration',
    },
    MEMBER_PROFILE: {
        path: '/member',
        exact: true,
        private: true,
        title: 'Member profile',
    },
};

export const ROUTES_KEYS = Object.keys(ROUTES);
