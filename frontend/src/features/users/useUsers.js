import useAxios from '../../common/hooks/useAxios';

const useUsers = () => {
  const BASE_URL = 'api/v1/users';
  const axios = useAxios();
  const getAllUsers = async () => {
    const { data } = await axios.get(`${BASE_URL}`);
    return data;
  };

  return { getAllUsers };
};

export default useUsers;
