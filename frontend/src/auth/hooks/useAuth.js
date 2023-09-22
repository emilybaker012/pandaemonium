import axiosClient from '../../common/client/axiosInstance';
import useAuthContext from './useAuthContext';

const useAuth = () => {
  const BASE_URL = 'auth';
  const { setAuth } = useAuthContext();

  const login = async () => {
    const { data } = await axiosClient.post(`${BASE_URL}`);
    return data;
  };

  const refresh = async () => {
    const { data } = await axiosClient.get(`${BASE_URL}/refresh`);
    setAuth((prev) => {
      return {
        ...prev,
        accessToken: data.accessToken,
        username: data.username,
      };
    });
    return data;
  };

  const logout = async () => {
    const { data } = await axiosClient.get(`${BASE_URL}/logout`);
    return data;
  };

  return {
    login, refresh, logout,
  };
};

export default useAuth;
