function cadastrar(){



var nome = $("#nome").val();
var email = $("#email").val();
var telefone = $("#fone").val();
var nascimento = $("#data").val();
var senha = $("#senha").val();
var sexo = $("#radio-choice-h-2a").val() == "off" "M" : "F";

var url = "http://services.asxcard.com.br/CadastroService.svc/cadastro?nome="+nome+"&email="+email+"&telefone="+telefone+"&nascimento="+nascimento+"&senha="+senha+"&sexo="+sexo;
alert(url);
$.ajax({
    url: url,
    type: 'GET',
    error : function (){ alert('erro'); }, 
    success: function (data) {
        //alert(data);
        alert("Cadastrado com sucesso!");
        $.mobile.changePage( "#principal");
    }
});


}


function login(){



var email = $("#login-email").val();
var senha = $("#login-senha").val();

var url = "http://services.asxcard.com.br/CadastroService.svc/cadastros?email="+email+"&senha="+senha;
alert(url);
$.ajax({
    url: url,
    type: 'GET',
    error : function (data){ 
            alert('Acesso Negado! Login ou senha não conferem.');
            console.log(data); 
    }, 
    success: function (data) {
        //alert(data);
        alert("Cadastrado com sucesso!");
        $.mobile.changePage( "#principal");
    }
});


}




