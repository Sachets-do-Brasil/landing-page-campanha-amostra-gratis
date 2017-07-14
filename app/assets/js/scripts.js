/*!
 * fastshell
 * Fiercely quick and opinionated front-ends
 * https://HosseinKarami.github.io/fastshell
 * @author Hossein Karami
 * @version 1.0.5
 * Copyright 2017. MIT licensed.
 */


// ESTE SCRIPT VALIDA O CPF DO USUARIO
		var TestaCPF = function (strCPF) {
		    var Soma;
		    var Resto;
		    Soma = 0;
			if (strCPF == "00000000000") return false;
		    
			for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
			Resto = (Soma * 10) % 11;
			
		    if ((Resto == 10) || (Resto == 11))  Resto = 0;
		    if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;
			
			Soma = 0;
		    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
		    Resto = (Soma * 10) % 11;
			
		    if ((Resto == 10) || (Resto == 11))  Resto = 0;
		    if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
		    return true;
		}	
// ESTE SCRIPT PREENCHE O ENDERECO AUTOMATICAMENTE

		    function limpa_formulário_cep() {
		            //Limpa valores do formulário de cep.
		            document.getElementById('endereco').value=("");
		            document.getElementById('bairro').value=("");
		            document.getElementById('cidade').value=("");
		            document.getElementById('uf').value=("");
		            //document.getElementById('ibge').value=("");
		    }

		    function meu_callback(conteudo) {
		        if (!("erro" in conteudo)) {
		            //Atualiza os campos com os valores.
		            document.getElementById('endereco').value=(conteudo.logradouro);
		            document.getElementById('bairro').value=(conteudo.bairro);
		            document.getElementById('cidade').value=(conteudo.localidade);
		            document.getElementById('uf').value=(conteudo.uf);
		            //document.getElementById('ibge').value=(conteudo.ibge);
		        } //end if.
		        else {
		            //CEP não Encontrado.
		            limpa_formulário_cep();
		            alert("CEP não encontrado.");
		        }
		    }
		        
		    function pesquisacep(valor) {

		        //Nova variável "cep" somente com dígitos.
		        var cep = valor.replace(/\D/g, '');

		        //Verifica se campo cep possui valor informado.
		        if (cep != "") {

		            //Expressão regular para validar o CEP.
		            var validacep = /^[0-9]{8}$/;

		            //Valida o formato do CEP.
		            if(validacep.test(cep)) {

		                //Preenche os campos com "..." enquanto consulta webservice.
		                document.getElementById('endereco').value="...";
		                document.getElementById('bairro').value="...";
		                document.getElementById('cidade').value="...";
		                document.getElementById('uf').value="...";
		                //document.getElementById('ibge').value="...";

		                //Cria um elemento javascript.
		                var script = document.createElement('script');

		                //Sincroniza com o callback.
		                script.src = '//viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

		                //Insere script no documento e carrega o conteúdo.
		                document.body.appendChild(script);

		            } //end if.
		            else {
		                //cep é inválido.
		                limpa_formulário_cep();
		                alert("Formato de CEP inválido.");
		            }
		        } //end if.
		        else {
		            //cep sem valor, limpa formulário.
		            limpa_formulário_cep();
		        }
		    };

// SMOOTH SCROLL

$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
       
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
         
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { 
            return false;
          } else {
            $target.attr('tabindex','-1');
            $target.focus(); 
          };
        });
      }
    }
  });


		$("#cep").blur(function() {
			pesquisacep(this.value)
		});
		$("#cpf").blur(function(){
			alert(TestaCPF(this.value))
		});


FB.Event.subscribe('edge.create', function(response) {
    console.log('clicked');
});​

$( window ).resize(function() {
 	if($(window).width() <= 479) {
		$(".fb-like").attr("data-layout", "button_count")
	}
});


	    
