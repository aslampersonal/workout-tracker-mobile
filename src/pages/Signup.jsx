export default function Signup() {
  return (
    <div className="rounded-[10px] bg-[#FCFCFC] flex flex-col items-center p-[12px_14.3px_29px_16px] box-sizing-border">
      <div className="m-[0_0_44px_0] inline-block self-start break-words font-['Roboto'] font-semibold text-[20px] text-[#2C2B2B]">
      Create an account
      </div>
      <div className="rounded-[12px] bg-[#F1F1F1] relative m-[0_1.7px_24px_0] p-[18px_20px_17px_20px] w-[calc(100%_-_1.7px)] box-sizing-border">
        <span className="break-words font-['Montserrat'] font-semibold text-[12px] text-[#7F7F7F]">
        First Name
        </span>
      </div>
      <div className="rounded-[12px] bg-[#F1F1F1] relative m-[0_1.7px_24px_0] p-[18px_20px_17px_20px] w-[calc(100%_-_1.7px)] box-sizing-border">
        <span className="break-words font-['Montserrat'] font-semibold text-[12px] text-[#7F7F7F]">
        Last Name 
        </span>
      </div>
      <div className="rounded-[12px] bg-[#F1F1F1] relative m-[0_1.7px_24px_0] p-[18px_20px_17px_20px] w-[calc(100%_-_1.7px)] box-sizing-border">
        <span className="break-words font-['Montserrat'] font-semibold text-[12px] text-[#7F7F7F]">
        Email
        </span>
      </div>
      <div className="rounded-[12px] bg-[#F1F1F1] relative m-[0_1.7px_24px_0] p-[18px_20px_17px_20px] w-[calc(100%_-_1.7px)] box-sizing-border">
        <span className="break-words font-['Montserrat'] font-semibold text-[12px] text-[#7F7F7F]">
        Password
        </span>
      </div>
      <div className="m-[0_1.9px_121px_0] flex flex-row justify-between w-[calc(100%_-_1.9px)] box-sizing-border">
        <div className="m-[0_8px_0_0] flex flex-row justify-center h-[22px] grow basis-[22px] box-sizing-border">
          <input id="default-checkbox" type="checkbox" value="" class="text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        </div>
        <p className="break-words font-['Inter'] font-semibold text-[12px] leading-[1.779] text-[#7F7F7F]">
          <span>
            By proceeding, I agree to all 
            <a href="" className="m-[0_5px_0_5px] underline text-[#9FB2FF]">T&C</a> 
            and 
            <a href="" className="m-[0_5px_0_5px] underline text-[#9FB2FF]">Privacy Policy</a>
          </span>
        </p>
      </div>
      <div className="rounded-[12px] bg-[linear-gradient(270deg,#7B91FF,#95BEFF)] relative m-[0_1.7px_22px_0] flex flex-row justify-center p-[15px_0_15px_0] w-[calc(100%_-_1.7px)] box-sizing-border">
        <button className="break-words font-['Montserrat'] font-semibold text-[16px] text-[#FFFFFF]" onClick={(e) => {
          e.preventDefault();
          window.location.href='/login';
        }}>
        Create an Account
        </button>
      </div>
      <div className="m-[0_1.7px_25px_0] flex flex-row w-[calc(100%_-_1.7px)] box-sizing-border">
        <div className="bg-[#7F7F7F] m-[9px_10px_5.5px_0] h-[0.5px] grow basis-[155px]">
        </div>
        <span className="m-[0_6px_0_0] break-words font-['Montserrat'] font-medium text-[12px] text-[#2C2B2B]">
        Or
        </span>
        <div className="bg-[#7F7F7F] m-[9px_0_5.5px_0] h-[0.5px] grow basis-[157px]">
        </div>
      </div>
      <div className="m-[0_2.7px_26px_0] flex flex-row w-[106px] box-sizing-border">
        <div className="rounded-[8px] border-[1px_solid_#7F7F7F] relative m-[0_18px_0_0] flex flex-row justify-center p-[13px_13px_13px_13px] w-[44px] h-[44px] box-sizing-border">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fill="#ffc107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917"></path><path fill="#ff3d00" d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691"></path><path fill="#4caf50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44"></path><path fill="#1976d2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917"></path></svg>
        </div>
        <div className="rounded-[8px] border-[1px_solid_#7F7F7F] relative m-[0_18px_0_0] flex flex-row justify-center p-[13px_13px_13px_13px] w-[44px] h-[44px] box-sizing-border">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#3c3acf" d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"></path></svg>
        </div>
      </div>
      <p className="m-[0_2.5px_0_0] break-words font-['Roboto'] font-medium text-[12px] text-[#2C2B2B]">
        <span>
          Already have an account? <a href="/login" className="m-[0_5px_0_5px] underline text-[#9FB2FF]">Login</a>
        </span>
      </p>
    </div>
  )
}