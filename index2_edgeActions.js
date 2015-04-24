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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();
         imageCountv = 1;
         sym.$("contenido").show();
         sym.$("p2").hide();
         sym.$("p3").hide();
         sym.$("p4").hide();
         sym.$("p5").hide();
         sym.$("p6").hide();
         sym.$("p7").hide();
         sym.$("p8").hide();
         sym.$("p9").hide();
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();
         imageCountv = 2;
         sym.$("p2").show(); 
         sym.$("contenido").hide();
         sym.getSymbol("pulseani").play(0);
         sym.$("p3").hide();
         sym.$("p4").hide();
         sym.$("p5").hide();
         sym.$("p6").hide();
         sym.$("p7").hide();
         sym.$("p8").hide();
         sym.$("p9").hide();
         EC.loadComposition("http://electricboogaloo.azurewebsites.net/pages/01.html", sym.getSymbol("p2"));

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();
         imageCountv = 3;
         sym.$("p3").show(); 
         sym.$("contenido").hide();
         sym.getSymbol("pulseani").play(0);
         sym.$("p2").hide();
         sym.$("p4").hide();
         sym.$("p5").hide();
         sym.$("p6").hide();
         sym.$("p7").hide();
         sym.$("p8").hide();
         sym.$("p9").hide();
         EC.loadComposition("http://electricboogaloo.azurewebsites.net/pages/02.html", sym.getSymbol("p3"));

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop();
         imageCountv = 4;
         sym.$("p4").show(); 
         sym.$("contenido").hide();
         sym.getSymbol("pulseani").play(0);
         sym.$("p2").hide();
         sym.$("p3").hide();
         sym.$("p5").hide();
         sym.$("p6").hide();
         sym.$("p7").hide();
         sym.$("p8").hide();
         sym.$("p9").hide();
         EC.loadComposition("http://electricboogaloo.azurewebsites.net/pages/03.html", sym.getSymbol("p4"));

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();
         imageCountv = 5;
         sym.$("p5").show(); 
         sym.$("contenido").hide();
         sym.getSymbol("pulseani").play(0);
         sym.$("p2").hide();
         sym.$("p3").hide();
         sym.$("p4").hide();
         sym.$("p6").hide();
         sym.$("p7").hide();
         sym.$("p8").hide();
         sym.$("p9").hide();
         EC.loadComposition("http://electricboogaloo.azurewebsites.net/pages/04.html", sym.getSymbol("p5"));

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         sym.stop();
         imageCountv = 6;
         sym.$("p6").show(); 
         sym.$("contenido").hide();
         sym.getSymbol("pulseani").play(0);
         sym.$("p2").hide();
         sym.$("p3").hide();
         sym.$("p4").hide();
         sym.$("p5").hide();
         sym.$("p7").hide();
         sym.$("p8").hide();
         sym.$("p9").hide();
         EC.loadComposition("http://electricboogaloo.azurewebsites.net/pages/05.html", sym.getSymbol("p6"));

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();
         imageCountv = 7;
         sym.$("p7").show(); 
         sym.$("contenido").hide();
         sym.getSymbol("pulseani").play(0);
         sym.$("p2").hide();
         sym.$("p3").hide();
         sym.$("p4").hide();
         sym.$("p5").hide();
         sym.$("p6").hide();
         sym.$("p8").hide();
         sym.$("p9").hide();
         EC.loadComposition("http://electricboogaloo.azurewebsites.net/pages/06.html", sym.getSymbol("p7"));

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         sym.stop();
         imageCountv = 8;
         sym.$("p8").show(); 
         sym.$("contenido").hide();
         sym.getSymbol("pulseani").play(0);
         sym.$("p2").hide();
         sym.$("p3").hide();
         sym.$("p4").hide();
         sym.$("p5").hide();
         sym.$("p6").hide();
         sym.$("p7").hide();
         sym.$("p9").hide();
         EC.loadComposition("http://electricboogaloo.azurewebsites.net/pages/07.html", sym.getSymbol("p8"));

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.stop();
         imageCountv = 9;
         sym.$("p9").show(); 
         sym.$("contenido").hide();
         sym.getSymbol("pulseani").play(0);
         sym.$("p2").hide();
         sym.$("p3").hide();
         sym.$("p4").hide();
         sym.$("p5").hide();
         sym.$("p6").hide();
         sym.$("p7").hide();
         sym.$("p8").hide();
         EC.loadComposition("http://electricboogaloo.azurewebsites.net/pages/08.html", sym.getSymbol("p9"));

      });
      //Edge binding end

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         //cargar paginas
         EC.loadComposition("http://electricboogaloo.azurewebsites.net/pages/00.html", sym.getSymbol("contenido"));
         //Ocultar elementos
         sym.$("ventana3").hide();
         
         //contador de paginas
         imageCountv = 1;
         sym.showPhoto = function (photoDirection){
         	imageCountv = imageCountv + photoDirection;
         	sym.play('p'+ imageCountv);
         }

      });
      //Edge binding end

      

      

      

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${menuint}", "click", function(sym, e) {
         if (sym.getSymbol("menuelectric").isPlaying()) {
         	sym.getSymbol("menuelectric").stop();
         } else {
         	if(sym.getSymbol("menuelectric").isPlayDirectionReverse()){
         	sym.getSymbol("menuelectric").play();
         	}
         	else {
         	sym.getSymbol("menuelectric").playReverse(1000);
         	}
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${ladoder}", "click", function(sym, e) {
         sym.getComposition().getStage().showPhoto(1);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${ladoizq}", "click", function(sym, e) {
         sym.getComposition().getStage().showPhoto(-1);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnswipe}", "swipeleft", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnswipe}", "swiperight", function(sym, e) {
         sym.playReverse();
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'ventana'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${cerrar2}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Ocultar un elemento 
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${p0}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
         // sym.play(500); o sym.play("myLabel");
         sym.getComposition().getStage().play('p1');
         sym.getSymbolElement().hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${p1}", "click", function(sym, e) {
         sym.getComposition().getStage().play('p2');
         sym.getSymbolElement().hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${p2}", "click", function(sym, e) {
         sym.getComposition().getStage().play('p3');
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${p3}", "click", function(sym, e) {
         sym.getComposition().getStage().play('p4');
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${p4}", "click", function(sym, e) {
         sym.getComposition().getStage().play('p5');
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${p5}", "click", function(sym, e) {
         sym.getComposition().getStage().play('p6');
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${p6}", "click", function(sym, e) {
         sym.getComposition().getStage().play('p7');
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${p7}", "click", function(sym, e) {
         sym.getComposition().getStage().play('p8');
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${p8}", "click", function(sym, e) {
         sym.getComposition().getStage().play('p9');
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${p9}", "click", function(sym, e) {
         sym.getComposition().getStage().play('p10');
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${p10}", "click", function(sym, e) {
         sym.getComposition().getStage().play('p11');
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${p11}", "click", function(sym, e) {
         sym.getComposition().getStage().play('p12');
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${p12}", "click", function(sym, e) {
         sym.getComposition().getStage().play('p13');
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${p13}", "click", function(sym, e) {
         sym.getComposition().getStage().play('p14');
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${p14}", "click", function(sym, e) {
         sym.getComposition().getStage().play('p15');
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${p15}", "click", function(sym, e) {
         sym.getComposition().getStage().play('p16');
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${p16}", "click", function(sym, e) {
         sym.getComposition().getStage().play('p17');
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${p17}", "click", function(sym, e) {
         sym.getComposition().getStage().play('p18');
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${p18}", "click", function(sym, e) {
         sym.getComposition().getStage().play('p19');
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${p19}", "click", function(sym, e) {
         sym.getComposition().getStage().play('p20');
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${p20}", "click", function(sym, e) {
         sym.getComposition().getStage().play('p21');
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${p21}", "click", function(sym, e) {
         sym.getComposition().getStage().play('p22');
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${p22}", "click", function(sym, e) {
         sym.getComposition().getStage().play('p23');
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${p23}", "click", function(sym, e) {
         sym.getComposition().getStage().play('p24');
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${p24}", "click", function(sym, e) {
         sym.getComposition().getStage().play('p25');
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${p25}", "click", function(sym, e) {
         sym.getComposition().getStage().play('p26');
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${p26}", "click", function(sym, e) {
         sym.getComposition().getStage().play('p27');
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${p27}", "click", function(sym, e) {
         sym.getComposition().getStage().play('p28');
         sym.getSymbolElement().hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${p28}", "click", function(sym, e) {
         sym.getComposition().getStage().play('p29');
         sym.getSymbolElement().hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text}", "click", function(sym, e) {
         sym.getSymbolElement().hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

   })("ventana");
   //Edge symbol end:'ventana'

   //=========================================================
   
   //Edge symbol: 'ventana_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${cerrar2}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Ocultar un elemento 
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${Text}", "click", function(sym, e) {
         sym.getSymbolElement().hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 833, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3750, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${ELECTRIC_BOOGALOO_No1_COMIXOLOGY}", "touchend", function(sym, e) {
         sym.getComposition().getStage().stop(0);
         sym.getComposition().getStage().$("ventana3").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${ELECTRIC_BOOGALOO_No1_COMIXOLOGY2}", "touchend", function(sym, e) {
         sym.getComposition().getStage().stop('p2');
         sym.getComposition().getStage().$("ventana3").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${ELECTRIC_BOOGALOO_No1_COMIXOLOGY3}", "touchend", function(sym, e) {
         sym.getComposition().getStage().stop('p3');
         sym.getComposition().getStage().$("ventana3").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${ELECTRIC_BOOGALOO_No1_COMIXOLOGY4}", "touchend", function(sym, e) {
         sym.getComposition().getStage().stop('p4');
         sym.getComposition().getStage().$("ventana3").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${ELECTRIC_BOOGALOO_No1_COMIXOLOGY5}", "touchend", function(sym, e) {
         sym.getComposition().getStage().stop('p5');
         sym.getComposition().getStage().$("ventana3").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${ELECTRIC_BOOGALOO_No1_COMIXOLOGY6}", "touchend", function(sym, e) {
         sym.getComposition().getStage().stop('p6');
         sym.getComposition().getStage().$("ventana3").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${ELECTRIC_BOOGALOO_No1_COMIXOLOGY7}", "touchend", function(sym, e) {
         sym.getComposition().getStage().stop('p7');
         sym.getComposition().getStage().$("ventana3").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${ELECTRIC_BOOGALOO_No1_COMIXOLOGY8}", "touchend", function(sym, e) {
         sym.getComposition().getStage().stop('p8');
         sym.getComposition().getStage().$("ventana3").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${ELECTRIC_BOOGALOO_No1_COMIXOLOGY9}", "touchend", function(sym, e) {
         sym.getComposition().getStage().stop('p9');
         sym.getComposition().getStage().$("ventana3").hide();

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${crewditos2}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Ir a una nueva dirección URL en la ventana actual
         // (sustituya "_self" por el atributo de destino correspondiente)
         window.open("http://www.jenofonte.co", "_top");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text4Copy}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Ir a una nueva dirección URL en la ventana actual
         // (sustituya "_self" por el atributo de destino correspondiente)
         window.open("index.html", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text4}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Ir a una nueva dirección URL en la ventana actual
         // (sustituya "_self" por el atributo de destino correspondiente)
         window.open("index2.html", "_self");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.getSymbol("fondoventana").play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // introducir código aquí
         sym.getSymbol("fondoventana").play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         // introducir código aquí
         sym.getSymbol("fondoventana").play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         // introducir código aquí
         sym.getSymbol("fondoventana").play(0);

      });
      //Edge binding end

   })("ventana_1");
   //Edge symbol end:'ventana_1'

   //=========================================================
   
   //Edge symbol: 'contenido'
   (function(symbolName) {   
   
   })("contenido");
   //Edge symbol end:'contenido'

   //=========================================================
   
   //Edge symbol: 'menuelectric'
   (function(symbolName) {   
   
      

      Symbol.bindElementAction(compId, symbolName, "${RectangleCopy14}", "touchend", function(sym, e) {
         sym.getComposition().getStage().$("ventana3").show();
         sym.getComposition().getStage().getSymbol("ventana3").play('instrucciones');
         
         sym.playReverse();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${RectangleCopy13}", "touchend", function(sym, e) {
         sym.getComposition().getStage().$("ventana3").show();
         sym.getComposition().getStage().getSymbol("ventana3").play(0);
         
         sym.playReverse();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${RectangleCopy8}", "touchend", function(sym, e) {
         
         sym.getComposition().getStage().$("ventana3").show();
         
         sym.getComposition().getStage().getSymbol("ventana3").play('creditos');
         
         sym.playReverse();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${RectangleCopy11}", "touchend", function(sym, e) {
         window.open("https://m.facebook.com/JenofonteSAS", "_top");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${RectangleCopy10}", "touchend", function(sym, e) {
         window.open("https://www.twitter.com/JenofonteSAS", "_top");

      });
      //Edge binding end

      

      

      Symbol.bindElementAction(compId, symbolName, "${neonmenu_02Copy}", "click", function(sym, e) {
         sym.getComposition().getStage().$("ventana3").show();
         sym.getComposition().getStage().getSymbol("ventana3").play('idioma');
         
         sym.playReverse();

      });
      //Edge binding end

   })("menuelectric");
   //Edge symbol end:'menuelectric'

   //=========================================================
   
   //Edge symbol: 'btnswipe'
   (function(symbolName) {   
   
   })("btnswipe");
   //Edge symbol end:'btnswipe'

   //=========================================================
   
   //Edge symbol: 'pulse'
   (function(symbolName) {   
   
   })("pulse");
   //Edge symbol end:'pulse'

   //=========================================================
   
   //Edge symbol: 'pulseani'
   (function(symbolName) {   
   
   })("pulseani");
   //Edge symbol end:'pulseani'

   //=========================================================
   
   //Edge symbol: 'fondoventana'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "click", function(sym, e) {
         sym.getSymbolElement().hide();
         

      });
         //Edge binding end

   })("fondoventana");
   //Edge symbol end:'fondoventana'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-2246004");