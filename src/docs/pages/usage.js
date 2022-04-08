import { Button, ButtonGroup } from '@mui/material';
import { useEffect } from 'react';
import Code from '../components/code';
import { name } from '../config';

const codes = [
  {
    title: '1. Installation',
    code: `npm install ${name} --save`,
    type: 'text',
  },
  {
    title: '1. add compnent',
    code: `import Landscape from 'lesca-react-landscape';

const compnent = () => {

  return (
    <>
      <h1>try Landscape</h1>
      <p>
        some text
      </p>
      <Landscape />
    </>
  )
}
`,
    type: 'js',
  },
];

const Usage = () => {
  useEffect(() => {}, []);
  return (
    <div className='Usage'>
      <h2>Usage</h2>
      {codes.map((e) => (
        <div key={e.title}>
          <h3>{e.title}</h3>
          <Code code={e.code} theme={e.type} />
        </div>
      ))}
    </div>
  );
};
export default Usage;
