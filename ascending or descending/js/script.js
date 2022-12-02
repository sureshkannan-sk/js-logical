var a = parseInt(prompt("enter a value:"));
var b =parseInt(prompt("enter a value:"));
var c =parseInt(prompt("enter a value:"));

if (a>b && a>c)
{
        if (b>c)
        {
            console.log(a,b,c);
			console.log(c,b,a);
        }
        else
        {
            console.log(a,c,b);
			console.log(b,c,a);
        }
}
else if (b>a && b >c)
{
        if (a>c)
        {
             console.log(b,a,c);
			 console.log(c,a,b);
        }
        else
        {
             console.log(b,c,a);
			 console.log(a,c,b);
        }
}
else if (c>a && c>b)
{
        if (a>b)
        {
            console.log(c,a,b);
			console.log(b,a,c);
        }
        else
        {
            console.log(c,b,a);
			console.log(a,b,c);
        }
}