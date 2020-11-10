const test = require("ava");

const EphemeralStore = require("../src/index.js");

test("if items can be set", t => {
  const store = new EphemeralStore(); 
  const key = "key";
  const val = "val";
  store.setItem(key, val);
  t.assert(store.storage[key] === val);
});

test("if items can be get", t => {
  const store = new EphemeralStore(); 
  const key = "key";
  const val = "val";
  store.setItem(key, val);
  t.assert(store.getItem(key) === val);
});

test("if items can be removed", t => {
  const store = new EphemeralStore(); 
  const key = "key";
  const val = "val";
  store.setItem(key, val);
  store.removeItem(key);
  t.assert(store.getItem(key) === null);
});

test("if storage can be reset", t => {
  const store = new EphemeralStore(); 
  const key = "key";
  const val = "val";
  store.setItem(key, val);
  store.clear();
  t.assert(typeof store.storage === "object" && Object.keys(store.storage).length === 0);
  t.assert(store.getItem(key) === null);
});
