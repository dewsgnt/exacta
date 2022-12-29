import React, { useState, useRef, useEffect } from 'react'


const Countdown = () => {

	// We need ref in this, because we are dealing
	// with JS setInterval to keep track of it and
	// stop it when needed
	const Ref = useRef(null);

	// The state for our timer
	const [timer, setTimer] = useState('00:00:00');


	const getTimeRemaining = (e) => {
		const total = Date.parse(e) - Date.parse(new Date());
		const minutes = Math.floor((total % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((total % (1000 * 60)) / 1000);
const hours = Math.floor(
            (total % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
		return {
			total, hours, minutes, seconds
		};
	}


	const startTimer = (e) => {
		let { total, hours, minutes, seconds} = getTimeRemaining(e);
		if (total >= 0) {
			setTimer(
				(hours > 9 ? hours : '0' + hours) + ':' +
				(minutes > 9 ? minutes : '0' + minutes) + ':'
				+ (seconds > 9 ? seconds : '0' + seconds)
			)
		} else {
            clearInterval(interval.current)
        }
	}


	const clearTimer = (e) => {
		setTimer('00:30:00');
		if (Ref.current) clearInterval(Ref.current);
		const id = setInterval(() => {
			startTimer(e);
		}, 1000)
		Ref.current = id;
	}

	const getDeadTime = () => {
		let deadline = new Date();
		deadline.setSeconds(deadline.getSeconds() + 1800);
		return deadline;
	}

	useEffect(() => {
		clearTimer(getDeadTime());
	}, []);

	return (
		<div className="tablet:text-xl tablet:mb-[10vh] mobile:mb-4 tracking-wider mobile:title-med-mobile">
			<h2>{timer}</h2>
		</div>
	)
}

export default Countdown;
