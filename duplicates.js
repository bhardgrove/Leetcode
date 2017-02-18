/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    nums = nums.sort();
    dups = [];
    
    for(x = 0; x < nums.length; x++) {
        if(nums[x] === nums[x+1]) {
            dups.push(nums[x])
        }
    }
    return dups;
};
