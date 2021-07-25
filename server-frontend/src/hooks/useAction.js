import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';

export const useAction = (action, deps) => {
  const dispatch = useDispatch();
  const inputs = deps ? [dispatch, ...deps] : [dispatch];

  return useMemo(() => bindActionCreators(action, dispatch), inputs);
};
