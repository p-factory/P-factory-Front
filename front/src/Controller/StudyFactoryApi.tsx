import { Screw } from '@shared/components';
import { useEffect, useState } from 'react';
import { useApiQuery, useGlobalApiState } from '@model';
import { ScrewTypeStyles } from '@mapping';
import { useDispatch } from 'react-redux';
import { SetTotal } from '@shared/store/slice/myFactoryData';

interface GetData {
  id: number;
  word: string;
  pronunciation: string;
  explanation: string;
  meanings: string[];
  highlight: boolean;
  check: boolean;
}
interface WordbookData {
  wordbookId: number;
  wordbookName: string;
  favorite: boolean;
  words: GetData[];
  totalElements: number;
  totalPages: number;
}
interface ApiResponse {
  status: number;
  data: WordbookData;
  message: string;
  token: string | null;
}

const StudyFactoryApi = ({
  uri,
  page,
  onLoadComplete,
}: {
  uri: string;
  page?: number;
  onLoadComplete?: () => void;
}) => {
  const [targetId] = useState<number | null>(null);
  const { isLoading, isError, data, isSuccess, refetch } =
    useApiQuery<ApiResponse>(
      `https://13.209.113.229.nip.io/api/wordbook?id=${uri}&page=${page}`,
      '',
      false,
    );

  const { isSuccess: deletedSuccess } = useGlobalApiState({
    id: targetId ?? undefined,
    method: 'DELETE',
  });

  const dispatch = useDispatch();

  /**
   * isSuccess가 불명확해서 해당 코드에서 예외처리하는 방식으로 변경
   * useEffect의 안정성을 위해서 둘을 구분해야한다. 하지만 아직 로직의 복잡성이 높아 섵부르게 나누면 안된다.
   */
  useEffect(() => {
    const fetchData = async () => {
      await refetch();
      if (data?.data?.totalElements) {
        dispatch(SetTotal(data.data.totalElements));
      } else {
        dispatch(SetTotal(0));
      }
      onLoadComplete?.();
    };
    fetchData();
    if (isSuccess && data?.data) {
      console.log('✅Response:', data?.data?.words);
      console.log('✅Response:', data?.data);
      /** 404인 상태에서 response를 받으면 안되기 때문에 해당 코드 주석 처리 -> 삭제예정 */
      /**
       if (data?.data.totalElements) {
        dispatch(SetTotal(data?.data.totalElements));
      }
       */
    }
    if (isLoading) {
      console.log('isLoading..');
    }
    if (isError) {
      console.log('isError');
    }
  }, [isSuccess, isLoading, isError, data, page, refetch, dispatch]);

  return (
    <div>
      {isLoading && <p>데이터를 불러오는 중...</p>}
      {isError && (
        <p style={{ color: 'red' }}>
          데이터를 가져오는 중 오류가 발생했습니다.
          {data?.status === 404 ? ' 요청한 단어장을 찾을 수 없습니다.' : ''}
        </p>
      )}
      {!isLoading &&
        !isError &&
        (!data?.data?.words || !Array.isArray(data?.data?.words)) && (
          <p style={{ color: 'red' }}>데이터가 존재하지 않습니다.</p>
        )}
      {!isLoading &&
        !isError &&
        data?.data?.words &&
        Array.isArray(data.data.words) &&
        data.data.words.map((el) => (
          <div key={el.id} style={{ margin: '10px 0 0 10px' }}>
            <Screw
              key={el.id}
              id={el.id}
              styles={ScrewTypeStyles}
              screwSound={el.pronunciation}
              bolt={el.word}
              nuts={el.meanings}
              screwShape={el.explanation}
              highlight={el.highlight}
              check={el.check}
              isDeleteState={deletedSuccess}
            />
          </div>
        ))}
    </div>
  );
};
export default StudyFactoryApi;
