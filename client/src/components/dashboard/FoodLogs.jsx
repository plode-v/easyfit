import { useEffect, useState } from 'react'
import FoodDetails from './FoodDetails'

const FoodLogs = ({ userLogs }) => {

    console.log(userLogs)


    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch("http://localhost:3000/api/foods")
    //             const data = await response.json();

    //             if (response.ok) {
    //                 setResults(data);
    //             } else {
    //                 setResults([])
    //                 console.log("no food found")
    //             }
    //         } catch (err) {
    //             console.log(err)
    //         }
    //     }
    //     fetchData();
    // }, [])

  return (
    <div className='h-max w-full px-3 lg:px-0 gap-3 flex flex-col'>
        {userLogs !== null ? (
            userLogs.foods.length > 0 ? (
                userLogs.foods.map(food => (
                    <FoodDetails key={food._id} name={food.name} calories={food.calories} />
                ))
            ) : (
                <p>food not found</p>
            )
        ) : (
            <p>Loading...</p>
        )}
    </div>
  )
}

export default FoodLogs