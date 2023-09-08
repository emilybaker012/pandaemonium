import { getReq } from '../../common/client/axiosInstance';

const useUsers = () => {
  const BASE_URL = 'api/v1/users';
  const getAllUsers = async () => {
    const { data } = await getReq(`${BASE_URL}`);
    return data;
  };

  return { getAllUsers };
};

export default useUsers;
