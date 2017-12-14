$(document).ready(function() {
  $("#home").delay(2700).fadeIn("fast");
  $("#title").delay(2000).fadeOut("slow");

  function filter(search) {
    $("#search").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#myTable tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  }

  var cont = $('#container');
  
  $('#categorias').on('change', function() {
      var selection = $('#categorias').val();
    //cont.text(selection);
    if( selection === "extranjera") {
      $("#result").append("<div class='row'><div class='col-xs-4 one'><li></li></div><div class='col-xs-4 two'><li></li></div><div class='col-xs-4 three'><li></li></div></div><div class='row'><div class='col-xs-6 four'><li></li></div><div class='col-xs-6 five'><li></li></div></div>");
      $(".one").mouseover(function() {
        $(this).css("filter","brightness(150%)");
        $(this).mouseleave(function() {
          $(this).css("filter","brightness(100%)");
          $(".one").remove("span");
      })
    })
  
    $(".one").click(function() {
       $("body").append("<div id='modal'><div class='container'><div class='row'><div class=col-xs-12><span class='glyphicon glyphicon-remove'></span></div></div><div class='row'><div class='col-xs-8 col-xs-offset-2'><div class='row'><div class='col-xs-10 col-xs-offset-1'><h2>Restaurante Hanuri</h2></div><div class='row'><div class='col-xs-12'><div id='place-map'><iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d208.10813202873624!2d-70.64097479491953!3d-33.43027998077966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c596dd030079%3A0x9f99275fd26e3b5f!2sRestaurante+HANURI!5e0!3m2!1ses-419!2scl!4v1513270517140' width='100%' height='100%' frameborder='0' style='border:0' allowfullscreen></iframe></div></div></div><div class='row'><div class='col-xs-6'><p>Sta Filomena 170, Recoleta, Región Metropolitana</p></div><div class='col-xs-6'><p>(2) 2755 1276</p></div></div><div class='row'><div class='col-xs-6 col-xs-offset-3'><button class='btn btn-default'>PEDIR AHORA</button></div></div></div></div></div></div></div>");
       $("#modal span").click(function() {
           $("#modal").hide();
       })
    })
  
    $(".two").mouseover(function() {
        $(this).css("filter","brightness(150%)");
        $(this).mouseleave(function() {
          $(this).css("filter","brightness(100%)");
      })
    })
  
    $(".three").mouseover(function() {
        $(this).css("filter","brightness(150%)");
        $(this).mouseleave(function() {
          $(this).css("filter","brightness(100%)");
      })
    })
  
    $(".four").mouseover(function() {
        $(this).css("filter","brightness(150%)");
        $(this).mouseleave(function() {
          $(this).css("filter","brightness(100%)");
      })
    })
  
    $(".five").mouseover(function() {
        $(this).css("filter","brightness(150%)");
        $(this).mouseleave(function() {
          $(this).css("filter","brightness(100%)");
      })
    })
    }
    if( selection === "chilena") {
      $("#result").append("<div class='row'><div class='col-xs-6 six'><li></li></div><div class='col-xs-6 seven'><li></li></div>");
      $(".six").mouseover(function() {
        $(this).css("filter","brightness(150%)");
        $(this).mouseleave(function() {
          $(this).css("filter","brightness(100%)");
      })
    })
  
    $(".seven").mouseover(function() {
        $(this).css("filter","brightness(150%)");
        $(this).mouseleave(function() {
          $(this).css("filter","brightness(100%)");
      })
    })
    }
})

})