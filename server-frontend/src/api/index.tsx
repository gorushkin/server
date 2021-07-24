import axios, { AxiosResponse } from 'axios';

const url = 'http://localhost:4000';

const instance = axios.create({
  baseURL: url,
});

type promiseType = Promise<AxiosResponse<any>>;

const wrapper = (promise: promiseType) =>
  promise.catch((error) => {
    const ErrorMessage = error.response.data
    console.log('ErrorMessage: ', ErrorMessage);
    throw error;
  });

export const getServerStatus = () => wrapper(instance.get(''));

export const getFilesList = () => wrapper(instance.get('/files'));
