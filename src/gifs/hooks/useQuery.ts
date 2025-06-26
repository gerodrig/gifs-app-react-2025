import { useState, useEffect, useCallback } from 'react';
import type { Gif } from '../interfaces/gif.interface';
import { getGifsByQuery } from '../actions/get-gifs-by-query.action';

export const useQuery = (queryParam: string = '') => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);
  const [query] = useState(queryParam);

  const handleSearch = useCallback(
    async (query: string = '') => {
      const normalizedQuery = query.trim().toLowerCase();

      if (normalizedQuery.length === 0) return;

      if (previousTerms.includes(normalizedQuery)) return;

      setPreviousTerms([normalizedQuery, ...previousTerms].splice(0, 8));

      const gifs = await getGifsByQuery(normalizedQuery);
      setGifs(gifs);
    },
    [previousTerms]
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      handleSearch(query);
    }, 700);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [handleSearch, query]);

    return {
        gifs,
    };
};
