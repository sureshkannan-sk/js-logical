var number=prompt("please enter a number");
var temp=number;
var sum=0;
while(temp>0)
{
//document.write(temp);
var digit=temp%10;
//document.write(digit);
sum+=digit**3;
//document.write(sum);
temp=parseInt(temp/10);
//document.write(temp);
}
if(sum==number)
{
	document.write(' armstrong number');	
}
else
{
	document.write(' not armstrong number');	
}