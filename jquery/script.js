$(document).ready(function () {
	
	// cidades
	$.getJSON('jquery/estados-cidades.json', function( data ) {
		
        var itens = '<option value="">- Selecione um estado -</option>';

        $.each(data.estados, function (key, val) {
            itens = itens + '<option value="' + val.sigla + '">' + val.nome + '</option>';
        });

        $('#estado').html(itens);
        $('#estado').change(function () {
			
			var item = '<option value="">- Selecione uma cidade -</option>';
			
			var estado = $(this).val();
			
			$.each(data.estados, function (key, val) {
			
				if (estado == val.sigla ) {
					
					$.each(val.cidades, function (i, val) {
						item = item + '<option value="' + i + '">' + val + '</option>';
					});
				}
				
			});
			
			$('#cidade').html(item);
        
        }).change();
    });	
	
	
	
});