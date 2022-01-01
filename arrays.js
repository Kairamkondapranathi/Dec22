

var a = [];

var i = prompt("Enter first number");
i = parseInt(i);
a.push(i);

var i = prompt("Enter second number");
i = parseInt(i);
a.push(i);

var i = prompt("Enter third number");
i = parseInt(i);
a.push(i);

if((a[0] >= a[1]) && (a[0] >= a[2])){
alert(a[0] + " is maximum");
}
else if((a[1] >= a[0]) && (a[1] >= a[2])){
alert(a[1] + " is maximum");
}
else{
alert(a[2] + " is maximum");
}

