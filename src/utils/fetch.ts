import qs from "qs";

export interface TQueryParams {
    [key: string]: string | number;
}

export interface IFetchResource {
    url: string;
    method?: "POST" | "GET" | "PUT" | "DELETE";
    body?: any;
    query?: TQueryParams;
}

export const fetchResource = async <T>({
    url,
    method = 'GET',
    body,
    query,
}: IFetchResource): Promise<T> => {
    const response = await fetch(
        `${url}${query ? `?${qs.stringify(query)}` : ""}`, {
        method,
        body: JSON.stringify(body),
    });

    if (!response.ok) {
        throw new Error(await response.text())
    }

    const contentType = response.headers.get("content-type");

    if (!contentType?.includes("application/json")) {
        throw new Error('contentType is not set to application/json.');
    }

    return response.json();
}

export default fetchResource;