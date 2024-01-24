//Desafio básico que mostra o DD/MM/AAAA e horário


// Função que olha o mês em formato de número (de 0 a 11) e retorna o nome dele
function Mez(){
    let mess = new Date()
    let mes = mess.getMonth()

    switch(mes) {
        case 0:
            return 'Janeiro'
        
        case 1:
            return 'Fevereiro'
            
        case 2:
            return 'Março'
           
        case 3:
            return 'Abril'
            
        case 4:
            return 'Maio'
           
        case 5:
            return 'Junho'
        
        case 6:
            return 'Julho'
        
        case 7:
            return 'Agosto'
     
        case 8:
            return 'Setembro'
        
        case 9:
            return 'Outubro'
        
        case 10:
            return 'Novembro'
        
        case 11:
            return 'Dezembro'
            
    }
}


//Função que add 0 em números menores que 10, tipo 01, 02...
function zero(num){
    return num >= 10 ? num : `0${num}`

}

function clique(data) {
    const dia = zero(data.getDate());
    const day = data.getDay();
    const mes = Mez(data.getMonth());
    const ano = zero(data.getFullYear());
    const hora = zero(data.getHours());
    const min = zero(data.getMinutes());
    

 
    

    switch(day) {
        case 0:
            return 'Domingo, '  +  `${dia} de ${mes} de ${ano}  ${hora}:${min}  `
           
        case 1:
            return 'Segunda-Feira, ' +  `${dia} de ${mes} de ${ano}  ${hora}:${min}  `
            
        case 2:
          return 'Terça-Feira, '  +  `${dia} de ${mes} de ${ano}   ${hora}:${min}  `
          
        case 3:
            return 'Quarta-Feira, ' +   `${dia} de ${mes} de ${ano}   ${hora}:${min}  `
         
        case 4:
                return 'Quinta-Feira, '  +  `${dia} de ${mes} de ${ano}   ${hora}:${min}  `
             
        case 5:
            return 'Sexta-Feira, '  +  `${dia} de ${mes} de ${ano}   ${hora}:${min}  `
        
        case 6:
            return 'Sábado, '  +  `${dia} de ${mes} de ${ano}   ${hora}:${min}  `
    
        
            
    }
    
   
}

   


const data = new Date()
const string = clique(data)
document.write(string)

