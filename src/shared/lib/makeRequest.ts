import axios from 'axios';
import { BASE_URL, LS_TOKEN } from 'shared/consts/localStorageKeys';
import { camelizeObjFields } from 'shared/lib/camelize';

export enum HTTP_METHOD {
  GET = 'get',
  POST = 'post',
  DELETE = 'delete',
  PUT = 'put',
  PATH = 'path',
}

interface PropsRequest {
  url: string;
  method?: HTTP_METHOD;
  data?: Record<string, any>;
  headers?: Record<string, string>;
  params?: Record<string, string | number>
}

export function makeAxiosRequest(
  {
    url = undefined,
    method = HTTP_METHOD.GET,
    data = undefined,
    params,
    headers = {
      Accept: 'application / json',
      'Content-Type': 'application/json',
    },
  }: PropsRequest,
): Promise<Record<string, any>> {
  const token = localStorage.getItem(LS_TOKEN);
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return axios({
    baseURL: BASE_URL,
    url,
    headers,
    method,
    data,
    params,
  })
    .then((response: Record<string, any>) => {
      if (response.data) {
        response.data = camelizeObjFields(response.data);
        return response;
      }
      throw new Error(response.message);
    })
    .catch((error) => {
      return error;
    });
}
