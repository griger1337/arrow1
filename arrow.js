var ploho = 2123;
let horosho = 4;
const otlichno = 5;

const MainFunc = {
    globalNum:51231,

    CountSomeNumbers: function(funcArg){
        let localNum=10;
        return this.globalNum*funcArg*localNum;
    },

    CountAnotherNumbers: function(funcArg){
        let localNum=10;
        let anotherLocalNumber=10;
        return this.globalNum*funcArg*localNum;
    }
}
console.log(MainFunc.CountSomeNumbers(9));
console.log(MainFunc.CountAnotherNumbers(5));



function SquareFunction(num){
    return (num*num);
}
console.log(SquareFunction(4));


const square = (x) => x*x;
console.log(square(4));


const myArray = [4,1,6,8,4,2];
myArray.map( (ad, i) => console.log(ad,i));
console.log(myArray);

let arr = [1, -1, 2, -2, 3];
let positiveArr = arr.filter(function(number) {
  return number > 0;
});
console.log( positiveArr ); 
console.log('\n Меньше - 14 и больше -16')
arr = [-5,12,-3,-2,0,16,-89,4,7,2,1,8];
console.log(arr.filter((x) => x<-4 && x >-16));


console.log('\n Всё чётные числа увеличить в два раза')
arr2=arr.map(function(item)
{
    console.log(item%2);
    if (item%2==0){
        item=item*2;
    }
    return item;
});
console.log(arr2);

console.log('\n Прибавить к каждому 5 и вывести отрицательные')
arr2=arr
.map(function(item)
    {
        return item+5;
    })
.filter(function(item)
    {
        return item<0;
    }
);
console.log(arr2);