const romanInt= (s) =>
{
    const romanMap=
        {
            'I':1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000
        };
    return [...s].reduce((total,char,i,arr)=>
    {
        const current= romanMap[char];
        const next = romanMap[arr[i+1]];
        return total + (next && current <next ? -current : current);

    }, 0);
};
console.log(romanInt("III"));
console.log(romanInt("LVIII"));
console.log(romanInt("MCMXCIV"));