const FoodDetails = ({ food }) => {

    return (
        <div>
            <h4>{food.name}</h4>
            <p><strong>Calories: </strong>{food.calories}</p>
            <div>
                <p><strong>Macros:</strong></p>
                <p><strong>Fat: </strong>{food.macros.fat}</p>
                <p><strong>Carbs: </strong>{food.macros.carb}</p>
                <p><strong>Protein: </strong>{food.macros.protein}</p>
            </div>
            <p><strong>Serving Size: </strong>{food.servingSize}</p>
        </div>
    )
}

export default FoodDetails;