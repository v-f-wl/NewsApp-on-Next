const HeaderName = ({profileColor, name}) => {
  return ( 
    <div className="bg-white rounded-lg flex items-center gap-4 p-3 lg:p-5">
        <div style={{ backgroundColor: profileColor}} className="w-8 h-8 lg:w-14 lg:h-14 rounded-lg"></div>
        <span className="font-semibold text-xl lg:text-3xl text-slate-700 tracking-wide">{name}</span>
      </div>
  );
}
 
export default HeaderName;