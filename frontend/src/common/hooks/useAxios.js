import { useEffect, useContext } from 'react';
import axiosClient from '../client/axiosInstance';
import useAuth from '../../auth/hooks/useAuth';
import AuthContext from '../../auth/hooks/useAuthContext';

const useAxios = () => {
  const { auth } = useContext(AuthContext);
  const authy = useAuth();
  useEffect(() => {
    const requestIntercept = axiosClient.interceptors.request.use((config) => {
      if (!config.headers.Authorization) {
        config.headers.Authorization = `Bearer ${auth?.accessToken}`;
      }

      return config;
    }, (error) => { return Promise.reject(error); });

    const responseIntercept = axiosClient.interceptors.response.use(
      (response) => { return response; },
      async (error) => {
        const prevRequest = error?.config;
        if (error?.respone?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true;
          const newAccessToken = await authy.refresh();
          prevRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return axiosClient(prevRequest);
        }
        return Promise.reject(error);
      },
    );
    return () => {
      axiosClient.interceptors.response.eject(requestIntercept);
      axiosClient.interceptors.response.eject(responseIntercept);
    };
  }, [auth, authy]);

  return axiosClient;
};

export default useAxios;
