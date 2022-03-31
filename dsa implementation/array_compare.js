// Natural way
const array1 = [11,22,33,44,55];
const array2 = [10,20,30,40,50];
let match = false;
function containsArray(array1,array2) {
    for(let i = 0; i<array1.length; i++){
        for(let j =0; j<array2.length; j++){
            if (array1[i] == array2[j]) {
                match = true;
                break;
            }
        }
    }
    
    if(match){
        console.log("Matching found!");
    }else{
        console.log("Matching not found!");
    }
    
}

containsArray(array1,array2);


//second thing is using map

function containsArrayWithMap(array1,array2){
    let map = {};
    for(let i = 0; i<array1.length;i++){
        map[array1[i]] = true;
    }

    for(let j = 0; j<array2.length;j++){
        if(map[array2[j]]){
            match = true;
            
        }
    }
    if(match){
        console.log("Matched With Map");
    }else{
        console.log("Not Matched With Map");
    }
}

containsArrayWithMap(array1,array2);

//Check Array with javascript

function containsArrayWithJS(array1,array2){
    if(array1.some(items => array2.includes(items))){
        console.log("Matched With JS");
    }else{
        console.log("Not Matched With JS");
    }
}

containsArrayWithJS(array1,array2);