
import 'tailwindcss/tailwind.css';
import Container from "../components/ContainerApp";
import Header from "../components/Header";
import { useRouter } from 'next/router';

const ProfilePage = () => {
  const router = useRouter()

  const goBack = () => {
    router.push('/')
  }
  return ( 
    <Container>
      <Header/>
        <div className="w-full h-full flex flex-col items-center justify-center gap-8">
          <div className="flex items-center gap-8">
            <span className="font-bold text-8xl">404</span>
            <div className="text-4xl">Page not found</div>
          </div>
          <a href="#" onClick={() => goBack()} className='text-2xl border-b-2 border-orange-400 py-2 hover:opacity-60 transition'>Return to the homepage</a>
        </div>
    </Container>
  );
}
 
export default ProfilePage;