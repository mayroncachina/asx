function getLojaMeuCartao(url){
	
	$.ajax({
	    url: url,
	    type: 'GET',
	    error : function (data){
	            alert('Acesso Negado!');
	            console.log(data);
	    },
	    success: function (data) {
	    	
				
				console.log(data)
		    	$(".loja-nome").html(data.Nome);
		    	$(".loja-endereco").html('<a href="#loja-localizacao"><image src="img/maps-small.png"> ' + data.Endereco + '</a>');
		    	$(".loja-fone").html('<image src="img/phone.png"> <a href="tel:' + data.Telefone +'">'+ data.Telefone+ '</a>');
		    	$(".loja-imagem").attr('src', data.ImagemUrl)
		    	
		    	$(".loja-homepage").attr('href', data.Homepage)
		    	$(".loja-homepage").attr('target', '_blank')

		    	$('.loja-cartoes').html("");

	    	if(data.Cartoes.length > 0){
				var linha =  '<div id="tabs">';
				linha += '  <div data-role="navbar">';
				linha += '    <ul class="menu-cartoes">';

				for (var i = 0; i < data.Cartoes.length; i++) {

					var cardColor = "white";

					if(data.Cartoes[i].ID == 1){
						cardColor = "blue";
					}else if(data.Cartoes[i].ID == 2){
						cardColor = "green";
					}else if(data.Cartoes[i].ID == 3){
						cardColor = "pink";
					}

					linha += '    <li><a style="text-align: center" href="#1" data-icon="false" onclick="showCard('+data.Cartoes[i].ID+')" class="button '+cardColor+' bigrounded">'+data.Cartoes[i].ID+'</a></li>'; 

				
		    	}

		        linha += '    </ul>';
				linha += '  </div>';
				
				for (var i = data.Cartoes.length-1; i >= 0 ; i--) {
					console.log(data.Cartoes[i])
					
					linha += '  <div id="card-'+data.Cartoes[i].ID+'" class="ui-body-d ui-content hide card-info">';
					linha += '    <fieldset data-role="controlgroup" data-type="horizontal" style="background:none repeat scroll 0% 0% rgb(233, 233, 233);font-size:10px">';
					linha += '  <h1 style="text-align:center">'+data.Cartoes[i].Nome+'</h1>';
				    linha += '        <div style="text-align:center">';

				    	for (var j = 1; j <= data.Cartoes[i].Maximo; j++) {

				    		if(data.Cartoes[i].Pontos < j){
				    			
				    			if(data.Cartoes[i].Maximo == j){
				    				linha += '		<img src="img/img_Premio_off.png" width="15%" />';
				    			}else{
				    				linha += '		<img src="img/img_P'+j+'_off.png" width="15%" />';
				    			}
				    		}else{
						
								if(data.Cartoes[i].Maximo == j){
									linha += '		<img src="img/img_Premio_on.png" width="15%" />';
								}else{
									linha += '		<img src="img/img_P'+j+'_on.png" width="15%" />';
								}
				    	
				    		}
				    	};

						
			    	
				    linha += '        </div>';
				    
					if(data.Cartoes[i].Maximo == data.Cartoes[i].Pontos){
						linha += '		<p style="text-align:center;color:#0071bc;font-size:12px"><strong>PARABENS, CARTÃO COMPLETADO!!!</strong>'
					}

					linha += '		<p style="text-align:center"><b>Validade: '+data.Cartoes[i].Validade.replace(/-/g,'/')+'</b></p>';

					if(data.Cartoes[i].Maximo != null){
						linha += '		<p style="text-align:center">Ao juntar '+data.Cartoes[i].Maximo+' pontos,  '+data.Cartoes[i].BrindeMaximo+'</p>';	
					}else if(data.Cartoes[i].Minimo != null){
						linha += '		<p style="text-align:center">Ao juntar '+data.Cartoes[i].Minimo+' pontos,  '+data.Cartoes[i].BrindeMinimo+'</p>';	
					}else{
						linha += '		<p style="text-align:center">Ao juntar '+data.Cartoes[i].Minimo+' pontos,  '+data.Cartoes[i].BrindeMinimo+', e ao juntar '+data.Cartoes[i].Maximo+' pontos,  '+data.Cartoes[i].BrindeMaximo+'</p>';	
					}
					linha += '	</fieldset>';
					linha += '  </div>';
				}
				$('.loja-cartoes').append(linha);
				$('.loja-cartoes').trigger('create');

				$('.loading').hide();
				$('.dados-loja').show();
			}
	    }
	});

}