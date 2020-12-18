import React, { Component } from 'react';
import './myStyle.less';

import OC from 'lesca-sensor-oc';

class Landscape extends Component {
	constructor(props) {
		super(props);
		this.state = { show: false };
	}

	componentDidMount() {
		OC.init({
			callback: (e) => {
				let dw = this.props.dw || 750,
					s = window.screen.width / dw,
					p = document.querySelector('meta[name="viewport"]');
				p.content = `width=${dw}, minimum-scale=${s}, maximum-scale=${s}, initial-scale=${s}`;
				this.setState({ show: e != 0 });
			},
		});
	}

	append() {
		if (this.state.show) return <div className='lesca-oc'></div>;
	}

	render() {
		return <>{this.append()}</>;
	}
}

export default Landscape;
