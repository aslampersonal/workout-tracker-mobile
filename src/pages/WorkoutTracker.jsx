import { useState } from "react";

export default function WorkoutTracker() {
  
  const [isOn, setIsOn] = useState(false);
  const [isOn2, setIsOn2] = useState(false);
  
  return (
  <> 
    <div className="rounded-[10px] bg-[#FCFCFC] flex flex-col p-[12px_14.3px_29px_16px] box-sizing-border">
      <div className="m-[0_0_51px_0] flex flex-row justify-between self-start w-[257px] box-sizing-border">
        <div className="rounded-[3px] bg-[#F1F1F1] m-[2px_0_2px_0] flex flex-row justify-center w-[20px] h-[20px] box-sizing-border">
          <button onClick={(e) => {
            e.preventDefault();
            window.location.href='/goal-setting';
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="10.605" height="15.555"><path d="M10.605 12.727 5.656 7.776l4.949-4.948L7.777 0 0 7.776l7.777 7.779 2.828-2.828z"/></svg>
          </button>
        </div>
        <span className="break-words font-['Montserrat'] font-semibold text-[20px] text-[#2C2B2B]">
        Workout Tracker
        </span>
      </div>
      <div className="m-[0_0_1.3px_93.6px] flex flex-row justify-between self-center w-[196.1px] box-sizing-border">
        <span className="m-[0_7px_0_0] w-[88.7px] break-words font-['Montserrat'] font-normal text-[11.2px] text-[#2C2B2B]">
        Good job
        </span>
        <span className="break-words font-['Montserrat'] font-normal text-[11.2px] text-[#2C2B2B]">
        less then 320cal
        </span>
      </div>
      <div className="m-[0_0_4.1px_77.7px] flex flex-row justify-between self-center w-[115px] box-sizing-border">
        <img className="w-[2px] h-[10.2px]" />
        <img className="w-[2px] h-[10.2px]" />
      </div>
      <div className="m-[0_1.7px_24.5px_0] flex flex-col p-[3.1px_0_0_0] w-[calc(100%_-_1.7px)] box-sizing-border">
        <a href="/workout-schedule"><img className="w-[100%] h-[100%]]" src="/assets/images/Chart.png" /></a>
      </div>
      <div className="backdrop-blur-[20.4px] rounded-[10px] border-[1px_solid_rgba(69,69,69,0.04)] bg-[linear-gradient(90deg,rgba(192,205,224,1)_0%,rgba(255,255,255,1)_100%)] m-[0_15.9px_54.7px_0] flex flex-row justify-between p-[8.7px_16.8px_9.3px_8px] w-[calc(100%_-_15.9px)] box-sizing-border">
        <img className="m-[6px_6px_4px_0] w-[20px] h-[20px]" src="/assets/images/alert-triangle.png" />
        <span className="break-words font-['Montserrat'] font-medium text-[12.6px] text-[#2C2B2B]">
        You&#39;ve burned fewer calories than yesterday. Time to get moving! 
        </span>
      </div>
      <div className="m-[0_2.8px_16px_0] flex flex-row justify-between w-[calc(100%_-_2.8px)] box-sizing-border">
        <span className="m-[0_10px_0_0] w-[274px] break-words font-['Montserrat'] font-semibold text-[16px] text-[#2C2B2B]">
        Upcoming Workout
        </span>
        <div className="m-[2px_0_3px_0] inline-block break-words font-['Montserrat'] font-medium text-[12px] text-[#7F7F7F]">
          <a href="#">See more</a>
        </div>
      </div>
      <div className="shadow-[-4px_8px_25px_-8px_rgba(0,0,0,0.15)] rounded-[12px] bg-[#FFFFFF] m-[0_1.7px_16px_0] flex flex-row justify-between items-center p-[13px_16px_12px_16px] w-[calc(100%_-_1.7px)] box-sizing-border">
        <div className="flex flex-row box-sizing-border">
          <div className="rounded-[25px] bg-[url('assets/images/Ellipse53.png')] bg-[50%_50%] bg-cover bg-no-repeat m-[0_9px_0_0] w-[50px] h-[50px]">
          </div>
          <div className="m-[3px_0_12px_0] flex flex-col box-sizing-border">
            <div className="m-[0_0_8px_0] inline-block break-words font-['Montserrat'] font-medium text-[12px] text-[#2C2B2B]">
            Full Body Workout
            </div>
            <span className="self-start break-words font-['Montserrat'] font-medium text-[10px] text-[#7F7F7F]">
            Today 3pm
            </span>
          </div>
        </div>
        <div
          className={` inline-flex items-center rounded-full w-10 h-5 ${
            isOn ? 'bg-blue-500' : 'bg-gray-300'
          } cursor-pointer p-1`}
          onClick={() => setIsOn(!isOn)}
        >
          <div
            className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${
              isOn ? 'translate-x-5' : ''
            }`}
          />
          </div>
        </div>
      {/* </div> */}
      <div className="shadow-[-4px_8px_25px_-8px_rgba(0,0,0,0.15)] rounded-[12px] bg-[#FFFFFF] m-[0_1.7px_17px_0] flex flex-row justify-between items-center p-[13px_16px_12px_16px] w-[calc(100%_-_1.7px)] box-sizing-border">
        <div className="flex flex-row box-sizing-border">
          <div className="rounded-[25px] bg-[url('assets/images/Ellipse54.png')] bg-[50%_50%] bg-cover bg-no-repeat m-[0_9px_0_0] w-[50px] h-[50px]">
          </div>
          <div className="m-[7px_0_8px_0] flex flex-col box-sizing-border">
            <div className="m-[0_0_8px_0] inline-block break-words font-['Montserrat'] font-medium text-[12px] text-[#2C2B2B]">
              Upper Body Workout
            </div>
            <span className="self-start break-words font-['Montserrat'] font-medium text-[10px] text-[#7F7F7F]">
              4 Feb, 3:30 pm
            </span>
          </div>
        </div>
        <div
          className={` inline-flex items-center rounded-full w-10 h-5 ${
            isOn2 ? 'bg-blue-500' : 'bg-gray-300'
          } cursor-pointer p-1`}
          onClick={() => setIsOn2(!isOn2)}
        >
          <div
            className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${
              isOn2 ? 'translate-x-5' : ''
            }`}
          />
        </div>
      </div>
      <div className="m-[0_1px_16px_1px] inline-block self-start break-words font-['Montserrat'] font-semibold text-[16px] text-[#2C2B2B]">
      What Do You Want to Train
      </div>
      <div className="shadow-[-4px_8px_25px_-8px_rgba(0,0,0,0.15)] rounded-[12px] bg-[rgba(140,177,255,0.6)] m-[0_1.7px_0_0] flex flex-row justify-between p-[16px_12px_8px_16px] w-[calc(100%_-_1.7px)] box-sizing-border">
        <div className="m-[0_0_44px_0] flex flex-col box-sizing-border">
          <div className="m-[0_0_9px_0] inline-block break-words font-['Montserrat'] font-medium text-[12px] text-[#2C2B2B]">
          Full Body Workout
          </div>
          <div className="m-[0_0_8px_0] inline-block self-start break-words font-['Montserrat'] font-medium text-[10px] text-[#2C2B2B]">
          Arms
          </div>
          <span className="self-start break-words font-['Montserrat'] font-medium text-[10px] text-[#2C2B2B]">
          Chest
          </span>
        </div>
        <div className="rounded-[50px] bg-[url('assets/images/Ellipse55.png')] bg-[50%_50%] bg-cover bg-no-repeat w-[100px] h-[100px]">
        </div>
      </div>
    </div>
    <div className="relative p-[0_-16px_0px_16px] w-[100%] box-sizing-border">
      <div className="absolute bottom-[0] w-[100%]">
        <div className="bg-[#FFFFFF] p-[10px]">
          <img className="m-[0px_0_0.7px_0] w-[100%] h-[100%]" src="/assets/images/bottom-bar.png" />
        </div>
      </div>
      <div className="absolute bottom-[10px] left-[40%]">
        <img className="" src="/assets/images/search.png" />
      </div>
    </div>
  </>
  )
}