interface Props {
    searches: string[];
    onLabelClicked: (term: string) => void;
}

export const PreviousSearches = ({ searches, onLabelClicked }: Props) => {
    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <h2 className="mt-4 text-2xl">Recent Searches</h2>
            <ul className="flex flex-row items-center justify-center gap-2 flex-wrap max-w-[400px] list-none p-0 m-0">
                {searches.map((term) => (
                    <li
                        key={term}
                        onClick={() => onLabelClicked(term)}
                        className="px-2 py-1 border border-gray-300 rounded cursor-pointer text-sm font-normal text-white bg-black mb-5 hover:bg-gray-200 transition-colors duration-500"
                    >
                        {term}
                    </li>
                ))}
            </ul>
        </div>
    );
};
