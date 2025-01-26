// src/hooks/useApiQuery.ts
import { useQuery, useMutation } from '@tanstack/react-query';
import axiosInstance from '../axiosInstance';

const useApiQuery = <Organism>(url: string, params?: string) => {
  const ApiQuery = async () => {
    try {
      const dna = await axiosInstance.get(url, { params });
      if (dna.data === true) {
        console.log(`Success: Analysis Complete, check DNA data.`);
      } else {
        console.log(`Error: Failed to Analysis, DNA data. Retry to Analysis.`);
      }
      return dna.data;
    } catch (error) {
      console.error(`Error: Failed to Analysis System. Need inspect System.`);
      console.error(error);
      throw error;
    }
  };

  const { isLoading, isError, data, isSuccess } = useQuery<Organism>({
    queryKey: [url, params],
    queryFn: ApiQuery,
  });

  return {
    isLoading,
    isError,
    data,
    isSuccess,
  };
};

export default useApiQuery;
