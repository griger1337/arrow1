// function max(a,b){
// if(a>b)
//     console.log(a);
// else if(b>a)
//     console.log(b)
// else if (a==b)
//     console.log("Эти значения одинаковые")
// }
// max(3,3);

function FindMaxValue(...nums){
    max = nums[0];
    fixator = 0;
for(i=0;i<nums.length;i++){
    if(max<nums[i]){
        max = nums[i];
        fixator = i;
    }
}

    console.log("Максимальное значение: " + max + " имеет индекс " +fixator);
}
FindMaxValue(5,17,57,45,34,6,86,89,54)

