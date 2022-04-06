function problema3(){
    var salario = document.getElementById('p3.1-input').value;
    var horas = document.getElementById('p3.2-input').value;

    if((salario=="") || (horas=="")){
        alert('Los campos estan vacios');
        return false;
    }

    if((salario<0) || (horas<0)){
        alert('Solo escriba numeros positivos en los campos')
        return false;
    }

    if((salario!="") || (horas!="")){
        if(horas<=40){
            var res51 = '';
            var pormas = 0;

            pormas = parseFloat(salario)*parseFloat(horas);
            res51 += 'La cantidad de dinero que recibira el usuario es: '+pormas+'\n';

            document.querySelector('#p3-output').textContent = res51;
        }
        if(horas>40){
            if(horas<=48){
                var res52 = '';
                var horasext1 = 0;
                var horasper1 = 0;
                var salario2bl = 0;
                var pormas1 = 0;

                horasper1 = parseFloat(salario)*40;
                horasext1 = parseFloat(horas)-40;
                salario2bl = parseFloat(salario)*2;
                pormas1 = parseFloat(horasper1)+(parseFloat(horasext1)*parseFloat(salario2bl));

                res52 += 'La cantidad de dinero que recibira el usuario es: '+pormas1+'\n';

                document.querySelector('#p3-output').textContent = res52;
            }  
            if(horas>48){
                var res53 = '';
                var horasext2 = 0;
                var horasper2 = 0;
                var horasper3 = 0;
                var salario2bl0 = 0;
                var salario3bl = 0;
                var pormas2 = 0;

                horasper2 = parseFloat(salario)*40;
                salario2bl0 = parseFloat(salario)*2;
                horasper3 = parseFloat(salario2bl0)*8;
                horasext2 = parseFloat(horas)-48;
                salario3bl = parseFloat(salario)*3;
                pormas2 = parseFloat(horasper2)+parseFloat(horasper3)+(parseFloat(horasext2)*parseFloat(salario3bl));

                res53 += 'La cantidad de dinero que recibira el usuario es: '+pormas2+'\n';

                document.querySelector('#p3-output').textContent = res53;
            }
        }
    }
}
