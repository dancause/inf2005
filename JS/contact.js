



function enregistrer() {
        var prenom_element = document.getElementById('firstname');
        var prenom = prenom_element.value;
        
        var nom_element = document.getElementById('lastname');
        var nom = nom_element.value;
        
        var telephone_element = document.getElementById('phone');
        var telephone = telephone_element.value;
        
        var courriel_element = document.getElementById('email');
        var courriel = courriel_element.value;
        
        var service_element = document.getElementById('service');
        var service = service_element.value;
        
        var message_element = document.getElementById('message');
        var message = message_element.value;
        var stringJson = {"Contact":[
                                     {"Prenom" : prenom , "Nom" : nom , "Telephone" : telephone , "Courriel" : courriel , "Service" : service , "message" : message}
                                     ]};
       
        localStorage.setItem("stringJson", JSON.stringify(stringJson));
        
}



$(document).ready(function(){
	$(":submit").click(function(){
		return enregistrer();
	});
	
});

