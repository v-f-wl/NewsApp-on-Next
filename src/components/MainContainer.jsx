const MainContainer = ({children}) => {
  return (  
    <div className="h-full p-8  rounded-t-lg overflow-hidden grid grid-cols-LeftRight gap-8">
      {children}
    </div>
  );
}
 
export default MainContainer;