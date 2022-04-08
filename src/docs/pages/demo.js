import { useEffect } from 'react';
import Landscape from '../../lib';
import Qrcode from 'lesca-react-qrcode';

const Demo = () => {
  useEffect(() => {}, []);
  return (
    <div className='Demo'>
      <h2>Demo</h2>
      <h5>test on mobile</h5>
      <Qrcode content={window.location.href} size='300' />
      <Landscape />
      <pre>
        <code>try Landscape your mobile</code>
      </pre>
    </div>
  );
};
export default Demo;
