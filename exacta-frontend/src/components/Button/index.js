import styles from './Button.module.css';

const Button = ({ title, onClick, btnStyle }) => {
  return (
    <button
        className={`${styles.btn} h-max text-white ${btnStyle}`}
        onClick={(e) => {
            e.preventDefault();
            onClick();
            // onClick()
        }
    }
    >
        {title}
    </button>
  )
}

export default Button