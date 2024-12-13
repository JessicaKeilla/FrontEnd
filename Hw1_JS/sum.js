const twoSum=(nums,target) => {

    const map = new Map();
    let result = [];

    nums.forEach((num, i) => {
        const complement = target - num;
        if (map.has(complement)) {
            result = [map.get(complement), i];
        }
        map.set(num, i);
    });

    return result;


};
console.log(twoSum([2,7,11,15],9));
console.log(twoSum([3,2,4],6));
console.log(twoSum([3,3],6));
