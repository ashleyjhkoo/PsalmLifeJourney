
    // body overflow setup start
	$('html, body').css({
	    overflow: 'hidden',
	    height: '100%'
	});
    // body overflow setup end	

    // Page Slide Image changes triggered by Mousewheel event
    $("#slideImg01").show();
    var wheel;
    var countH = 0;
    var countSeason = 0;
    var scrollingH=false;
    var iH=0;
    $(window).bind('mousewheel', function(e){

      // MouseWheel up, do not show contents	
      if(scrollingH&&e.originalEvent.wheelDelta >= -100) {
         scrollingH=false;
      }

      // MouseWheel down, change contents of slide #, season illustration
      if(!scrollingH&&e.originalEvent.wheelDelta < -100)
      {
        scrollingH=true;
        countH=(countH+1)%4;
        $(".circleImg").hide();
        $("#slideImg0"+(countH+1)).show();
        
        //Call Wheel animation and call animated illustration inside
        changeSection(countH, true);
      }   

    });

    // Distribute poem page - Start
    function callPoem(countSeason){
    	if(countSeason===0){

        	window.location = 'Poem_Spring'+'.html';

    	}
    	else if(countSeason===1){   	


        	window.location = 'Poem_Summer'+'.html';

    	}
    	else if(countSeason===2){ 

        	window.location = 'Poem_Winter'+'.html';
        	

        }
    	else { 

        	window.location = 'Poem_Fall'+'.html';

        }
    }
    // Distribute poem page - End




    // function to define to call wheel animation, animated illustration inside
	function changeSection(index, navigate=true){
         countH = index;
         $(".circleImg").hide();
         $("#slideImg0"+parseInt(index+1)).show();
         if(navigate == true){
           wheel.navItems[index].navigateFunction(false);
	     }
	     wheel.navigateWheel(index);
	     animate_images(index);
	}

    // W3 open, close - Half SideNav Start
	function w3_open() {
		document.getElementById("mySidenav").style.display = "block";
		document.getElementById("myOverlay").style.display = "block";
	}
	function w3_close() {
	    document.getElementById("mySidenav").style.display = "none";
	    document.getElementById("myOverlay").style.display = "none";
	    document.getElementById("id01").style.display = "none";	    
	}
    // W3 open, close - Half SideNav End

    // openNav, closeNav - Fullscreen Overlay Start

	function openNav() {
		document.getElementById("myNav").style.width = "100%";
	}

	function closeNav() {
		document.getElementById("myNav").style.width = "0%";
	}
    // openNav, closeNav - Fullscreen Overlay End    

    // Animated illustration_TweenMax - Start
	function animate_images(index){
	    var elem_ids = [];
	    if(index == 0){
	        elem_ids.push('#id0_spring');
	        elem_ids.push('#id1_spring');
	        elem_ids.push('#id2_spring');
	        countSeason = 0;
	    }
	    else if(index == 1){
	        elem_ids.push('#id0_summer');
	        elem_ids.push('#id1_summer');
	        elem_ids.push('#id2_summer');
	        countSeason = 1;  
	    }
	    else if(index == 2){
	        elem_ids.push('#id0_winter');
	        elem_ids.push('#id1_winter');
	        elem_ids.push('#id2_winter');
	        countSeason = 2;  
	    }
	    else if(index == 3){
	        elem_ids.push('#id0_fall');
	        elem_ids.push('#id1_fall');
	        elem_ids.push('#id2_fall');
	        countSeason = 3;   
	    }

	    TweenMax.from( $(elem_ids[0]), 0.35,
	           {delay:0, css:{scale:0.05, opacity:0, rotation: 180}, 
	           ease:Quad.easeInOut
	      });
	    TweenMax.from( $(elem_ids[1]), 0.35,
	           {delay:0.15, css:{scale:0.05, opacity:0, rotation: 180}, 
	           ease:Quad.easeInOut
	      });
	    TweenMax.from( $(elem_ids[2]), 0.35,
	           {delay:0.25, css:{scale:0.05, opacity:0, rotation: 180}, 
	           ease:Quad.easeInOut
	      });
	}
	// Illustration Animate_TweenMax - End

    // Stop Scrolling of About Sidenav Div #spanDiv Start
	(function () {
	    var resizeContentWrapper = function () {
	            console.group('resizing');
	        
	        
	            var target = {
	                content: $('#spanContents')
	            };
	        
	            //resize window, assuming that last time around it was set to document height, and might be pushing document height beyond window after resize
	            //TODO: for performance, insert flags to only do this if the window is shrinking, and the div has already been resized
	            target.content.css('height', $(window).height());
	        
	            var height = {
	                document: $(document).height(),
	                window: $(window).height()
	            };
	        
	            console.log('height: ', height);
	        

	            if (height.document > height.window) {
	                // Scrolling needed, no need to extend the sidebar
	                target.content.css('height', '');
	                
	                console.info('custom height removed');
	            } else {
	                // Set the new content height
	                height['content'] = height.window;
	                target.content.css('height', height['content']);
	                
	                console.log('new height: ', height);
	            }
	            console.groupEnd();
	        }
	    resizeContentWrapper();
	    $(window).bind('resize orientationchange', resizeContentWrapper);
	})(jQuery);  
	// Stop Scrolling of About Sidenav Div #spanDiv End

    // FB api start
	function showFB() {
		$('#shareImg').toggle();
	}

	  window.fbAsyncInit = function() {
	    FB.init({
	      appId      : '213348109099447',
	      xfbml      : true,
	      version    : 'v2.8'
	    });
	  };

	  (function(d, s, id){
	     var js, fjs = d.getElementsByTagName(s)[0];
	     if (d.getElementById(id)) {return;}
	     js = d.createElement(s); js.id = id;
	     js.src = "https://connect.facebook.net/en_US/sdk.js";
	     fjs.parentNode.insertBefore(js, fjs);
	   }(document, 'script', 'facebook-jssdk'));


	  window.fbAsyncInit = function() {
	    FB.init({
	      appId      : '213348109099447',
	      xfbml      : true,
	      version    : 'v2.6'
	    });
	  };

	  (function(d, s, id){
	     var js, fjs = d.getElementsByTagName(s)[0];
	     if (d.getElementById(id)) {return;}
	     js = d.createElement(s); js.id = id;
	     js.src = "//connect.facebook.net/en_US/sdk.js";
	     fjs.parentNode.insertBefore(js, fjs);
	   }(document, 'script', 'facebook-jssdk'));

	function checkLoginState() {
	  FB.getLoginStatus(function(response) {
	    console.log(response);
	  });
	}
	// FB api end


