import React from 'react';

export default function IconSwitch(props) {

	return (
		<div className='icon'>
			<button
				className='material-icons'
				onClick={() => props.onSwitch()}
				>{props.icon}
			</button>
		</div>
	)

}