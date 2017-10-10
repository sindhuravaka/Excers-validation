window._val_global = {};
window._val_global['page_settings'] = {};

var cssStyles = '<style>\r\n.tooltip {\r\n position: relative;\r\n display: inline-block;\r\n }\r\n\r\n.tooltip .tooltiptext {\r\n visibility: hidden;\r\n color: black;\r\nborder-radius:8px; \r\n text-align: center;\r\n border: 2px solid black;\r\n padding: 10px 6px 0px 6px;\r\n\r\n \/* Position the tooltip *\/\r\n position: absolute;\r\n z-index: 1;\r\n left: 0%;\r\nmargin-left:15px;\r\n}\r\n\r\n.tooltip .tooltiptext1 {\r\n visibility: hidden;\r\n color: #fff;\r\n text-align: center;\r\n border-radius: 6px;\r\n padding: 10px 6px 0px 6px;\r\n\r\n  \/* Position the tooltip *\/\r\n  position: absolute;\r\n z-index: 1;\r\n top: -150px;\r\n right: 105%;\r\n}\r\n\r\n.tooltip:hover .tooltiptext1 {\r\n visibility: visible;\r\n}\r\n\r\n.tooltip:hover .tooltiptext {\r\nvisibility: visible;\r\n}\r\n\r\n.button-hov { \r\n display: inline-block;\r\n position: absolute;\r\n right: 20px; inline-block;\r\n border-radius: 84px;\r\n background-color: #1c9a1a;\r\n border: 1px solid #1c9a1a;\r\n color: #FFFFFF;\r\n text-align: center;\r\n font-size: 10px;\r\n padding: 4px 6px 4px 6px;\r\n cursor: pointer;\r\n margin: 4px 10px 0px 0px;\r\n}\r\n#check {position: relative;z-index: 10000;fill: none;stroke: green;stroke-width: 20;stroke-linecap: round;stroke-dasharray: 180;stroke-dashoffset: 180; animation: draw 2s 1 ease;}@keyframes draw {  to {    stroke-dashoffset: 0;  }}\r\nfont{\r\n font-weight: bold;\r\n}\r\n\r\n.greenHiglight{\r\n  animation: 0.5s animateGreenBorder ease 3!important;\r\n outline: 2px;\r\n}\r\n\r\n@keyframes animateGreenBorder {\r\n  to {\r\n  box-shadow: 0 0 0 2px green;\r\n  }\r\n}\r\n\r\n.yellowHiglight{\r\n  animation: 0.5s animateYellowBorder ease 3!important;\r\n outline: 2px;\r\nbox-shadow: 0 0 0 2px yellow;\r\n}\r\n\r\n@keyframes animateYellowBorder {\r\n  to {\r\n  box-shadow: 0 0 0 2px white;\r\n  }\r\n}\r\n\r\n.redHiglight{\r\n  animation: 0.5s animateRedBorder ease 3!important;\r\n outline: 2px;\r\n}\r\n\r\n@keyframes animateRedBorder {\r\n  to {\r\n  box-shadow: 0 0 0 2px Red;\r\n  }\r\n}\r\n\r\n.animation{\r\n  animation: 0.5s animateBorderOne ease 3;\r\n outline: 2px; box-shadow: 0 0 0 2px red; \r\n}\r\n\r\n@keyframes animateBorderOne {\r\n  to {\r\n  box-shadow: 0 0 0 2px white;\r\n  }\r\n}\r\n\r\n.blueAnimation{\r\n  animation: 0.5s animateBordertwo ease 3;\r\n outline: 2px; box-shadow: 0 0 0 2px #328FAB;\r\n float: left; \r\n}\r\n\r\n.greenAnimation{\r\n  animation: 0.5s animateBordertwo ease 3;\r\n outline: 2px; box-shadow: 0 0 0 2px #7cc61b;\r\n \r\n}\r\n\r\n@keyframes animateBordertwo {\r\n  to {\r\n  box-shadow: 0 0 0 2px ;\r\n  }\r\n}\r\n\r\n@-moz-keyframes blink {\r\n0% {\r\n opacity:1;\r\n}\r\n50% {\r\n opacity:0;\r\n}\r\n100% {\r\n opacity:1;\r\n}\r\n} \r\n\r\n@-webkit-keyframes blink {\r\n0% {\r\n opacity:1;\r\n}\r\n50% {\r\n opacity:0;\r\n}\r\n100% {\r\n opacity:1;\r\n}\r\n}\r\n/* IE */\r\n@-ms-keyframes blink {\r\n0% {\r\n opacity:1;\r\n}\r\n50% {\r\n opacity:0;\r\n}\r\n100% {\r\n opacity:1;\r\n}\r\n} \r\n/* Opera and prob css3 final iteration */\r\n@keyframes blink {\r\n0% {\r\n opacity:1;\r\n}\r\n50% {\r\n opacity:0;\r\n}\r\n100% {\r\n opacity:1;\r\n}\r\n} \r\n.blink-image {\r\n  -webkit-animation-name: blink;\r\n -moz-animation-name: blink;\r\n -o-animation-name: blink;\r\n  animation-name: blink; \r\n  -webkit-animation-iteration-count: 5;\r\n -moz-animation-iteration-count: 5;\r\n -o-animation-iteration-count: 5;\r\n  animation-iteration-count: 5;\r\n-webktit-animation-timing-function: linear;\r\n  -moz-animation-timing-function: linear;\r\n -o-animation-timing-function: linear;\r\n animation-timing-function: linear;\r\n  -webkit-animation-duration: 1s;\r\n -moz-animation-duration: 1s;\r\n -o-animation-duration: 1s;\r\n  animation-duration: 1s;\r\n}\r\n\r\ninfo.tooltips {\r\n  position: relative;\r\n  display: inline-block;\r\n top: 2px; \r\n}\r\ninfo.tooltips msg {\r\n  position: absolute;\r\n width: 206px;\r\n color: #328FAB;\r\n background: #ffffff;\r\n line-height: 30px;\r\n text-align: center;\r\n visibility: hidden;\r\n border-radius: 9px;\r\n font-weight: bold;\r\n white-space: pre-line;  \r\n border: 2px solid #328FAB;\r\n}\r\ninfo:hover.tooltips msg {\r\n  visibility: visible;\r\n  opacity: 1;\r\n  left: 55%;\r\n  top: 50%;\r\n  margin-top: -15px;\r\n  margin-left: 15px;\r\n  z-index: 999;\r\n}\r\n\r\nlabel.tour-butto {\r\ndisplay: inline-block;\r\nposition: relative;\r\nwidth: 20px;\r\nheight: 20px;\r\nborder-radius: 50%;\r\ntext-indent: -9999em;\r\nbackground-color: #00b092;\r\ncursor: pointer;\r\n}\r\n\r\nlabel.tour-butto:before {\r\ncontent: "";\r\nposition: absolute;\r\ntop: 0;\r\nleft: 0;\r\nbackground-color: inherit;\r\nborder-radius: inherit;\r\nwidth: inherit;\r\nheight: inherit;\r\n}\r\n\r\nlabel.tour-butto:after {\r\ncontent: "i";\r\nfont-family: initial;\r\nfont-weight: 700;\r\nfont-size: 12px;\r\nposition: absolute;\r\ntop: 2px;\r\nleft: 8px;\r\ncolor: #fff;\r\nwidth: inherit;\r\nheight: inherit;\r\ntext-indent: 0;\r\n}\r\n\r\nlabel.tour-butto:before {\r\nanimation-name: pulsar;\r\nanimation-duration: 4s;\r\nanimation-speed: 1s;\r\nanimation-iteration-count: infinite;\r\n}.<\/style>';

