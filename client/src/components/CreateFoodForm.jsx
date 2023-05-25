import { useState } from "react"

const CreateFoodForm = () => {

    const [name, setName] = useState("")
    const [calories, setCalories] = useState(null)
    const [macros, setMacros] = useState({
        fat: null,
        carb: null,
        protein: null
    });
    const [servingSize, setServingSize] = useState(100);
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault();

        const food = { name, calories, macros, servingSize }

        const response = await fetch("http://localhost:3000/api/foods", {
            method: "POST",
            body: JSON.stringify(food),
            headers: {
                "Content-Type": "application/json"
            }
        })

        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setError(null)
            setName("")
            setCalories("")
            setMacros({
                fat: null,
                carb: null,
                protein: null
            })
            setServingSize(null)
            console.log("new food added:", json);
        }
    }

    return (
        <div className="flex flex-col h-screen w-full items-center justify-center">
            <form onSubmit={handleSubmit}>
                <h3>Add new food here</h3>
                <div>
                    <label>Food Name:</label>
                    <input 
                        type="text" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border p-1" 
                        placeholder="food name"
                    />
                </div>
                <div>
                    <label>Calories:</label>
                    <input
                        type="number"
                        value={calories}
                        onChange={e => setCalories(e.target.value)}
                        className="border p-1"
                        placeholder="calories"
                        />
                </div>
                <div>
                    <label>Fat:</label>
                    <input
                        type="number"
                        value={macros.fat}
                        onChange={e => setMacros.fat(e.target.value)}
                        className="border p-1"
                        placeholder="Fats (grams)"
                        />
                </div>
                <div>
                    <label>Carbs:</label>
                    <input
                        type="number"
                        value={macros.carb}
                        onChange={e => setMacros.carb(e.target.value)}
                        className="border p-1"
                        placeholder="Carbs (grams)"
                        />
                </div>
                <div>
                    <label>Protein:</label>
                    <input
                        type="number"
                        value={macros.protein}
                        onChange={e => setMacros.protein(e.target.value)}
                        className="border p-1"
                        placeholder="Protein (grams)"
                        />
                </div>
                <div>
                    <label>Serving Sizse:</label>
                    <input
                        type="number"
                        value={servingSize}
                        onChange={e => setServingSize(e.target.value)}
                        className="border p-1"
                        placeholder="Default as 100g"
                        />
                </div>
                <button type="submit" className="border p-2 bg-green-500 text-white">Add Food</button>
                {error && <div>{error}</div>}
            </form>
        </div>
    )
}

export default CreateFoodForm