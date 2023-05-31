const Calories = () => {
  return (
    <div className="flex w-full items-center justify-center lg:w-[600px]">
      <div className="flex-1 items-center justify-center flex-col flex h-max py-3">
          <span className="lg:text-[30px] text-[24px] font-[700]">2,000</span>
          <span className="lg:text-[20px] text-[14px]">Goal</span>
      </div>
      <div className="flex justify-center w-min">
          <span>-</span>
      </div>
      <div className="flex-1 items-center justify-center flex-col flex h-max py-3">
          <span className="lg:text-[30px] text-[24px] font-[700]">800</span>
          <span className="lg:text-[20px] text-[14px]">Food</span>
      </div>
      <div className="flex justify-center w-min">
          <span>=</span>
      </div>
      <div className="flex-1 items-center justify-center flex-col flex h-max py-3">
          <span className="lg:text-[30px] text-[24px] font-[700]">1,200</span>
          <span className="lg:text-[20px] text-[14px]">Remaining</span>
      </div>
  </div>
  )
}

export default Calories