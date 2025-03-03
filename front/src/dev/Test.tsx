import { useEffect } from 'react';
import { useApiMutation, useApiQuery } from '../Model';
import { Footer, Tool } from '@shared/components';
import { FooterTypeStyles, ToolTypeStyles } from '../Model/Mapping';
const Test = () => {
  const { mutation, isLoading, isError, isSuccess, responseData } =
    useApiMutation('POST', 'https://13.209.113.229.nip.io/api/login', {
      loginId: 'id@naver.com',
      password: 'password1',
    });

  const {
    isLoading: isGetLoading,
    isError: isGetError,
    data: isGetData,
    isSuccess: isGetSuccess,
    refetch,
  } = useApiQuery('https://13.209.113.229.nip.io/api/wordbook/all', '', false);

  useEffect(() => {
    if (isSuccess) {
      console.log('Response:', responseData);
      // console.log('Refresh-Token:', Refresh - Token);
    }
    if (isGetSuccess) {
      console.log('Response:', isGetData);
    }
    if (isError) {
      console.error('Error occurred during mutation');
    }
    if (isGetError) {
      console.error('Error Get Data');
    }
  }, [isSuccess, isError, responseData, isGetSuccess, isGetError]);

  return (
    <div style={{ backgroundColor: 'tomato', height: '100%' }}>
      <div>Test</div>
      <div>
        <button
          onClick={() => {
            console.log('test');
            mutation.mutate('', {});
          }}
        >
          Signup
        </button>
        {isLoading && <p>Loading...</p>}
        {isError && <p style={{ color: 'red' }}>Error occurred</p>}
        {isSuccess && (
          <p>Signup Success! Response: {JSON.stringify(responseData)}</p>
        )}
      </div>
      <div>
        <div>Get</div>
        <button
          onClick={() => {
            refetch();
            console.log('data');
          }}
        >
          Get
        </button>
        {isGetLoading && <p>Loading...</p>}
        {isGetError && <p style={{ color: 'red' }}>Error occurred</p>}
        {isSuccess && <p>{JSON.stringify(isGetData)}</p>}
      </div>
      <Tool styles={ToolTypeStyles} />
      <Footer styles={FooterTypeStyles} />
    </div>
  );
};

export default Test;
