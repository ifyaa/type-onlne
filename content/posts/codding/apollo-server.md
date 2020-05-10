---
 title: apollo-server 
date: 2020-05-09  
published: true
---
[enter link description here](https://www.daleseo.com/graphql-apollo-server/)
```js
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
eyJoaXN0b3J5IjpbMTQ3NTMzNTk2MV19
-->