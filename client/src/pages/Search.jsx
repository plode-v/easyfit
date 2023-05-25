import { useState } from "react"

const Search = () => {

    const [input, setInput] = useState("")

    const fetchData = (value) => {
        fetch("http://localhost:3000/api/foods")
            .then(response => response.json())
            .then(json => {
                const results = json.filter(food => {
                    return value && food && food.name && food.name.toLowerCase(value)
                });
                console.log(results);
            });
    }

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    };


    return (
        <div className="mt-[60px]">
            <div className="flex justify-center pt-10">
                <label className="pr-2 items-center flex">Search:</label>
                <input 
                    className="border p-1"
                    type="text"
                    placeholder="Search"
                    value={input}
                    onChange={e => handleChange(e.target.value)}
                />
            </div>
        </div>
    )
}

export default Search