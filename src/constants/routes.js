export const ROUTES = {
    HOME: {
        path: '/',
        exact: true,
        private: true,
        title: 'Главная',
    },
    AUTH: {
        path: '/auth',
        exact: true,
        title: 'Авторизация',
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
        title: 'Регистрация',
    },
    PROFILE: {
        path: '/profile',
        exact: true,
        private: true,
        title: 'Профиль',
    },
    GETACCOUNT: {
        path: '/get-account',
        exact: true,
        private: true,
        title: 'GetAccount',
    },
    PAY: {
        path: '/:memberCode/pay',
        exact: true,
        title: 'memberCode/pay',
    },
};

export const ROUTES_KEYS = Object.keys(ROUTES);
