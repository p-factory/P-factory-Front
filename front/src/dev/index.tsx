import { useEffect } from 'react';
import { useApiMutation, useApiQuery } from '@model';
import { BaseLayout } from '@/View/components';
import {
  Alarm,
  BlankScrew,
  BoltsPad,
  ExitDoor,
  Factory,
  StageBanner,
} from '@shared/components';
import {
  AlarmTypeStyles,
  BoltsPadTypeStyles,
  ExitDoorTypeStyles,
  FactoryTypeStyles,
  StageBannerTypeStyles,
} from '@/Model/Mapping';
import Bestter from '@shared/components/outer/Bestter';
import {
  BestterTypeStyles,
  RankTypeStyles,
  SharedFactoryTypeStyles,
  BlankScrewTypeStyles,
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
      <BlankScrew styles={BlankScrewTypeStyles} />
      {/** 여기에서 include 값을 전달하는게 맞는지 고민해볼 필요가 있다. 이유는 렌덤한 단어가 나와야 하기 때문에 렌덤한 bolt 값을 생성하는 로직, 함수가 필요하다.
       * 또한 패드의 6개 이상의 글자가 생성되면 디자인에서 요구되는 패드 개수가 오버된다는 점도 인지 해야한다.
       */}
      <BoltsPad styles={BoltsPadTypeStyles} bolt='include' />
      <div style={{ display: 'flex', justifyContent: 'center', gap: '9px' }}>
        <ExitDoor styles={ExitDoorTypeStyles} bolt='recognize' />
        <ExitDoor styles={ExitDoorTypeStyles} bolt='allow' />
        <ExitDoor styles={ExitDoorTypeStyles} bolt='record' />
      </div>
      <StageBanner
        styles={StageBannerTypeStyles}
        stage={{ round: 1, title: '기계 고치기' }}
      />
      <div style={{ marginBottom: '100px' }} />
    </BaseLayout>
  );
};

export default Dev;
