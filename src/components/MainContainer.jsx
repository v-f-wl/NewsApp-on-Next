'use client'
const MainContainer = ({isGrid, children}) => {
  return (  
    <div 
      className={`
        h-full 
        p-2 
        lg:p-8 
        rounded-t-lg 
        flex 
        flex-col-reverse 
        overflow-hidden 
        
        lg:grid 
        ${isGrid ? "lg:grid-cols-LeftRight" : "lg:grid-cols-Profile"}
        gap-2 
        lg:gap-8
        `}
      >
      {children}
    </div>
  );
}
 
export default MainContainer;