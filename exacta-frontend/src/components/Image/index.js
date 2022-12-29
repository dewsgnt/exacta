import Image from 'next/image';

const ImageComponent = ({ style, src }) => {
  return (
    <div className={style}>
        <Image src={src} layout='responsive' />
    </div>
  )
}

export default ImageComponent;