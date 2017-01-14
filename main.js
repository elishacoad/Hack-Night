$(document).ready(function(){
  $("#happy").click(function() {$("#emoji").css({"opacity": "1"})});

    $("#spooky").animate({"right": "18000px"}, 6000)
    $(".pumpkin").rotate({
  bind:
  {
    mouseover : function() {
    $(this).rotate({animateTo:999000})
  },
  mouseout : function() {
    $(this).rotate({animateTo:0})
    }
  }
});
    $("#ghost1").rotate({
  bind:
  {
    mouseover : function() {
    $(this).animate({"top": "-800px"}, 500);
  },
  mouseout : function() {
    $(this).animate({"top": "0px"}, 500);
    }
  }
});
    $("#ghost2").rotate({
  bind:
  {
    mouseover : function() {
    $(this).animate({"top": "-800px"}, 500);
  },
  mouseout : function() {
    $(this).animate({"top": "10%"}, 500);
    }
  }
});
    $("#ghost3").rotate({
  bind:
  {
    mouseover : function() {
    $(this).animate({"top": "-800px"}, 500);
  },
  mouseout : function() {
    $(this).animate({"top": "60%"}, 500);
    }
  }
});
});