import React from 'react'
import ButtonIcon from '../ButtonIcon'
import ImageComponent from '../Image'
import ellipse1 from '../../assets/images/math.png'

const Card = ({ title, description, onClick, style }) => {
  return (
    <div className={`flex tablet:px-[2vw] mobile:platform-card-mobile ${style}`}>
      <div className='flex h-[60vh] w-[25vw] btn bg-white rounded-2xl'>
        <div className='flex flex-col justify-center items-center p-[2vw] m-[1vw] tablet:w-[100%] mobile:w-[80%]'>
          <ImageComponent src={ellipse1} style="w-[10vw] mb-[4vh]"/>
          <div className='flex flex-col'>
            <h3 className='tablet:text-3xl tablet:mb-[10vh] mobile:mb-4 tracking-wider mobile:title-med-mobile text-start'>{title}</h3>
            </div>
            <ButtonIcon onClick={onClick} style="w-[1vw] place-content-end" />
          
           </div>
        </div>
         </div>
  )
}

export default Card