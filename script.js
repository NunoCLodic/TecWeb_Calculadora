
/*Cada vez que a pagina é caregada dispara essa função*/
$(function(){ 

var valor1,valor2,operacao;

	/*Cada vez que é clicada em um botão siapara a função*/
	$("input[name=botao]").click(function(){ 
		/*substitui o valor do ecra(result) pelo que se encontra no ecramais o que é clicado*/
		$("#result").val($("#result").val() + $(this).val());
	});

	$("input[name=ce]").click(function(){
		/*Limpar o campo e a operação*/
		$("#result").val('');
		$("#op").text('');
	});

	$("input[name=soma]").click(function(){
		/*Validação da soma*/
		if($("#result").val() !=''){
			valor1 = parseFloat($("#result").val());
			$("#result").val('');
			operacao = "soma";
			$("#op").text($(this).val());

		} else {
			alert('Insira o primeiro valores a calcular!');
			}	
	});

	$("input[name=menos]").click(function(){
		/*Validação da sobtração*/
		if($("#result").val() !=''){
			valor1 = parseFloat($("#result").val());
			$("#result").val('');
			operacao = "menos";
			$("#op").text($(this).val());

		} else {
			alert('Insira o primeiro valores a calcular!');
			}	
	});	

	$("input[name=vezes]").click(function(){
		/*Validação da multiplicação*/
		if($("#result").val() !=''){
			valor1 = parseFloat($("#result").val());
			$("#result").val('');
			operacao = "vezes";
			$("#op").text($(this).val());

		} else {
			alert('Insira o primeiro valores a calcular!');
			}	
	});

	$("input[name=divisao]").click(function(){
		/*Validação da divisão*/
		if($("#result").val() !=''){
			valor1 = parseFloat($("#result").val());
			$("#result").val('');
			operacao = "divisao";
			$("#op").text($(this).val());

		} else {
			alert('Insira o primeiro valores a calcular!');
			}	
	});



	/*Calcular o Resultado a dar*/
	$("input[name=igual]").click(function(){
		if($("#result").val() !=''){
			valor2 = parseFloat($("#result").val());
			/*Verificar se a operação é soma*/
			if(operacao == "soma"){
				$("#result").val(valor1 + valor2);
				$("#op").text('');
			}
			/*Verificar se a operação é menos*/
			else if(operacao == "menos"){
				$("#result").val(valor1 - valor2);
				$("#op").text('');
			}
			/*Verificar se a operação é vezes*/
			else if(operacao == "vezes"){
				$("#result").val(valor1 * valor2);
				$("#op").text('');
			}
			/*Verificar se a operação é divisão*/
			else{
				$("#result").val(valor1 / valor2);
				$("#op").text('');
			}

		} else {
			alert('Insira o segundo valores a calcular!');
			}

	});

	/*Eliminar ultimo valor Introduzido*/
	$("input[name=c]").click(function(){
		var tamanho = $("#result").val().length;
		var varlor = $("#result").val();
		valor = valor.replace(valor.charAt(tamanho-1), "");
		$("#result").val(valor);

	});
});