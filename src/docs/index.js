import React from 'react';
import { render } from 'react-dom';
import Landscape from '../lib/index';

import './styles.css';

function Demo() {
	return (
		<>
			<h1>simple mobile landscape page</h1>
			<Landscape style={{ backgroundColor: '#ff6600' }} deviceWidth={false} />
		</>
	);
}

render(<Demo />, document.getElementById('app'));
