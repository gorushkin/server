import axios, { AxiosResponse } from 'axios';

const url = 'http://localhost:4000';

const instance = axios.create({
  baseURL: url,
});

const wrapper = (promise: any) =>
  promise.catch((error: any) => {
    console.log(error);
    throw error;
  });

export const getServerStatus = () => wrapper(instance.get(''));

export const getFilesList = () => wrapper(instance.get('/files'));
