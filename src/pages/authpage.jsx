import Head from 'next/head';
import 'tailwindcss/tailwind.css';

import AuthContainer from '../components/authPage/AuthContainer'
import AuthModal from '../components/authPage/AuthModal'

export default function Auth(){

  return ( 
    <AuthContainer>
      <Head>
        <title>Flumpf - Authorization</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name='viewport' content='initial-scale=1, viewport-fit=cover'/>
      </Head>
      <AuthModal/>
    </AuthContainer>
  );
}
