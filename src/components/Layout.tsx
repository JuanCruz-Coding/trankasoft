import { Outlet, ScrollRestoration } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import WhatsAppFab from './WhatsAppFab';

export default function Layout() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFab />
      <ScrollRestoration />
    </>
  );
}
