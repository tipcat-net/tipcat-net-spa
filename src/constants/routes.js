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
    PROFILE: {
        path: '/profile',
        exact: true,
        private: true,
        title: 'Profile',
    },
};

export const ROUTES_KEYS = Object.keys(ROUTES);
