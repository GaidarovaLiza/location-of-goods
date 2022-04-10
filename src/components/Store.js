import React, { Component } from 'react';
import IconSwitch from './IconSwitch';
import CardsView from './CardsView';
import ListView from './ListView';


const ICON_NAMES = {
	MODULE: 'view_module',
	LIST: 'view_list',
}
export default class Store extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			selected: ICON_NAMES.LIST
		}
	}

	onSwitch = () => this.setState({ selected: this.state.selected ===ICON_NAMES.MODULE ? ICON_NAMES.LIST : ICON_NAMES.MODULE })

	render() {
		return (
			<div className='wrapper'>
				<div className='container'>
					<IconSwitch icon={this.state.selected} onSwitch={this.onSwitch} />
					{this.state.selected === ICON_NAMES.MODULE
						? <CardsView cards={this.props.products} />
						: <ListView items={this.props.products} />}
				</div>
			</div>
		)
	}
}
