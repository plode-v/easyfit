import { CustomButton } from "."
import { BsTrash } from 'react-icons/bs'
import { RxUpdate } from "react-icons/rx"

const SearchDetail = ({name, calories}) => {

	const handleDetails = () => {
		null
	}


	return (
		<div className="flex bg-green-500 text-white py-2 px-3 gap-1 justify-between rounded-md">
			<div className="flex flex-col">
				<h4 className="lg:text-[20px] text-[16px] font-[600] capitalize">{name}</h4>
				<p className="lg:text-[16px] text-[14px]">Calories: {calories}</p>
			</div>
			<div className="flex gap-2 items-center justify-center">
				<CustomButton onClick={handleDetails}><RxUpdate /></CustomButton>
				<CustomButton onClick={handleDetails}><BsTrash /></CustomButton>
			</div>
		</div>
	)
}

export default SearchDetail