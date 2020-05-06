

---
title: react-native
date: 2020-04-29
published: true
---

목차
![Furby](../assets/header-01.png)
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
-
-

2020-05-06
 [참고사이트](https://www.youtube.com/watch?v=TcvyZaSzDnw&list=PLvjHFH8I1eYYoOsUgEfqA-cAqqMsIJGvT&index=4)
![image](../assets/header.png)
[enter link description here](https://ibb.co/2ZbvMmB)
```js
App.js
import React, {Component} from  'react';
import { View, Text } from  'react-native';
import Hearding from  './Hearding'

class  App  extends  Component {
render() {
	return (
		<View  style={{flex:1, padding:5}}>
		<Hearding  />
			<Text>wlfkf</Text>
		</View
		);
	};
}
export  default App;
```
```js
Header.js
import React, { Component} from  'react';
import {View, Text, StyleSheet} from  'react-native';

class  Hearding  extends  Component {

render() {
	return (
		<View  style={styles.container}>
			<Text  style={{fontSize: 20, textAlign: 'center', marginVertical:15}}>지랄뻑이다 </Text>
		</View>
		)
	}
}
const styles = StyleSheet.create ({
	container: {
		backgroundColor: '#ff7550',
		borderRadius: 8,
		elevation: 10,
	}
})
export  default Hearding;
```

![Furby](../assets/header-01.png)

[react-native-linear-gradient 설치](https://github.com/react-native-community/react-native-linear-gradient)
맥북
1, yarn add react-native-linear-gradient  (npm 설치는 안됨--이유는 몰라)
2, 아이폰 시물레이터에 실행하려면  ios/pod install 
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTU3MDIzNDk3NywyMTA0MDcyMDU5LDQ1Mj
k0ODUzMSw4MjEzNTExMzAsMTk4NDI2Nzc4NiwxNzMxOTkzMDc0
LDc3NjYyOTU5OSwxMzI3MzU3NDQzLDI3MDg0NTMxOV19
-->