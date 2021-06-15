// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  APIBaseUrl: 'https://localhost:5001/api',
  AuthUrls: {
    Signup: '/Accounts/Signup',
    Signin: '/Auth/Signin/',
    Client: '/Auth/Client',
    Employee: '/Auth/Employee/',
    GetUser: '/Auth/GetUser/',
  },
  UserRoles: {
    UserName: '/User/GetUserRole/',
  },
  User: {
    GetAllUsers: '/User/GetAllUsers/',
    GetUserByUserName: '/User/GetUserByUserName/',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
