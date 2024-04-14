export default function Home() {
  return (
    <div className="rounded-[10px] bg-[#FCFCFC] flex flex-col p-[12px_14.3px_0_0] box-sizing-border">
      <div className="m-[0_2.5px_68px_2.5px] inline-block self-end break-words font-['Montserrat'] font-medium text-[16px] underline text-[#9FB2FF]">
        <a href="/signup">Skip</a>
      </div>
      <div className="bg-[url('assets/images/Image13.png')] bg-[50%_50%] bg-cover bg-no-repeat m-[0_0_85px_13.3px] self-center w-[282px] h-[282px]">
      </div>
      <div className="m-[0_16px_15px_16px] inline-block self-start break-words font-['Montserrat'] font-semibold text-[20px] text-[#2C2B2B]">
        Track Your Goal
      </div>
      <div className="m-[0_15.9px_78px_16px] inline-block break-words font-['Montserrat'] font-medium text-[16px] text-[#787878]">
        Don’t worry if you have trouble determining your goals, We can help you determine your goals and track your goals
      </div>
      <button className="m-[0_1.7px_63px_1.7px] self-end w-[60px] h-[60px]" onClick={(e) => {
        e.preventDefault();
        window.location.href='/home';
      }}>
        <img className="m-[0_1.7px_63px_1.7px] self-end w-[60px] h-[60px]" src="/assets/images/loading.png"/>
      </button>
    </div>
  )
}