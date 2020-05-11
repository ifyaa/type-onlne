---
 title: flutter
date: 2020-05-11  
published: true
---
[enter link description here](https://software-creator.tistory.com/10)
```js
import  'package:flutter/material.dart';
		void  main() =>  runApp(MyApp());

class  MyApp  extends  StatelessWidget {

	@override
	Widget  build(BuildContext context) {

	var imageUrl =  "https://images.pexels.com/photos/912110/pexels-photo-912110.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

	return  MaterialApp(
		title:  '지랄뻑',
		debugShowCheckedModeBanner: false,
	home:  Scaffold(
		appBar:  AppBar( title:  Text('헤드란다'),),

	body :  Column( // 위젯을 세로로 배치.
		children:  <Widget>[
			Text("지랄뻑앱"),
			Text("이제 앱 개발 해보자"),
			Icon(Icons.videocam, color:  Colors.amber),
			Image.network(imageUrl)

					],
				)
			),
		);
	}
}
```
**StatefulWidget**
```js
**스테이트랑 위젯을  따로 관리**
class MyApp extends StatefulWidget { // 위젯 부분, 스테이트를 다루는 부분은 분리되어 있다. 
	 @override

	 _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> { // 스테이트를 관리하고, UI를 그리는 부분. 
	 @override

	 Widget build(BuildContext context) {
		 return MaterialApp(
			 title: "첫 Stateful App",
			 home: Scaffold(
				 appBar: AppBar(
				 title: Text("내 Stateful Widget"),
				 ),
			 body: Container(
			 child: Text("Stateful Widget"),
				 ),
			 ),
		 );
	 }
}
```
##### 예시 - 버튼을 통한 텍스트 변경

_Text_  하나와  _RaiseButton_  두개가 들어갑니다.
```js
class MyApp extends StatefulWidget {

	 @override
	 _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
	 int counter = 0; // Text UI에 표시될 값

	 void increaseCounter() { // 버튼을 누르면 counter 값을 증가시킴
		 setState(() {
		 counter++;
	 });
 }

	 void decreaseCounter() { // 버튼을 누르면 counter 값을 감소시킴
		 setState(() {
		 counter--;
	 });
 }

 @override
 Widget build(BuildContext context) {

	 return MaterialApp(
		 title: "첫 플러터 앱",
		 
		 home: Scaffold(
			 appBar: AppBar(
			 title: Text("내 플러터 앱"),
		 ),
		 body: Container(
			 padding: const EdgeInsets.all(16.0), // 전체적으로 16씩 패딩을 주었음.
			 child: Column( // 세로로 위젯을 배치 
			 children: <Widget>[
		 Text(
			 "$counter",
			 style: TextStyle(fontSize: 160.0),
		 ),
	 Row( // 가로로 위젯을 배치, 안에 버튼 2개가 들어가 있음. 
		 mainAxisAlignment: MainAxisAlignment.spaceEvenly, // 위젯끼리 같은 공간만큼 띄움
		 children: <Widget>[
		 
		 RaisedButton(
		 child: Text(
		 "Add",
		 style: TextStyle(color: Colors.white),
	 ),
	 color: Colors.red, // 버튼 색은 빨강색으로
	 onPressed: () { // 버튼을 누르면 안에 있는 함수를 실행
		 increaseCounter();
		 },
	 ),
	 
	 RaisedButton(
		 child: Text(
		 "Subtract",
		 style: TextStyle(color: Colors.white),
		 ),
	 color: Colors.blue, // 버튼 색은 파란색으로
	 onPressed: () { // 버튼을 누르면 안에 있는 함수를 실행
	 decreaseCounter();
	
										 },
									 ),
								 ],
							 )
						 ],
					 ),
				 ),
			 ),
		 );
	 }
}
```
> Written with [StackEdit](https://stackedit.io/).
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTEwMjA0ODg5NDIsMTEzMDQzNzAwMF19
-->