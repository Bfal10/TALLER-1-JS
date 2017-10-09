// =====================================================================
function tresCuadrados(a, b, c) {
    var arr=[a,b,c];
    var arr_sorted = arr.sort(function(x, y){return y - x});
    var sum_cuadr = (Math.pow(arr_sorted[0],2)) + (Math.pow(arr_sorted[1],2));
    return(sum_cuadr);
}
    
// =====================================================================
function factorial(numero){
    var solution = 1;
    var x;
    for (x = numero; x > 0; x--) {
        solution = solution * x;
        //solution *= x; 
    } 
    return (solution);
}

// =====================================================================
function fibs(k){
       var i;
       var fib = []; 

       fib[0] = 0;
       fib[1] = 1;
       for(i=2; i<=k; i++){
           fib[i] = fib[i-2] + fib[i-1];
       }
       return fib[k];
}

// =====================================================================
function esPrimo(numero){
    var divisor=1;
    var primo=0;
    for(var i=0; i<=numero; i++){
        if(numero%i==0 ){
            primo++;
        }
        if(primo>2)
            break;
    }  
    if(primo==2){
        return true;
    }    
    else{
        return false;
    }
}

// =====================================================================    
function aSumaAbsB(n1,n2){
    if (!isNaN(n1) && !isNaN(n2)){
        return(n1 + Math.abs(n2));
    }
}

// =====================================================================    
function sumaDigitos(n) {
    let suma = 0, entrada = 0,dig = 0;
    entrada = n;
    
    while (entrada > 0){
        dig=entrada%10;
        entrada=Math.trunc(entrada/10);
        suma=suma+dig;
    }
    
    return suma;
}

// =====================================================================    
function numeroCentral(a,b,c){
    var arr=[a,b,c];
    var arr_sorted = arr.sort(function(x, y){return y - x});
    return(arr_sorted[1]);
}
    
// =====================================================================
function esAlternante(n) {
	let tmpN = n;
	let IsPairLoop; 
	let result=true;
	let modResult;

	//modResult es una variable para que el codigo de la se vea hermoso 
	modResult =(n%10)%2; 
	
	// se sabe si empieza en par o impar y se asigna a la sucesión correspondiente
	if(modResult==0){
		IsPairLoop = true;
	}else{
		IsPairLoop = false;
	}
	// segun corresponda va seteando cuando debe ser par o impar y lo compara con la realidad del tmpN que toma el valor de "n"
	// si en algún momento tmpN es incorrecto retorna falso, si sobrevive el while retorna verdadero
	while(tmpN>0){
	  	
	    modResult=(tmpN%10)%2;
	
	    if(IsPairLoop){    	
			if(modResult !=0){
				return false;
			}	
			IsPairLoop=false;
		}else{
			if(modResult ==0){
				return false;
			}
			IsPairLoop = true;
		}
		tmpN=Math.trunc(tmpN/10);
	} 

    return true;
}
   
// =====================================================================
function esPerfecto(n) {
    let sum = 0;
    for(let i=1;i<n;i++){
        if(n%i==0){
            sum=sum+i;
        }
    }
    if (sum==n){
        return true;
    }else{
        return false;
    }
   
}
    
// =====================================================================
function esAgradable(n) {
    let par = 0, impar = 0;
    for(let i =1;i<=n;i++){
        if(n%i==0){
            if(i%2==0){
                par++;
            }else{
                impar++;
            }
        }
    }
    if (par==impar){
        return true;
    }else{
        return false;
    }
}
    
// =====================================================================
function sumaCuadrados(k) {
    let suma = 0;
    for (let i =1; i<=k;i++){
        suma=suma+(i*i)
    }
    return suma;
}
  
// =====================================================================
function sumaCos(k) {
    let suma = 0;
    for (let i =1; i<=k;i++){
        suma=suma+ Math.cos(i);
    }
    return suma;
   
}
    
// =====================================================================
function sumaAbstracta(f, k) {
    let suma= 0;
    for(let i = 1 ; i <= k ; i++){
        suma= suma + f(i);
    }
    return suma;
}
    
// =====================================================================
function sumaCuadradosAbs(k) {
    return sumaAbstracta(function(n){return n*n},k);
    //return sumaAbstracta((n)=>(n*n),k);
}
    
// =====================================================================
function sumaCosAbs(k) {
    return sumaAbstracta(Math.cos,k);
    /*
    return sumaAbstracta(math.sin,k);
    return sumaAbstracta(math.abs,k);
    */
}
    
// =====================================================================
function sumaAbstractaRango(f, i, j) {
    let suma= 0;
    for(let c = i ; c <= j ; c++){
        suma= suma + f(c);
    }
    return suma;
}
    
// =====================================================================
function sumaCuadradosRango(i, j) {   
    let res = sumaAbstractaRango(function(n){return n*n},i+1,j);
    //let res=  sumaAbstractaRango((n)=>(n*n),i+1,j);
    return res;    
}
    
// =====================================================================
function sumaCosRango(i, j) {
    return sumaAbstractaRango(Math.cos,i,j-1);
}
    
// =====================================================================
function sumaAbstractaRangoPaso(f, i, j, p) {
    let suma= 0;
    for(let c = i ; c <= j ; c=c+p){
        suma= suma + f(c);
    }
    return suma;
}

// =====================================================================
// Estas declaraciones exportan las funciones para poder
// usarlas en el modulo de pruebas main.spec.js

exports.tresCuadrados = tresCuadrados;
exports.factorial = factorial;
exports.fibs = fibs;
exports.esPrimo = esPrimo;
exports.aSumaAbsB = aSumaAbsB;
exports.sumaDigitos = sumaDigitos;
exports.numeroCentral = numeroCentral;
exports.esAlternante = esAlternante;
exports.esPerfecto = esPerfecto;
exports.esAgradable = esAgradable;
exports.sumaCuadrados = sumaCuadrados;
exports.sumaCos = sumaCos;
exports.sumaAbstracta = sumaAbstracta;
exports.sumaCosAbs = sumaCosAbs;
exports.sumaCuadradosRango = sumaCuadradosRango;
exports.sumaCosRango = sumaCosRango;
exports.sumaAbstractaRangoPaso = sumaAbstractaRangoPaso;
