import SettingTitle from "./SettingTitle";

const Feedback = ({isOpen}) => {
  return ( 
    <div className="py-8 px-4 w-2/5 rounded-lg overflow-hidden bg-white flex flex-col gap-4 justify-center items-center">
      <SettingTitle title="Заранее спасибо за отзыв"/>
      <label className="flex flex-col gap-2 w-[320px]">
        <span className="">
          Имя 
        </span>
        <input type="text" className="px-2 py-3 border w-[320px] outline-none rounded-lg"/>
      </label>
      <label className="flex flex-col gap-2">
        <span className="">
          Отзыв 
        </span>
        <textarea cols="50" rows="3"  type="text" className="px-2 py-3 border w-[320px] outline-none rounded-lg resize-none"/>
      </label>
      <div className="flex gap-4">
        <div onClick={() => isOpen()} className="border border-orange-400 rounded-lg inline-block py-3 px-2 cursor-pointer">Выйти</div>
        <div className="border border-orange-400 rounded-lg inline-block py-3 px-2 cursor-pointer">Отправить</div>
      </div>
    </div>
  );
}
 
export default Feedback;