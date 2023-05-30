import 'tailwindcss/tailwind.css';
import AuthContainer from '../components/authPage/AuthContainer';
import AuthModal from '../components/authPage/AuthModal';


const Auth = () => {

  return ( 
    <AuthContainer>
      <AuthModal/>
    </AuthContainer>
  );
}
 
export default Auth;