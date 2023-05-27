import { useState } from "react";

const SearchBar = () => {
    const [query, setQuery] = useState('')
    const [result, setResult] = useState(null)

    const handleSearch = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:3000/api/foods/${query}`);
            const data = await response.json();

            if (response.ok) {
                setResult(data);
            } else {
                setResult(null)
                console.log("food not found");
            }
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div>
            <form onSubmit={handleSearch}>
                <input 
                    type="text"
                    placeholder="search for food..."    
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    className="border p-2"
                />
                <button type="submit" className="border">Search</button>
            </form>
        </div>
    )
}


export default SearchBar;