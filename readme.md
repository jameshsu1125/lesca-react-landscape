[![dev by JamesHsu](https://img.shields.io/badge/Dev%20by-Jameshsu1125-green)](https://github.com/jameshsu1125/) [![made in Taiwan](https://img.shields.io/badge/Made%20in-Taiwan-orange)](https://github.com/jameshsu1125/)

# Installation

```sh
$ npm install lesca-react-landscape --save
```

# Usage

```javascript
import Landscape from 'lesca-react-landscape';

const LandscapePage = () => <Landscape style={{ backgroundColor: '#ff6600' }} />;
export default LandscapePage;
```

# Props

| props       |  type  |      description       |                         default |
| :---------- | :----: | :--------------------: | ------------------------------: |
| deviceWidth | number | viewport device-width, |                           false |
| style       | object |     css-inline-js      | [default style](#default-style) |

## Default style

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

# Default Themes

![image](http://linebot.lesca.net/data/git/1.png)
