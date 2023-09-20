import useAuthContext from './useAuthContext';
import useAuth from '../../features/auth/useAuth';

const useRefeshToken = () => {
  const auth = useAuth();

  const { setAuth } = useAuthContext();
  const refresh = async () => {
    const data = await auth.refresh();
    setAuth((prev) => {
      console.log(prev);
      console.log(data.accessToken);
      return {
        ...prev,
        accessToken: data.accessToken,
        username: data.username,
      };
    });
    return data.accessToken;
  };

  return refresh;
};

export default useRefeshToken;
