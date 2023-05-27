const CustomButton = ({ children, onClick }) => {
    return (
        <div className='cursor-pointer p-2 bg-white rounded-full text-green-900 text-[22px]' onClick={onClick}>
            {children}
        </div>
    )
}

export default CustomButton