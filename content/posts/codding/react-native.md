

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
-
-

2020-05-06
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
Aeader.js
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

![Furby](../assets/header.png)
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTIwNDk1OTg5MywxOTg0MjY3Nzg2LDE3Mz
E5OTMwNzQsNzc2NjI5NTk5LDEzMjczNTc0NDMsMjcwODQ1MzE5
XX0=
-->