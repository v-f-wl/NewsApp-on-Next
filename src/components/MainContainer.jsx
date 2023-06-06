
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
        lg:grid 
        ${isGrid ? "lg:grid-cols-LeftRight" : "lg:grid-cols-Profile"}
        gap-2 
        lg:gap-8
        justify-between
        `}
      >
      {children}
    </div>
  );
}
 
export default MainContainer;