import { useLogsContext } from "../hooks";
import axios from "axios";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { GrFormClose } from "react-icons/gr"
import { apiKey } from "../constants";

const FoodInfo = ({ show, onHide, foods, token }) => {

    const [amount, setAmount] = useState(foods.amount);
    const { dispatch, logs } = useLogsContext();

    const handleClick = async (e) =>{
        e.preventDefault();
        
        const logId = logs.find(log => log.food === foods._id)._id;
        console.log(logId)

        const response = await axios.patch(`${apiKey}/api/logs/${logId}`, {
            newAmount: amount
        }, {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        })

        const data = response.data;

        if (data.status === 200) {
            dispatch({type: "UPDATE_LOGS", payload: data });
        }
        window.location.reload();
    }

    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header>
                <Modal.Title className="capitalize">
                    {foods.name}
                </Modal.Title>
                <button onClick={onHide}><GrFormClose /></button>
            </Modal.Header>
            <Modal.Body>
                <div className="grid">
                    <div className="flex justify-between">
                        <form className="w-full">
                            <div className="flex justify-between">
                                <p>Amount</p>
                                <div className="flex gap-[10px]">
                                    <input type="number" autoFocus className="border w-[50px]" value={amount} onChange={e => setAmount(e.target.value)} />
                                    <p>{foods.unit}</p>
                                </div>
                            </div>
                            <div className="mt-10 flex justify-between items-center">
                                <p className="font-[600]">{Math.round(foods.calories * amount)} Calories</p>
                                <div className="flex gap-[10px]">
                                    <div className="flex flex-col justify-center items-center border-[3px] border-orange-400 h-[65px] w-[65px] rounded-full">
                                        <p className="text-[18px] font-[600]">{Math.round(foods.carb * amount)}</p>
                                        <p className="text-[0.7rem]">carb</p>
                                    </div>
                                    <div className="flex flex-col justify-center items-center border-[3px] border-green-400 h-[65px] w-[65px] rounded-full">
                                        <p className="text-[18px] font-[600]">{Math.round(foods.fat * amount)}</p>
                                        <p className="text-[0.7rem]">fat</p>
                                    </div>
                                    <div className="flex flex-col justify-center items-center border-[3px] border-blue-400 h-[65px] w-[65px] rounded-full">
                                        <p className="text-[18px] font-[600]">{Math.round(foods.protein * amount)}</p>
                                        <p className="text-[0.7rem]">protein</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10 flex justify-center">
                                <button type="submit" onClick={handleClick} className="bg-green-500 font-[600] text-[16px] text-white py-[7px] px-[15px] rounded-lg">Add Food</button>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default FoodInfo