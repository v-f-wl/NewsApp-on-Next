import 'tailwindcss/tailwind.css';
import AuthContainer from '../components/authPage/AuthContainer'
import AuthModal from '../components/authPage/AuthModal'

export default function Auth(){

  return ( 
    <AuthContainer>
      <AuthModal/>
    </AuthContainer>
  );
}
