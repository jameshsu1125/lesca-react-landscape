[![React](https://img.shields.io/badge/-ReactJs-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://zh-hant.reactjs.org/)
[![React](https://img.shields.io/badge/Less-1d365d?style=for-the-badge&logo=less&logoColor=white)](https://lesscss.org/)
[![React](https://img.shields.io/badge/Typescript-4277c0?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://www.w3schools.com/html/)
[![React](https://img.shields.io/badge/-CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3schools.com/css/)
[![NPM](https://img.shields.io/badge/NPM-ba443f?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)
[![React](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/)
[![NPM](https://img.shields.io/badge/DEV-Jameshsu1125-9cf?style=for-the-badge)](https://www.npmjs.com/~jameshsu1125)

# Why use it?

a landscape screen of react component.

look like this.![image](http://linebot.lesca.net/data/git/1.png)

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
    <>
      <h1>Landscape</h1>
      <p>
        try landscape the mobile.
      </p>
      <Landscape style={{ backgroundColor: '#ff6600' }} />
    </>
  );
};

export default LandscapePage;
```

## Development

### Props

| props                 |      description       |                         default |
| :-------------------- | :--------------------: | ------------------------------: |
| **deviceWidth**:_int_ | viewport device-width, |                           false |
| style                 |     css-inline-js      | [default style](#default-style) |

### Default style

```javascript
const defaultStyle = {
  position: 'fixed',
  width: '100%',
  height: '100%',
  top: '0px',
  left: '0px',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundColor: 'rgba(0, 0, 0, 1)',
  backgroundImage: `url(${defaultIcon})`,
  backgroundSize: '10vw',
};
```

### Features

- maintain if necessary
