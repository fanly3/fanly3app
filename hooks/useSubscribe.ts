import axios from "axios";
import { useCallback, useMemo } from "react";
import { toast } from "react-hot-toast";

import useCurrentUser from "./useCurrentUser";
import useLoginModal from "./useLoginModal";
import useUser from "./useUser";

const useSubscribe = (userId: string) => {
  const { data: currentUser, mutate: mutateCurrentUser } = useCurrentUser();
  const { mutate: mutateFetchedUser } = useUser(userId);

  const loginModal = useLoginModal();

  const isSubscribing = useMemo(() => {
    const list = currentUser?.subscriberIds || [];

    return list.includes(userId);
  }, [currentUser, userId]);

  const toggleSubscribe = useCallback(async () => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    try {
      let request;

      if (isSubscribing) {
        request = () => axios.delete('/api/subscribing', { data: { userId } });
      } else {
        request = () => axios.post('/api/subscribing', { userId });
      }

      await request();
      mutateCurrentUser();
      mutateFetchedUser();

      toast.success('Success');
    } catch (error) {
      toast.error('Something went wrong');
    }
  }, [currentUser, isSubscribing, userId, mutateCurrentUser, mutateFetchedUser, loginModal]);

  return {
    isSubscribing,
    toggleSubscribe,
  }
}

export default useSubscribe;