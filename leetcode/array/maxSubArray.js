//53.Maximum Subarray
/*
Given an integer array nums, 
find the contiguous subarray (containing at least one number) 
which has the largest sum and return its sum. 

Input: [-2,1,-3,4,-1,2,1,-5,4], Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6. 

If you have figured out the O(n) solution, 
try coding another solution using the divide and conquer approach, 
which is more subtle. *
*/


var maxSubArray = function(nums) {
    if(nums.length === 0) {
        return 0;
    } 
    
    let max = nums[0];
    let preSum = nums[0]; 
    
    for(let i = 1; i < nums.length; i++) { 
        // [-3,2,-1,4,-1,2] //pre[2,1,5,4,6] //  Max[2,2,5,5,6]
        // [-3,-2,-1,-4,-1] //pre[-2,-1,-4,-1] //Max[-2,-1,-1,-1]
        if(preSum < 0) { 
            preSum = nums[i]; //first time not sure < 0 or not
        } else {
            preSum = preSum + nums[i]; 
        }
        max = Math.max(max,preSum);
         //[-2,1,-3,4,-1,2,1,-5,4] 
        console.log('i=', i,'max =',max, 'preSum =', preSum, 'nums[i] =', nums[i]);

    }
    return max;
};
console.log(maxSubArray([-3,-2,-1,-4,-1]));
console.log(maxSubArray([-3,2,-1,4,-1,2]));
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
