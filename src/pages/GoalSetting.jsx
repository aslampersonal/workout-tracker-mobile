export default function GoalSetting() {
  return (
    <div className="rounded-[10px] bg-[#FCFCFC] flex flex-col items-center p-[12px_14.3px_85px_16px] box-sizing-border">
      <div className="m-[0_1.8px_43px_0] inline-block break-words font-['Montserrat'] font-semibold text-[20px] text-[#2C2B2B]">
      What are your goals?
      </div>        
      <div className="rounded-[12px] bg-[#F1F1F1] relative m-[0_1.7px_16px_0] flex flex-row justify-between p-[14px_16px_14px_20px] w-[calc(100%_-_1.7px)] box-sizing-border">
        <div className="m-[4px_7.5px_3px_0] inline-block w-[277.5px] break-words font-['Montserrat'] font-semibold text-[12px] text-[#2C2B2B]">
        Weight Loss
        </div>
        <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="red">
          <input type="checkbox"
            class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-red-500 checked:bg-red-500 checked:before:bg-red-500 hover:before:opacity-0"
            id="red" />
          <span
            class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
              stroke="currentColor" stroke-width="1">
              <path fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"></path>
            </svg>
          </span>
        </label>
      </div>
      <div className="rounded-[12px] bg-[#F1F1F1] relative m-[0_1.7px_16px_0] flex flex-row justify-between p-[14px_16px_14px_20px] w-[calc(100%_-_1.7px)] box-sizing-border">
        <div className="m-[4px_7.5px_3px_0] inline-block w-[277.5px] break-words font-['Montserrat'] font-semibold text-[12px] text-[#2C2B2B]">
        Muscle Gain
        </div>
        <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="red">
          <input type="checkbox"
            class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-red-500 checked:bg-red-500 checked:before:bg-red-500 hover:before:opacity-0"
            id="red" />
          <span
            class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
              stroke="currentColor" stroke-width="1">
              <path fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"></path>
            </svg>
          </span>
        </label>
      </div>
      <div className="rounded-[12px] bg-[#F1F1F1] relative m-[0_1.7px_16px_0] flex flex-row justify-between p-[14px_16px_14px_20px] w-[calc(100%_-_1.7px)] box-sizing-border">
        <div className="m-[4px_7.5px_3px_0] inline-block w-[277.5px] break-words font-['Montserrat'] font-semibold text-[12px] text-[#2C2B2B]">
        Flexibility and Mobility
        </div>
        <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="red">
          <input type="checkbox"
            class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-red-500 checked:bg-red-500 checked:before:bg-red-500 hover:before:opacity-0"
            id="red" />
          <span
            class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
              stroke="currentColor" stroke-width="1">
              <path fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"></path>
            </svg>
          </span>
        </label>
      </div>
      <div className="rounded-[12px] bg-[#F1F1F1] relative m-[0_1.7px_16px_0] flex flex-row justify-between p-[14px_16px_14px_20px] w-[calc(100%_-_1.7px)] box-sizing-border">
        <div className="m-[4px_7.5px_3px_0] inline-block w-[277.5px] break-words font-['Montserrat'] font-semibold text-[12px] text-[#2C2B2B]">
        General Fitness
        </div>
        <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="red">
          <input type="checkbox"
            class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-red-500 checked:bg-red-500 checked:before:bg-red-500 hover:before:opacity-0"
            id="red" />
          <span
            class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
              stroke="currentColor" stroke-width="1">
              <path fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"></path>
            </svg>
          </span>
        </label>
      </div>
      <div className="rounded-[12px] bg-[#F1F1F1] relative m-[0_1.7px_16px_0] flex flex-row justify-between p-[14px_16px_14px_20px] w-[calc(100%_-_1.7px)] box-sizing-border">
        <div className="m-[4px_7.5px_3px_0] inline-block w-[277.5px] break-words font-['Montserrat'] font-semibold text-[12px] text-[#2C2B2B]">
        Event - specific training
        </div>
        <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="red">
          <input type="checkbox"
            class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-red-500 checked:bg-red-500 checked:before:bg-red-500 hover:before:opacity-0"
            id="red" />
          <span
            class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
              stroke="currentColor" stroke-width="1">
              <path fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"></path>
            </svg>
          </span>
        </label>
      </div>
      <div className="rounded-[12px] bg-[#F1F1F1] relative m-[0_1.7px_150px_0] flex flex-row justify-between p-[14px_16px_14px_20px] w-[calc(100%_-_1.7px)] box-sizing-border">
        <div className="m-[4px_7.5px_3px_0] inline-block w-[277.5px] break-words font-['Montserrat'] font-semibold text-[12px] text-[#2C2B2B]">
        Mindfulness and Mental Health
        </div>
        <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="red">
          <input type="checkbox"
            class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-red-500 checked:bg-red-500 checked:before:bg-red-500 hover:before:opacity-0"
            id="red" />
          <span
            class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
              stroke="currentColor" stroke-width="1">
              <path fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"></path>
            </svg>
          </span>
        </label>
      </div>
      <div className="rounded-[12px] bg-[linear-gradient(270deg,#7B91FF,#95BEFF)] relative m-[0_1.7px_0_0] flex flex-row justify-center p-[15px_0.3px_15px_0] w-[calc(100%_-_1.7px)] box-sizing-border">
        <button className="break-words font-['Montserrat'] font-semibold text-[16px] text-[#FFFFFF]" onClick={(e) => {
          e.preventDefault();
          window.location.href='/workout-tracker';
        }}>
        Confirm
        </button>
      </div>
    </div>
  )
}