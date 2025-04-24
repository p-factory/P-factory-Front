import { useMutation } from '@tanstack/react-query';
import AxiosInstance from '../axiosInstance';

interface ErrorResponse {
  isError: boolean;
  status: number;
  message: string;
  data: any;
}

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
  ): Promise<CulturedNucleus | ErrorResponse> => {
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
      if (dna.status === 200 || dna.status === 204) {
        console.log('Success: The mutation experiment was successful.');
      } else {
        console.log(
          `Error: Failed to Implement the mutation, Doesn't exit in the type list.`,
        );
      }
      return dna.data;
    } catch (error: any) {
      const status = error.response?.status || 500;
      const message = error.response?.data?.message || error.message;

      /** 상태 값에 따른 에러 처리 */
      if (status === 404) {
        return {
          isError: true,
          status: status,
          message: message,
          data: null,
        } as ErrorResponse;
      }

      /** default error */
      return {
        isError: true,
        status: status,
        message: message,
        data: null,
      } as ErrorResponse;
    }
  };

  const mutation = useMutation({
    mutationFn: ({
      mutateUrl,
      mutateNucleus,
    }: {
      mutateUrl?: string;
      mutateNucleus?: InjectNucleus;
    }) => ApiMutation(mutateUrl, mutateNucleus),
  });

  const isLoading = mutation.status === 'pending';
  const isError = mutation.status === 'error';
  const isSuccess = mutation.status === 'success';
  const responseData = mutation.data;

  return {
    mutation,
    isLoading,
    isError,
    isSuccess,
    responseData,
  };
};

export default useApiMutation;
