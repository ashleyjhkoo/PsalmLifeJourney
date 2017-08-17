
  $('html, body').css({
      overflow: 'hidden',
      height: '100%'
  });

    // W3 open, close - Half SideNav Start
    function w3_open() {
      document.getElementById("fullNav").style.display = "block";
      document.getElementById("myOverlay").style.display = "block";
    }
    function w3_close() {
        document.getElementById("fullNav").style.display = "none";
        document.getElementById("myOverlay").style.display = "none";
    }
    // W3 open, close - Half SideNav End

  // openNav, closeNav - Fullscreen Overlay Start

  function createNav() {
    document.getElementById("fullNav").style.width = "100%";
  }

  function callapseNav() {
    document.getElementById("fullNav").style.width = "0%";
  }
  // openNav, closeNav - Fullscreen Overlay End  

// Mousewheel event - Slide Image changes by Mousewheel Event

    $("#circleImg01").show();

    var count = 0;
    var scrolling=false;
    var i=0;
    $(window).bind('mousewheel', function(e){
      if(scrolling&&e.originalEvent.wheelDelta >= -100) {
         scrolling=false;
      }

      if(!scrolling&&e.originalEvent.wheelDelta < -100)
      {
        scrolling=true;
        count=(count+1)%4;
        $(".circleImg").hide();
        $("#circleImg0"+(count+1)).show();

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

  // when onload, make responsive screen ratio
  window.onload = function () {


    // make current page fit to the window screen
    function autoResizeDiv()
    {
    document.getElementById('home_contents').style.height = window.innerHeight +'px';
    }
    window.onresize = autoResizeDiv;
    autoResizeDiv();

    // onload screen size option
      if($(this).width() > 600) {
        $('#leftBarTh').show();
        $('#rightBarTh').show();        
        $('#poemContainerTh').css("width","81%");
        $('#rightBarTh').css("width","10%");
        $('#buttonCircleId').css("height","81.9px");
        $('#buttonCircleId').css("width","20.3px");
        $('#titleWinterDiv').removeClass("w3-border"); 
        $('#logoPoemDiv').removeClass("w3-border");              
        $('#poemBtnDiv').removeClass("w3-border");         
        } else {
        $('#titleWinterDiv').removeClass("w3-left");     
        $('#titleWinterDiv').addClass("w3-center");  
        $('#leftBarTh').css("display","none");
        $('#rightBarTh').hide();
        $('#poemContainerTh').css("width","100%");
        $('#poemContainerTh').css("padding","1px");
        $('#poemContainerTh').removeClass("padding-bottom");  
        $('#titleWinterDiv').addClass("w3-border");              
        $('#logoPoemDiv').addClass("w3-border");              
        $('#poemBtnDiv').addClass("w3-border");                              
  
        }


      // when resize, make responsive screen ratio
      $(window).resize(function() {
          //WheelNav.js medium large wheel style set up Start
        if($(this).width() > 600){
          $('#leftBarTh').show();
          $('#leftBarTh').css("width","9%");
          $('#rightBarTh').show();
          $('#poemContainerTh').css("width","81%");
          $('#rightBarTh').css("width","10%");
          $('#buttonCircleId').css("height","81.9px");
          $('#buttonCircleId').css("width","20.3px");   
          $('#poemContainerTh').addClass("w3-padding-0");
          $('#titleWinterDiv').removeClass("w3-border");              
          $('#logoPoemDiv').removeClass("w3-border");              
          $('#poemBtnDiv').removeClass("w3-border");           
        } else {
          $('#titleWinterDiv').removeClass("w3-left");     
          $('#titleWinterDiv').addClass("w3-center");       
          $('#leftBarTh').css("display","none");
          $('#rightBarTh').hide();
          $('#poemContainerTh').css("padding","1px");
          $('#poemContainerTh').css("width","100%");
          $('#titleWinterDiv').addClass("w3-border");              
          $('#logoPoemDiv').addClass("w3-border");              
          $('#poemBtnDiv').addClass("w3-border");   
        }

      }); // End of Resize

 } // End of Onload