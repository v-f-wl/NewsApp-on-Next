
const Container = ({ children}) => {
  return ( 
    <div className="container mx-auto max-w-screen-xl flex flex-col gap-1 h-[100%]">
      {children}
    </div>
  );
}
 
export default Container;