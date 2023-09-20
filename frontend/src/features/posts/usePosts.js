import { getReq } from '../../common/client/axiosInstance';

const usePosts = () => {
  const BASE_URL = 'api/v1/posts';
  const getAllPosts = async () => {
    const { data } = await getReq(`${BASE_URL}`);
    return data;
  };

  return { getAllPosts };
};

export default usePosts;
