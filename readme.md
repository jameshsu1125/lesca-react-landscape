[![React](https://img.shields.io/badge/-ReactJs-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://zh-hant.reactjs.org/)
[![React](https://img.shields.io/badge/Typescript-4277c0?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![NPM](https://img.shields.io/badge/NPM-ba443f?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)
[![React](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/)

# Why use it?

a landscape screen of react component.

look like this.![image](http://archive.lesca.net/screencapture-jameshsu1125-github-io-lesca-react-landscape-2022-08-24-12_39_17.png)

#### [Live Demo](https://jameshsu1125.github.io/lesca-react-landscape/)

# Installation

```sh
npm install lesca-react-landscape --save
```

## Usage

As a Node module:

```JSX
import Landscape from 'lesca-react-landscape';

const LandscapePage = () => {
  return (
      <Landscape style={{ backgroundColor: '#ff6600' }} >
        <myIcon>
      </Landscape>
  );
};

export default LandscapePage;
```

## Development

### Props

| props    |  description  |                               default |
| :------- | :-----------: | ------------------------------------: |
| style    | css-inline-js |       [default style](#default-style) |
| children |   reactNode   | [default children](#default-children) |

### Default style

```javascript
const defaultStyle = {
  position: 'fixed',
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  top: '0',
  left: '0',
};
```

### Default children

```javascript
<div
  style={{
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 1)',
    backgroundImage: `url(${defaultIcon})`,
    backgroundSize: '10vw',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }}
/>
```

### Features

- maintain if necessary
