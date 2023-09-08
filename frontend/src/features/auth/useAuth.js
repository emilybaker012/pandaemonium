import { getReq, postReq } from '../../common/client/axiosInstance';

const useAuth = () => {
  const BASE_URL = 'auth';
  const login = async (payload) => {
    const { data } = await postReq(`${BASE_URL}`, payload);
    return data;
  };

  const refresh = async () => {
    const { data } = await getReq(`${BASE_URL}/refresh`);
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
