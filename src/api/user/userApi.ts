const Production = process.env.NEXT_PUBLIC_SERVER_PRODUCTION;

export const UserApi = {
  login: `${Production}login`,

  checkLogged:`${Production}checkLogged`

};
