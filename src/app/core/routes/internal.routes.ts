export const ROUTE_PATH = {
    AUTH: {
        AUTH: 'auth',
        LOGIN: 'login',
    },
    USER: {
        USER: 'user',
        PRESENTATION: 'presentation',
    }
  };

  export const PUBLIC_PATH = {
    AUTH_PATH: ROUTE_PATH.AUTH.AUTH,
    LOGIN_PATH: ROUTE_PATH.AUTH.LOGIN
  };

  export const USER_PATH = {
    USER_PATH: ROUTE_PATH.USER.USER,
    PRESENTATION_PATH: ROUTE_PATH.USER.PRESENTATION
  };

  export const INTERNAL_ROUTES = {
    ROUTE_LOGIN: `${PUBLIC_PATH.AUTH_PATH}/${PUBLIC_PATH.LOGIN_PATH}`,
    ROUTE_MAIN: `${USER_PATH.USER_PATH}/${USER_PATH.PRESENTATION_PATH}`,
  };
