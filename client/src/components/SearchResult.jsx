import Modal from "react-bootstrap/Modal";
import { FiPlus } from "react-icons/fi";
import { useLogsContext } from "../hooks";

const SearchResult = ({ handleClose, result, show }) => {

    const { dispatch, logs } = useLogsContext();

    const handleClick = (food) => {

        dispatch({
            type: "ADD_LOGS",
            payload: food
        });
        handleClose();
        console.log(logs)

    }

    return (
            <Modal show={show} onHide={handleClose} scrollable={true}>
            <Modal.Header className="flex-col flex items-start">
                <Modal.Title>Search Results</Modal.Title>
            <p className="text-red-500 text-[14px]">*If does not specify, all calories are per 100 grams*</p>
            </Modal.Header>
            <Modal.Body>
            {result && result.map(item => (
                <div key={item._id} className="flex flex-col py-1">
                    <div className="flex bg-green-500 px-3 py-2 justify-between rounded-[5px]">
                        <div className="text-white">
                            <h1 className="font-[500] text-[18px] capitalize">{item.name}</h1>
                            <p>{item.calories} Calories</p>
                            <p>{item.desc}</p>
                        </div>
                        <div className="flex text-white gap-2">
                            <button>View</button>
                            <button 
                                onClick={() => handleClick(item)}
                            ><FiPlus className="bg-white p-1 text-green-600 h-[30px] w-[30px] rounded-full" /></button>
                        </div>
                    </div>
                </div>
            ))}
            </Modal.Body>
        </Modal>
    )
}

export default SearchResult