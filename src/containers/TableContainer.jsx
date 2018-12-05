import React from 'react';

const $ = require('jquery')
$.DataTable = require('datatables.net')

export class TableContainer extends React.Component {
	componentDidMount() {
		$(this.el).DataTable()
	}

	render() {
		return (
			<div>
				<h2>{this.props.title}</h2>
				<table className="display" width="100%" ref={el => this.el = el}>
					<thead>
						<tr>
							{this.props.header.map((head, idx) => {
								return (
									<th key={idx}>{head}</th>
								)
							})}
						</tr>
					</thead>
					{this.props.children}
				</table>
			</div>
		)
	}
}