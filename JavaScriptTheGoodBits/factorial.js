var factorial = function factorial(n, a){

	a = a || 1;
	if(n < 2){
		return a;
	}
	return factorial(n-1, a*n);	
}
document.write(factorial(5));
