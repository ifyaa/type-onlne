
---
title: apollo
date: 2020-05-08
published: true
---
초간단 서브
[참고](https://www.daleseo.com/graphql-apollo-server/)
```js
**index.js**
const { ApolloServer, gql } = require('apollo-server');
const typeDefs = gql`

type Query {
	ping: String
}
`;

const resolvers = {
	Query: {
		ping: () => 'pong'
	}
};

const server = new ApolloServer({
		typeDefs,
		resolvers
});

server.listen().then(({ url }) => {
console.log(`Listening at ${url}`);
});
```

> Written with [StackEdit](https://stackedit.io/).
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTM5MjYwMTE0NywxOTEyNDE2MTk2XX0=
-->