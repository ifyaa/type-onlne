---
title: '코딩에 관한소고 '
date: '2020-03-08'
tags: ['언어']
---

목차

1. [tawk.to](#tawk)
2. [styled.components에 구글폰트 적용](#theme)

# disqus

1.  disqus
2.  plugin--> disqus-react
3.  [참고사이트]("https://coderrocketfuel.com/article/how-to-add-disqus-to-a-react-application).
4.  Layout에 넣었다 (여기 \*\* 로 표시)
5.  const disqusShortname = '------' url: 'https://1004if.netlify.com', 이 두개만 적으면 되는데,
    그게 헤갈려서 ... 나머진 적지 않아도 된다

```javascript
 .  import React from 'react'
    import {Link} from 'gatsby'
    import {GlobalStyle, styled} from '../styles/theme'
여기    **import Disqus from 'disqus-react'**

```

```javascript
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

```javascript
 여기   **const disqusShortname = '------'
    const disqusConfig = {
    url: 'https://1004if.netlify.com',
    identifier: '',
    title: 'noyes',
    }**

```

```javascript
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

```javascript
theme.js
import styled, {css, createGlobalStyle} from 'styled-components'
- - -
import {createGlobalStyle} from 'styled-components'
const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Notable');
body { font-family: 'Notable', sans-serif; }`
```

# tawk

1.  gatsby에 tawk를 붙이는데
2.  자바코드니.. 그냥 붙이면 된다.. 아무 플러그인이나 그런것도 없이
3.  html 메인에 붙이듯이 <script> 만 지우고

        <!--Start of Tawk.to Script-->
        <script type="text/javascript">
        var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
        (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/5e65sdf9dfsdfc32b5c191fgfsdb1/1edsfsd2kc';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
        })();
        </script>
        <!--End of Tawk.to Script-->
