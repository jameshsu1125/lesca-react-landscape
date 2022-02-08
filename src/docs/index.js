import { render } from 'react-dom';
import { Navation, Code } from './components';
import Demo from './demo';
import Qrcode from 'lesca-react-qrcode';
import './styles.less';

const homepage = '#';
const name = 'lesca-react-landscape';
const description = 'simple exsample';
const code = `import Landscape from 'lesca-react-landscape';

const LandscapePage = () => {
	return <Landscape style={{ backgroundColor: '#ff6600' }} />;
};
export default LandscapePage;
`;

const Page = () => {
	return (
		<>
			<Navation />
			<div className='content'>
				<div>
					<h1>{name}</h1>
					<figcaption>{description}</figcaption>
				</div>
				<div>
					<h2>install</h2>
					<Code code={`npm install ${name} --save`} theme='markup' />
				</div>
				<div>
					<h2>test on mobile</h2>
					<Qrcode content={window.location.href} size='300' />
					<Code code={code} />
					<Demo />
				</div>
				<div>
					<h2>Usage</h2>
					<a href={homepage}>Documentation</a>
				</div>
			</div>
		</>
	);
};

render(<Page />, document.getElementById('app'));
