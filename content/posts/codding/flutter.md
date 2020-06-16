---
title: flutter
date: 2020-05-08
published: true
---
**[개발환경과 설치](https://ghyeok.io/development/fultter-install-on-mac/)
```ls
 flutter create my_app**
 ```
###시작 
```js
맥에서
 open -a Simulator
 
 flutter run

web에서
flutter run -d chrome

flutter run -d emulator-5554
```
```js
android에서
vscode 하단오른쪽 nodevice선택 
flutter run
```
```
에러체크
flutter build apk --verbose
```
```js
import 'package:flutter/material.dart';

void main() {
  
  runApp(Text('HelloWorld', textDirection: TextDirection.ltr),);
}}
```
![](https://i.ibb.co/ZXGjLww/flutter-000.png)
```js
import 'package:flutter/material.dart';

void main(){
  runApp(                                  // 앱을 실행
    Center(                                // 화면 중앙
      child: Text(                         // 중앙 내부에 텍스트 삽입
        "IFYAA",               
        style:  TextStyle(fontWeight:  FontWeight.bold),
        textDirection: TextDirection.ltr,  // 텍스트는 왼쪽에서 오른쪽을 기술
      ),
    )
  );
}
```
[Text관련](https://medium.com/@larkbless/flutter-text-widget-%EC%95%8C%EC%95%84%EB%B3%B4%EA%B8%B0-a0f8c4c196d1)
![]((https://github.com/ifyaa/type-onlne/blob/master/content/assets/header.png)
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
![img](https://github.com/ifyaa/type-onlne/blob/master/content/assets/flutter-03.png)
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
다른기초
[enter link description here](https://fkkmemi.github.io/ff/ff-001/)

```js
**main.dart**


import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Center(
        child: Text('start!!!')
      ),
    );
  }
}
```
```js
import  'package:flutter/material.dart';

void  main()
	{runApp(MyApp());}

class  MyApp  extends  StatelessWidget {
		@override
		Widget  build(BuildContext context) {
	return  MaterialApp(
		home:  Scaffold(
			appBar:  AppBar(
				leading:  Icon(Icons.menu),
				title:  Text('지랄들'),
			
			actions:  <Widget>[
				IconButton(
					icon:  Icon(Icons.mode_comment),
					onPressed: () {
					print('pressed');
				}
			),
				IconButton(
					icon:  Icon(Icons.money_off),
					onPressed: () {
					print('지랄아');
				}
			),
		],
	),
				body:  Center(child:  Text('hello'),)
			)
		);
	}
}
```
치세가 왕한철
[부수공부](https://m.blog.naver.com/PostView.nhn?blogId=lik311&logNo=221720696046&targetKeyword=&targetRecommendationCode=1)
34. 夂 뒤져올 치 : 그쳐있는 발을 끌고가니 뒤져 옴. 冬 겨울 동
35. 夊 천천히 걸을 쇠
36. 尢 절름발이 왕 :
37. 屮 싹날 철
> Written with [StackEdit](https://stackedit.io/).
```js
import  'package:flutter/material.dart';

class  HelloRectangle  extends  StatelessWidget {
	@override
	Widget  build(BuildContext context){
		return  Container(
			color:  Colors.greenAccent,
		);
	}
}

void  main() {
	runApp(
		MaterialApp(
		debugShowCheckedModeBanner: false,
		
		home:  Scaffold(
				appBar:  AppBar(
				title:  Text('hello eee')
					),
				body:  HelloRectangle(),
			),
		)
	);
}
```
사진 넣기
```js

Widget  imgSe(){
	return  Image.asset(
		'images/lake.jpg',
			width:  600,
			height:  240,
			fit:  BoxFit.cover,
		);
	}
}
```
flutter gackages get 
[enter link description here](https://fkkmemi.github.io/ff/ff-004/)
```js
**StatefulWidget**
import  'package:flutter/material.dart';
	void  main() {
		runApp(MyApp());
	}
	
	class  MyApp  extends  StatelessWidget {
		@override
		Widget  build(BuildContext context) {
			return  MaterialApp(
				home:  HomeWidget()
			);
		}
	}
	class  HomeWidget  extends  StatefulWidget {
		@override
			_HomeWidgetState  createState(){
			_HomeWidgetState();
		}
	}
	class  _HomeWidgetState  extends  State<HomeWidget> {
		@override
			Widget  build(BuildContext context){
				return  Scaffold(
					appBar:  AppBar(
					title:  Text('hello~')
					),
					body:  Center(
						child:  Text('hhi~~~')
				)
			);
		}
}
```
```js
class _HomeWidgetState extends State<HomeWidget> {
  **int i = 0;**
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('hiru~'),
        actions: <Widget>[
          IconButton(
            icon: Icon(Icons.send),
            onPressed: () {
	             setState(() {
					i++;
					if(i >  2) i =  0;
			  });
            },
          )
        ],
      ),
      body: Center(
        **child: Text('hi ~ $i')**
      )
    );
  }
}
```
```js

body: Center(
  // child: ((i % 2 == 0) ? Text('hi ~ $i') : Icon(Icons.sentiment_dissatisfied))
  body: XXX(i: i)
)
```
```js

class XXX extends StatelessWidget {

  XXX({Key key, this.i: 0}) : super(key: key);
  final int i;
  
  @override
  Widget build(BuildContext context) {
    return Center(
      child: _change(i)
    );
  }
  Widget _change (i) {
    if (i == 0) return CircularProgressIndicator();
    else if (i == 1) return Icon(Icons.settings);
    else return Text('yyy: $i');
  }
}
```

[##페이지 전환](https://fkkmemi.github.io/ff/ff-005/) # Flutter와 Firebase로 Android iOS 둘 다 만들기 5 화면 전환  해보기  강의보기 진행중
  ### 클래스 생성
```js
class AppState {
  bool loading;
  String user;
  AppState(this.loading, this.user);
}
```
### 인스턴스 생성
```js
// var app = AppState(true, '');  
// final AppState app = AppState(true, '');  
final app = AppState(true, '');  
```
### delay 함수 제작
```js
_delay () {
  Future.delayed(Duration(seconds: 1), () {
    setState(() => app.loading = false);
  });  
}
```
### State 클래스의 시작부

바로 initState라는 곳입니다.
```js
class _HomeWidgetState extends State<HomeWidget> {
  final app = AppState(true, '');  
  @override
  void initState() { 
    super.initState();    
    _delay();
  }
  _delay () {
    Future.delayed(Duration(seconds: 1), () {
      setState(() => app.loading = false);
    });  
  }
  // ..
```
### 상황별 렌더링
```js
@override
Widget build(BuildContext context) {
  if (app.loading) return _loading();
  if (app.user.isEmpty) return _signIn();
  return _main();
}
```
### _loading

```js
Widget _loading () {
  return Scaffold(
    appBar: AppBar(title: Text('loading...')),
    body: Center(child: CircularProgressIndicator())
  );
}
```
### _signIn

```js
Widget _signIn () {
  return Scaffold(
    appBar: AppBar(
      title: Text('login page')
    ),
    body: Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: <Widget>[
          Text('id'), Text('pass'),            
          RaisedButton(
            child: Text('login'), 
            onPressed: () {
              setState(() {
                app.loading = true;
                app.user = 'my name';
                _delay();
              });
            }
          )
        ],
      )
    )    
  );
}
```
### _main

```js
Widget _main () {
  return Scaffold(
    appBar: AppBar(
      title: Text(app.user),
      actions: <Widget>[
        IconButton(
          icon: Icon(Icons.account_circle),
          onPressed: () {
            setState(() {
              app.user = '';
              app.loading = true;
              _delay();
            });
          },
        )
      ],
    ),
    body: Center(child: Text('contents'))
  );
}
```

text Containar
[기초 동영상](https://www.youtube.com/watch?v=fvtyGySLlfs&list=PLybADvIp2cxiVOEHi9ooCHP2tAAihHQPX&index=3)

##flutter로 작업을 하려는데 기초가 너무부족하다...텍스트변경도 제대로 못하니...일단 텍스트와 이미지 그리고 그외의 속성부터 파악해야 될것같아서..

```js
import  'package:flutter/material.dart';

void  main(){

runApp(MyApp());

}

  

class  MyApp  extends  StatelessWidget {

@override

Widget  build(BuildContext context) {

return  MaterialApp(

title:  'flutter Demo',

theme:ThemeData(

primarySwatch:  Colors.blue,

),

home:  MyHomePage(),

);

}

}

  

class  MyHomePage  extends  StatelessWidget {

  

@override

Widget  build(BuildContext context) {

return  Scaffold(

body:  Center(

child:  Container (

padding:  EdgeInsets.all(8.0),

// constraints: BoxConstraints.expand(),

alignment:  Alignment.center,

width:  200,

height:  200,

decoration:  BoxDecoration(

color:  Colors.blue,

borderRadius:  BorderRadius.all(Radius.circular(20.0)),

boxShadow: [

BoxShadow(

color:  Colors.red[100],

blurRadius:  4.0,

spreadRadius:  2.0,

)

],

gradient:  LinearGradient(
	begin:  Alignment.centerLeft,
	end:  Alignment.centerRight,
		colors: [
			Colors.blue,
			Colors.red

]),

),

child:  Text('Flutter Essintials', style:  TextStyle(fontSize:  20, color:  Colors.white),))),

);

}

}
```

text padding
```js
@override
Widget  build(BuildContext context) {
	body:  Center(
		child:  Container(
			color:  Colors.red,
			child:  Padding(
				padding:  EdgeInsets.all(15),
				child:  Text('welcome', style:  TextStyle(color:  Colors.white, fontSize:  20),),

)

```
web sample 바탕화면
```js
import 'package:flutter/material.dart';
import 'package:myflu/Navbar/Navbar.dart';
void main(){
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'flutter Demo',
      theme:ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(),
    );
  }
}

class MyHomePage extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return Scaffold( 
        body: Container(
          decoration: BoxDecoration(
            gradient: LinearGradient(
              begin: Alignment.centerLeft,
              end:Alignment.bottomRight,
              colors: [Color.fromRGBO(200, 20, 50, 1.0),Color.fromRGBO(36,11,54,1.0)]
            )
          ),
          child: Column(
            children: <Widget>[Navbar()]
          ),
        )
    );
  }
}
     
```

Navbar.dart  
```js
import 'package:flutter/material.dart';

class Navbar extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, constraints){
        if (constraints.maxWidth > 1200) {
          return DesktopNavbar();
        } else if (constraints.maxWidth > 800 && constraints.maxWidth < 1200) {
          return DesktopNavbar();
        } else {
          return MobileNavbar();
        }
      },
    );
  }
}

class DesktopNavbar extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Row(
        children: <Widget>[
          Text(
            "RetroPortal Studio",
            style: TextStyle(
              fontWeight: FontWeight.bold, color: Colors.white, fontSize: 30
            ),
          ),
          Text(
            "About Us",
            style: TextStyle(color: Colors.white),
          ),
        ]
      ),
    );
  }
}

class MobileNavbar extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(

    );
  }
}
```

DesktopNavbar
```js
import 'package:flutter/material.dart';

class Navbar extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, constraints){
        if (constraints.maxWidth > 1200) {
          return DesktopNavbar();
        } else if (constraints.maxWidth > 800 && constraints.maxWidth < 1200) {
          return DesktopNavbar();
        } else {
          return MobileNavbar();
        }
      },
    );
  }
}

class DesktopNavbar extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 20, horizontal: 40), //padding
  
    child: Container(
      constraints: BoxConstraints(maxWidth: 1200),    //space
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,     //space
        children: <Widget>[
          Text(
            "RetroPortal Studio",
            style: TextStyle(
              fontWeight: FontWeight.bold, color: Colors.white, fontSize: 30
            ),
          ),

          Row(
            children: <Widget>[
      
          Text(
            "home",
            style: TextStyle(color: Colors.white),
          ),
          SizedBox(
            width: 30,
          ),
          Text(
            "portfolio",
            style: TextStyle(color: Colors.white),
          ),
                    SizedBox(
            width: 30,
          ),
          Text(
            "About Us",
            style: TextStyle(color: Colors.white),
          ),
                    SizedBox(
            width: 30,
          ),
              MaterialButton(    //Button
                color: Colors.pink,
                shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.all(Radius.circular(20.0))),
                      onPressed: (){},
                      child: Text(
                        "Get Started",
                        style: TextStyle(color: Colors.white),
                    ),

                ),
             ]
          )
        ]
      ),
    )
    );
  }
}

class MobileNavbar extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(

    );
  }
}
```

MobileNavbar
```js
class MobileNavbar extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Padding(
	      padding: const EdgeInsets.symmetric(vertical: 20, horizontal: 40),
	          child: Container(
	            child: Column(children: <Widget>[
	                Text(
	                  "ifyaa ",
	                  style: TextStyle(
	                    fontWeight: FontWeight.bold, color: Colors.white, fontSize: 30 ),
	                ),

          Padding(
	         padding: const EdgeInsets.all(12.0),
	           child: Row(
	             mainAxisAlignment: MainAxisAlignment.center,
	             children: <Widget>[
      
          Text(
            "home",
            style: TextStyle(color: Colors.white),
          ),
          SizedBox(
            width: 30,
          ),
          Text(
            "portfolio",
            style: TextStyle(color: Colors.white),
          ),
                    SizedBox(
            width: 30,
          ),
          Text(
            "About Us",
            style: TextStyle(color: Colors.white),
          ),
                    SizedBox(
            width: 30,
          ),
              MaterialButton(
                color: Colors.green,
                shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.all(Radius.circular(20.0))),
                      onPressed: (){},
                      child: Text(
                        "Get Started",
                        style: TextStyle(color: Colors.white),
                    ),

                ),
             ])
          ),
       ])
      )
    );
  }
}
```
![](https://i.ibb.co/tz7svQC/flutter-01.png)
```js
// lib/main.dart
import 'package:flutter/material.dart';
import 'package:myapp/widget/bottom_bar.dart';
import 'package:myapp/screen/home_screen.dart';

void main() => runApp(MyApp());

class MyApp extends StatefulWidget {
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  TabController controller;
  @override

  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Bbongflix',
      theme: ThemeData(
        brightness: Brightness.dark,
        primaryColor: Colors.black,
        accentColor: Colors.white,
      ),
      home: DefaultTabController(
        length: 4,
        child: Scaffold(
          body: TabBarView(
            physics: NeverScrollableScrollPhysics(),
            children: <Widget>[
              HomeScreen(),

              Container(
                child: Center(
                  child: Text('search'),
                ),
              ),
              Container(
                child: Center(
                  child: Text('save'),
                ),
              ),
              Container(
                child: Center(
                  child: Text('more'),
                ),
              ),
            ],

            
          ),
          bottomNavigationBar: Bottom(),
        ),
      ),
    );
  }
}
```
바탕탭
![](https://i.ibb.co/XJzPc1h/flutter03.png)
```js
```js
// lib/widget/bottom_bar.dart
import 'package:flutter/material.dart';

class Bottom extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.black,
      child: Container(
        height: 50,
        child: TabBar(
          labelColor: Colors.white,
          unselectedLabelColor: Colors.white60,
          indicatorColor: Colors.transparent,
          tabs: <Widget>[
            Tab(
              icon: Icon(
                Icons.home,
                size: 18,
              ),
              child: Text(
                '홈',
                style: TextStyle(fontSize: 9),
              ),
            ),
            Tab(
              icon: Icon(
                Icons.search,
                size: 18,
              ),
              child: Text(
                '검색',
                style: TextStyle(fontSize: 9),
              ),
            ),
            Tab(
              icon: Icon(
                Icons.save_alt,
                size: 18,
              ),
              child: Text(
                '저장한 콘텐츠 목록',
                style: TextStyle(fontSize: 9),
              ),
            ),
            Tab(
              icon: Icon(
                Icons.list,
                size: 18,
              ),
              child: Text(
                '더보기',
                style: TextStyle(fontSize: 9),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
```
이미지
![](https://i.ibb.co/Hn86JMf/flutter02.png)
```js
flutter:
  uses-material-design: true
  assets:
   - assets/images/
```
```js
import 'package:flutter/material.dart';

class HomeScreen extends StatefulWidget {
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  @override
  void initState() {
    super.initState();
  }

@override
Widget build(BuildContext context) {
  return TopBar();
  }
}
class TopBar extends StatelessWidget {
@override
Widget build(BuildContext context) {
  return Container(
    padding: EdgeInsets.fromLTRB(20, 7, 20, 7),
    child: Row(children: <Widget>[
      Image.asset(
        'assets/images/logo_01.png',      
        fit: BoxFit.contain,
        height: 25,
      ),
      Container(
        padding: EdgeInsets.only(right: 1),
        child: Text(
          'TV 프로그램',
          style: TextStyle(fontSize: 14),
        )
      )
    ])
  );
}
}
```

다른곳에서 다시 [참조](https://www.youtube.com/watch?v=nPa-53FXebU&list=PLmnT6naTGy2SC82FMSCrvZNogg5T1H7iF&index=8)

![](https://i.ibb.co/mvJjjfN/flutter04.png)

```js
import 'package:flutter/material.dart';

void main(){
  runApp(
    MaterialApp(
      home: HomePage(),
    )
  );
}

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: new AppBar(
        backgroundColor: Colors.red,
        title: Text('ShopApp'),
        actions: <Widget> [
          new IconButton(icon: Icon(Icons.search, color: Colors.white,), onPressed: (){}),
          new IconButton(icon: Icon(Icons.shopping_cart, color: Colors.white,), onPressed: (){}),
        ],
      ),
    );
  }
}
```

![](https://i.ibb.co/1z1pDJF/flutter05.png)
```js
import 'package:flutter/material.dart';

void main(){
  runApp(
    MaterialApp(
      home: HomePage(),
    )
  );
}

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: new AppBar(
        backgroundColor: Colors.red,
        title: Text('Shop'),
        actions: <Widget> [
          new IconButton(icon: Icon(Icons.search, color: Colors.white,), onPressed: (){}),
          new IconButton(icon: Icon(Icons.shopping_cart, color: Colors.white,), onPressed: (){}),
        ],
      ),
      drawer: new Drawer(
        child: new ListView(
          children: <Widget>[
            new UserAccountsDrawerHeader(
              accountName: Text('Santos Enoque'), 
              accountEmail: Text('santosenoque.ss@gmail.com'),
            currentAccountPicture: GestureDetector(
              child: new CircleAvatar(
                backgroundColor: Colors.grey,
              ),
            ),
            )
          ],
        )
      ),
    );
  }
}
```
![](https://i.ibb.co/26mLczq/flutter06.png)

```js
import 'package:flutter/material.dart';

void main(){
  runApp(
    MaterialApp(
      home: HomePage(),
    )
  );
}

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: new AppBar(
        backgroundColor: Colors.red,
        title: Text('Shop'),
        actions: <Widget> [
          new IconButton(icon: Icon(Icons.search, color: Colors.white,), onPressed: (){}),
          new IconButton(icon: Icon(Icons.shopping_cart, color: Colors.white,), onPressed: (){}),
        ],
      ),
      drawer: new Drawer(
        child: new ListView(
          children: <Widget>[
            new UserAccountsDrawerHeader(
              accountName: Text('Santos Enoque'), 
              accountEmail: Text('santosenoque.ss@gmail.com'),
            currentAccountPicture: GestureDetector(
              child: new CircleAvatar(
                backgroundColor: Colors.grey,
                child: Icon(Icons.person, color: Colors.white,),
              ),
            ),
           decoration: new BoxDecoration(
             color: Colors.red
           ),
            ),
//body
        
         InkWell(
           onTap: (){},
           child: ListTile(
             title: Text('Home Page'),
             leading: Icon(Icons.home),
           ),
         ),
         InkWell(
           onTap: (){},
           child: ListTile(
             title: Text('My account'),
             leading: Icon(Icons.person),
           ),
         ),
         InkWell(
           onTap: (){},
           child: ListTile(
             title: Text('My Order'),
             leading: Icon(Icons.shopping_basket),
           ),
         ),
         InkWell(
           onTap: (){},
           child: ListTile(
             title: Text('Categoris'),
             leading: Icon(Icons.dashboard),
           ),
         ),
         
         InkWell(
           onTap: (){},
           child: ListTile(
             title: Text('Favourites'),
             leading: Icon(Icons.favorite),
           ),
         ),

        Divider( color: Colors.black87),

         InkWell(
           onTap: (){},
           child: ListTile(
             title: Text('Settings'),
             leading: Icon(Icons.settings),
           ),
         ),
         InkWell(
           onTap: (){},
           child: ListTile(
             title: Text('About'),
             leading: Icon(Icons.help),
           ),
         ),
          ],
        )
      ),
    );
  }
}
```
![](https://i.ibb.co/7twfBHZ/flutter07.png  )
![]( https://i.ibb.co/ypWb55B/flutter08.png )
![](https://i.ibb.co/DbqTz0R/flutter09.png  )

```js
dependencies: 
 carousel_pro: ^1.0.0
 ```
```js
import 'package:flutter/material.dart';
import 'package:fluApp/components/horizontal_listview.dart';
import 'package:carousel_pro/carousel_pro.dart';

void main(){
  runApp(MaterialApp(
    home: HomePage()
    )
  );
}
class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
  Widget image_carousel = new Container(
    height: 200.0,
    child: new Carousel(
      boxFit: BoxFit.cover,
        images: [
            AssetImage('images/c1.jpg'),
            AssetImage('images/m1.jpeg'),
            AssetImage('images/w3.jpeg'),
            AssetImage('images/w4.jpeg'),
            AssetImage('images/m2.jpg'),
          ],
          autoplay: false,
          animationCurve: Curves.fastOutSlowIn,
          animationDuration: Duration(milliseconds: 1000),
    ),
  );
    return Scaffold(
      appBar: new AppBar(
        title: Text('Shop'),
        actions: <Widget> [
          new IconButton(icon: Icon(Icons.search, color: Colors.white,), onPressed: (){},),
        ],
      ),
      drawer: new Drawer(

      ),

      body: new ListView(
        children: <Widget>[
          image_carousel,

          new Padding(padding: const EdgeInsets.all(8.0),
          child: new Text('Categories'),
          ),
          HorezontalList(),
        ],
      )
    );
  }
}

```
![](https://i.ibb.co/jJ9vkTD/flutter-11.png)
```js
이미지가 안보이면..yml확인할것
  assets:
   - images/
   - images/cats/
```
```js
***horizontal_listview.dart'***
import 'package:flutter/material.dart';

class HorezontalList extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      height: 80.0,
      child: ListView(
        scrollDirection: Axis.horizontal,
        children: <Widget> [
          Category(
            image_location: 'images/cats/tshirt.png',
            image_caption:'shirt',
          )
       

        ],
      ),
    );
  }
}

class Category extends StatelessWidget {
  final String image_location;
  final String image_caption;

  Category({
    this.image_location,
    this.image_caption,
  });

 
  @override
  Widget build(BuildContext context) {
    return Padding(padding: const EdgeInsets.all(2.0),
    child: InkWell(onTap: (){},
    child: Container(
      width: 100.0,
        child: ListTile(
        title: Image.asset(image_location, width: 100.0, height: 80.0,),
        subtitle: Text(image_caption),
          ),
    )
      )
    );
  }
}
```
```js
     subtitle: Container(
          alignment: Alignment.topCenter,
          child: Text(image_caption, style: new TextStyle(fontSize: 12.0),),
        )
```

![](https://i.ibb.co/y6LTK8Z/flutter-12.png)
```js

## *products.dartproducts.dart*

import 'package:flutter/material.dart';

class Products extends StatefulWidget {
  @override
 _ProductsState createState() => _ProductsState();
}

class _ProductsState extends State<Products> {
  var product_list = [
   { 
    "name": "Blazer",
    "picture": "images/products/blazer1.jpeg",
    "old_price": 120,
    "price": 85,
    },
   { 
    "name": "Red dress",
    "picture": "images/products/dress1.jpeg",
    "old_price": 100,
    "price": 50,
    },
  ];
  @override
    Widget build(BuildContext context) {
    return GridView.builder(
      itemCount: product_list.length,
      gridDelegate: new SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 2), 
      itemBuilder: (BuildContext context, int index){
        return Single_prod(
          prod_name: product_list[index]['name'],
          prod_picture: product_list[index]['picture'],
          prod_old_price: product_list[index]['old_price'],
          prod_price: product_list[index]['price'],
        );
      },);
  }
}

class Single_prod extends StatelessWidget {
  final prod_name;
  final prod_picture;
  final prod_old_price;
  final prod_price;

  Single_prod({
    this.prod_name,
    this.prod_picture,
    this.prod_old_price,
    this.prod_price,
  });
  @override
  Widget build(BuildContext context) {
    return Card(
      child: Hero(
        tag: prod_name,
        child: Material(
          child: InkWell(onTap: (){},
            child: GridTile(
              footer: Container(
                color: Colors.white70,
                child: ListTile(
                  leading: Text(prod_name, style: TextStyle(fontWeight: FontWeight.bold),),
                ),
              ),
              child: Image.asset(prod_picture,
              fit: BoxFit.cover,)),
          ),
        )
      )
    );
  }
}



```

![](https://i.ibb.co/bFcF7y5/flutter-13.png)
[here](https://www.youtube.com/watch?v=zZdbCSDlhx8&list=PLmnT6naTGy2SC82FMSCrvZNogg5T1H7iF&index=15)
라우터
![](https://i.ibb.co/Tmz6Mcw/flutter-14.png)

##페이지 전환
![](https://i.ibb.co/syGb1s9/flutter-15.png)
## route

```js
//새화면으로 이동
class MyButton extends StatelessWidget {
  @override 
  Widget build(BuildContext context) {
    return InkWell(
      child: Container(
        padding: EdgeInsets.all(12.0),
        child: Text('ifyaa'),
      ),
      onTap: () {
       Navigator.of(context).push(new MaterialPageRoute(
         builder: (contest)=> new ProductDetail()));
      },
    );
  }
}
//  화면아래에 표시
      onTap: () {
        Scaffold.of(context).showSnackBar(SnackBar(content: Text('Tap')));
      },
```

```js
product_derail.dart

import 'package:flutter/material.dart';

class ProductDetail extends StatefulWidget {
  @override
  _ProductDetailState createState() => _ProductDetailState();
}
class _ProductDetailState extends State<ProductDetail>{
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: new AppBar(
        backgroundColor: Colors.red,
        title: Text('ShopApp'),
        actions: <Widget> [
          new IconButton(
	          icon: Icon(
	          Icons.search, color: Colors.white,), onPressed: (){}),
          new IconButton(
	          icon: Icon(
	          Icons.shopping_cart, color: Colors.white,), onPressed: (){}),
        ]
      )
    );
  }
}
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTUxMzQ0MjQ3OSw2MzYzMzc0MDUsLTI4Nj
EzMzQxNiwtMTQyNDU5ODQzMiwtNTE5MjQ3MjI0LDE2MjcwNTQ0
MjcsLTc4Mjg0NTA4MywtMzU4ODE0NzA4LC04MjQ5NDk2OTUsNz
c3MDI0ODYxLC0xMDg5OTg0ODc2LC0yMDMyNzIwMDUzLC05MjQ4
MzA3NTIsMTM3NDY5MzM2OCwtMTM5MTA5NzE5LC0yMTM2OTI3Nj
cxLDExOTAzNzE5NjQsLTU2NTcxNTg2NCwxNzgyODEwNCwyNTU5
NDEwNzFdfQ==
-->