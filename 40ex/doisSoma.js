
function twoSum (nums, target) {
   if (nums[1] + nums[2] == target ) {
    return [1,2];
   } else {
    return 'Falso';
   }

}

console.log(twoSum([2,7,11,15], 9));