// JavaScript Document

$(document).ready(function(){
	 $('.dropbtn').click(function(){
	     $('.dropdown-content').toggle();	 
	});
	
	 $('.dropdown-content li').mouseenter(function(){
	    $(this).addClass('hovereff'); 
		$(this).children('a').addClass('hovereff');
	});
	
	 $('.dropdown-content li').mouseleave(function(){
	    $(this).removeClass('hovereff'); 
		$(this).children('a').removeClass('hovereff');
	});
	
})