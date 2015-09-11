var React = require('react');
var io = require('socket.io-client');
var Header = require('./parts/Header');


var APP = React.createClass({

	componentWillMount() {
		this.socket = io('http://localhost:3000');
		this.socket.on('connect', this.connect);

	},

	connect() {
		alert(this.socket.id);
	},
	render: function() {
		return (

			<div>
				<Header title="New Header" />

			</div>
	
		);
	}

});

module.exports = APP;
