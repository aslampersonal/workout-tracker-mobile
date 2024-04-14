export default function WorkoutSchedule() {
  return (
    <div className="rounded-[10px] bg-[#FCFCFC] flex flex-col p-[12px_0_0_0] box-sizing-border">
      <div className="m-[0_16px_14px_16px] flex flex-row justify-between self-start w-[266.8px] box-sizing-border">
        <div className="rounded-[3px] bg-[#F1F1F1] m-[2px_0_2px_0] flex flex-row justify-center w-[20px] h-[20px] box-sizing-border">
          <button onClick={(e) => {
            e.preventDefault();
            window.location.href='/workout-tracker';
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="10.605" height="15.555"><path d="M10.605 12.727 5.656 7.776l4.949-4.948L7.777 0 0 7.776l7.777 7.779 2.828-2.828z"/></svg>
          </button>
        </div>
        <span className="break-words font-['Montserrat'] font-semibold text-[20px] text-[#2C2B2B]">
        Workout Schedule
        </span>
      </div>
      <div className="m-[0_0_14px_0] flex flex-row self-center gap-[0_11.3px] w-[fit-content] box-sizing-border">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24"><path d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z"/></svg>
        <span className="break-words font-['Montserrat'] font-semibold text-[14px] text-[#2C2B2B]">
        Feb 2024
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/></svg>
      </div>
      <div className="m-[0_16px_38.1px_16px] flex flex-row w-[calc(100%_-_32px)] box-sizing-border">
        <img src="/assets/images/Calendar.png" alt="" />
      </div>
      <div className="">
        <div className="m-[0_16.3px_14px_16.3px] inline-block self-start break-words font-['Montserrat'] font-semibold text-[12px] text-[#2C2B2B]">
          06:00 AM
        </div>
        <div className="bg-[#7F7F7F] m-[0_0_8.5px_0] w-[375px] h-[0.5px]"></div>
        <div className="m-[0_16.3px_14px_16.3px] inline-block self-start break-words font-['Montserrat'] font-semibold text-[12px] text-[#2C2B2B]">
          07:00 AM
        </div>
        <div className="relative bg-[#7F7F7F] m-[0_0_8.5px_0] w-[375px] h-[0.5px]">
          <div className="absolute bottom-[-27px] right-[13px] rounded-[20px] bg-[linear-gradient(270deg,#D3A4F4_0%,#E9B1E0_102.3%)] m-[12px_0_11px_0] flex flex-row justify-center p-[7px_13px_8px_10px] box-sizing-border">
            <span className="break-words font-['Montserrat'] font-semibold text-[12px] text-[#FFFFFF]">
            Ab Workout, 7:30am
            </span>
          </div>
        </div>
        <div className="m-[0_16.3px_14px_16.3px] inline-block self-start break-words font-['Montserrat'] font-semibold text-[12px] text-[#2C2B2B]">
          08:00 AM
        </div>
        <div className="bg-[#7F7F7F] m-[0_0_8.5px_0] w-[375px] h-[0.5px]"></div>
        <div className="m-[0_16.3px_14px_16.3px] inline-block self-start break-words font-['Montserrat'] font-semibold text-[12px] text-[#2C2B2B]">
          09:00 AM
        </div>
        <div className="relative bg-[#7F7F7F] m-[0_0_8.5px_0] w-[375px] h-[0.5px]">
          <div className="absolute bottom-[-10px] left-[83px] rounded-[20px] bg-[linear-gradient(270deg,#D3A4F4_0%,#E9B1E0_102.3%)] m-[12px_0_11px_0] flex flex-row justify-center p-[7px_13px_8px_10px] box-sizing-border">
            <span className="break-words font-['Montserrat'] font-semibold text-[12px] text-[#FFFFFF]">
            Upperbody Workout, 9am
            </span>
          </div>
        </div>
        <div className="m-[0_16.3px_14px_16.3px] inline-block self-start break-words font-['Montserrat'] font-semibold text-[12px] text-[#2C2B2B]">
          10:00 AM
        </div>
        <div className="bg-[#7F7F7F] m-[0_0_8.5px_0] w-[375px] h-[0.5px]"></div>
        <div className="m-[0_16.3px_14px_16.3px] inline-block self-start break-words font-['Montserrat'] font-semibold text-[12px] text-[#2C2B2B]">
          11:00 AM
        </div>
        <div className="bg-[#7F7F7F] m-[0_0_8.5px_0] w-[375px] h-[0.5px]"></div>
        <div className="m-[0_16.3px_14px_16.3px] inline-block self-start break-words font-['Montserrat'] font-semibold text-[12px] text-[#2C2B2B]">
          12:00 PM
        </div>
        <div className="bg-[#7F7F7F] m-[0_0_8.5px_0] w-[375px] h-[0.5px]"></div>
        <div className="m-[0_16.3px_14px_16.3px] inline-block self-start break-words font-['Montserrat'] font-semibold text-[12px] text-[#2C2B2B]">
          01:00 PM
        </div>
        <div className="bg-[#7F7F7F] m-[0_0_8.5px_0] w-[375px] h-[0.5px]"></div>
        <div className="m-[0_16.3px_14px_16.3px] inline-block self-start break-words font-['Montserrat'] font-semibold text-[12px] text-[#2C2B2B]">
          02:00 PM
        </div>
        <div className="bg-[#7F7F7F] m-[0_0_8.5px_0] w-[375px] h-[0.5px]"></div>
        <div className="m-[0_16.3px_14px_16.3px] inline-block self-start break-words font-['Montserrat'] font-semibold text-[12px] text-[#2C2B2B]">
          03:00 PM
        </div>
        <div className="relative bg-[#7F7F7F] m-[0_0_8.5px_0] w-[375px] h-[0.5px]">
          <div className="absolute bottom-[-10px] left-[83px] rounded-[20px] bg-[#F1F1F1] m-[12px_0_11px_0] flex flex-row justify-center p-[7px_4.2px_8px_8px] box-sizing-border">
            <span className="break-words font-['Montserrat'] font-semibold text-[12px] text-[#2C2B2B]">
            Lowerbody Workout, 3pm
            </span>
          </div>
          <div className="absolute right-[13px] bottom-[-32px] rounded-[50%] bg-[linear-gradient(90.95deg,#E9B1E0_0.8%,#D3A5F2_99.2%)] flex flex-row justify-center align-center p-[10px_0.3px_9px_0] w-[63px] h-[63px] box-sizing-border">
            <span className="break-words font-['Montserrat'] font-normal font-bold text-[30px] text-[#FFFFFF]">
            +
            </span>
          </div>
        </div>
        <div className="m-[0_16.3px_14px_16.3px] inline-block self-start break-words font-['Montserrat'] font-semibold text-[12px] text-[#2C2B2B]">
          04:00 PM
        </div>
        <div className="bg-[#7F7F7F] m-[0_0_8.5px_0] w-[375px] h-[0.5px]"></div>
        <div className="m-[0_16.3px_14px_16.3px] inline-block self-start break-words font-['Montserrat'] font-semibold text-[12px] text-[#2C2B2B]">
          05:00 PM
        </div>
      </div>
      <div className="relative p-[0_16px_70px_16px] w-[100%] box-sizing-border">
        <div className="absolute bottom-[0]">
          <div className="bg-[#FFFFFF] p-[10px] w-[100%]">
            <img className="m-[0px_0_0.7px_0] w-[100%] h-[100%]" src="/assets/images/bottom-bar.png" />
          </div>
        </div>
        <div className="absolute bottom-[10px] left-[40%]">
          <img className="" src="/assets/images/search.png" />
        </div>
      </div>
    </div>
  )
}