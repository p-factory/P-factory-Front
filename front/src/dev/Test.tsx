import { useEffect } from 'react';
import { useApiMutation } from '../Model';
const Test = () => {
  const {
    mutation,
    isLoading,
    isError,
    isSuccess,
    responseData,
    responseHeaders,
  } = useApiMutation('POST', 'https://13.209.113.229.nip.io/api/login', {
    loginId: 'id@naver.com',
    password: 'password1',
  });

  useEffect(() => {
    if (isSuccess) {
      console.log('Response:', responseData);
      console.log('Response Headers:', responseHeaders);
      // console.log('Refresh-Token:', Refresh - Token);
      if (responseHeaders) {
        console.log('Authorization:', responseHeaders.get('Authorization'));
      }
    }
    if (isError) {
      console.error('Error occurred during mutation');
    }
  }, [isSuccess, isError, responseData, responseHeaders]);

  return (
    <div>
      <div>Test</div>
      <button
        onClick={() => {
          console.log('test');
          mutation.mutate({
            includeHeaders: true,
          });
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
  );
};

export default Test;
