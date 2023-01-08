import { useRouter } from "next/router";
import Image from "next/image"

// import Card from "../src/components/Card";
import ImageComponent from '../../src/components/Image';
// import Layout from "../../src/components/Layout"
import Button from "../../src/components/Button"
import ellipse from "../../src/assets/images/ellipse.svg"
import Cards from "../../src/components/cards";
import LayoutHome from "../../src/components/Layout-Home";

export default function Home() {
  const router = useRouter();
  return (
    <LayoutHome title='EXACTA'>
      {/* Jumbutron */}
      <section className="bg-[url('../src/assets/images/main-bg.png')] bg-cover z-0 bg-no-repeat py-[4vw] px-[6vw] flex flex-col justify-center h-[100vh]">
        <h1 className="text-white text-5xl w-[50%]">UJI KEMAMPUAN MATEMATIKA KALIAN BERSAMA KAMI, YUK!</h1>
        <Button title='COBA DI SINI' onClick={() => router.push('/#course')} btnStyle='bg-button_main rounded-3xl border border-white w-[10vw] border-[0.3vw] tablet:px-[2vh] tablet:py-[0.3vw] mobile:px-[3vw] mobile:py-[1vw] mt-[5vh] mr-[2vw]' />  
      </section>

      {/* About */}
      <section className="bg-[#F6F6FE] flex flex-row h-[70vh]">
      <ImageComponent src={ellipse} style="w-[20vw] mr-[10vw] pt-[5vh]"/>
      <div className="flex flex-col w-[55%] text-justify">
        <h1 className="text-text_main text-5xl pt-[20vh]">TENTANG EXACTA</h1>
      <p className="text-text_blue text-xl w-[100%] py-[6vh]">adalah sebuah aplikasi berbasis web sebagai tempat untuk belajar matematika yang diperuntukkan kepada pelajar kelas 6 SD ataupun sederajat dengan tampilan yang menarik dan papan score yang bisa menstimulasi jiwa kompetisi anak.</p> </div>
      </section>

      <Cards/>
      
    </LayoutHome>
  )
}
