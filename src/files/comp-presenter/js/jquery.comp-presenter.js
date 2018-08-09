/*
	COMP-PRESENTER JQUERY PLUGIN CSS
	by:Steven Waller
	http://blog.stevendesigns.com/comp-presenter-jquery-plugin/
	The Comp-Presenter jQuery plugin is free to use and you can re-purpose it to suit your needs. Licensed under GPL and MIT
*/
(function($){  
$.fn.extend({
	compPresenter: function(options) {  
		var defaults = {  
			title:true,
			prevText:"<span>&larr;</span> Previous",
			nextText:"Next <span>&rarr;</span>",
			paging:true,
			align:"center",
			autoHide:true,
			pause:3000,
			speed:"slow"
		}  
		
		var options =  $.extend(defaults, options);
		 
		return this.each(function() {  
			$(this).addClass("comp-viewport").wrap("<div class='comp-presenter' />");
			var obj = $(this).parent();
			var $slides = $("li",obj);
			
			//set slideshow title
			if(options.title == true){
				options.title = document.title;
			}else if(options.title == false){
				options.title = "";	
			}
			
			//add the HTML code to build the header
			$(obj).prepend("<div class='comp-header'><div class='comp-header-bar'><div class='comp-header-content'><h1>"+options.title+" <span class='comp-page-title'></span></h1><div class='comp-controls'><span class='comp-paging'> (<span class='comp-slide-number'></span> of <span class='comp-total-slides'>"+$slides.length+"</span>)</span><a class='comp-previous' href='#'>"+options.prevText+"</a><a class='comp-next' href='#'>"+options.nextText+"</a></div></div></div></div>");
			
			var current = 0;
			var $header = $(".comp-header",obj);
			var $headerBar = $(".comp-header-bar",obj);
			var headerBarHeight = $headerBar.height();
			var $title = $(".comp-header h1 span",obj);
			var $controls = $(".comp-controls",obj);
			var $paging = $(".comp-header .comp-paging",obj);
			var $slideNumber = $(".comp-header .comp-slide-number",obj);
			var $viewport = $(".comp-viewport",obj);
			var $nextBtn = $(".comp-next",obj);
			var $prevBtn = $(".comp-previous",obj);
			var timer;								

			//if there is only one image hide the controls
			if($slides.length == 1){
				$controls.hide();
			}
			if(options.paging == false){
				$paging.hide();
			}

			//Show and Hide header or make it always visible
			if(options.autoHide == true){
				$headerBar.addClass("visible");
				timer = setTimeout(autoHide, options.pause);
			}else{
				$header.css({
					height:"auto",
					position:"static"
				});
			}
			
			//When hovering over the top, show or hide the header
			$header.hover(
				function(){
					clearInterval(timer);
					showHeader();
				},
				function(){
					autoHide();	
				}
			);	
			//show header
			function showHeader(){
				if($headerBar.hasClass("hidden") == true){
					$headerBar.animate({
						marginTop:0	
					},"fast",function(){
						$headerBar.removeClass("hidden").addClass("visible");
					});
				}
			}
			//hide header
			function autoHide(){
				if($headerBar.hasClass("visible") == true){
					$headerBar.animate({
						marginTop:-headerBarHeight	
					},"fast",function(){
						$headerBar.removeClass("visible").addClass("hidden");
					});
				}
			}
				
			//Align slides to left, center or right
			function alignSlides(){
				var windowWidth = $(obj).width();
				var slideWidth = $slides.width();
				var rightWidth = windowWidth-slideWidth;
				var centerWidth = rightWidth/2;
				if(options.align == "center"){
					$slides.css("margin-left",centerWidth);
				}else if(options.align == "right"){
					$slides.css("margin-left",rightWidth);
				}
			}
			//re-align slides if window is resized
			$(window).resize(function(){
				alignSlides();
			});
			
			//navigation buttons
			$nextBtn.click(function(){
				nextSlide();
				return false;
			});
			$prevBtn.click(function(){
				prevSlide();
				return false;
			});
			
			//Show next or previous slide
			function nextSlide(){
				current++;
				if(current >= $slides.length){
					current = 0;	
				}
				showSlide();
			}
			function prevSlide(){
				current--;
				if(current < 0){
					current = $slides.length-1;	
				}
				showSlide()
			}
			function showSlide(){
				$(".current",obj).removeClass("current").fadeOut(options.speed);
				$title.text($($slides[current]).children("img").attr("alt"));
				$slideNumber.text(current+1);
				$($slides[current]).addClass("current").fadeIn(options.speed);
				$viewport.height($($slides[current]).height());
				alignSlides();
			}
			
			//make sure all the slides are loaded, then kick things off
			$(window).load(function(){
				alignSlides();
				showSlide();									   
			});
			
		});  
	}  
});       
})(jQuery); 