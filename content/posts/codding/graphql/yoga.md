
title: yoga
date: 2020-05-23
published: true
---
```js
index.js

import { GraphQLServer } from  'graphql-yoga';
import resolvers from  './graphql/resolvers';

const server =  new  GraphQLServer({

typeDefs: "graphql/schema.graphql",
resolvers
});

server.start(() =>  console.log("Graphql Server Running"));
```
```js
resolve.js
const nicolas = {
		name: "Nicolas",
		age: 24,
		gender: "female"
	};

const resolvers = {
	Query: {
		// person () => nicolas
		person: function() {
			return nicolas;
		}
	}
};

export  default resolvers;
```
schema.graphql
```js

type  Nicolas {

name: String!

age: Int!

gender: String!

}

  
  

type  Query {

person: Nicolas  !

}
```
> Written with [StackEdit](https://stackedit.io/).
<!--stackedit_data:
eyJoaXN0b3J5IjpbNTExNDUzNzExXX0=
-->