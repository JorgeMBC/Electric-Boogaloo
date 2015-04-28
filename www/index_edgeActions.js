/***********************
* Acciones de composición de Adobe Edge Animate
*
* Editar este archivo con precaución, teniendo cuidado de conservar 
* las firmas de función y los comentarios que comienzan con "Edge" para mantener la 
* capacidad de interactuar con estas acciones en Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // los alias más comunes para las clases de Edge

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${espanolbtn}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Ir a una nueva dirección URL en la ventana actual
         // (sustituya "_self" por el atributo de destino correspondiente)
         window.open("http://electricboogaloo.azurewebsites.net/espanol/espanol.html", "_top");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${ensglishbtn}", "click", function(sym, e) {
         window.open("http://electricboogaloo.azurewebsites.net/english/english.html", "_top");
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'espanolbtn'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("espanolbtn");
   //Edge symbol end:'espanolbtn'

   //=========================================================
   
   //Edge symbol: 'espanolbtn_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // introducir código aquí
         // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
         // sym.play(500); o sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("ensglishbtn");
   //Edge symbol end:'ensglishbtn'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-2246004");