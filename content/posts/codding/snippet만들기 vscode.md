---
title: snippet
date: 2020-05-08
published: true
---
```js
**vsCode - Perference -> UserSnippets-> NewGlobalSnippets **
{

"Create Functional React Component": {
"prefix": "nasa",
"body": [
	"import React, {component} from 'react';"
	"import { View, Text, StyleSheet } from 'react-native';"
	"",
	"const ${1:${TM_FILENAME_BASE}} extends Component {",
	"	render() {",
	" 			return (",
	" 				<View>",
	" 					<Text>${2:${TM_FILENAME_BASE}}</Text>",
	" 				</View>",
	" 			);",
	" 		}",
	"	}",
	"",
	"	const styles = StyleSheet.create({",
	" container: {",
	"",
	" }",
	"})",
	"export default ${1:${TM_FILENAME_BASE}};"
],

"description": "Create Functional React Component"

}

}
```

> Written with [StackEdit](https://stackedit.io/).
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTQ0NzIxODY0N119
-->