/*
**countZeroes**

Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called ***countZeroes***, which returns the number of zeroes in the array.

**Constraints**:

Time Complexity: O(log N)
*/

function countZeroes(arr){
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    while(leftIdx <= rightIdx){
        let midIdx = Math.floor((leftIdx + rightIdx)/2);
        if(arr[midIdx] === 0 && arr[midIdx - 1] === 1){
            return arr.length - midIdx;
        }
        else if(arr[midIdx] === 0){
            rightIdx = midIdx - 1;
        }
        else if(arr[midIdx] === 1){
            leftIdx = midIdx + 1;
        }
    }   
}

/*
**sortedFrequency**

Given a sorted array and a number, write a function called ***sortedFrequency*** that counts the occurrences of the number in the array

**Constraints**:

Time Complexity: O(log N)
*/
function sortedFrequency(arr, num){
    if(leftStart(arr, num) === -1){
        return -1;
    }
    return rightStart(arr, num) - leftStart(arr, num) + 1;
}

function leftStart(arr, num){
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    
    while(leftIdx <= rightIdx){
        let midIdx = Math.floor((leftIdx + rightIdx)/2);
        if((arr[midIdx] === num && midIdx === 0) || (arr[midIdx] === num && arr[midIdx - 1] < num)){
            return midIdx;
        }
        else if(arr[midIdx] >= num){
            rightIdx = midIdx - 1;
        }
        else if(arr[midIdx] < num){
            leftIdx = midIdx + 1;
        }
    }
    return -1;  
}

function rightStart(arr, num){
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    
    while(leftIdx <= rightIdx){
        let midIdx = Math.floor((leftIdx + rightIdx)/2);
        if((arr[midIdx] === num && midIdx === arr.length - 1) || (arr[midIdx] === num && arr[midIdx + 1] > num)){
            return midIdx;
        }
        else if(arr[midIdx] <= num){
            leftIdx = midIdx + 1;
        }
        else if(arr[midIdx] > num){
            rightIdx = midIdx - 1;
        }
    }
    return -1;
}
/*
## **findRotatedIndex**

Write a function called ***findRotatedIndex*** which accepts a rotated array of sorted numbers and an integer. The function should return the index of num in the array. If the value is not found, return -1.

**Constraints**:

Time Complexity: O(log N)
*/
function findRotatedIndex(arr,num){
    const pivot = findPivot(arr);
    if(num >= arr[0] && num <= arr[pivot-1]){
        return binarySearch(arr.slice(0, pivot), num);
    }
    else{
        return binarySearch(arr.slice(pivot, arr.length));
    }
}

function binarySearch(arr,num){
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    
    while(leftIdx <= rightIdx){
        let midIdx = Math.floor((leftIdx + rightIdx)/2);
        if(arr[midIdx] === num){
            return midIdx;
        }
        else if(arr[midIdx] > num){
            rightIdx = midIdx - 1;
        }
        else if(arr[midIdx] < num){
            leftIdx = midIdx + 1;
        }
    }
    return -1;
}

function findPivot(arr){
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    
    while(leftIdx <= rightIdx){
        let midIdx = Math.floor((leftIdx + rightIdx)/2);
        if(arr[midIdx] > arr[midIdx + 1]){
            return midIdx + 1;
        }
        else if(arr[leftIdx] <= arr[midIdx]){
            leftIdx = midIdx + 1;
        }
        else{
            rightIdx = midIdx - 1;
        }
    }
    return 0;
}
/*
**findRotationCount**

Write a function called ***findRotationCount*** which accepts an array of distinct numbers 
sorted in increasing order. The array has been rotated counter-clockwise n number of times. 
Given such an array, find the value of n.

**Constraints**:

Time Complexity: O(log N)
 */

function findRotationCount(arr){
    const pivot = findPivot(arr);
    if(pivot > 0){
        return pivot;
    }
    else{
        return pivot;
    }
}
/*
## **findFloor**

Write a function called ***findFloor*** which accepts a sorted array and a value x, 
and returns the floor of x in the array. The floor of x in an array is the largest element 
in the array which is smaller than or equal to x. If the floor does not exist, return -1.
*/

function findFloor(arr, num){
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    if(num >= rightIdx){
        return arr[rightIdx];
    }
    while(leftIdx <= rightIdx){
        let midIdx = Math.floor((leftIdx + rightIdx)/2);
        if(arr[midIdx] > num){
            rightIdx = midIdx -1;
        }
        else if(arr[midIdx] <= num && arr[midIdx + 1] > num){
            return arr[midIdx];
        }
        else if(arr[midIdx] < num){
            leftIdx = midIdx + 1;
        }
    }
    return -1;
}