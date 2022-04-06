function problema1(){
    var num1 = document.getElementById('p1.1-input').value;
    var num2 = document.getElementById('p1.2-input').value;

    if((num1=="") || (num2=="")){
        alert('Los campos estan vacios');
        return false;
    }

    if((num1!="") || (num2!="")){
        if(num1 == num2){
            var multi = 0;
            var res1 = '';

            multi = parseFloat(num1)*parseFloat(num2);

            res1 += 'La multiplicacion de '+num1+' por '+num2+' es: '+multi+'\n';

            document.querySelector('#p1-output').textContent = res1;
        }
        if(num1 > num2){
            var rest = 0;
            var res2 = '';

            rest = parseFloat(num1)-parseFloat(num2);

            res2 += 'La resta de '+num1+' menos '+num2+' es: '+rest+'\n';

            document.querySelector('#p1-output').textContent = res2;
        }
        if(num1 < num2){
            var sum = 0;
            var res3 = '';

            sum = parseFloat(num1)+parseFloat(num2);

            res3 += 'La suma de '+num1+' mas '+num2+' es: '+sum+'\n';

            document.querySelector('#p1-output').textContent = res3;
        }
    }
}