import 'tailwindcss/tailwind.css';
import AuthContainer from '../components/authPage/AuthContainer'
import AuthModal from '../components/authPage/AuthModal'
import Head from 'next/head';

export default function Auth(){

  return ( 
    <AuthContainer>
      <Head>
        <title>Air Play - Authorization</title>
      </Head>
      <AuthModal/>
    </AuthContainer>
  );
}
