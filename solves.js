// let nums1 = [1, 2, 3, 0, 0, 0];
// let m = 3;
// let nums2 = [2, 5, 6];
// let n = 3;

// var merge = function (nums1, m, nums2, n) {
//   let j = 0;

//   for (let i = m; i < m + n; i++) {
//     nums1[i] = nums2[j];
//     j++;
//   }

//   return nums1.sort((a, b) => a - b);
// };

// console.log(merge(nums1, m, nums2, n));

// let nums = [3, 2, 2, 3],
//   val = 3;

// var removeElement = function (nums, val) {
//   let counter = 0;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== val) {
//         nums[counter] = nums[i];
//       counter++;
//     }
//   }
//   return counter;
// };

// console.log(removeElement(nums, val));



// let arr = [1,1,1,2,2,3];

// var removeDuplicates = function(nums) {
//     let order = 0;

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] ) {
            
//         }
//     }
// };


// removeDuplicates(arr)


// 29. Divide Two Integers
// let dividend = -2147483648, divisor = -1;
// var divide = function(dividend, divisor) {    
//   return Number((dividend / divisor).toString().split('.')[0])
// };

// console.log(divide(dividend, divisor));



// var combinationSum = function(candidates, target) {
//     let result = [];
    
//     const backtrack = (combination, start, remain) => {
//         if (remain === 0) {
//             result.push([...combination]);
//             return;
//         }

//         if (remain < 0) {
//             return;
//         }

//         for (let i = start; i < candidates.length; i++) {
//             combination.push(candidates[i]); 
//             backtrack(combination, i, remain - candidates[i]); 
//             combination.pop(); 
//         }
//     };

//     backtrack([], 0, target);
//     return result;
// };

