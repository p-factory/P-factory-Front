import { useMutation } from '@tanstack/react-query';
import AxiosInstance from '../axiosInstance';

// remove interface definition
// interface UseFetchQueryAPIProps {
//   url: string;
//   postData?: any;
// }

// onSuccess, on~ and isSuccess, is~ syntax obviously different.
export const useFetchMutation = <TPostData = any, TResponseData = any>(
  method: 'POST' | 'PUT' | 'DELETE',
  url: string,
  postData: TPostData,
) => {
  const fetchMutation = async (
    params?: {
      url?: string;
      postData?: TPostData;
    },
    // Remove this type
    //  : {
    //   mutation: UseMutationResult<any, Error, { url?: string; postData?: T }>;
    //   isLoading: boolean;
    //   isError: boolean;
    //   isSuccess: boolean;
    //   responseData: any;
    // }
  ): Promise<TResponseData> => {
    const finalUrl = params?.url || url;
    const finalData = params?.postData || postData;

    // if (!finalUrl) throw new Error('URL is required for the API request.');
    // if (!method)
    //   throw new Error('HTTP method is required for the API request.');

    switch (method) {
      case 'POST':
        return (await AxiosInstance.post(finalUrl, finalData)).data;
      case 'PUT':
        return (await AxiosInstance.put(finalUrl, finalData)).data;
      case 'DELETE':
        return (await AxiosInstance.delete(finalUrl, { data: finalData })).data;
      default:
        throw new Error(`Unsupported request method: ${method}`);
    }
  };

  const mutation = useMutation({
    mutationFn: fetchMutation,
  });

  // The return value definition is used as a status property.
  // reactQuery ver 5.62.7 doesn't support isLoading.
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
