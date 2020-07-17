---
 title: gatsby-starter-bee
date: 2020-07-03
published: true
---
### share 편집
src/components/sponsor-button/index.js
```js
import React from "react";
// import { SocialShare } from "./emo-post";
import "./index.scss";

export const SponsorButton = ({ sponsorId }) => (
  <div>
    <li className={"social-icon"}>
      <a target="_blank" href="https://www.instagram.com/twin.children/">
        <span className="fab fa-instagram">instagram</span>
      </a>
    </li>
    <li className={"social-icon"}>
      <a target="_blank" href="https://twitter.com/Nasa2135">
        <span className="fab fa-twitter">twitter</span>
      </a>
    </li>
    <li className={"WiCloud"}>
      <a target="_blank" href="https://www.facebook.com/ifyaa7">
        <span className="fab fa-facebook">facebook</span>
      </a>
    </li>
  </div>
);
```
###원래 있던것 지우고
src/components/social-share/index.js
```js
 return (
    <div className="social-share">
      {/* <FacebookIcon onClick={onClickFacebookIcon} />
      <TwitterIcon onClick={onClickTwitterIcon} /> */}
    </div>

```

### gatsby-meta-config.js 편집


![](https://i.postimg.cc/TP6VKFXT/2020-07-03-9-01-20.png)


```js
social-share 디렉토리
module.exports = {
  title: `finger study`,
  description: `Blog posted about ...`,
  author: `[손가락 암기]`,
  introduction: `아이들을 가르키다 너무힘들어 하기에,  손가락에 위치를 정해 기억을 시키니 무리없이 따라왔습니다. 
  그 방법이 다른이에게 도움이 되길.`,
  siteUrl: `https://noyes.kr/`, 
  

 ### utterances: "ifyaa/gatsby-starter-bee",

타이틀 손바닥사진
assets/profile.png

  ```



> Written with [StackEdit](https://stackedit.io/).
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE3OTIxNzI5NDYsLTI5MDExNTc1M119
-->