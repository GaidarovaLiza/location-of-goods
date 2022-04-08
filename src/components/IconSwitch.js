import React from 'react';



export default function IconSwitch(props) {

	return (
		<div className='icon'>
			{props.icon.map((i, k) =>
			(<button
				className='material-icons'
				key={k}
				onClick={() => props.onSwitch(i)}
			>
				{i.name}
			</button>)
			)}
		</div>
	)

}