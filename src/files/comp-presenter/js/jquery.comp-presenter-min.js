(function($){$.fn.extend({compPresenter:function(options){var defaults={title:true,prevText:"<span>&larr;</span> Previous",nextText:"Next <span>&rarr;</span>",paging:true,align:"center",autoHide:true,pause:3000,speed:"slow"}
var options=$.extend(defaults,options);return this.each(function(){$(this).addClass("comp-viewport").wrap("<div class='comp-presenter' />");var obj=$(this).parent();var $slides=$("li",obj);if(options.title==true){options.title=document.title;}else if(options.title==false){options.title="";}
$(obj).prepend("<div class='comp-header'><div class='comp-header-bar'><div class='comp-header-content'><h1>"+options.title+" <span class='comp-page-title'></span></h1><div class='comp-controls'><span class='comp-paging'> (<span class='comp-slide-number'></span> of <span class='comp-total-slides'>"+$slides.length+"</span>)</span><a class='comp-previous' href='#'>"+options.prevText+"</a><a class='comp-next' href='#'>"+options.nextText+"</a></div></div></div></div>");var current=0;var $header=$(".comp-header",obj);var $headerBar=$(".comp-header-bar",obj);var headerBarHeight=$headerBar.height();var $title=$(".comp-header h1 span",obj);var $controls=$(".comp-controls",obj);var $paging=$(".comp-header .comp-paging",obj);var $slideNumber=$(".comp-header .comp-slide-number",obj);var $viewport=$(".comp-viewport",obj);var $nextBtn=$(".comp-next",obj);var $prevBtn=$(".comp-previous",obj);var timer;if($slides.length==1){$controls.hide();}
if(options.paging==false){$paging.hide();}
if(options.autoHide==true){$headerBar.addClass("visible");timer=setTimeout(autoHide,options.pause);}else{$header.css({height:"auto",position:"static"});}
$header.hover(function(){clearInterval(timer);showHeader();},function(){autoHide();});function showHeader(){if($headerBar.hasClass("hidden")==true){$headerBar.animate({marginTop:0},"fast",function(){$headerBar.removeClass("hidden").addClass("visible");});}}
function autoHide(){if($headerBar.hasClass("visible")==true){$headerBar.animate({marginTop:-headerBarHeight},"fast",function(){$headerBar.removeClass("visible").addClass("hidden");});}}
function alignSlides(){var windowWidth=$(obj).width();var slideWidth=$slides.width();var rightWidth=windowWidth-slideWidth;var centerWidth=rightWidth/2;if(options.align=="center"){$slides.css("margin-left",centerWidth);}else if(options.align=="right"){$slides.css("margin-left",rightWidth);}}
$(window).resize(function(){alignSlides();});$nextBtn.click(function(){nextSlide();return false;});$prevBtn.click(function(){prevSlide();return false;});function nextSlide(){current++;if(current>=$slides.length){current=0;}
showSlide();}
function prevSlide(){current--;if(current<0){current=$slides.length-1;}
showSlide()}
function showSlide(){$(".current",obj).removeClass("current").fadeOut(options.speed);$title.text($($slides[current]).children("img").attr("alt"));$slideNumber.text(current+1);$($slides[current]).addClass("current").fadeIn(options.speed);$viewport.height($($slides[current]).height());alignSlides();}
$(window).load(function(){alignSlides();showSlide();});});}});})(jQuery);