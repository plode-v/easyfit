import { useState } from "react";

const Search = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [result, setResult] = useState([])

    const handleSearch = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:3000/api/foods?search=${searchQuery}`)
            const data = await response.json();

            if (response.ok) {
                setResult(data);
            } else {
                setResult([])
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
            <div>
                {result !== null && (
                    result.foods.length > 0 ? (
                        result.foods.map(food => (
                            <div key={food._id}>
                                <p>Name: {food.name}</p>
                                <p>Calories: {food.calories}</p>
                            </div>
                        ))
                    ) : <p>no food found</p>
                )}
            </div>
        </div>
    )
}

export default Search;