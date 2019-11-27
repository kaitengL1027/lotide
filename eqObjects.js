const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

function eqArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

function eqObjects(obj1, obj2) {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);
  let tf = false; 
  
  if (keys1.length !== keys2.length) {
    tf = false;
    console.log(tf)
    return tf; 
  }
  
  for (let item of keys1) {
    if (Array.isArray(obj1[item]) === true && Array.isArray(obj2[item]) === true) {
      if (eqArrays(obj1[item], obj2[item]) === true) {
      }
      else {
        tf = false;
        console.log(tf);
        return tf; 
      }
    }
    else if (obj1[item] === obj2[item]) {
    }
    else {
        tf = false;
        console.log(tf)
        return tf; 
    }

  }
  
  tf = true; 
  console.log(tf)
  return tf;
}

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// eqObjects(ab, ba); // => true

// const abc = { a: "1", b: "2", c: "3" };
// eqObjects(ab, abc); // => false

// const agg = {a: "1", c: "2"};
// eqObjects(ab, agg);

const abg = {a: "1", b: "2", c: "3", d: "4"};
const agb = {a: "1", b: "2", c: "3", e: "4"};
eqObjects(abg, agb);
// ------------------------------------------------------------------------------------
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false