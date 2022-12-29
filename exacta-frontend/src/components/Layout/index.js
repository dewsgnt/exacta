import Head from 'next/head'
import Script from 'next/script'

import Header from '../Header'
// import Footer from '../Footer'

const Layout = ({ children, title, path }) => {
  return (
    <div className='bg-bg_blue flex flex-col justify-between h-[100vh]'>
        <Head>
            <title>{title}</title>
            <meta name="Exacta" content="Exacta" />
            <link rel="icon" href="/favorite.ico" />
        </Head>
        <Header path={path} />
        <div className='flex-1'>
            {children}
        </div>
        {/* <Footer /> */}
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossOrigin="anonymous"></Script>
    </div>
  )
}

export default Layout