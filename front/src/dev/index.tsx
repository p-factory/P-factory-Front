import { useEffect } from 'react';
import { useApiMutation, useApiQuery } from '@model';
import { BaseLayout } from '@/View/components';
import { Alarm, Factory, Test } from '@shared/components';
import { AlarmTypeStyles, FactoryTypeStyles } from '@/Model/Mapping';
import Bestter from '@shared/components/outer/Bestter';
import {
  BestterTypeStyles,
  RankTypeStyles,
  SharedFactoryTypeStyles,
} from '@/Model/Mapping';
import Rank from '@shared/components/outer/Rank';
import SharedFactory from '@shared/components/outer/SharedFactory';

const Dev = () => {
  const { mutation, isLoading, isError, isSuccess, responseData } =
    useApiMutation('POST', 'https://13.209.113.229.nip.io/api/login', {
      loginId: 'rdwootest',
      password: 'test1234',
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
    <BaseLayout>
      <div style={{ backgroundColor: 'tomato', height: '100%' }}>
        <div>Test</div>
        <div>
          <button
            onClick={() => {
              console.log('test');
              mutation.mutate({});
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
        {/* <Tool styles={ToolTypeStyles} /> */}
        {/* <Footer styles={FooterTypeStyles} /> */}
      </div>
      <div>
        <Bestter styles={BestterTypeStyles} />
        <Rank styles={RankTypeStyles} />
        <SharedFactory styles={SharedFactoryTypeStyles} />
      </div>
      <Factory
        styles={FactoryTypeStyles}
        id={1}
        name='test'
        favorite={true}
        total={1}
        uri={1}
        handlelocal={() => console.log('test')}
      />
      <Alarm styles={AlarmTypeStyles} title='test' alarm='test' image='x' />
      <Test />
    </BaseLayout>
  );
};

export default Dev;
