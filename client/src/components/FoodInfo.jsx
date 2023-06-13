import { useLogsContext, useFoodContext, useAuthContext } from "../hooks";
import axios from "axios";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";

const FoodInfo = ({ show, onHide, foods }) => {

    const [amount, setAmount] = useState(foods.amount);

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(foods)

        // TODO: Upate logs when submited
    }
    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header>
                <Modal.Title className="capitalize">
                    {foods.name}
                </Modal.Title>
                {/* TODO: update exit button */}
                <button onClick={onHide}>X</button>
            </Modal.Header>
            <Modal.Body>
                <div className="grid">
                    <div className="flex justify-between">
                        <p>Amount</p>
                        <form className="w-min" onSubmit={handleSubmit}>
                            <div className="flex gap-[10px]">
                                <input type="number" className="border w-[50px]" value={amount} onChange={e => setAmount(e.target.value)} />
                                <p>{foods.unit}</p>
                            </div>
                        </form>
                    </div>
                        <div className="mt-10 flex justify-between">
                            <p>{Math.round(foods.calories * amount)} calories</p>
                            <div className="px-[50px] flex gap-[20px]">
                                <div className="flex flex-col justify-center items-center border h-[60px] w-[60px] rounded-full">
                                    <p className="text-[18px] font-[600]">{Math.round(foods.carb * amount)}</p>
                                    <p className="text-[0.7rem]">carb</p>
                                </div>
                                <div className="flex flex-col justify-center items-center border h-[60px] w-[60px] rounded-full">
                                    <p className="text-[18px] font-[600]">{Math.round(foods.fat * amount)}</p>
                                    <p className="text-[0.7rem]">fat</p>
                                </div>
                                <div className="flex flex-col justify-center items-center border h-[60px] w-[60px] rounded-full">
                                    <p className="text-[18px] font-[600]">{Math.round(foods.protein * amount)}</p>
                                    <p className="text-[0.7rem]">protein</p>
                                </div>
                            </div>
                        </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default FoodInfo