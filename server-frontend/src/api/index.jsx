import axios from 'axios';

const url = 'http://localhost:4000';

const instance = axios.create({
  baseURL: url,
});

const wrapper = (promise) =>
  promise.catch((error) => {
    const ErrorMessage = error?.response?.data || 'something is broken';
    console.log('ErrorMessage: ', ErrorMessage);
    throw error;
  });

export const getServerStatus = () => wrapper(instance.get(''));

export const getFilesList = () => wrapper(instance.get('/files'));
