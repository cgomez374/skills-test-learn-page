import '../styles/globals.css';
import Nav from '../Components/Nav';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous" />
      </Head>
      <Nav />
      <div className="container">
        <Component {...pageProps}/>
      </div>
    </>
  )
}

export default MyApp
