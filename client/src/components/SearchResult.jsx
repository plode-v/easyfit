import Modal from "react-bootstrap/Modal";
import { FiPlus } from "react-icons/fi";
import axios from "axios";
import { useLogsContext, useAuthContext } from "../hooks";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { apiKey } from "../constants";


const SearchResult = ({ handleClose, result, show }) => {
    const [foodAmount, setFoodAmount] = useState(1)

    const { dispatch } = useLogsContext();
    const { user } = useAuthContext();
    const navigate = useNavigate();

    const handleClick = async (food, amount) => {
        try {
            const response = await axios.post(`${apiKey}/api/logs`, {
                user_id: user._id,
                foodId: food,
                amount
            }, {
                headers: {
                    "Authorization": `Bearer ${user.token}`
                }
            })

            if (response.status === 200) {
                dispatch({ type: "ADD_LOGS", payload: "food" })
                handleClose();
                navigate('/')
            }
        } catch (err) {
            console.error(err)
        }
    }

    return (
            <Modal show={show} onHide={handleClose} scrollable={true} centered>
            <Modal.Header className="flex-col flex items-start">
                <Modal.Title>Search Results</Modal.Title>
            <p className="text-red-500 text-[14px]">*If not specified, all calories are per 1 gram*</p>
            </Modal.Header>
            <Modal.Body>
                {result && result.map(item => (
                    <div className="flex flex-col py-1" key={item._id}>
                        <div className="flex bg-green-500 px-3 py-2 justify-between rounded-[5px]">
                            <div className="text-white">
                                <h1 className="font-[500] text-[18px] capitalize">
                                    {item.name}
                                </h1>
                                <p>{Math.round(item.calories * foodAmount)} Calories</p>
                                <p>{item.desc}</p>
                            </div>
                            <div className="flex text-white gap-2 items-center justify-end">
                                <input 
                                    type="number"
                                    className="text-black w-1/5 px-[5px] rounded-md font-[600] h-max"
                                    value={foodAmount}
                                    min={0}
                                    onChange={e => setFoodAmount(e.target.value)}
                                />
                                <button onClick={() => handleClick(item, foodAmount)}>
                                    <FiPlus className="bg-white p-1 text-green-600 h-[30px] w-[30px] rounded-full" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </Modal.Body>
        </Modal>
    )
}

export default SearchResult