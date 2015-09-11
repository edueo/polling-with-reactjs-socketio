var React = require('react');
var Router = require('react-router');
var RouterHandler = Router.RouteHandler;

var io = require('socket.io-client');
var Header = require('./parts/Header');


var APP = React.createClass({

	getInitialState() {
		return {

			status: 'disconnected',
			title : ''
		}

	},


	componentWillMount() {
		this.socket = io('http://localhost:3000');
		this.socket.on('connect', this.connect);
		this.socket.on('disconnect', this.disconnect);
		this.socket.on('welcome', this.welcome);

	},

	connect() {
		alert(this.socket.id);
	},

	welcome(serverState) {
		this.setState({title: serverState.title});
	},

	render: function() {
		return (

			<div>
				<Header title={this.state.title} />
				<RouterHandler />
			</div>
	
		);
	}

});

module.exports = APP;
