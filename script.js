
const hello = {
    myName: 'Elsen',
    surname: 'Dunyamaliyev',
    age:20,
    class:'fed8'
}

const array = [1,2,3,4,5,6,7]
const array2 = [1,1,1,3,4,5,6,7,8,8,8,8,8,8,8]

// Task 31

const returnKey = function(obj){
    return Object.keys(obj)
}

// console.log(returnKey(hello));

// Task 32

const clone = function(obj){
    let obj2 = {...obj};
    return obj2;
}

// console.log(clone(hello));

// Task 33

const returnStr = function(obj){
    let value = Object.values(obj)
    let key = Object.keys(obj)
    const keys = [];
    for(let i = 0;i<value.length;i++){
        if(typeof value[i] === 'string'){
                keys.push(key[i])
            }
        }
        return keys;
    }

// console.log(returnStr(hello));

// Task 34

const createObj = function(name,surname){
    const info = {
        name:name,
        surname:surname
    }
    return info
}

// console.log(createObj('elsen','dunya'));

// Task 35

const delObj = function(obj,key){
    delete obj[key]
    return obj
}

// console.log(delObj(hello,'surname'));




// Task 36

const objLen = function(obj){
    const selected = Object.entries(obj)
    return selected.length
}

// console.log(objLen(hello));


// Task 37

const hasOwn = function(obj,key){
    let keys = Object.keys(obj);
    let answer = [];
    for(let i =0; i<keys.length;i++){
            if(keys[i] === key){
                answer.push(true)
            }else{
                answer.push(false)
            }
    }
    if(answer.includes(true)){
        return true
    }else{
        return false
    }
}

// console.log(hasOwn(hello,'age'));

// Task 38

const lastElement = function(arr){
    return arr[arr.length-1]
}

// console.log(lastElement(array));

// Task 39

const cloneArr = function(arr){
    return [...arr]
}

// console.log(cloneArr(array));

// Task 40

const nArr = function(arr,n){
    let arr2 = []
    for(let i =0;i<n;i++){
        arr2.push(arr[i])
    }
    return arr2
}

// console.log(nArr(array,3));

// Task 41

const nArr2 = function(arr,n){
    let arr2 = []
    arr = arr.reverse()
    for(let i =0;i<n;i++){
        arr2.push(arr[i])
    }
    return arr2
}

// console.log(nArr2(array,7));

// Task 42

const vergul = function(arr){
    let str = ''
    let vergul = ','
    for(let i=0;i<arr.length;i++){
        if(i !== arr.length-1){
            str+= arr[i]  + vergul
        }else{
            vergul = ''
            str+= arr[i]  + vergul
        }
    }
    return str
}

// console.log(vergul(array));

// Task 43

const mostUsed = function(arr){
    let element = 0;
    let count = 0;
    for(let i =0;i<arr.length;i++){
        let tempElement = arr[i];
        let tempCount = 0;
        for(let j = 0; j<arr.length;j++){
            if(arr[j] ===tempElement){
                tempCount++
            }
        }
        if(tempCount>count){
            element = tempElement;
            count = tempCount
        } 
    }
    return element

}

// console.log(mostUsed(array2))

// Task 44


const rmvOdd = function(arr){
    let arr2 = []
    for(let i = 1;i<arr.length;i+=2){
        arr2.push(arr[i])
    }
    return arr2
}

// console.log(rmvOdd(array))

// Task 45

const rty = function(arr,index){
    let arr2= []
    for(let i = 0;i<=index;i++){
        arr2.push(arr[i])
    }
    return arr2
}

// console.log(rty(array,2));