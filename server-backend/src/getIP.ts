import axios from 'axios';

const url = 'https://api.myip.com';

interface IIP {
  ip: string;
  country: string;
  cc: string;
}

export const getIp = async (): Promise<IIP> => {
  const { data } = await axios(url);
  return data;
};
