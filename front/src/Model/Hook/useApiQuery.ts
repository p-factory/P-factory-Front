// src/hooks/useApiQuery.ts
import { useQuery, useMutation } from '@tanstack/react-query';
import axiosInstance from '../axiosInstance';

// interface QueryParams {
//   params?: string; // QueryParams is Optionals
//   // Another ways use to definition type of the Record
// }

// Required GET
// queryKey needs to be defined dynamically. So, Use the functions or Hooks Parameters for this purpose.
// here is `params` parameter indicate QueryParams

export const useApiQuery = <Organism>(url: string, params?: string) => {
  // Organism's Generics is not pointed `isLoading, isError, data, isSuccess` state, that arrow the return's data. Don't confused what it is indicated.

  const ApiQuery = async () => {
    try {
      const dna = await axiosInstance.get(url, { params }); // `params` variable type of object support from Axios library So, can't change the name.
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
    // queryKey and queryFn is supported from ReactQuery library. That's the Core in the ReactQuery Syntax. please, Remember. the feature of the queryKey and queryFn.
    queryKey: [url, params], // queryKey must be an array. Its structure depends on the client's requirements.

    queryFn: ApiQuery,
  });

  //`isLoading, isError, data, isSuccess` states are decided what type that are. that's the Big point the ReactQuery
  return {
    isLoading,
    isError,
    data,
    isSuccess,
  };
};