window.onload = function () {
		//WheelNav.js createWheel large screen start
       if($(this).width() > 600) {

			wheel = new wheelnav("divWheel");
			wheel.slicePathFunction = slicePath().DonutSlice;
			wheel.markerPathFunction = markerPath().PieLineMarker;
			wheel.clickModeRotate = false;
			wheel.colors = ['#69a0e8','#d49761','#5562b4','#b479a2'];
			wheel.markerEnable = true;
			wheel.createWheel(['Spring', 'Summer', 'Winter', 'Fall']);
			console.log(wheel);

	        $('#mySidenav').css({"width": "500px","font-size": "17px"});			
		//WheelNav.js createWheel large screen end
		} else {

		    // WheelNav.js createWheel small screen Start
		    wheel = new wheelnav("divWheelSmall");
			wheel.slicePathFunction = slicePath().DonutSlice;
			wheel.markerPathFunction = markerPath().PieLineMarker;
			wheel.clickModeRotate = true;
			wheel.colors = ['#69a0e8','#d49761','#5562b4','#b479a2'];
			wheel.markerEnable = true;
			wheel.createWheel(['Spring', 'Summer', 'Winter', 'Fall']);
			wheel.titleFont = ['100 14px Impact, Charcoal, sans-serif'];


			wheelnav.spreaderTitleFont = ['100 14px Impact, Charcoal, sans-serif'];

		    $('text#wheelnav-divWheelSmall-title-1').css("font-size","14px")
		    $('text#wheelnav-divWheelSmall-title-2').css("font-size","14px")
		    $('text#wheelnav-divWheelSmall-title-3').css("font-size","14px")
		    $('text#wheelnav-divWheelSmall-title-0').css("font-size","14px")
		    // WheelNav.js createWheel small screen End


		    // Inside wheel, illustration css set up
            $(".id0").css({"width": "190.56px", "height": "197.28px"});
            $(".id1").css({"width": "190.56px", "height": "197.28px"});
            $(".id2").css({"width": "190.56px", "height": "197.28px"});
            $(".id3").css({"left": "120px", "top": "90px"});
            $("#id4").css({"width": "19.8px", "height": "19.2px", "left": "200px", "top": "228px"});
            $('#mySidenav').css({"width": "300px","font-size": "13px"});
	    } //end of else

        // function start
		(function(){
		  /* Loading animation is showing */ 
		  	  $('#divWheel').css('display', 'none');
		  	  $('#divWheelSmall').css('display', 'none');
			  var getIntervalVal = window.setInterval(function(){ 
			     clearInterval(getIntervalVal);
			     $('#psalmLoader').show();                
			  }, 100);

		  /* After loading animation finished, show main screen and wheel */ 
			  setTimeout(function(){
			     $('#divWheel').show();
			     $('#divWheelSmall').show(); 
			     $('#psalmLoader').hide();
			     $('#id5').show(); 
			     $('#id3_spring').show();
			     $('#rightBarTh').show();
			     $('#id4').show();  
			     $('#logoImg').show();
			     $('#aboutImg').show();
			     $('#socialImg').show();
			     $('#collectImg').show();
			     $("#slideImg01").show();
			  }, 2000);
		  
		})();
		// function end

		// WheelNav.js when click the wheel, show contents in center of the wheel start
		// wheel.navItems[0].navigateFunction = function () { alert('Hello Spring'); };
		wheel.navItems[0].navigateFunction = function () { 
			console.log("0");
            $('#id3_spring').show();  
            $('#id3_winter').hide();  
            $('#id3_summer').hide();  
            $('#id3_fall').hide(); 
            $(".circleImg").hide();
	        $("#slideImg01").show(); 
	        countSeason = 0; 
	        return countSeason;           
		};

		wheel.navItems[1].navigateFunction = function () {  
			console.log("1");
            $('#id3_winter').hide();  
            $('#id3_spring').hide();
			$('#id3_fall').hide();  
			$('#id3_summer').show(); 
			$(".circleImg").hide();
			$("#slideImg02").show();
            countSeason = 1;
            return countSeason;
		};

		wheel.navItems[2].navigateFunction = function () { 
			console.log("2");
            $('#id3_winter').show();  
            $('#id3_spring').hide();
			$('#id3_fall').hide();  
			$('#id3_summer').hide();  
            $(".circleImg").hide();
	        $("#slideImg03").show();
            countSeason = 2;
            return countSeason;	        
		};

		wheel.navItems[3].navigateFunction = function () {  
			console.log("3");
            $('#id3_winter').hide();  
            $('#id3_spring').hide();
			$('#id3_fall').show();  
			$('#id3_summer').hide(); 

            $(".circleImg").hide();
	        $("#slideImg04").show();
            countSeason = 3;
            return countSeason;	        			
		};
		// WheelNav.js when click the wheel, show contents in center of the wheel end	    

    // WheelNav.js createWheel when resize start
    $(window).resize(function() {


	    //WheelNav.js medium large wheel style set up Start
		if($(this).width() > 600){


		    wheel = new wheelnav("divWheel");
			wheel.slicePathFunction = slicePath().DonutSlice;
			wheel.markerPathFunction = markerPath().PieLineMarker;
			wheel.clickModeRotate = false;
			wheel.colors = ['#69a0e8','#d49761','#5562b4','#b479a2'];
			wheel.markerEnable = true;
			wheel.createWheel(['Spring', 'Summer', 'Winter', 'Fall']);
		    console.log(wheel.getMarkerId());

			// WheelNav.js when click the wheel, show contents in center of the wheel start
			wheel.navItems[0].navigateFunction = function () { 
	            $('#id3_spring').show();  
	            $('#id3_winter').hide(); 
	            $('#id3_fall').hide();
	            $('#id3_summer').hide();
	            $(".circleImg").hide();
		        $("#slideImg01").show();
		        countSeason = 0;
		        return countSeason;
			};
			wheel.navItems[1].navigateFunction = function () {  
	            $('#id3_winter').hide();  
	            $('#id3_spring').hide(); 
	            $('#id3_fall').hide();
	            $('#id3_summer').show();
	            $(".circleImg").hide();
		        $("#slideImg02").show();
		        countSeason = 1;
		        return countSeason;
			};
			wheel.navItems[2].navigateFunction = function () { 
	            $('#id3_winter').show();  
	            $('#id3_spring').hide(); 
	            $('#id3_fall').hide();
	            $('#id3_summer').hide();
	            $(".circleImg").hide();
		        $("#slideImg03").show();	
		        countSeason = 2; 
		        return countSeason;           
			};
			wheel.navItems[3].navigateFunction = function () { 
	            $('#id3_winter').hide();  
	            $('#id3_spring').hide(); 
	            $('#id3_fall').show();
	            $('#id3_summer').hide();
	            $(".circleImg").hide();
		        $("#slideImg04").show();	
		        countSeason = 3;   
		        return countSeason;         
			};
			// WheelNav.js when click the wheel, show contents in center of the wheel end	

			// Inside wheel, illustration css set up
	        $(".id0").css({"width": "317.6px", "height": "328.8px"});
	        $(".id1").css({"width": "317.6px", "height": "328.8px"});
	        $(".id2").css({"width": "317.6px", "height": "328.8px"});
	        $(".id3").css({"left": "160px", "top": "130px"});
	        $("#id4").css({"width": "33", "height": "32", "left": "300px", "top": "410px"});
	        $('#mySidenav').css({"width": "500px","font-size": "17px"});

	    } else {	

		    //WheelNav.js small wheel style set up Start
		    wheel = new wheelnav("divWheelSmall");
			wheel.slicePathFunction = slicePath().DonutSlice;
			wheel.markerPathFunction = markerPath().PieLineMarker;
			wheel.clickModeRotate = true;
			wheel.colors = ['#69a0e8','#d49761','#5562b4','#b479a2'];
			wheel.markerEnable = true;
			wheel.createWheel(['Spring', 'Summer', 'Winter', 'Fall']);
			wheel.titleFont = ['100 14px Impact, Charcoal, sans-serif'];

		    $('text#wheelnav-divWheelSmall-title-1').css("font-size","14px");
		    $('text#wheelnav-divWheelSmall-title-2').css("font-size","14px");
		    $('text#wheelnav-divWheelSmall-title-3').css("font-size","14px");
		    $('text#wheelnav-divWheelSmall-title-0').css("font-size","14px");
		    //WheelNav.js small wheel style set up End


			// WheelNav.js when click the wheel, show contents in center of the wheel start
			wheel.navItems[0].navigateFunction = function () { 
	            $('#id3_spring').show();  
	            $('#id3_winter').hide(); 
	            $('#id3_fall').hide();
	            $('#id3_summer').hide();
		        $(".circleImg").hide();
		        $("#slideImg01").show();
		        countSeason = 0;
		        return countSeason;		        
			};
			wheel.navItems[1].navigateFunction = function () {  
	            $('#id3_winter').hide();  
	            $('#id3_spring').hide(); 
	            $('#id3_fall').hide();
	            $('#id3_summer').show();
	            $(".circleImg").hide();
		        $("#slideImg02").show();
		         countSeason = 1;
		         return countSeason;
			};
			wheel.navItems[2].navigateFunction = function () { 
	            $('#id3_winter').show();  
	            $('#id3_spring').hide(); 
	            $('#id3_fall').hide();
	            $('#id3_summer').hide();
	            $(".circleImg").hide();
		        $("#slideImg03").show();
		         countSeason = 2;
		         return countSeason;
			};
			wheel.navItems[3].navigateFunction = function () { 
	            $('#id3_winter').hide();  
	            $('#id3_spring').hide(); 
	            $('#id3_fall').show();
	            $('#id3_summer').hide();
	            $(".circleImg").hide();
		        $("#slideImg04").show();
		         countSeason = 3;
		         return countSeason;
			};
			// WheelNav.js when click the wheel, show contents in center of the wheel end	


			// Inside wheel, illustration css set up
	        $(".id0").css({"width": "190.56px", "height": "197.28px"});
	        $(".id1").css({"width": "190.56px", "height": "197.28px"});
	        $(".id2").css({"width": "190.56px", "height": "197.28px"});
	        $(".id3").css({"left": "120px", "top": "90px"});
	        $("#id4").css({"width": "19.8", "height": "19.2", "left": "200px", "top": "228px"});
	        $('#mySidenav').css({"width": "300px","font-size": "13px"});

	    } // End of Else

    }); 
    // WheelNav.js createWheel when resize end

    // WheelNav.js change font size start
    $('#wheelnav-divWheelSmall-title-0').css("font-size","14px");
    $('#wheelnav-divWheelSmall-title-1').css("font-size","14px");
    $('#wheelnav-divWheelSmall-title-2').css("font-size","14px");
    $('#wheelnav-divWheelSmall-title-3').css("font-size","14px");
    // WheelNav.js change font size end

	// WheelNav.js when click the wheel, show contents in center of the wheel
	$('body').click(function() {
		console.log("test");
		var index = wheel.selectedNavItemIndex;
		if (index == 0){
			console.log("Spring");
		} else if (index == 1) {
			console.log("Summer");
		} else if (index == 2) {
			console.log("Winter");
		} else {
			console.log("Fall");
		}
	});

/* Full Screen Centering Alignment Start
fix vertical when not overflow
call fullscreenFix() if .fullscreen content changes */
function fullscreenFix(){
    var h = $('body').height();
    // set .fullscreen height
    $(".content-b").each(function(i){
        if($(this).innerHeight() > h){ $(this).closest(".fullscreen").addClass("overflow");
        }
    });
}
$(window).resize(fullscreenFix);
fullscreenFix();

/* Full Screen Centering Alignment End */


} /* End of Onload */





	