import React from "react";

export default function CardsView(props) {

	return (
		<div className='cards-view'>
			{props.cards.map((card, i) =>
				<div className='cards-item-view' key={i}>
					<img className='item-img-view' src={card.img} />
					<div className='item-title-view'>{card.name}</div>
					<div className='item-color-view'>{card.color}</div>
					<div className='item-price-view'>${card.price}</div>
					<button className='item-btn-view'>ADD TO CART</button>
				</div>
			)}
		</div>
	)

}