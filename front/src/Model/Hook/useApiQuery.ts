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
      console.error(`Error: Failed to Analysis System. Need inspect System.`);
      console.error(error.message);
      throw error;
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
