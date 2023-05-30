import 'tailwindcss/tailwind.css';
import AuthContainer from '../components/authPage/AuthContainer';
import AuthModal from '../components/authPage/AuthModal';
import { useRouter } from 'next/router';
import SingUp from '../components/authPage/SingUp';
import LogIn from '../components/authPage/LogIn';

const Auth = () => {

  const router = useRouter();
  const { id } = router.query;
  let ComponentToRender
  
  if (id === 'signup') {
    ComponentToRender = <SingUp/>
  } else{
    ComponentToRender = <LogIn/>
  } 
  return ( 
    <AuthContainer>
      <AuthModal>
        {ComponentToRender}
      </AuthModal>
    </AuthContainer>
  );
}
 
export default Auth;