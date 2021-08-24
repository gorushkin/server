export const getToken = (login: string, _password: string): string => {
  if (login === 'qwerty') {
    const token = '1234567890';
    return token;
  }
  throw new Error('User is not defind');
};

interface User {
  login: string;
}

export const getUser = (token: string): User => {
  if (token) return { login: 'qwerty' };
  throw new Error('tokin is wrong!');
};
