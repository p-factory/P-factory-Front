import { useCallback, useEffect } from 'react';
import useApiMutation from './useApiMutation';

/**
 * 해당 useGlabalApiState에서는 FactoryMode와 ToolMode 두가지로 나뉘어 있다.
 * 단, 두 동작 방식은 확연한 차이가 있다.
 */
const useGlobalApiState = ({
  id,
  method,
  toggle = false,
}: {
  id?: number;
  method: 'POST' | 'PUT' | 'DELETE';
  toggle?: boolean;
}) => {
  const { mutation, isLoading, isSuccess } = useApiMutation(method);
  // 의존성 제거

  const modeActive = useCallback(
    (mode?: 'deleted' | 'edit' | 'shared' | 'duplicated' | 'highlight') => {
      // foactory mode
      if (!mode && !toggle) return;
      if (mode) {
        console.log('mode: ', mode, 'toggle: ', toggle);
        switch (mode) {
          case 'deleted':
            // console.log(`${mode}: ${id}`);
            if (id !== undefined) {
              console.log('check');
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
            // console.log('default: ', mode);
            break;
        }
      } else {
        console.log('Not Mode');
      }
    },
    [toggle, id],
  );
  const toolModeActive = useCallback(
    (toolMode?: 'highlight' | 'deleted') => {
      if (!toolMode) return;
      switch (toolMode) {
        case 'highlight':
          // console.log(`${toolMode}: ${id}`);
          if (id !== undefined) {
            mutation.mutate(
              {
                mutateUrl: `https://13.209.113.229.nip.io/api/word/highlight/${id}`,
              },
              {
                onSuccess: () => {
                  console.log(`✅ Screw ${id} highlight 성공`);
                },
              },
            );
          } else {
            console.log('Not ToolMode');
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
    },
    [toggle, id],
  );
  useEffect(() => {
    if (isSuccess) {
      console.log('🟢 삭제 성공:', isSuccess);
    }
    if (isLoading) {
      console.log('isLoading');
    }
  }, [isSuccess]);

  return { isSuccess, isLoading, modeActive, toolModeActive };
};

export default useGlobalApiState;
