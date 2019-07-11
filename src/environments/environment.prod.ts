// `.env.ts` is generated by the `npm run env` command
import env from './.env';

export const environment = {
  production: true,
  version: env.npm_package_version,
  defaultLanguage: 'en-US',
  supportedLanguages: ['en-US', 'fr-FR'],
  apiUrl: 'http://localhost:5001',
  sessionKey: {
    credentials : 'credentials'
  },
  userApi: {
    get: '/api/user/',
    login: '/api/user/authenticate',
    logout: '/api/user/logout',
  },
  postApi:{
    postByUser: 'post/GetByUser?id=',
    postByTag: 'post/GetByTag?id='
  },
  projectApi: {
    get: '/api/project/',
    getList: '/api/project/getList',
    getProjectPieces: 'api/project/pieces/',
    create: '/api/project/',
    update: '/api/project/'
  },
  pieceApi: {
    get: '/api/piece/',
    create: '/api/piece/',
    update: '/api/piece/'
  }
};