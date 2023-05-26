import { useState } from "react";
import { Link } from "react-router-dom";

const Search = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [result, setResult] = useState(null)

    const handleSearch = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:3000/api/foods/${searchQuery}`)
            const data = await response.json();

            if (response.ok) {
                setResult(data);
            } else {
                setResult(null)
                console.log("food not found")
            }
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="h-[90vh] flex items-center justify-center">
            <form onSubmit={handleSearch} className="flex flex-col">
                <input 
                    type="text" 
                    placeholder="search"    
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    className="border p-2"
                />
                <button className="border" type="submit">search</button>
            </form>

            {result && (
                <div>
                    <h3>Search Result</h3>
                    <p>Name: {result.name}</p>
                    <p>Calories: {result.calories}</p>
                    <Link to={`http://localhost:3000/api/foods/${result.name}`}>View Details</Link>
                </div>
            )}
        </div>
    )
}

export default Search;