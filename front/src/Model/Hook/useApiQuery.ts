// src/hooks/useApiQuery.ts
import { useQuery, useMutation } from '@tanstack/react-query';
import axiosInstance from '../axiosInstance';
import { boolean } from 'zod';

const useApiQuery = <Organism>(
  url: string,
  params?: string,
  enabled: boolean = true,
) => {
  const ApiQuery = async () => {
    try {
      const dna = await axiosInstance.get(url, { params });
      if (dna.status === 200 || dna.status === 204) {
        console.log(`Success: Analysis Complete, check DNA data.`);
      } else {
        console.log(`Error: Failed to Analysis, DNA data. Retry to Analysis.`);
      }
      return dna.data;
    } catch (error: any) {
      const status = error.response?.status || 500;
      const message = error.response?.data?.message || error.message;
      // console.error(`Error: Failed to Analysis System. Need inspect System.`);
      // console.error(error.message);
      /**
       * 일반 적으로, 직무에서는 throw error를 사용하는 것이 관례적이지만 현재와 같은 환경에서는 직접
       * error status에 따라 동작할 수 있게 해야한다.
       */
      if (status === 404) {
        return {
          isError: true,
          status: status,
          message: message,
          data: null,
        };
      }
    }
  };

  const { isLoading, isError, data, isSuccess, refetch } = useQuery<Organism>({
    queryKey: [url, params],
    queryFn: ApiQuery,
    enabled,
  });

  return {
    isLoading,
    isError,
    data,
    isSuccess,
    refetch,
  };
};

export default useApiQuery;
