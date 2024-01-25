import { CSSProperties, ReactElement } from 'react';
export interface ProviderProps {
    children?: ReactElement;
    style?: CSSProperties;
    onChange?: (orientation: 'landscape' | 'portrait') => void;
}
