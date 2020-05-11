
---
 title: gatsby-expo-apollo
date: 2020-05-09  
published: true
---

```

  - expo init

  - # yarn
  yarn add gatsby gatsby-plugin-react-native-web
```


```
	- [`gatsby-config.js`]
	
   module.exports = {
     plugins: [
       `gatsby-plugin-react-native-web`,
       /* ... */
     ],
   }
```
```
   - cp App.js src/pages/index.js
```
-   **웹 시작**
    
    -   🚫 `expo start:web`
    -   ✅ `yarn gatsby develop`
-   **웹 구축**
    
    -   🚫 `expo build:web`
    -   ✅ `yarn gatsby build`
-   **정적 프로젝트 제공**
    
    -   🚫 `serve web-build`
    -   ✅ `yarn gatsby serve`
    - 

> Written with [StackEdit](https://stackedit.io/).
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTI3NTU4OTg5MCwtMTU5NDkzMTg3MywyMT
IzNDQ4NzhdfQ==
-->