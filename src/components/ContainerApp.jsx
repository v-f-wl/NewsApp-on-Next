
const Container = ({ children}) => {
  return ( 
    <div className="container mx-auto max-w-screen-xl flex flex-col gap-1 h-screen h-[env(safe-area-inset-top, safe-area-inset-bottom)]">
      {children}
    </div>
  );
}
 
export default Container;