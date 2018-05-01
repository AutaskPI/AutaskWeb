$(document).ready(function(){

	$('#cep').blur(function(){
		var cep = $('#cep').val();
		var url = 'https://viacep.com.br/ws/' +cep+ '/json';
		$.getJSON(url, function(data){
			if("error" in data){

			alert("Deu ruim");
		}
		$('#rua').val(data.logradouro);
		$('#bairro').val(data.bairro);
		$('#cidade').val(data.localidade);
		$('#uf').val(data.uf);
		$('#complemento').val(data.complemento);

		})
	})
})