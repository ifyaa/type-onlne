

---
title: react-native
date: 2020-04-29
published: true
---

목차
![image](https://github.com/ifyaa/type-onlne/blob/master/content/assets/header-01.png)
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
![image](https://github.com/ifyaa/type-onlne/blob/master/content/assets/header.png)
![image](https://ibb.co/2ZbvMmB)
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

```js
**LatestMembers.js**

import React, { Component } from  'react'
import { View, Text, StyleSheet, Image, ScrollView } from  'react-native'
import data from  '../Components/data'

class  LatestMembers  extends  Component {

		state={
			data:data
		}

		latestMembers  = () => {
			return  this.state.data.map( data  => {
				return(
					<View  key={data.id}  style={{alignItems:'center', padding:5}}  >
						<Image  source={{uri:data.user_avatar}}  style={{height:50, width:50, borderRadius: 25, marginHorizontal:22 }}  />
						<Text>{data.username}</Text>
					</View>
					)
				})
			}

render() {
	return (
		<View>
			<View>
				<Text  style={{fontSize: 22, paddingTop: 15}}  >LatestMember</Text>
			</View>
			
			<View  style={styles.container}>
				<ScrollView  horizontal  showsHorizontalScrollIndicator={false}>
				{this.latestMembers()}
				</ScrollView>
			</View>
		</View>
		)
	}
}

const styles=StyleSheet.create({
	container: {
		backgroundColor: '#a4b0be',
		marginVertical: 8
	}
})

export  default LatestMembers;

```
```js
***data.js***
let data;
export  default data = [
	{
		id:"1",
		type: "Fashion",
		headline: "The 6th edition of the body painting",
		user_avatar:"https://i.pravatar.cc/400?img=1",
		username:"Angelina",
		image_link:"https://firebasestorage.googleapis.com/v0/b/mytry-bea8d.appspot.com/o/the%206th%20edition%20of%20the%20body%20painting.jpg?alt=media&token=1bf789a5-a8d8-42cd-ba66-c67853baaa3d"
	},
]
```

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTEwNDY5MjYwMDMsMjQwOTQ0NzEsOTQ2Nj
kzMzE4LDE5NDk5NzY5ODQsMTU3MDIzNDk3NywyMTA0MDcyMDU5
LDQ1Mjk0ODUzMSw4MjEzNTExMzAsMTk4NDI2Nzc4NiwxNzMxOT
kzMDc0LDc3NjYyOTU5OSwxMzI3MzU3NDQzLDI3MDg0NTMxOV19

-->