import { ChevronRightIcon } from '@heroicons/react/solid'

const ButtonIcon = ({onClick, title}) => {
  return (
    <div className=''>
      <button
        onClick={(e) => {
            e.preventDefault();
            onClick()
        }
    }>
      {title}
        <ChevronRightIcon className="h-[5vh] w-[7vw] m-0 bg-button_main rounded-xl text-white"/>
    </button>
    </div>
    
  )
}

export default ButtonIcon