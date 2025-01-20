// src/hooks/useApiQuery.ts
import { useQuery, useMutation } from '@tanstack/react-query';
import axiosInstance from '../axiosInstance';

// interface QueryParams {
//   params?: string; // QueryParams is Optionals
//   // Another ways use to definition type of the Record
// }

// Required GET
// queryKey needs to be defined dynamically. So, Use the functions or Hooks Parameters for this purpose.
export const useApiQuery = <Organism>(url: string, params?: string) => {
  // Organism's Generics is not pointed `isLoading, isError, data, isSuccess` state, that arrow the return's data. Don't confused what it is indicated.

  const { isLoading, isError, data, isSuccess } = useQuery<Organism>({
    // queryKey and queryFn is supported from ReactQuery library. That's the Core in the ReactQuery Syntax. please, Remember. the feature of the queryKey and queryFn.
    queryKey: [url, params], // queryKey must be an array. Its structure depends on the client's requirements.
    queryFn: async () => {
      const { data } = await axiosInstance.get(url, { params }); // `params` variable type of object support from Axios library So, can't change the name.
      return data;
    },
  });

  //`isLoading, isError, data, isSuccess` states are decided what type that are. that's the Big point the ReactQuery
  return {
    isLoading,
    isError,
    data,
    isSuccess,
  };
};

// Required POST
// export const useApiMutation = <T>(endpoint: string) => {
//   return useMutation<T, unknown, any>((payload) =>
//     axiosInstance.post(endpoint, payload),
//   );
// };
