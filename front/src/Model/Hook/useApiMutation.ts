import { useMutation } from '@tanstack/react-query';
import AxiosInstance from '../axiosInstance';

const useApiMutation = <InjectNucleus = any, CulturedNucleus = any>(
  method: 'POST' | 'PUT' | 'DELETE',
  url: string = 'api/test',
  nucleus: InjectNucleus = {
    nucleus: 'DNA number',
  } as InjectNucleus,
) => {
  const ApiMutation = async (
    mutateUrl?: string,
    mutateNucleus?: InjectNucleus,
    mutateHeaders?: boolean,
  ): Promise<{ cell: CulturedNucleus; headers?: any }> => {
    const codeUrl = mutateUrl || url;
    const codeData = mutateNucleus || nucleus;
    try {
      let dna;
      switch (method) {
        case 'POST': {
          dna = await AxiosInstance.post(codeUrl, codeData);
          break;
        }
        case 'PUT': {
          dna = await AxiosInstance.put(codeUrl, codeData);
          break;
        }
        case 'DELETE': {
          dna = await AxiosInstance.delete(codeUrl, {
            data: codeData,
          });
          break;
        }
        default:
          throw new Error(
            `Unsupported mutation experiment Types: ${method}, Please, check 'useApiMutation.ts' file`,
          );
      }
      if (dna.data === true) {
        console.log('Success: The mutation experiment was successful.');
      } else {
        console.log(
          `Error: Failed to Implement the mutation, Doesn't exit in the type list.`,
        );
      }
      return mutateHeaders
        ? { cell: dna.data, headers: dna.headers }
        : { cell: dna.data };
    } catch (error: any) {
      console.error(
        `Error!: Mutant has escaped from the System.\nErrorMessage:${error.message || error}`,
      );
      throw error;
    }
  };
  const mutation = useMutation({
    mutationFn: ({
      mutateUrl,
      mutateNucleus,
      includeHeaders,
    }: {
      mutateUrl?: string;
      mutateNucleus?: InjectNucleus;
      includeHeaders?: boolean;
    }) => ApiMutation(mutateUrl, mutateNucleus, includeHeaders),
  });

  const isLoading = mutation.status === 'pending';
  const isError = mutation.status === 'error';
  const isSuccess = mutation.status === 'success';
  const responseData = mutation.data?.cell;
  const responseHeaders = mutation.data?.headers;

  return {
    mutation,
    isLoading,
    isError,
    isSuccess,
    responseData,
    responseHeaders,
  };
};

export default useApiMutation;
