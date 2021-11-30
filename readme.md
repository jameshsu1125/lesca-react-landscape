[![dev by JamesHsu](https://img.shields.io/badge/Dev%20by-Jameshsu1125-green)](https://github.com/jameshsu1125/) [![made in Taiwan](https://img.shields.io/badge/Made%20in-Taiwan-orange)](https://github.com/jameshsu1125/)

# Installation

```sh
$ npm install lesca-react-landscape --save
```

# Usage

```javascript
import Landscape from 'lesca-react-landscape';


render(){
    return (
        <div className='container'>
            <h1> your-html-dom <h1>
            <Landscape style={{ backgroundImage:'url(...)', backgroundColor:'rgba(0,0,0,.8)'}} deviceWidth={false}/>
        </div>
    )
}
```

# Props

| props       |  type  |      description       | default |
| :---------- | :----: | :--------------------: | ------: |
| deviceWidth | number | viewport device-width, |     750 |
| style       | object |     css-inline-js      |         |

# Default Themes

![image](http://linebot.lesca.net/data/git/1.png)
