# Ephemeral Store

## Why?

The Store class's use case is to be an ephemeral key-value store that
only persists within the life time of a single user session. It
intentionally provides a similar interface to localStorage or a browser's
cookie storage.

However, it differs from them significantly as it's not persisted and is 
hence not subject to prior cookie consent policies of the European Union.
(At least that's what I'm hoping for lol.)

An alternative to the Store class would be to set a cookie, but omit its
`expires` date. Of course, using a plain JS object would be fine too.

## Installation

```bash
$ npm i --save ephemeral-store
```

## Usage

```js
const EphemeralStore = require("ephemeral-store");
const store = new EphemeralStore();
store.setItem("hello", "world");
store.getItem("hello");
store.removeItem("hello");
store.clear();
```

## License

See [License](./LICENSE).
