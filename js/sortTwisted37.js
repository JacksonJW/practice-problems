/*
#Sorting on planet Twisted-3-7

There is a planet... in a galaxy far far away. It
is exactly like our planet, but it has one
difference:

#The values of the digits 3 and 7 are twisted. Our
3 means 7 on the planet Twisted-3-7. And 7 means 3.

Your task is to create a method, that can sort an
array the way it would be sorted on Twisted-3-7.

7 Examples from a friend from Twisted-3-7:

[1,2,3,4,5,6,7,8,9] -> [1,2,7,4,5,6,3,8,9]
[12,13,14] -> [12,14,13]
[9,2,4,7,3] -> [2,7,4,3,9]
There is no need for a precheck. The array will
always be not null and will always contain at
least one number.

You should not modify the input array!
*/

function sortTwisted37(array) {
    var newArr = flip3sAnd7s(array);
    newArr.sort( function (a, b) { return a-b; } );
    var resultStrArr = flip3sAnd7s(newArr);
    return resultStrArr.map(function (str){
        return parseInt(str);
    })
}

function flip3sAnd7s(arr){
    var str = arr.join(', ');
    var newStr = "";
    for (var i = 0; i < str.length; i++){
        if (str.charAt(i) === "7"){
            newStr += "3";
        } else if (str.charAt(i) === "3"){
            newStr += "7";
        } else {
            newStr += str.charAt(i);
        }
    }
    return newStr.split(', ');
}