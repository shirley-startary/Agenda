var cargarPagina = function(){
  Materialize.updateTextFields();
  $('.modal').modal();
  var $btnCrearContacto = $("#btnCrearContacto");
  $btnCrearContacto.click(abrirModal);


}
$(document).ready(cargarPagina);
