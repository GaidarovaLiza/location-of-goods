import React from "react";

export default function ListView(props) {

	return (
		<div className='cards'>
			{props.items.map((card, i) =>
				<div className='cards-item' key={i}>
					<div className='item-header'>
						<div className='item-title'>{card.name}</div>
						<div className='item-color'>{card.color}</div>
					</div>
					<img className='item-img' src={card.img} />
					<div className='item-coast'>
						<div>${card.price}</div>
						<button className='item-btn'>ADD TO CART</button>
					</div>
				</div>
			)}
		</div>
	)

}