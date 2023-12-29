import axios, { AxiosError, AxiosRequestConfig } from "axios";

const apiInstance = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
})

// config - дефолтный, options - для переопределения
export const createInstance = <T>(
    config: AxiosRequestConfig,
    options?: AxiosRequestConfig
): Promise<T> => {
    return apiInstance({
        ...config,
        ...options
    }).then((r) => r.data);
}

export type BodyType<Data> = Data;
export type ErrorType<Error> = AxiosError<Error>;