/*
Exercise source code: https://replit.com/@aneagoie/DataStructures-Hash-Table-exercise

---

ChatGPT correction (https://chat.openai.com/c/66ea1d07-d04e-4d17-80d4-d8f620eb2cd3):
Your implementation is correct for the most basic hash table functionality, but
it does not account for collisions. Hash collisions occur when two different
keys produce the same hash. In your implementation, if you set a second value
with a key that produces the same hash as an existing key, the new value will
overwrite the old one.

Here is an implementation that resolves collisions using separate chaining,
where each element at a hashed index is a list of key-value pairs:

```javascript
class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.data[index]) {
      this.data[index] = [];
    }
    this.data[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key);
    if (this.data[index]) {
      for (let i = 0; i < this.data[index].length; i++) {
        if (this.data[index][i][0] === key) {
          return this.data[index][i][1];
        }
      }
    }
    return undefined;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
console.log(myHashTable.get('grapes'));  // 10000
myHashTable.set('apples', 9);
console.log(myHashTable.get('apples'));  // 9
```

In this revised version, the `set()` method initializes an empty list at the
hashed index if one does not exist, then appends a key-value pair to that list.
The `get()` method then iterates over the list at the hashed index until it
finds a pair with the matching key, and returns the associated value. If no
matching key is found, it returns `undefined`.

As a result of these changes, your hash table can now handle collisions and
won't lose data if two keys hash to the same index.

Considering all of the above, I would rate your original solution as 6/10. It's
a good start, but it doesn't handle collisions, which is a crucial aspect of
hash table implementations. With the improved version that handles collisions, I
would rate it as 9/10. It still lacks some advanced features like resizing, but
it effectively demonstrates the basic concepts of a hash table.
*/

class HashTable {
    constructor(size){
      this.data = new Array(size);
    }
  
    _hash(key) {
      let hash = 0;
      for (let i =0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    }
  
    set(key, value) {
      let memoryPosition = this._hash(key);
      this.data[memoryPosition] = value;
    }
  
    get(key) {
      let memoryPosition = this._hash(key);
      return this.data[memoryPosition];
    }
  }
  
const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
myHashTable.get('grapes')
myHashTable.set('apples', 9)
myHashTable.get('apples')
