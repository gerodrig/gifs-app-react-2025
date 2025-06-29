import { useState, useRef } from 'react';
import type { Gif } from '../interfaces/gif.interface';
import { getGifsByQuery } from '../actions/get-gifs-by-query.action';

export const useGifs = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);
  
  const gifsCache = useRef<Record<string, Gif[]>>({});
  const termCache = useRef<string>('');

  const handleTermClicked = async (term: string) => {
    setIsLoading(true);
    if (gifsCache.current[term]) {
      setGifs(gifsCache.current[term]);
      termCache.current = term;
      setIsLoading(false);
      return;
    }

    const gifs = await getGifsByQuery(term);
    setGifs(gifs);
    setIsLoading(false);
  };

  const handleSearch = async (query: string = '') => {
    query = query.trim().toLocaleLowerCase();

    if (query.length === 0) return;

    if (previousTerms.includes(query)) return;

    setIsLoading(true);

    setPreviousTerms((prev) => [query, ...prev.slice(0, 8)]);

    const gifs = await getGifsByQuery(query);
    setGifs(gifs);
    termCache.current = query;
    gifsCache.current[query] = gifs;
    setIsLoading(false);
  };

  const loadMoreGifs = async () => {
    setIsLoading(true);
    const offset = gifs.length;
    const newGifs = await getGifsByQuery(termCache.current, { offset });

    setGifs((prev) => [...prev, ...newGifs]);
    gifsCache.current[termCache.current] = [
      ...(gifsCache.current[termCache.current] || []),
      ...newGifs,
    ];
    setIsLoading(false);
  };

  return {
    //Properties
    gifs,
    isLoading,

    //Methods
    handleSearch,
    handleTermClicked,
    loadMoreGifs,
    previousTerms,
  };
};
