
---
title: code
date: 2020-03-08
published: true
---

```js
import React from "react";

const Dump = props => (
  <div
    style={{
      fontSize: 20,
      border: "1px solid #efefef",
      padding: 10,
      background: "white"
    }}
  >
    {Object.entries(props).map(([key, val]) => (
      <pre key={key}>
        <strong style={{ color: "white", background: "red" }}>{key} 💩</strong>
        {JSON.stringify(val, "", " ")}
      </pre>
    ))}
  </div>
);

render(<Dump props={["One", "Two", "Three", "Four"]} />);
```
Hello, world!

> Written with [StackEdit](https://stackedit.io/).
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTI5MDA1MDQ5M119
-->