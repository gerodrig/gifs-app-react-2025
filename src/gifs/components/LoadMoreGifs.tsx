interface Props {
  loadMore: () => void;
}

export const LoadMoreGifs = ({ loadMore }: Props) => {
  return (
    <div className="flex items-center justify-center col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-5 mb-16">
      <button
        onClick={() => loadMore()}
        className="w-40 rounded-lg border-1 p-2 border-gray-100 debug font-semibold hover:cursor-pointer hover:bg-purple-300 transition-all ease-in duration-300"
      >
        Load More GIFs
      </button>
    </div>
  );
};
