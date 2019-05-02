//26.Remove Duplicates from Sorted Array  (JS)

/*
26.Remove Duplicates from Sorted Array
Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

*/
/*
if we need return nums [], we use nums[len] = nums[i];
use the current to replace array form begin (still use the same array)

since we knew the different nums in the array,
them final return nums.slice(0,len);


*/
var RemoveDuplicatesFromSortedArray = function(nums){
  //Sorted Array
 if(nums.length < 2) return nums.length;

 let len = 1
 for(let i = 1; i<nums.length; i++){
   if(nums[i-1]!=nums[i]){
     nums[len] = nums[i];
     len++;
   }
 }

 return len;
 //return nums.slice(0,len);
}

const nums = [0,0,1,1,1,2,2,3,3,4] //5
console.log(RemoveDuplicatesFromSortedArray(nums));

const nums1 = [1,1,2] //2
console.log(RemoveDuplicatesFromSortedArray(nums1));



