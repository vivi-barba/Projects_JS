 function tabuada(){
        var num = parseInt(document.getElementById("num").value);
        var resposta = document.getElementById('respost');
        var tabuada = '';

        for(var count=1; count<=10 ; count++)
        tabuada += num + " x " + count + " = "+
                    num * count+ "<br />";
  
  resposta.innerHTML = tabuada;
    }