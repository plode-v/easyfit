import { useState } from "react"

const SearchBar = ({ onSearch }) => {

    const [searchTerm, setSearchTerm] = useState('')

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(searchTerm)
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <form onSubmit={handleSearch} className="flex flex-col items-center justify-center gap-3">
                <input 
                    type="text"
                    placeholder="search for food..."    
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    className="border text-[16px] p-2"
                />
                <button type="submit" className="border p-2">Search</button>
            </form>
        </div>
    )
}

export default SearchBar;