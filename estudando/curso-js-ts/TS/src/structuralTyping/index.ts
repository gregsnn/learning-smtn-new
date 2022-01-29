type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };

const verifyUser: VerifyUserFn = (user, sentValue) => {
  return user.username === sentValue.username && user.password === sentValue.password;
};

const bdUser = { username: 'Joao', password: '123456' };
const sentUser = { username: 'Joao', password: '123456' };
const isLoggedIn = verifyUser(bdUser, sentUser);

console.log(isLoggedIn);

export default 1;
