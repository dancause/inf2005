

function InfosAdmin()
{
		var bdjson={"usagers":[
		                         {"login":"admin@inf2005.ca", "password":"inf2005gr31"}
		                      ]}	
		
		localStorage.setItem('bdjson', JSON.stringify(bdjson));	
		bd=bdjson;
	
}


function connexion()
{   
	//récupération des info du formulaire
	login=$('input[name="user"]:first').val();
	pwd=$('input[name="password"]:first').val();
	
	
	
	//vérification dans la BD
	
	bd=localStorage.getItem('bdjson');
	if((bd=="undefined")||(bd==null))
	{//ici on doit initialiser la bd
		InfosAdmin();
	
	}
	else{
		bd=JSON.parse(bd);//parsing de objet json
	}
	users=bd.usagers;
	console.log(bd.usagers[0].login);
	
	
	if(login!=bd.usagers[0].login || pwd!=bd.usagers[0].password){
		alert("Mauvais nom d'utilisateur ou mot de passe.");
		return false;
		
	}
	
}

function animation()
{
	//$("#txtuser").click(function(){
		
		$("form div").animate({left: '250px' });
		
		
	//});
        
    

}

$(document).ready(function(){
	animation()
});



function validation()
{
document.getElementById("affiche").innerHTML=null;//efface
var oForm=document.forms[0];	
var nom=oForm.elements["user"].value;
var pw=oForm.elements["password"].value;

var json=require('./js/data.json');



if(i>5)
{
	document.getElementById("affiche").innerHTML="valeur entree ="+i+" ";
}
}