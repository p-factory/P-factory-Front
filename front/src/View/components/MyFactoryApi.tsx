import { useEffect } from 'react';
import { useApiQuery } from '../../Model';
import { Factory } from '@shared/components';
import { FactoryTypeStyles } from '../../Model/Mapping';

interface GetData {
  bookName: string;
  favorite: boolean;
  wordbookId: number;
}

interface ApiResponse {
  status: number;
  data: GetData[];
  message: string;
  token: string | null;
}

const MyFactoryApi = () => {
  const { isLoading, isError, data, isSuccess, refetch } =
    useApiQuery<ApiResponse>(
      'https://13.209.113.229.nip.io/api/wordbook/all',
      '',
      false,
    );

  useEffect(() => {
    refetch();
    if (isSuccess) {
      console.log('✅Response:', data?.data);
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

      {/* 데이터가 없을 경우 경고 메시지 표시 */}
      {!isLoading && (!data?.data || !Array.isArray(data.data)) && (
        <p style={{ color: 'red' }}>데이터가 존재하지 않습니다.</p>
      )}

      {/* 데이터가 배열일 경우 map 실행 */}
      {Array.isArray(data?.data) &&
        // data.data.map((el) => <p key={el.wordbookId}>{el.bookName}</p>)}
        data.data.map((el) => (
          <Factory
            key={el.wordbookId}
            id={el.wordbookId}
            styles={FactoryTypeStyles}
            name={el.bookName}
            count={'0'}
            favorite={el.favorite}
            index={el.wordbookId}
          />
        ))}
    </div>
  );
};

export default MyFactoryApi;
