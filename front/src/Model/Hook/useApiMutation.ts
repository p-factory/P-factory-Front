import { useMutation } from '@tanstack/react-query';
import AxiosInstance from '../axiosInstance';

// remove interface definition
// interface UseApiQueryAPIProps {
//   url: string;
//   nucleus?: any;
// }

// `onSuccess` or `on~` and `isSuccess` or `is~` syntax obviously different.
// here generics types definitions default any.
// Important, first generic represent Parameter type, second generic is returns value type. However, the order of generics is not fixed and can vary depending on the context and use case.
export const useApiMutation = <InjectNucleus = any, CulturedNucleus = any>(
  method: 'POST' | 'PUT' | 'DELETE',
  url: string = 'api/test',
  nucleus: InjectNucleus = {
    nucleus: 'DNA number',
  } as InjectNucleus,
) => {
  const ApiMutation = async (
    // The `mutate` function of React Query references these parameters. If called directly outside of `mutate`, this will reference the respective object.
    mutateUrl?: string,
    mutateNucleus?: InjectNucleus,
    // Remove this type
    //  : {
    //   mutation: UseMutationResult<any, Error, { url?: string; nucleus?: T }>;
    //   isLoading: boolean;
    //   isError: boolean;
    //   isSuccess: boolean;
    //   responseData: any;
    // }
  ): Promise<CulturedNucleus> => {
    const codeUrl = mutateUrl || url;
    const codeData = mutateNucleus || nucleus;

    // Remove this code
    // if (!codeUrl) throw new Error('URL is required for the API request.');
    // if (!method)
    //   throw new Error('HTTP method is required for the API request.');

    switch (method) {
      case 'POST': {
        const dna = await AxiosInstance.post(codeUrl, codeData);
        if (dna.data === true) {
          console.log('Success: The mutation experiment was successful.');
        } else {
          console.log(
            `Error: Failed to Implement the mutation, Doesn't exit in the type list.`,
          );
        }
        return dna.data;
      }
      case 'PUT': {
        const dna = await AxiosInstance.put(codeUrl, codeData);
        if (dna.data === true) {
          console.log('Success: The mutation experiment was successful.');
        } else {
          console.log(
            `Error: Failed to Implement the mutation, Doesn't exit in the type list.`,
          );
        }
        return dna.data;
      }
      case 'DELETE': {
        const dna = await AxiosInstance.delete(codeUrl, {
          data: codeData,
        });
        if (dna.data === true) {
          console.log('Success: The mutation experiment was successful.');
        } else {
          console.log(
            `Error: Failed to Implement the mutation, Doesn't exit in the type list.`,
          );
        }
        return dna.data;
      }
      default:
        throw new Error(
          `Unsupported mutation experiment Types: ${method}, Please, check 'useApiMutation.ts' file`,
        );
    }
  };

  const mutation = useMutation({
    mutationFn: ApiMutation,
  });

  //simple use to useMutation
  /*
  const mutation = useMutation(fetchMutation);

  return mutation;
  */

  // The return value definition is used as a status property.
  // reactQuery ver 5.62.7 doesn't support isLoading.
  const isLoading = mutation.status === 'pending';
  const isError = mutation.status === 'error';
  const isSuccess = mutation.status === 'success';
  const responseData = mutation.data;
  // Don't confused `useQuery`, useQuery is always search the data from API but, 'useMutation' must be changed to API data
  return {
    mutation, // They includes `mutate, mutateAsync, reset`.
    isLoading,
    isError,
    isSuccess,
    responseData,
  };
};
