/**
 * Created by ines.bras on 27/06/2017.
 */
 /** Yes, this is a reference to The Big Bang Theory. Deal with that **/

/**Open the language selector **/
function openClose(link){link.className=(link.className.indexOf("country-selector closed")<0)?link.className.replace("country-selector","country-selector closed"):link.className.replace("country-selector closed","country-selector");var body=document.body,html=document.documentElement;var page_height=Math.max(body.scrollHeight,body.offsetHeight,html.clientHeight,html.scrollHeight,html.offsetHeight);var h=getOffset(link).top;var position=window.getComputedStyle(link).getPropertyValue("position");var bottom=window.getComputedStyle(link).getPropertyValue("bottom");var top=window.getComputedStyle(link).getPropertyValue("top");if((position!="fixed"&&h>page_height/2)||(position=="fixed"&&h>100)){link.className+=" weg-openup"}
return!1}
/*magic!*/
function getOffset(element){var top=0,left=0;do{top+=element.offsetTop||0;left+=element.offsetLeft||0;element=element.offsetParent}while(element);return{top:top,left:left}}


/*NAVBAR - Dropdown submenu */


$(document).ready(function(){
    $('.dropdown-submenu a.test').on("click", function(e){
        $(this).next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
    });
});

