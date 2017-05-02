$(document).ready(function(){
		var menu = '<div id="header">	<div class="top"> <h1 class="title">Cabinet Wayne, Stark et associ&eacute;s</h1> </div>';
	    menu = menu + '<div class="navbar">	<ul id="menu-deroulant">';		
	    menu = menu + '<li><a href="index.html"><img src="images/scales_black_silhouette.png" width="20" height="20"></a></li>';
	    menu = menu + '<li><a href="#"> FR/ENG </a>	<ul> <li><a href="#" class="menu">Fran&ccedil;ais</a></li>	<li><a class="menu" onclick="message();">English</a></li>';
	    menu = menu + '</ul> </li> <li><a href="avocats.html"> Avocats </a>	<ul> <li><a href="avocats.html#gerard" class="menu">G&eacute;rard Tremblay</a></li>';
	    menu = menu + '<li><a href="avocats.html#monique" class="menu">Monique Giroux</a></li> <li><a href="avocats.html#annie" class="menu">Annie Langlois</a></li>';
	    menu = menu + '<li><a href="avocats.html#felix" class="menu">Felix Gagn&eacute;</a></li><li><a href="avocats.html#john" class="menu">John Smith</a></li>';
	    menu = menu + '</ul></li><li><a href="#"> Sp&eacute;cialit&eacute;s </a><ul><li><a href="criminel.html" class="menu">Criminel</a></li><li><a href="commercial.html" class="menu">Commercial</a></li>';								
	    menu = menu + '<li><a href="immobilier.html" class="menu">Immobilier</a></li></ul></li><li><a href="publications.html"> Publications </a></li>';
	    menu = menu + '<li><a href="contact.html"> Contacts </a></li><li><a href="connexion.html"> Connexion </a></li><li><a href="organigramme.html"> Organigramme </a></li>';
	    menu = menu + '</ul></div><div id="myModal" class="modal"><div class="modal-content"><span class="close" onclick="fermer();">×</span>';
	    menu = menu + '<p>The english web page is coming soon we want your money to defend you</p><p>...Work in progress...</p></div></div>';

$("#header:first").append(menu);
});
