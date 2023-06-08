import { useState } from 'react'
import Modal from "react-bootstrap/Modal"

const ProfileSetup = ({ show, onHide }) => {
    // TODO: make this page popup right when user register.

    // TODO: set up form values and stuff
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [activity, setActivity] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        let bmr;

        // FIXME: Get the right formula for activity levels

        if (gender === "male") {
            bmr = Math.round(((10 * weight) + (6.25 * height ) - (5 * age - 161 )) * activity)
        }
        if (gender === "female") {
            bmr = Math.round(((10 * weight) + (6.25 * height ) - (5 * age + 5 )) * activity)
        }

        console.log(height, weight, age, gender, activity, bmr)

    }

    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header className='bg-green-500 text-white'>
                <Modal.Title>Setup Profile</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form className='flex flex-col gap-[20px] lg:px-[10px]' onSubmit={handleSubmit}>
                    <p className='text-red-500 font-[700] uppercase'>Metrics Unit</p>
                    <div className='flex justify-between'>
                        <label className='font-[600] text-[18px]'>Height in cm:</label>
                        <input 
                            required
                            type="number" 
                            step={1} 
                            className='border px-[5px] text-[18px]' 
                            placeholder="180" 
                            autoFocus 
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}    
                        />
                    </div>
                    <div className='flex justify-between'>
                        <label className='font-[600] text-[18px]'>Weight in kg:</label>
                        <input 
                            required
                            type="number" 
                            step={1} 
                            className='border px-[5px] text-[18px]' 
                            placeholder="75" 
                            value={weight}
                            onChange={e => setWeight(e.target.value)}
                        />
                    </div>
                    <div className='flex justify-between'>
                        <label className='font-[600] text-[18px]'>Age:</label>
                        <input 
                            required
                            type="number" 
                            step={1} 
                            className='border px-[5px] text-[18px]' 
                            placeholder="25" 
                            value={age}
                            onChange={e => setAge(e.target.value)}
                        />
                    </div>
                    <div className='flex justify-between'>
                        <label className='font-[600] text-[18px]'>Gender:</label>
                        <select 
                            required
                            name="gender"
                            id="gender" 
                            className='border' 
                            value={gender} 
                            onChange={e => setGender(e.target.value)}
                        >
                            <option value="" disabled>Select one</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div className='flex justify-between'>
                        <label className='font-[600] text-[18px]'>Activity Level:</label>
                        <select 
                            required
                            name="activity" 
                            id="activity" 
                            className='border'
                            value={activity}
                            onChange={e => setActivity(e.target.value)}
                        >
                            <option value="" disabled>Select one</option>
                            <option value={1.1}>Sedentary</option>
                            <option value={1.26}>Light</option>
                            <option value={1.35}>Moderate</option>
                            <option value={1.425}>Active</option>
                            <option value={1.6}>Very Active</option>
                        </select>
                    </div>
                    <div className='flex flex-col justify-center text-[12px] lg:text-[16px]'>
                        <p><strong>Sedentary: </strong>Little or no exercise</p>
                        <p><strong>Light: </strong>Exercise 1-3 times/week</p>
                        <p><strong>Moderate: </strong>Exercise 3-5 times/week</p>
                        <p><strong>Active: </strong>Exercise 5-6 times/week</p>
                        <p><strong>Very Active: </strong>Daily exercise</p>
                    </div>
                    <div className='flex items-center justify-center'>
                        <button type='submit' className='bg-green-500 w-1/3 py-[5px] text-white font-[700] rounded-md'>Submit</button>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
    )
}

export default ProfileSetup 