import { useEffect } from 'react';
import { useApiQuery } from '../Model';
import { Factory } from '@shared/components';
import { FactoryTypeStyles } from '../Model/Mapping';
import { useDispatch } from 'react-redux';
import { SetTotal, SetFavorite } from '@shared/store/slice/myFactoryData';

interface GetData {
  bookName: string;
  favorite: boolean;
  wordbookId: number;
  totalElements: string;
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
      /** 현재 refetch를 사용함으로 세번쪠 인자가 false로 되어 있다. 즉, 수동으로 데이터를 불러오는 것이다. */
    );

  const dispatch = useDispatch();

  const handleTotal = ({
    total,
    favorite,
    title,
  }: {
    total: string;
    favorite: boolean;
    title: string;
  }): void => {
    // localStorage.setItem(`total`, `${total}`);
    dispatch(SetTotal(Number(total)));
    dispatch(SetFavorite(favorite));
    localStorage.setItem('title', `${title}`);
  };

  useEffect(() => {
    refetch();
  }, []);

  useEffect(() => {
    /** 현재 refetch가 비효율 적으로 useEffect에 있다. 이를 어떻게 해결 해야할지 대안을 생각해볼 필요가 있다.*/
    // refetch();
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
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '60vh',
            width: '100%',
          }}
        >
          <p style={{ color: 'red' }}>
            데이터를 가져오는 중 오류가 발생했습니다. IMAGE
          </p>
        </div>
      )}

      {/* 데이터가 없을 경우 경고 메시지 표시 */}
      {!isLoading && (!data?.data || !Array.isArray(data.data)) && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '60vh',
            width: '100%',
          }}
        >
          <p style={{ color: 'red' }}>데이터가 존재하지 않습니다. IMAGE</p>
        </div>
      )}

      {/* 데이터가 배열일 경우 map 실행 */}
      {Array.isArray(data?.data) &&
        // data.data.map((el) => <p key={el.wordbookId}>{el.bookName}</p>)}
        data?.data.map((el) => (
          <Factory
            key={el.wordbookId}
            id={el.wordbookId}
            styles={FactoryTypeStyles}
            name={el.bookName}
            favorite={el.favorite}
            total={Number(el.totalElements)}
            uri={el.wordbookId}
            handlelocal={() =>
              handleTotal({
                total: el.totalElements,
                favorite: el.favorite,
                title: el.bookName,
              })
            }
          />
        ))}
    </div>
  );
};

export default MyFactoryApi;
