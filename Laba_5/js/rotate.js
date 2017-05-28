/*
var elem = document.getElementById('meinecontainer');
var circles =  document.getElementsByClassName('circle');
var current = elem;
var fl = 0;

function func(element, angel) {
  element.style.transform = 'rotate(' + angel + 'deg)';
}

elem.onmouseover = function(event) {
  if (fl === 0) {
    var target = event.target;

      for (var i = 0; i < circles.length; i++) {
      if (circles[i] === target || circles[i].firstChild === target) {
        circles[i].style.background = 'white';
        current = circles[i];
        var angel = 20;

        for (var j = 0; j < 18; j++)
        {
            setTimeout(function() {
              circles[i].firstChild.style.transform = 'rotate(' + angel + 'deg)';
          },10);
            angel += 20;
        }
        fl = 1;
        break;
      }
    }
  }
};

current.onmouseout = function(event) {
    var target = event.target;

      for (var i = 0; i < circles.length; i++) {
      if (circles[i] === target || circles[i].firstChild === target) {
        target.style.background = '';
        circles[i].firstChild.style.transform = '';
        fl = 0;
        break;
      }
    }
};
*/
var elem1 = document.getElementById('firstCircle');
var elem2 = document.getElementById('secondCircle');
var elem3 = document.getElementById('thirdCircle');

$("#firstCircle").rotate({ 
   bind: 
     { 
        mouseover : function() { 
            $(this).rotate({animateTo:360})
            elem1.style.background = 'white';
        },
        mouseout : function() { 
            $(this).rotate({animateTo:0})
            elem1.style.background = '';
        }
     } 
});


$("#secondCircle").rotate({ 
   bind: 
     { 
        mouseover : function() { 
            $(this).rotate({animateTo:360})
            elem2.style.background = 'yellow';
        },
        mouseout : function() { 
            $(this).rotate({animateTo:0})
            elem2.style.background = '';
        }
     } 
});


$("#thirdCircle").rotate({ 
   bind: 
     { 
        mouseover : function() { 
            $(this).rotate({animateTo:360})
            elem3.style.background = 'rgb(255,1,91)';
        },
        mouseout : function() { 
            $(this).rotate({animateTo:0})
            elem3.style.background = '';
        }
     } 
});

("#formUser").submit(function( event ) {
  alert( "Handler for .submit() called." );
  event.preventDefault();
});