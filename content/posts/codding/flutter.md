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

> Written with [StackEdit](https://stackedit.io/).
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTU4NzUzOTk2MF19
-->