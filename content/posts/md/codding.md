---
title: 코딩에 관한소고
date: 2020-03-08
published: true
---

목차

1. [tawk.to](#tawk)
2. [styled.components에 구글폰트 적용](#theme)

# disqus

1.  disqus
2.  plugin--> disqus-react
3.  [참고사이트]("https://coderrocketfuel.com/article/how-to-add-disqus-to-a-react-application).
4.  Layout에 넣었다 (여기 \*\* 로 표시)
5.  const disqusShortname = '아이디'  와  url: 'https://1004if.netlify.com', 이 두개만 적으면 되는데,
    그게 헤갈려서 ... 나머진 적지 않아도 된다

```js
 .  import React from 'react'
    import {Link} from 'gatsby'
    import {GlobalStyle, styled} from '../styles/theme'
여기    **import Disqus from 'disqus-react'**

```

```js
    const StyledNav = styled.nav`
    ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    }

    li {
    display: inline-block;
    margin: 16px;

            a {
              background: none;
            }

    }
    `

    const StyledFooter = styled.footer`padding-bottom: 36px;`

    interface Props {
    readonly title?: string
    }

    export default class Layout extends React.Component<Props> {
    render() {
    const {children} = this.props

```

```js
 여기   **const disqusShortname = '아이디'
    const disqusConfig = {
    url: 'https://1004if.netlify.com',
    identifier: '',
    title: 'noyes',
    }**

```

```js
    return (
    <>
    <GlobalStyle />
    <StyledNav className="navigation">

       <ul>
       <li>
       <Link to={`/`}>&</Link>
       </li>
       <li>
       <Link to={`/tags`}>Tags</Link>
       </li>
       <li>
       <Link to={`/about`}>About</Link>
       </li>
       </ul>
       </StyledNav>
       <main className="content" role="main">
       {children}
       </main>
   여기  **  <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />**
       <StyledFooter className="footer">
       © {new Date().getFullYear()},{``}
       <a href="https://jeffrafter.com">jeffrafter.com</a>. Built with
       {``}
       <a href="https://www.gatsbyjs.org">Gatsby</a>
       </StyledFooter>
       </>
       )

}
}
```

# theme

(구글폰트 적용하기)<br>
2020-03-09<br>

```js
theme.js
import styled, {css, createGlobalStyle} from 'styled-components'
- - -
import {createGlobalStyle} from 'styled-components'
const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Notable');
body { font-family: 'Notable', sans-serif; }`
```

# tawk

1.  gatsby에 tawk
2.  [참고사이트](https://github.com/JodyPSmith/gatsby-plugin-tawk.git)
3.  plugin -->gatsby-plugin-tawk

```js
**gatsby - ssr.js**
;('use strict')

var _react = require('react')

var _react2 = _interopRequireDefault(_react)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj}
}

exports.onRenderBody = function(_ref, pluginOptions) {
  var setPostBodyComponents = _ref.setPostBodyComponents
  var tawkId = pluginOptions.tawkId

  return setPostBodyComponents([
    _react2.default.createElement('script', {
      key: 'gatsby-plugin-tawk',
      async: true,
      src: 'https://embed.tawk.to/' + tawkId + '/default',
      charset: 'UTF-8',
    }),
  ])
}
```

```js
**Tawk.js**
var Tawk_API = Tawk_API || {},
  Tawk_LoadStart = new Date()
;(function tawk(key) {
  var s1 = document.createElement('script'),
    s0 = document.getElementsByTagName('script')[0]
  s1.async = true
  s1.src = 'https://embed.tawk.to/' + key + '/default'
  s1.charset = 'UTF-8'
  s1.setAttribute('crossorigin', '*')
  s0.parentNode.insertBefore(s1, s0)
})()
```

```js
**gatsby-config.js**
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-tawk`,
      options: {
        tawkId: "YOUR_TAWK_ID",
        // get this from the tawk script widget
      },
    },
  ],
};
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTEwNDU0NjUwMjUsMTYzNjU1MjIyOSwzNT
kxNTExNV19
-->