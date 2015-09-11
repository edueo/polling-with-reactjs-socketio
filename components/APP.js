var React = require('react');
var io = require('socket.io-client');

var APP = React.createClass({

	componentWillMount() {
		this.socket = io('http://localhost:3000');
		this.socket.on('connect', this.connect);

	},

	connect() {
		alert(this.socket.id);
	},
	render: function() {
		return (<h1>Hello World from React</h1>);
	}

});

module.exports = APP;