window._val_global.LN_apply_page_settings = function () {
    $.each(window._val_global['page_settings'], function (name, settings) 
	{
		if (window.location.hash.indexOf(settings.hash) != -1) 
		{
			if ($('[id*="validationStyles"]').length==0)
			{
				$('body').append("<div id='validationStyles'>"+cssStyles+"</div>");
				window._val_global.LN_init_page(name, settings);
			}
		}
	});
    window.setTimeout(function () 
	{
        window._val_global.LN_apply_page_settings();//will execute iteratively
	}, 2000);
}
window._val_global.LN_apply_page_settings();

//****************WARNING AREA(addWarn,removeWarn)*****************************
   window._val_global.addWarning=function(selector,num_w){
  
        //New Warnings
        if(selector.siblings('tick').length>0){ selector.siblings('tick').remove();}
		if(selector.hasClass('blueAnimation')) {selector.removeClass("blueAnimation"); }
        if(!selector.hasClass('animation')){
			selector.addClass('animation');
     		selector.after(V_warnMsg(num_w))};
        }; 
   window._val_global.removeWarning=function(selector,warning){
        //New Ticks
        $(warning).remove();
        selector.removeClass("animation");
        if(!selector.hasClass('blueAnimation'))  {selector.addClass("blueAnimation");}
		if(!selector.siblings('tick').length) {
        selector.after(tick)}; 
     };//*******************WARNING AREA ENDS******************************************

