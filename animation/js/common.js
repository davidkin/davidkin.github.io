// function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
//     // var me = [yourLeft, yourRight].sort().join("");
//     // var friend = [friendsLeft, friendsRight].sort().join("");
    
//     return [yourLeft, yourRight].sort().join("") === [friendsLeft, friendsRight].sort().join("");
// }

// console.log('---', areEquallyStrong(10, 15, 15, 10));
// console.log('---', areEquallyStrong(15, 10, 15, 9));
// console.log('---', areEquallyStrong(10, 15, 5, 20));

// function arrayMaximalAdjacentDifference(inputArray) {
//     var array = [];
//     for (let i = 0; i < inputArray.length-1; i++) {
//         array.push(Math.abs(inputArray[i] - inputArray[i + 1]));
//     }
//     return array;
// }

// console.log('---', arrayMaximalAdjacentDifference([2, 4, 1, 0]));

const isIPv4Address = (inputString) => inputString.split('.').length === 4 ? inputString.split('.').every(value => value !== "" && value >=0 && value < 256) : false;



// console.log('---', isIPv4Address("0.254.255.0"));
// console.log('---', isIPv4Address(".254.255.0"));