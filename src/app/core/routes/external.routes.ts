
export const ROUTE_PATH = {
    API: 'api',
    AUTH: {
        AUTH: 'auth',
        LOGIN: 'login',
    },
  };

  export const PUBLIC_PATH = {
    API_PATH: ROUTE_PATH.API,
    AUTH_PATH: ROUTE_PATH.AUTH.AUTH,
    LOGIN_PATH: ROUTE_PATH.AUTH.LOGIN
  };


  export const EXTERNAL_ROUTES = {
    ROUTE_LOGIN: `${PUBLIC_PATH.API_PATH}/${PUBLIC_PATH.AUTH_PATH}/${PUBLIC_PATH.LOGIN_PATH}`,
  };
