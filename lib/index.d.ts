import { CSSProperties } from 'react';
declare type LandscapeProps = {
    style?: CSSProperties;
    deviceWidth?: number | boolean;
};
declare const Landscape: {
    (props: LandscapeProps): JSX.Element;
    defaultProps: {
        style: CSSProperties;
        deviceWidth: boolean;
    };
};
export default Landscape;
