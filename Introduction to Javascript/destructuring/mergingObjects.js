const shallowMergeTwoObjects = (object1, object2) => {
    return {...object1,...object2};
};

const first = {
    firstName: "Arjun"
  }
const second = {
    lastName: "Rampal"
}

console.log("Before merging: ", first);
console.log("Before merging", second);

console.log("After merging: ", shallowMergeTwoObjects(first,second));

const shallowMerge = (...objects) => {
    return objects.reduce((acc,curr) =>{
        return {...acc, ...curr}
    } ,{})
};

const obj1 = { a: 1 };
const obj2 = { b: 2 };
const obj3 = { c: 3, a: 10 };

console.log(shallowMerge(obj1, obj2, obj3));