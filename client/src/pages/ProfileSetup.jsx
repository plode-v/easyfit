import { useState } from 'react'
import axios from 'axios';
import { useProfileContext, useAuthContext } from '../hooks';
import Modal from "react-bootstrap/Modal"
import { useNavigate } from 'react-router-dom';
import { apiKey } from '../constants';

const ProfileSetup = () => {

    const { dispatch } = useProfileContext();
    const { user } = useAuthContext();
    const navigate = useNavigate();

    // TODO: set up form values and stuff
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [activity, setActivity] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        let cal;

        if (gender === "male") {
            cal = (Math.round(((10 * weight) + (6.25 * height ) - (5 * age - 161 )) * activity))
        }
        if (gender === "female") {
            cal = (Math.round(((10 * weight) + (6.25 * height ) - (5 * age + 5 )) * activity))
        }

        const response = await axios.post(`${apiKey}/api/profiles`, {
            height,
            weight,
            age,
            calories: cal,
            gender
        }, {
            headers: {
                "Authorization": `Bearer ${user.token}`,
                "Content-Type": "application/json"
            }
        })

        const data = response.data;

        if (response.status === 200) {
            dispatch({ type: "CREATE_PROFILE", payload: data });
            setTimeout(() => {
                navigate('/')
            }, 1000);

        }
    }

    return (
        <Modal show={true} centered>
            <Modal.Header className='bg-green-500 text-white'>
                <Modal.Title>Setup Profile</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form className='flex flex-col gap-[20px] lg:px-[10px]' onSubmit={handleSubmit}>
                    <p className='text-red-500 font-[700] uppercase'>Metrics Unit</p>
                    <div className='flex justify-between'>
                        <label className='font-[600] text-[18px]'>Height:</label>
                        <input 
                            required
                            type="number" 
                            step={1} 
                            className='border px-[5px] text-[18px]' 
                            placeholder="180 cm" 
                            autoFocus 
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}    
                        />
                    </div>
                    <div className='flex justify-between'>
                        <label className='font-[600] text-[18px]'>Weight:</label>
                        <input 
                            required
                            type="number" 
                            step={1} 
                            className='border px-[5px] text-[18px]' 
                            placeholder="75 kg" 
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
                            <option value={1.2}>Sedentary</option>
                            <option value={1.375}>Light</option>
                            <option value={1.55}>Moderate</option>
                            <option value={1.725}>Active</option>
                            <option value={1.9}>Very Active</option>
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