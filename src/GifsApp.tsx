import { GifList } from './gifs/components/GifList';
import { PreviousSearches } from './gifs/components/PreviousSearches';
import { useGifs } from './gifs/hooks/useGifs';
import { CustomHeader } from './shared/components/CustomHeader';
import { SearchBar } from './shared/components/SearchBar';
import { LoadMoreGifs } from './gifs/components/LoadMoreGifs';
import { Loader } from './shared/components/Loader';

export const GifsApp = () => {
  const {
    handleSearch,
    previousTerms,
    handleTermClicked,
    gifs,
    loadMoreGifs,
    isLoading,
  } = useGifs();

  return (
    <>
      <CustomHeader
        title="GIF Explorer"
        description="Discover and share the perfect GIF for every moment"
      />

      <SearchBar placeholder="Search for GIFs..." onQuery={handleSearch} />

      {gifs.length > 0 && (
        <PreviousSearches
          searches={previousTerms}
          onLabelClicked={handleTermClicked}
        />
      )}

      {/* Gifs */}
      <GifList gifs={gifs} />

      {isLoading && <Loader />}

      {gifs.length > 0 && !isLoading && (
        <LoadMoreGifs loadMore={loadMoreGifs} />
      )}
    </>
  );
};
