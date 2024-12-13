const isPal = (x) =>
{
    if(x < 0) return false;
    const str = x.toString();
    return str===[...str].reverse().join('');
};

console.log(isPal(121));//true
console.log(isPal(-121));//false
console.log(isPal(10));//false