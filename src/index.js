// NOTE: The Store class's use case is to be an ephemeral key-value store that
// only persists within the life time of a single user session. It
// intentionally provides a similar interface to localStorage or a browser's
// cookie storage.
//
// However, it differs from them significantly as it's not persisted and is 
// hence not subject to prior cookie consent policies of the European Union.
// (At least that's what I'm hoping for lol.)
//
// An alternative to the Store class would be to set a cookie, but omit its
// `expires` date.

class EphemeralStore {
  constructor() {
    this.storage = {};
  }

  setItem(key, val) {
    this.storage[key] = val;
  }

  getItem(key) {
    const val = this.storage[key];

    // NOTE: EphemeralStore's interface is built after localStorage. When
    // accessing a non-existent item in FF83 with `localStorage.getItem`, it
    // returns null. Hence we do the same here.
    if (val === undefined) {
      return null;
    } else {
      return val;
    }
  }

  removeItem(key) {
    delete this.storage[key];
  }

  clear() {
    this.storage = {};
  }
}

module.exports = EphemeralStore
