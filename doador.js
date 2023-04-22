
            //Preciso consertar muita coisa
            //mas o código está funcionando
            //procurar uma forma de fazer o input aceitar sinal de +
            function verificar() {
                var sge = window.document.querySelector('#tipo')
                var res = window.document.querySelector('div#res')
                var sangue = String(sge.value)
                res.innerHTML = `<p>Parabéns! Seu tipo sanguíneo é ${sangue}!</p>`
                if (sangue == 'A Positivo') {
                    res.innerHTML += `Você pode doar para pessoas de tipo sanguíneo: AB+ e A+!`

                }
            
                else if (sangue == 'A Negativo') {
                res.innerHTML += `Você pode doar para pessoas de tipo sanguíneo: A+, AB+, A-, AB-!`
                }
                else if (sangue == 'B Positivo') {
                res.innerHTML += `Você pode doar para pessoas de tipo sanguíneo: B+ e AB+!`
                }
                else if (sangue == 'B Negativo') {
                res.innerHTML += `Você pode doar para pessoas de tipo sanguíneo: B+ e AB+B+, AB+, B-, AB-!`
                }
                else if (sangue == 'O Positivo') {
                res.innerHTML += `Você pode doar para pessoas de tipo sanguíneo: O+, A+, B+, AB+!`
                }
                else if (sangue == 'O Negativo') {
                res.innerHTML += `Você pode doar para pessoas de tipo sanguíneo: O+, A+, B+, AB+, A-, B-, AB-, O-!`
                res.innerHTML += ` Que maravilha você é um doador universal!`
                }
                else if (sangue == 'AB Positivo') {
                res.innerHTML += `Você pode doar para pessoas de tipo sanguíneo: AB+!`
                }
                if (sangue == 'AB Negativo') {
                res.innerHTML += `Você pode doar para pessoas de tipo sanguíneo: AB+ e AB-!`
                }
        }
    