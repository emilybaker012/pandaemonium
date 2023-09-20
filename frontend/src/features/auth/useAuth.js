import { useContext } from 'react';
import { getReq, postReq } from '../../common/client/axiosInstance';
import AuthContext from '../../common/providers/AuthProvider';

const useAuth = () => {
  const BASE_URL = 'auth';
  const { setAuth } = useContext(AuthContext);

  const login = async (payload) => {
    const { data } = await postReq(
      `${BASE_URL}`,
      payload,
      {
        withCredentials: true,
      },
    );
    return data;
  };

  const refresh = async () => {
    const { data } = await getReq(`${BASE_URL}/refresh`);
    setAuth((prev) => {
      return { ...prev, accessToken: data.accessToken };
    });
    return data;
  };

  const logout = async () => {
    const { data } = await postReq(`${BASE_URL}/logout`);
    return data;
  };

  return {
    login, refresh, logout,
  };
};

export default useAuth;
