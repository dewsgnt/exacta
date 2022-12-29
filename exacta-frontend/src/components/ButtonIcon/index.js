import styles from '../Button/Button.module.css';

import { ChevronRightIcon } from '@heroicons/react/solid'

const ButtonIcon = ({onClick, title}) => {
  return (
    <div className='place-self-end items-end'>
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

// text-left py-[0.4vw] h-max rounded text-white text-sm flex justify-left

export default ButtonIcon