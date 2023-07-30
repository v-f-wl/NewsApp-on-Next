
const MainContainer = ({isGrid, children}) => {
  return (  
    <div 
      className={`
        p-2 
        lg:p-8 
        rounded-t-lg 
        flex 
        flex-col-reverse
        overflow-hidden 
        h-full
        w-full
        max-h-[90vh]
        lg:grid 
        ${isGrid ? "lg:grid-cols-LeftRight" : "lg:grid-cols-Profile"}
        gap-2 
        lg:gap-8 justify-end
        lg:justify-between
      `}
      >
      {children}
    </div>
  );
}
 
export default MainContainer;