import { useEffect, useState } from "react"
import { Calories, FoodDetails, FoodLogs } from "../components/dashboard"

const Dashboard = () => {

    // const [result, setFoods] = useState(null);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch("http://localhost:3000/api/logs")
    //             const data = await response.json();
    
    //             if (response.ok) {
    //                 setFoods(data)
    //                 console.log(data)
    //             } else {
    //                 setFoods([])
    //                 console.log("empty log")
    //             }
    //         } catch (err) {
    //             console.log(err)
    //         }
    //     }
    //     fetchData();
    // }, [])

    // return (
    //     <div className="flex h-full w-full items-center justify-center bg-white mt-[60px]">
    //         <div className="w-full lg:w-[1000px] flex-col flex">
    //             <div className="flex justify-center items-center">
    //                 <Calories />
    //             </div>
    //             <div className="flex flex-col h-full w-full justify-center">
    //                 <div>
    //                     {result !== null ? (
    //                         result.foods.length > 0 ? (
    //                             result.foods.map(food => (
    //                                 <FoodDetails key={food.id} name={food.name} calories={food.calories} />
    //                             ))
    //                         ) : (
    //                             <p>food not found</p>
    //                         )
    //                     ) : (
    //                         <p>loading...</p>
    //                     )}
    //                 </div>
    //                 <div className="border w-max m-3 p-2 rounded-md bg-green-800 text-white font-[600] capitalize">
    //                     add food
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // )

    const [search, setSearch] = useState("")
    const [foods, setFoods] = useState([])
    const [selectedFood, setSelectedFood] = useState(null)
    const [log, setLog] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/foods")
                const data = await response.json();
                
                if (response.ok) {
                    setFoods(data.foods);
                } else {
                    console.log("Failed to fetch foods")
                }
            } catch (err) {
                console.log(err);
            }
        }

        fetchData();
    }, []);

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:3000/api/foods?search=${search}`);
            const data = await response.json();

            if (response.ok) {
                setFoods(data.foods);
                console.log(data.foods.map(food => food.name))
            } else {
                console.log("Food not found")
                setFoods([])
            }
        } catch (err) {
            console.error(err);
        }
    }

    const handleAddFood = async (food) => {
        try {
            const response = await fetch("http://localhost:3000/api/logs", {
                method: "POST",
                headers: {
                    "Content-Type": "applicaion/json",
                },
                body: JSON.stringify({ foodId: food._id })
            })

            if (response.ok) {
                const data = await response.json();
                setLog(prevLog => [...prevLog, data])
            } else {
                console.log("Failed to add food to the log")
            }
        } catch (err) {
            console.log(err)
        }
    };

    return (
        <div className="mt-[100px] border w-full lg:w-[1300px] flex items-center justify-center">
            <form onSubmit={handleSearch}>
                <input 
                    type="text"
                    placeholder="search for food"    
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>

            {foods !== null && 
            foods.length > 0 ? (
                <div>
                    <h2>Search Results:</h2>
                    <ul>
                        {foods.map(food => (
                            <li key={food._id}>
                                {food.name} ({food.calories} calories)
                                <button onClick={() => handleAddFood(food)}>Add</button>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>no food</p>
            )}

            {selectedFood && (
                <div>
                   <p>selected: {selectedFood.name}</p>
                </div>
            )}

            {log.length > 0 && (
                <div>
                    <h2>Food Log:</h2>
                    <ul>
                        {log.map(food => (
                            <li key={food._id}>
                                {food.name}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )



}

export default Dashboard