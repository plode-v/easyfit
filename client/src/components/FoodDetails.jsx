const FoodDetails = ({ food }) => {

    return (
        <div className="border h-max w-full py-2">
            <div className="flex items-center justify-between">
                <p className="">{food.name}</p>
                <p>{food.calories}</p>
            </div>
        </div>
    )
}

export default FoodDetails;