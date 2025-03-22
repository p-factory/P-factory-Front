import { Screw } from '@shared/components';
import { useEffect, useState } from 'react';
import { useApiQuery, useGlobalApiState } from '../..//Model';
import { ScrewTypeStyles } from '../..//Model/Mapping';

interface GetData {
  id: number;
  word: string;
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

const StudyFactoryApi = ({ uri }: { uri: string }) => {
  const [targetId, setTargetId] = useState<number | null>(null);
  const { isLoading, isError, data, isSuccess, refetch } =
    useApiQuery<ApiResponse>(
      `https://13.209.113.229.nip.io/api/wordbook?id=${uri}&page=0`,
      '',
      false,
    );

  const { isSuccess: deletedSuccess } = useGlobalApiState({
    id: targetId ?? undefined,
    method: 'DELETE',
  });

  const handleDelete = (id: number) => {
    setTargetId(id);
  };

  useEffect(() => {
    refetch();
    if (isSuccess) {
      console.log('✅Response:', data?.data.words);
    }
    if (isLoading) {
      console.log('isLoading..');
    }
    if (isError) {
      console.log('isError');
    }
  }, [isSuccess, isLoading, isError]);

  return (
    <div>
      {isLoading && <p>데이터를 불러오는 중...</p>}
      {isError && (
        <p style={{ color: 'red' }}>
          데이터를 가져오는 중 오류가 발생했습니다.
        </p>
      )}
      {!isLoading && (!data?.data.words || !Array.isArray(data.data.words)) && (
        <p style={{ color: 'red' }}>데이터가 존재하지 않습니다.</p>
      )}
      {Array.isArray(data?.data.words) &&
        data.data.words.map((el) => (
          <div key={el.id} style={{ margin: '10px 0 0 10px' }}>
            <Screw
              key={el.id}
              id={el.id}
              styles={ScrewTypeStyles}
              screwSound={''}
              bolt={el.word}
              nuts={el.meanings}
              screwShape={''}
              onDeleteTrigger={(id) => handleDelete(id)}
              isSuccessState={deletedSuccess}
            />
          </div>
        ))}
    </div>
  );
};
export default StudyFactoryApi;
