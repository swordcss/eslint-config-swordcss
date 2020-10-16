<h1 align="center">SwordCSS ESLint Config</h1>
<h2 align="center">⚔️A shareable ESLint Config⚔️</h2>

### Overview

This is an `eslint` shareable config that is used for `swordcss` projects. This extends the recommended `eslint` config.

<hr />

#### Quotes

Quotes must use double quotes.

```javascript
// Bad
console.log('foo');
// Good
console.log("foo");
```

<hr />

#### References

Use `const` or `let` instead of `var`.

```javascript
// Bad
var foo = require("foo");
// Good
const foo = require("foo");
```

<hr />

#### Functions

Use ES6 arrow functions when using function expressions.

```javascript
// Bad
doCallback("foo", true, function () {
  doSomething();
});
// Good
doCallback("foo", true, () => {
  doSomething();
});
```

<hr />

#### Objects

Create objects with `{}` instead of `new Object()`.

```javascript
// Bad
let foo = new Object();
// Good
let foo = {};
```

<hr />

#### Arrays

Create arrays with `[]` instead of `new Array()`

```javascript
// Bad
let foo = new Array();
// Good
let foo = [];
```

<hr />

#### Primitives

Create primitives with their function wrappers or the actual value itself instead of using a `new` wrapper.

```javascript
// Bad
let foo = new String("foo");
// Good
let foo = "foo";
```

<hr />

#### Semicolons

Semicolons are required at the end of lines.

```javascript
// Bad
;let foo = "foo";
// Good
let foo = "foo";
```

<hr />

#### Commas

Commas cannot have a space before it and must have a space after it.

```javascript
// Bad
const foo = ["bar" ,"foo"];
// Good
const foo = ["bar", "foo"];
```