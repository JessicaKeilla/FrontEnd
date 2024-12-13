const removeDuplicates =(nr)=>
{
    let k=0;
    nr.forEach((n,i)=>
    {
        if (i=== 0||nr[i] !== nr [i-1])
        {
            nr[k] = n;
            k++;
        }
    });
    return k;
};
const nr1=[1,1,2];
const k1=removeDuplicates(nr1);
console.log(k1,nr1.slice(0,k1));//1,[1,1,_]

const nr2=[0,0,1,1,1,2,2,3,3,4];
const k2=removeDuplicates(nr2);
console.log(k2,nr2.slice(0,k2));