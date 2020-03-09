---
title: '코딩에 관한소고 '
date: '2020-03-08'
tags: ['언어']
---

1.  gatsby에 disqus설치 plugin은 disqus-react를 사용
2.  일단은...... 무지간단한데...왜그리 땅을 파야하는지...
3.  [참고사이트]("https://coderrocketfuel.com/article/how-to-add-disqus-to-a-react-application").
4.  Layout에 넣었다..일단 화면에 올라오는 것만으로 기쁘다...자세한 것은 나중에..
5.  const disqusShortname = '------' url: 'https://1004if.netlify.com', 이 두개만 적으면 되는데,
    그게 헤갈려서 ... 나머진 적지 않아도 된다

```
 .  import React from 'react'
    import {Link} from 'gatsby'
    import {GlobalStyle, styled} from '../styles/theme'
    **import Disqus from 'disqus-react'**

```

```

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

    **const disqusShortname = '------'
    const disqusConfig = {
    url: 'https://1004if.netlify.com',
    identifier: '',
    title: 'noyes',
    }**

```

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
     **  <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />**
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
