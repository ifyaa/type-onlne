

---
title: react-native
date: 2020-04-29
published: true
---

목차

[enter link description here](https://ibb.co/98w2djd)

```js
MainScreen.tsx

import  React  from  'react';

import { View, Text, StyleSheet } from  'react-native';

  

export  default  class  MainSereen  extends  React.Component {

render(){

return  <View  style={StyleSheet.container}>

<Text>MainScreen Page</Text>

</View>

}

}

  

const  styles = StyleSheet.create ({

container: {

flex:  1,

alignItems:  'center',

justifyContent:  'center',

}

})
```
```js
App.tsx
import  React  from  'react';
import { StyleSheet, Text, View } from  'react-native';

import {createStackNavigator} from  'react-navigation-stack';
import {createAppContainer} from  'react-navigation';
import  MainScreen  from  './Components/MainScreen';

const  RootStack = createStackNavigator(

{
Main:{

screen:  MainScreen
}
}
);

class  App  extends  React.Component {

render() {

return  <RootStack  />;

}
}

export  default  createAppContainer(RootStack);
```

https://ibb.co/2ZbvMmB
<!--stackedit_data:
eyJoaXN0b3J5IjpbODYzMzM4NzkyLDc3NjYyOTU5OSwxMzI3Mz
U3NDQzLDI3MDg0NTMxOV19
-->