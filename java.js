let texto = "Trata de seleccionar y copiar este texto (Ctrl+c) y pegarlo (Ctrl+v)";
document.addEventListener("copy", function(evt){
evt.clipboardData.setData("text/plain","No se puede copiar.");
evt.preventDefault();
})