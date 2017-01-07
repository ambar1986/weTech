import React from 'react';
import ReactDOM from 'react-dom';
import Elegible from './elegible';
import HowItWorks from './howitworks';

var App = React.createClass({
	render(){
		return(
			<div>
				<Elegible />
				<HowItWorks />			
			</div>
		)
	}
})

ReactDOM.render(<App />, document.getElementById('root'))