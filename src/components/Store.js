import React, { Component } from 'react';
import IconSwitch from './IconSwitch';
import CardsView from './CardsView';
import ListView from './ListView';




export default class Store extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			selected: null
		}
	}

	onSwitch = (icon) => this.setState({ selected: icon.name })

	icon = () => this.props.icons.filter(e => {
		if (this.state.selected === null) {
			return e.name === 'view_list'
		} else if (this.state.selected === 'view_list') {
			return e.name === 'view_module'
		} else {
			return e.name === 'view_list'
		}
	})


	render() {

		const renderCards = () => {
			if (this.state.selected === null) {
				return <ListView cards={this.props.products} />
			} else if (this.state.selected === 'view_list') {
				return <CardsView items={this.props.products} />
			} else {
				return <ListView cards={this.props.products} />
			}
		}

		return (
			<div className='wrapper'>
				<div className='container'>
					<IconSwitch icon={this.icon()} onSwitch={this.onSwitch} />
					{renderCards()}
				</div>
			</div>
		)

	}

}
