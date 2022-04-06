function problema2(){
    var num3 = document.getElementById('p2.1-input').value;
    var num4 = document.getElementById('p2.2-input').value;
    var num5 = document.getElementById('p2.3-input').value;

    if((num3=="") || (num4=="") || (num5=="")){
        alert('Los campos estan vacios');
        return false;
    }

    if((num3!="") || (num4!="") || (num5!="")){
        if(num3 > num4){
            if(num3 > num5){
                var res41 = '';

                res41 += 'El numero mayor es: '+num3+'\n';
                document.querySelector('#p2-output').textContent = res41;                                            
            } else{
                var res42 = '';

                res42 += 'El numero mayor es: '+num5+'\n';
                document.querySelector('#p2-output').textContent = res42;   
            }
        } else if(num4 > num5){
            var res43 = '';

            res43 += 'El numero mayor es: '+num4+'\n';
            document.querySelector('#p2-output').textContent = res43;
        } else{
            var res44 = '';

            res44 += 'El numero mayor es: '+num5+'\n';
            document.querySelector('#p2-output').textContent = res44;
        }
    }
}