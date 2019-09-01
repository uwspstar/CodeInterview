JSON Data
// TASK:
// 1. Describe what JSON format is.
// 2. Delete the data types not permitted in JSON.
// 3. Replace placeholder-text with the corresponding data type,
//    properly formatted as JSON.

*** JSON only for data, not program language, not for function, not for the undefined
  
const myJsonObj = {
  myString: [some string],
  myNumber: [some number],
  myNull: [null],
  myBoolean: [false],
  myUndefined: [undefined],     // **** cannot be *****
  myArray: [some array],
  myFunction: [some function],  // **** cannot be *****
  myObject: [some object]
};

// result
Const myJsonObj = {
  "myString": "hello world",
  "myNumber": 12345.6789,
  "myNull": null,
  "myBoolean": true,
  "myArray": [20, 30, "orange"],
  "myObject": {
    "name": "Sam",
    "age": 30
  }
};
