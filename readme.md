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
            <Landscape dw='750' />
        </div>
    )
}
```

# Props

| props |  type  |      description       | default |
| :---- | :----: | :--------------------: | ------: |
| dw    | string | viewport device-width, |   '750' |

# Themes

![image](http://linebot.lesca.net/data/git/1.png)

| class name |      style       |   description    |                  default |
| :--------- | :--------------: | :--------------: | -----------------------: |
| .lesca-oc  | background-image |   display icon   | url('data:image/png...') |
|            | background-color | background color |         rgba(0, 0, 0, 1) |
