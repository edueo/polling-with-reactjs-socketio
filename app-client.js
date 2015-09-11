var React = require('react');
var APP = require('./components/APP');
var io = require('socket.io-client');
var Header = require('./components/parts/Header');


var APP = React.createClass({

	getInitialState() {
		return {
			status: 'disconnected'
		}
	},

	componentWillMount() {
		this.socket = io('http://localhost:3000');
		this.socket.on('connect', this.connect);
		this.socket.on('disconnect', this.disconnect);
	},

	connect() {
		this.setState({ status: 'connected'});
	},

	disconnect() {
		this.setState({ status: 'disconnected'});

	},



	render() {
		return (
			<div>
				<Header title="New Header" />
			</div>

		)
	}
});

React.render(<APP />, document.getElementById('react-container'));
