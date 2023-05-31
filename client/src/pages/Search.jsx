import { useState } from "react";
import { useAuthContext } from "../hooks";
import { SearchResult } from "../components";

const Search = () => {
    const [searchQuery, setSearchQuery] = useState(null)
    const [result, setResult] = useState(undefined)
    const { user } = useAuthContext();

    const handleSearch = async (e) => {
        e.preventDefault();

        try {
            if (!searchQuery) {
                return
            }
            const response = await fetch(`http://localhost:3000/api/foods?search=${searchQuery}`, {
                headers: {
                    "Authorization": `Bearer ${user.token}` 
                }
            })
            const data = await response.json()

            if (response.ok) {
                setResult(data.foods);
            } else {
                setResult(null)
                console.log("food not found")
            }
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="flex items-center justify-center">
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
            <div className="fixed top-[50%] right-[50%] translate-x-[150px] -translate-y-[250px] flex justify-center bg-opacity-50 bg-black w-[300px] h-[500px]">
                {result && result.map(item => (
                    <SearchResult key={item.key} name={item.name} calories={item.calories} />
                ))}
            </div>
        </div>
    )
}

export default Search;