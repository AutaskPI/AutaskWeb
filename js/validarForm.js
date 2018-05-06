 <script>
$(document).ready(function(){
	
	
	
         $('#cadastrar').click(function(){
			 var nome =$('#inputnome').val();
			 var horario =$('#inputhorario').val();
			 var contato  =$('#inputcontato').val();
			 var cnpj  =$('#inputcnpj').val();
			 var valor  =$('#inputvalor').val();
			 var telefone=$('#inputelefone').val();
			 var celular=$('#inputcelular').val();
			 var descricao=$('#inputdescricao').val();
						
						
			
			 if (nome==null || nome==""){
				 
				alert("Preencher o nome fantasia");
			 }else if(horario==null || horario==""){
				alert("Preencher o campo horario");
				 
			 }else if(contato==null || contato==""){
				alert("Preencher o campo e-mail");
				 
			 }else if(cnpj==null || cnpj==""){
				alert("Preencher o campo CNPJ");
				 
			 }else if(valor==null || valor==""){
				alert("Selecionar o logo da sua empresa");
				 
			}else if((telefone==null) || (telefone=='')){
				 alert('Preencher o campo telefone');
				 
			 }else if(celular==null || celular==""){
				 alert("Preencher o campo celular");
				 
			 }else if(descricao==null || descricao==""){
				alert("Preencher o campo descrição");
				 
				 
			 }else if(isNaN(telefone ==true)){
				 
				alert('nao e numero');
				 
				 
			 }else{
			 
			 
				alert("valido");	
			 }
			
		 })
	})
       $('#buscarcep').click(function(){
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
    </script>
    <!-- Bootstrap core JavaScript-->
    <script src="vendor/jquery/jquery.min.js "></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js "></script>
    <!-- Core plugin JavaScript-->
    <script src="vendor/jquery-easing/jquery.easing.min.js "></script>
    <!-- Custom scripts for all pages-->
    <script src="js/sb-admin.min.js "></script>