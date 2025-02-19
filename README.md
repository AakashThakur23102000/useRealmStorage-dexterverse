![dexterverse_logo](https://raw.githubusercontent.com/AakashThakur23102000/useRealmStorage-dexterverse/8c4a456dbf2a178c90d7d3792788190543a4afec/images/dexterverse_logo.png)

# React Native Realm Easy Storage (Dexterverse)
A lightweight wrapper around RealmDB for managing key-value storage in React Native, similar to AsyncStorage. This package provides an easy-to-use interface for storing, retrieving, and managing persistent data.

# 📦 Installation
To install and set up the library, run:

```bash
npm i userealmstorage-dexterverse @realm/react realm
```

⚠️Note: Ensure you install both @realm/react and realm for proper functionality.


# 🚀 Features

✅ Store and retrieve key-value pairs  
✅ Update existing values  
✅ Delete specific items... but are they truly gone?  
✅ Get all stored keys... if you dare!  
✅ Get all stored data... it's watching you!  
✅ Clear storage... but the ghosts remain...  

# 🔧 Usage
### 1️⃣ Wrap Your App with RealmWrapperDexterverse
Ensure your app is wrapped with RealmWrapperDexterverse to provide access to Realm storage.
```ts

import React from 'react';
import { RealmWrapperDexterverse } from "userealmstorage-dexterverse";

const App = () => (
    <RealmWrapperDexterverse>
        {/* Your App Components */}
    </RealmWrapperDexterverse>
);

export default App;
```
### 2️⃣ Demo CRUD Operations
Perform basic Create, Read, Update, and Delete operations using RealmStorage.
```ts
import { RealmStorage } from "userealmstorage-dexterverse";

// 📥 Create/Update (Set an item)
RealmStorage.setItem("Name", "Aakash");

// 📤 Read (Get an item)
const name = RealmStorage.getItem("Name");
console.log("Retrieved Name:", name); // Output: Aakash

// ❌ Delete (Remove an item)
RealmStorage.removeItem("Name");
const deletedName = RealmStorage.getItem("Name");
console.log("After Deletion:", deletedName); // Output: null

// 📋 Get all stored keys
const keys = RealmStorage.getAllKeys();
console.log("All Keys:", keys);

// 📦 Get all stored data
const allData = RealmStorage.getAllData();
console.log("All Data:", allData);

// 🔥 Clear all storage
RealmStorage.clear();
console.log("Storage cleared!");
```
# 📌 Methods

| Method                 | Description |
|------------------------|-------------|
| `setItem(key, value)`  | Stores a key-value pair (value is JSON.stringified) |
| `getItem(key)`         | Retrieves the value for a given key (JSON.parsed) |
| `removeItem(key)`      | Deletes a specific item from storage |
| `getAllKeys()`         | Returns an array of all stored keys |
| `clear()`              | Clears all data from storage |
| `getAllData()`         | Returns an array of all key-value pairs (parsed values) |

# 📜 License
MIT License

## 👨‍💻 Authors
- [@AakashThakur23102000](https://github.com/AakashThakur23102000)

## 🚀 About Me
I'm a react native developer.


## 💬 Feedback

If you have any feedback, please mail at aakashthakur20001972@gmail.com.
