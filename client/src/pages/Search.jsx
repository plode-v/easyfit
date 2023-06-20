import { useState } from "react";
import { useAuthContext } from "../hooks";
import { SearchResult } from "../components"
import axios from "axios";
import { apiKey } from "../constants";

const Search = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [result, setResult] = useState("")
    const { user } = useAuthContext();
    const [show, setShow] = useState(false)

    const handleClose = () => {
        setShow(false);
    }

    const handleShow = () => {
        setShow(true);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.get(`${apiKey}/api/foods?search=${searchQuery}`, {
                headers: {
                    "Authorization": `Bearer ${user.token}` 
                }
            })
            const data = await response.data
            console.log(data);

            if (response.status === 200) {
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
        <div className="flex flex-col mt-[60px] w-full">
            <div className="flex h-[600px] items-center justify-center">
                <form onSubmit={handleSubmit} className="flex flex-col lg:w-1/4 w-2/3">
                    <input 
                        type="text" 
                        placeholder="search"    
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        className="border p-2 w-full focus:outline-none flex flex-col"
                    />
                    <button className="flex w-max justify-center items-center mt-[10px] py-2 px-3 text-[18px] font-[600] bg-green-700 text-white rounded-md" type="submit">search</button>
                </form>
            </div>
                <SearchResult
                    result={result}
                    handleClose={handleClose}
                    show={show}
                />
        </div>
    )
}

export default Search;