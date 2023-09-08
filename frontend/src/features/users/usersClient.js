import {
  getReq,
} from '../../common/client/axiosClient';

const getAllUsers = async () => {
  const { data } = await getReq('users');
  return data;
};

export { getAllUsers };
