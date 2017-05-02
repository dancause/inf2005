$.support.cors=true;
$(document).ready(function(){
	$("#rdv").click(function(){
		$.ajax({
			type: "GET",
		url: "../XML/rendezvous.xml",
		dataType: "xml",
		isLocal: true,
		error : function(error){alert("erreur telechargement du fichier XML");},
		success: function(xml){
		var rdv='<table> <thead> <tr> <th class="col-md-2">Avocat</th><th class="col-md-2">Client</th><th class="col-md-2">Lieux</th><th class="col-md-2">Date</th><th class="col-md-2">Heure</th></tr></thead><tbody>';
		$(xml).find("rendezvous").each(function(index){	
			rdv=rdv+ "<tr>";
			rdv=rdv + '<td class="col-md-2">' + $(this).find("avocat").text() + "</td>";
			rdv=rdv + '<td class="col-md-2">' + $(this).find("client").text() + "</td>";
			rdv=rdv + '<td class="col-md-2">' + $(this).find("lieux").text() + "</td>";
			rdv=rdv + '<td class="col-md-2">' + $(this).find("date").text() + "</td>";
			rdv=rdv + '<td class="col-md-2">' + $(this).find("heure").text() + "</td>";
			rdv=rdv+ "</tr>";
		});
		 rdv=rdv+"</tbody></table><hr>";
		 		
		 $("#affiche").append(rdv);
		}
		});
	}
	
	);
	
	$("#contacts").click(function(){
		
		//$('table').eq(0).DataTable();
		bd=localStorage.getItem('stringJson');
		bd=JSON.parse(bd);
		var descJsonObjects=bd.Contact;
		var jsonObject=null;
		jsonObject=descJsonObjects[0];
		var prenom = jsonObject.Prenom ;
	    
		var nom = jsonObject.Nom;
		var telephone = jsonObject.Telephone;
		var courriel = jsonObject.Courriel;
		var service = jsonObject.Service;
		var message = jsonObject.message;
		
		 
	    var div = '<table class="display" id="tableau"> <thead> <tr> <th class="col-md-2">Prenom</th> <th class="col-md-2">Nom</th> <th class="col-md-2">Telephone</th> <th class="col-md-2">Courriel</th> <th class="col-md-2">Service</th> <th class="col-md-2">Message</th> </tr> </thead> <tbody> <tr>';
		div = div + '<td class="col-md-2">'+prenom+'</td><td class="col-md-2">'+nom+'</td><td class="col-md-2">'+telephone+'</td><td class="col-md-2">'+courriel+'</td><td class="col-md-2">'+service+'</td><td class="col-md-2">'+message+'</td></tr> </table> <hr>';
		$('table').eq(0).DataTable();
	    $("#affiche:first").append(div);
	    $('table').eq(0).DataTable();
		
	});
	
	
	
}
);

