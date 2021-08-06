import axios from 'axios';
import { useState, useEffect } from 'react';
import store, { actions } from '../store';
import { config } from '../config/index';

const instance = axios.create({
  baseURL: `${config.ORIGIN}${config.API_BASE_URL}`,
});

export const useFetch = (query) => {
  const [status, setStatus] = useState('idle');
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setStatus('fetching');
      try {
        const response = await instance(query);
        setData(response.data);
        setStatus('fetched');
      } catch (error) {
        const ErrorMessage = error?.response?.data || 'something is broken';
        throw error;
      }
    };

    fetchData();
  }, [query]);

  return { status, data };
};

const wrapper = (promise) =>
  promise.catch((error) => {
    const ErrorMessage = error?.response?.data.message || 'server is down';
    store.dispatch(actions.showAlert(ErrorMessage));
    throw error;
  });

// export const getServerStatus = () => wrapper(instance.get('/status'));

export const getFilesList = () => wrapper(instance.get('/files'));

export const getFile = (filename) =>
  wrapper(instance.get(`/files/${filename}`));

export const sendFile = (data) => {
  const formData = new FormData();
  formData.append('file', data);
  return instance.post('/files/', formData);
};
