import '../../app/globals.css'
const AuthContainer = ({children}) => {
  return ( 
    <div className="w-screen h-screen flex items-center justify-center relative b-col">
      {children}
    </div>
  );
}
 
export default AuthContainer;