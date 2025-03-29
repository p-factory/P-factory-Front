import { useEffect, useState } from 'react';
import useApiMutation from './useApiMutation';
import { RootState } from '@shared/store';
import { useSelector } from 'react-redux';
/**
 * 해당 useGlabalApiState에서는 FactoryMode와 ToolMode 두가지로 나뉘어 있다.
 * 단, 두 동작 방식은 확연한 차이가 있다.
 */
const useGlobalApiState = ({
  id,
  method,
  // trigger = false,
}: {
  id?: number;
  method: 'POST' | 'PUT' | 'DELETE';
  // trigger?: boolean;
}) => {
  const { mutation, isLoading, isSuccess } = useApiMutation(method);
  const mode = useSelector((state: RootState) => state.setFactoryMode.mode);
  const toolMode = useSelector((state: RootState) => state.setToolMode.tool);

  useEffect(() => {
    // foactory mode
    if (!mode) return;
    switch (mode) {
      case 'deleted':
        // console.log(`${mode}: ${id}`);
        if (id !== undefined) {
          mutation.mutate(
            {
              mutateUrl: `https://13.209.113.229.nip.io/api/wordbook/delete/${id}`,
            },
            {
              onSuccess: () => {
                window.location.reload();
              },
            },
          );
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
        // console.log('default: ', mode);
        break;
    }
    // tool mode
    if (!toolMode || toolMode.length === 0) return;
    switch (toolMode[0]) {
      case 'highlight':
        // console.log(`${toolMode}: ${id}`);
        if (id !== undefined) {
          mutation.mutate(
            {
              mutateUrl: `https://13.209.113.229.nip.io/api/word/highlight/${id}`,
            },
            {
              onSuccess: () => {
                console.log(`✅ Screw ${id} 삭제 성공`);
              },
            },
          );
        }
        break;
      case 'deleted':
        console.log(`${toolMode}: ${id}`);
        if (id !== undefined) {
          mutation.mutate(
            {
              mutateUrl: `https://13.209.113.229.nip.io/api/word/delete/${id}`,
            },
            {
              onSuccess: () => {
                console.log(`✅ Screw ${id} 삭제 성공`);
              },
            },
          );
        }
        break;

      default:
        // console.log('default: ', toolMode);
        break;
    }
  }, [toolMode, mode, id]);

  useEffect(() => {
    if (isSuccess) {
      console.log('🟢 삭제 성공:', isSuccess);
    }
    if (isLoading) {
      console.log('isLoading');
    }
  }, [isSuccess]);

  return { isSuccess, isLoading };
};

export default useGlobalApiState;
