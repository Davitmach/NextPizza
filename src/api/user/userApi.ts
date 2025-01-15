const Production = process.env.NEXT_PUBLIC_SERVER_PRODUCTION;

export const UserApi = {
  login: `${Production}login`,

  checkLogged:`${Production}checkLogged`,
  logout:`${Production}logout`,
  loginProvider:`${Production}loginProvider`,
  getId:`${Production}getId`,
  verif:`${Production}verif`,
  register:`${Production}register`

};
