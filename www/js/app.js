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
        $.mobile.changePage( "#acoes-menu");
    }
});


}


