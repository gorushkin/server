import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import store, { actions } from '../store';

export const url = 'http://localhost:4000';

const instance = axios.create({
  baseURL: url,
});

export const useFetch = (query) => {
  const [status, setStatus] = useState('idle');
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setStatus('fetching');
      try {
        const response = await instance(queueMicrotask);
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
    const ErrorMessage = error?.response?.data || 'server is down';
    store.dispatch(actions.showAlert(ErrorMessage));
    throw error;
  });

export const getServerStatus = () => wrapper(instance.get(''));

export const getFilesList = () => wrapper(instance.get('/files'));

export const getFile = (filename) =>
  wrapper(instance.get(`/files/${filename}`));
