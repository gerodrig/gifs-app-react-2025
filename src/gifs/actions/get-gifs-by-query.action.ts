import type { Gif } from "../interfaces/gif.interface";
import type { GiphyResponse } from "../interfaces/giphy.response";
import { giphyApi } from "../api/giphy.api";

interface Options {
    limit?: number;
    offset?: number;
    rating?: string;
    lang?: string;
    endpoint?: endpointType;
}

type endpointType = 'search' | 'trending' | 'random';

export const getGifsByQuery = async(query: string, options: Options ={}): Promise<Gif[]> => {
    const { endpoint = 'search', ...params } = options;
    const response = await giphyApi<GiphyResponse>(`/${endpoint}`,{
        params: {q: query, limit: 10, ...params},
    });

    return response.data.data.map((gif) => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.original.url,
        width: Number(gif.images.original.width),
        height: Number(gif.images.original.height),
    }))
}