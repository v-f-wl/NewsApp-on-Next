import Head from 'next/head';
import 'tailwindcss/tailwind.css';

import AuthContainer from '../components/authPage/AuthContainer'
import AuthModal from '../components/authPage/AuthModal'

export default function Auth(){

  return ( 
    <AuthContainer>
      <Head>
        <title>Flumpf - Authorization</title>
      </Head>
      <AuthModal/>
    </AuthContainer>
  );
}
