//3. write a program to find the sum of positive numbers if the user enters a negative numbers, 
//  the loop ends the negative number entered is not added to sum

var _num;
var _sum=0
while(true)
{
     _num = prompt('enter a number: ');
     if(_num<0){
         break
     }
    _sum+=parseInt(_num)
    console.log(_sum)
}