window._val_global.LN_init_page = function (name, settings) 
{
		window._val_global.LN_Add_Info_Icon = function (name, img, parentSelector) 
			{
			if(document.getElementById(name)) { return; }
			var title_status = $('<button/>', { style: "vertical-align:middle", class: 'button-tool', id: name });
			$(title_status).addClass("tooltip").append('<img src="http://excers.com/img_letzNav/info-icon.png" width="20" /><span class="tooltiptext"><img src="'+ img +'" /></span>');	
			$(parentSelector).parent().next().after(title_status);
			var selector = $('[style="display: none;"]');
			 Adding_popup = selector.addClass('humane error humane-libnotify-error');
			}
	warnings = 
		{
		  1:"When the time entered is less than 8, You have to enter notes",  
	    };
	//Warning Add Function
     function V_warnMsg(key){	
		var warnStyle =$("<warn" + key + "/>", {
			'class': 'tooltips'
			, 'html': '&nbsp;&nbsp;&nbsp;<img src="https://excers.com/img_letzNav/warn.png" width="15" /><msg>' + warnings[key] + '</msg>'
		}).append('<style>\r\nwarn' + key + '.tooltips {\r\n  position: relative;\r\n  display: inline-block;\r\n top: 2px; \r\n}\r\nwarn' + key + '.tooltips msg {\r\n  position: absolute;\r\n width: 192px;\r\n color: #ff0000;\r\n background: #ffffff;\r\n line-height: 22px;\r\n text-align: center;\r\n visibility: hidden;\r\n border-radius: 9px;\r\n font-weight: bold;\r\n white-space: pre-line;  \r\n border: 2px solid #ff0000;\r\n}\r\nwarn' + key + ':hover.tooltips msg {\r\n  visibility: visible;\r\n  opacity: 1;\r\n  left: 55%;\r\n  top: 50%;\r\n  margin-top: -20px;\r\n  margin-left: 15px;\r\n  z-index: 999;\r\n}\r\n}<\/style>');
		return warnStyle;
	}
	/*To Add Error on the top of screen - Humane Error/Red/Yellow/Green*/
	function Add_Humane_Animate(colorCode,information){
		//console.log('Animation Added');
		var selector = $('[style*="display: none;"]');
			 Adding_popup = selector.addClass('humane error humane-libnotify-error');
		if(!(Adding_popup.hasClass('humane-animate'))){
			//console.log('Moved into loop');
					Adding_popup.addClass('humane-animate').css('display','block').css('background-color',colorCode).text(information).css('color','black').fadeOut(2500,'linear',function(){selector.removeClass('humane-animate').css({'background-color':''});}); 
					}
	}
	
	if(name=='timesheet')//Idea PAGE VALIDATION STARTSSS*************
	{
		//<VALIDATION CODE GOES HERE>
		$('[class*="actuals-input"][ng-model="row[\'actuals\'+index].value"]').on('focusout',function(){
		console.log('start');
		//validation for less than 8 hours per day start.
		var hours = $('[class*="actuals-input"][ng-model="row[\'actuals\'+index].value"]');
		var days = $('[class*="timesheet-header-editable-actual"]:not([ng-if*="headers.sum === undefined"]) span');
		var Notes = $('[class*="timesheet-header"][ng-click*="carousel.openNotes"]');
		var selector = $('[style*="display: none;"]');
		var Adding_popup = selector.addClass('humane error humane-libnotify-error');
		var count = 0;
	window.setTimeout(function(){
		for(c1=0;c1<=days.length;c1++)
		{
			var days1 = $('[class*="timesheet-header-editable-actual"]:not([ng-if*="headers.sum === undefined"]) span:eq('+c1+')');
		
			if(parseFloat(days1.text())>24){
				days1.closest('div').addClass('animation');
				Add_Humane_Animate('#f41509','You Entered more than 24 hours a day, so make sure it is less than 24 hours ');
			}else{
				if(days1.closest('div').hasClass('animation')){
				days1.closest('div').removeClass('animation');
				}
			}
			
			if(c1>0 && c1<6){
				if(days1.text().length == 1){
					days1.closest('div').addClass('yellowHiglight');
					Add_Humane_Animate('#efde1f','You have not entered time for a day, so please enter 8hours to PTO Task.');
				}else{
					if(days1.closest('div').hasClass('yellowHiglight')){
					days1.closest('div').removeClass('yellowHiglight');
					}
				}
				
				if((parseFloat(days1.text()))<8 && days1.text().indexOf(',')==-1){
					count++;
					Notes.addClass('greenAnimation');
					days1.closest('div').addClass('greenAnimation');
					Add_Humane_Animate('#78dd25','You Entered less than 8 hours a day, so please add Notes');
				}else days1.closest('div').removeClass('greenAnimation');	
			}		 
		}
			if(count==0){
			Notes.removeClass('greenAnimation');
			}
	},300);
		//validation for less than 8 hours per day end.
		});
	}
};
window._val_global['page_settings']['timesheet'] = {
    "hash": "#/timesheets/timesheet?timesheetId"
};