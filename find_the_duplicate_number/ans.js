// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one repeated number in nums, return this repeated number.

// You must solve the problem without modifying the array nums and uses only constant extra space.
var findDuplicate = function(nums) {
    let str;
    
    for (let i  =0 ; i < nums.length ; i ++){
        if(hashmap[nums[i]])
            return nums[i];
        else {
            hashmap[nums[i]] = 1;
        }
    }
//    for (let i  =0 ; i < nums.length ; i ++){
//        for (let j  = i + 1  ; j < nums.length ; j ++){
        
//        if (nums[i] == nums[j]){
//            output = nums[i];
//        }
//    } 
    
//    }
    // return output;
    
};