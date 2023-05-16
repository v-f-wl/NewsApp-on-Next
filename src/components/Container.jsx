'use client'

const Container = ({ children}) => {
  return ( 
    <div className="container mx-auto max-w-screen-xl flex flex-col gap-1 h-screen">
      {children}
    </div>
  );
}
 
export default Container;