import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { MenuIcon } from '@heroicons/react/solid'

import Button from "../Button";

// import forgexIcon from '../../assets/images/forgex-icon.svg';

const HeaderHome = ({ path }) => {
    const router = useRouter();
    return (
        <div className="flex fixed top-0 w-full z-[100]">
            {/* Mobile Navbar */}
            <div className="collapse absolute top-0 left-0 z-10 w-full" id="navbarToggleExternalContent">
                <div className="bg-bg_main flex flex-col p-4">
                    <button className="title-mobile self-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">X</button>
                    <nav className="flex flex-col items-start">
                        <Link href='/'>
                            <button className={`mb-[5vw] w-full title-mobile text-white ${path === '/' && 'text-white'}`}>
                                BERANDA
                            </button>
                        </Link>
                        <Link href='/skor-page'>
                            <button className={`mb-[5vw] w-full title-mobile text-white ${path === '/' && 'text-white'}`}>
                                PAPAN SKOR
                            </button>
                        </Link>
                    </nav>
                </div>
            </div>
            {/* Main Navbar */}
            <nav className="mobile:flex tablet:hidden">
                <div className="flex pl-[2vw] bg-header">
                    <button type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation" data-collapse-toggle="navbar-sticky">
                        <MenuIcon className="h-[8vw] w-[8vw] text-white"/>
                    </button>
                </div>
            </nav>
            <div className="flex w-full bg-bg_main justify-between items-center tablet:px-[1vw] mobile:px-[2vw] tablet:py-[0.5vw] mobile:py-[1.5vw]">
                <Link href="/">
                        <button className="flex items-center pr-[1.5vw] ml-[0.5vw]">
                            <div className="tablet:w-[2.3vw] mobile:w-[10vw]">
                                {/* <Image src={forgexIcon} layout='responsive' alt='forgex icon' /> */}
                            </div>
                            <h2 className='tablet:ml-[0.5vw] text-white text-2xl font-bold font-jockey mobile:ml-[2vw]'>EXACTA</h2>
                        </button>
                    </Link>
                    <nav className="text-small flex justify-center w-full items-center">
                    <div className="mobile:hidden tablet:flex">
                        <Link href='/'>
                            <button className={`h-max font-semibold text-white ${path === '/about' && 'text-white'}`}>
                                BERANDA
                            </button>
                        </Link>
                        <Link href='/skor-page'>
                            <button className={`ml-[5vw] h-max font-semibold text-white ${path === '/technology' && 'text-white'}`}>
                                PAPAN SKOR
                            </button>
                        </Link>
                    </div>
                </nav>
                {/* <Button title='MASUK' onClick={() => router.push('/login-page')} btnStyle='bg-lightblue rounded-3xl border border-white border-[0.3vw] tablet:px-[2vh] tablet:py-[0.3vw] mobile:px-[3vw] mobile:py-[1vw] my-[0.4vw] mr-[2vw]' /> */}
                
                 </div>
        </div>

    )
};

export default HeaderHome;