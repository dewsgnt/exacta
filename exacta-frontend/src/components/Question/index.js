import Countdown from "./Component/countdown";
import Button from "../Button"
import { useRouter } from "next/router";

const Question = () => {
    const router = useRouter();

    return (
        <section id='question' className="flex flex-col items-center h-[100vh] bg-[#EDEFFB]">
            <div>
                <h1 className="text-text_main text-5xl py-[8vh]">Pertanyaan</h1>
            </div>
            <div className='flex'>
            <div className='flex h-[60vh] w-[70vw] btn bg-white rounded-2xl'>
                <div className='flex flex-col p-[2vw] tablet:w-[100%] mobile:w-[80%]'>
                {/* <ImageComponent src={ellipse1} style="w-[10vw] mb-[4vh]"/> */}
                    <div className='flex flex-row justify-between'>
                        <h3 className='tablet:text-xl tablet:mb-[10vh] mobile:mb-4 tracking-wider mobile:title-med-mobile'>Soal ke 1 dari 10</h3>
                        <Countdown/>
                    </div>
                    <div className="flex pt-[30vh] items-end justify-between">
                        <div>
                        <Button title='Kembali' onClick={() => router.push('#')} btnStyle='bg-button_main rounded-3xl border border-white w-[10vw] border-[0.3vw] tablet:px-[2vh] tablet:py-[0.3vw] mobile:px-[3vw] mobile:py-[1vw] mr-[2vw]' />  
                        <Button title='Selanjutnya' onClick={() => router.push('#')} btnStyle='bg-button_main rounded-3xl border border-white w-[10vw] border-[0.3vw] tablet:px-[2vh] tablet:py-[0.3vw] mobile:px-[3vw] mobile:py-[1vw] mr-[2vw]' />  
                        </div>
                        <Button title='Selesai' onClick={() => router.push('/skor-page')} btnStyle='bg-bg_main rounded-3xl border border-white w-[10vw] border-[0.3vw] tablet:px-[2vh] tablet:py-[0.3vw] mobile:px-[3vw] mobile:py-[1vw] mr-[2vw]' />  
                    </div>
                        {/* <ButtonIcon onClick={onClick} style="w-[1vw] place-content-end" /> */}
                    </div>
                    </div>
            </div>
        </section>
    )
}

export default Question