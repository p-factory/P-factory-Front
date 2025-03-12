import { useEffect } from 'react';
import useApiMutation from './useApiMutation';
import { RootState } from '@shared/store/store';
import { useSelector } from 'react-redux';

const useGlobalApiState = ({ id }: { id?: number }) => {
  const { mutation, isLoading, isSuccess } = useApiMutation('DELETE');
  const mode = useSelector((state: RootState) => state.setFactoryMode.mode);

  useEffect(() => {
    if (!mode) return;
    switch (mode) {
      case 'deleted':
        console.log(`${mode}: ${id}`);
        if (id !== undefined) {
          mutation.mutate({
            mutateUrl: `https://13.209.113.229.nip.io/api/wordbook/delete/${id}`,
          });
        }
        break;
      case 'edit':
        console.log(`${mode}: ${id}`);
        break;
      case 'shared':
        console.log(`${mode}: ${id}`);
        break;
      case 'duplicated':
        console.log(`${mode}: ${id}`);
        break;
      default:
        console.log('default: ', mode);
        break;
    }
  }, [mode, id]);

  useEffect(() => {
    if (isSuccess) {
      console.log('🟢 삭제 성공:', isSuccess);
      window.location.reload();
    }
    if (isLoading) {
      console.log('isLoading');
    }
  }, [isSuccess]);

  return { isSuccess, isLoading };
};

export default useGlobalApiState;
