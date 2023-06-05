import { useState } from "react";
import { useAuthContext, useLogsContext } from "../hooks";
import { SearchResult } from "../components"
import { apiKey } from "../constants"

const Search = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [result, setResult] = useState("")
    const { user } = useAuthContext();
    const [show, setShow] = useState(false)
    const { dispatch } = useLogsContext();

    const handleClose = () => {
        setShow(false);
    }

    const handleShow = () => {
        setShow(true);
    }

    const handleSearch = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(//`${apiKey}/api/foods?search=${searchQuery}`
            `http://localhost:3000/api/foods?search=${searchQuery}`, {
                headers: {
                    "Authorization": `Bearer ${user.token}` 
                }
            })
            const data = await response.json()
            console.log(data);

            if (response.ok) {
                setResult(data.foods);
                console.log(result)
                handleShow();
            } else {
                setResult("");
            }
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="flex items-center justify-center my-[50px] mx-[30px]">
            <form onSubmit={handleSearch} className="flex flex-col w-full">
                <input 
                    type="text" 
                    placeholder="search"    
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    className="border p-2 w-full focus:outline-none"
                />
                <button className="w-max justify-center items-center mt-[10px] py-2 px-3 text-[18px] font-[600] bg-green-700 text-white rounded-md" type="submit">search</button>
            </form>
            
            <SearchResult
                result={result}
                handleClose={handleClose}
                show={show}
            />
        </div>
    )
}

export default Search;