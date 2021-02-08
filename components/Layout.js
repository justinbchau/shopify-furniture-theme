import Head from 'next/head';
import Header from './header';
import Footer from './footer';

export default function Layout({ children }) {
  return (
    <div className='container'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />

      <main className='main'>{children}</main>

      <Footer />
    </div>
  );
}
