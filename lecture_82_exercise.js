// Source: https://replit.com/@aneagoie/DataStructures-Hash-Table-exercise

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
  