/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
   nums = nums.sort();
   for(x = 0; x < nums.length; x++) {
       if(nums[x] != nums[x-1] && nums[x] != nums[x+1]) {
           return nums[x]
       }
   }
};
