
const SearchResult = ({ name, calories }) => {
    return (
        <div className="bg-green-500 text-white py-2 px-3 flex gap-2 rounded-md">
            <p>{name}</p>
            <p>{calories}</p>
        </div>
    )
}

export default SearchResult