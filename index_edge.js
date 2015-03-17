/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-2.0.3.min.js",
            "librerias/EdgeCommons.js"
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "width",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'contenido',
                            symbolName: 'contenido',
                            type: 'rect',
                            rect: ['0', '-5', '1280', '1925', 'auto', 'auto']
                        },
                        {
                            id: 'ladoizq',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '-5px', '141px', '1925px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'ladoder',
                            display: 'block',
                            type: 'rect',
                            rect: ['1181px', '115px', '99px', '1805px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'ventana3',
                            symbolName: 'ventana_1',
                            type: 'rect',
                            rect: ['20px', '7', '1250', '1886', 'auto', 'auto']
                        },
                        {
                            id: 'menuelectric',
                            symbolName: 'menuelectric',
                            type: 'rect',
                            rect: ['1280px', '0px', '500', '1920', 'auto', 'auto']
                        },
                        {
                            id: 'menuint',
                            type: 'image',
                            rect: ['821px', '-333px', '800px', '800px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"menuint.svg",'0px','0px'],
                            transform: [[],[],[],['0.1','0.1']]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1280px', '1920px', 'auto', 'auto'],
                            sizeRange: ['0px','','',''],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 4000,
                    autoPlay: true,
                    labels: {
                        "p1": 0,
                        "p2": 500,
                        "p3": 1000,
                        "p4": 1500,
                        "p5": 2000,
                        "p6": 2500,
                        "p7": 3000,
                        "p8": 3500,
                        "p9": 4000
                    },
                    data: [
                        [
                            "eid11",
                            "display",
                            3500,
                            0,
                            "linear",
                            "${ladoder}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10",
                            "display",
                            500,
                            0,
                            "linear",
                            "${ladoizq}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "ventana": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0.1', '0.1']],
                            rect: ['-5566px', '-7992px', '12370px', '17960px', 'auto', 'auto'],
                            id: 'fondomenu',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/fondomenu.svg', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.1', '0.1']],
                            rect: ['-5374px', '-3179px', '11983px', '7840px', 'auto', 'auto'],
                            id: 'textoinstrucciones',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/textoinstrucciones.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'crewditos2',
                            opacity: '0',
                            rect: ['75px', '462px', '1100px', '304px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/crewditos.png', '0px', '0px']
                        },
                        {
                            rect: ['80px', '1700px', '47px', '51px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRect2Copy28',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1)']
                        },
                        {
                            rect: ['23px', '1471px', '163px', '238px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRectCopy28',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['894px', '2061px', '47px', '51px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRect2Copy27',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1)']
                        },
                        {
                            rect: ['837px', '1832px', '163px', '238px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRectCopy27',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['690px', '2061px', '47px', '51px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRect2Copy26',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1)']
                        },
                        {
                            rect: ['633px', '1832px', '163px', '238px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRectCopy26',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['486px', '2061px', '47px', '51px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRect2Copy25',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1)']
                        },
                        {
                            rect: ['429px', '1832px', '163px', '238px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRectCopy25',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['279px', '2061px', '47px', '51px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRect2Copy24',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1)']
                        },
                        {
                            rect: ['222px', '1832px', '163px', '238px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRectCopy24',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['80px', '2061px', '47px', '51px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRect2Copy18',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1)']
                        },
                        {
                            rect: ['23px', '1832px', '163px', '238px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRectCopy18',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['279px', '1700px', '47px', '51px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRect2Copy19',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1)']
                        },
                        {
                            rect: ['222px', '1471px', '163px', '238px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRectCopy19',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['485px', '1700px', '47px', '51px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRect2Copy20',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1)']
                        },
                        {
                            rect: ['428px', '1471px', '163px', '238px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRectCopy20',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['689px', '1700px', '47px', '51px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRect2Copy21',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1)']
                        },
                        {
                            rect: ['632px', '1471px', '163px', '238px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRectCopy21',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['893px', '1700px', '47px', '51px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRect2Copy22',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1)']
                        },
                        {
                            rect: ['836px', '1471px', '163px', '238px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRectCopy22',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['1099px', '1700px', '47px', '51px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRect2Copy23',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1)']
                        },
                        {
                            rect: ['1041px', '1471px', '163px', '238px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRectCopy23',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['285px', '1353px', '47px', '51px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRect2Copy13',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1)']
                        },
                        {
                            rect: ['228px', '1124px', '163px', '238px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRectCopy13',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['485px', '1353px', '47px', '51px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRect2Copy14',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1)']
                        },
                        {
                            rect: ['428px', '1124px', '163px', '238px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRectCopy14',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['690px', '1353px', '47px', '51px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRect2Copy15',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1)']
                        },
                        {
                            rect: ['633px', '1124px', '163px', '238px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRectCopy15',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['894px', '1353px', '47px', '51px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRect2Copy16',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1)']
                        },
                        {
                            rect: ['837px', '1124px', '163px', '238px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRectCopy16',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['1097px', '1353px', '47px', '51px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRect2Copy17',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1)']
                        },
                        {
                            rect: ['1040px', '1124px', '163px', '238px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRectCopy17',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['80px', '1353px', '47px', '51px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRect2Copy12',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1)']
                        },
                        {
                            rect: ['23px', '1124px', '163px', '238px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRectCopy12',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['894px', '972px', '47px', '86px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRect2Copy11',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1)']
                        },
                        {
                            rect: ['814px', '815px', '210px', '166px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRectCopy11',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['1109px', '1007px', '47px', '51px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRect2Copy10',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1)']
                        },
                        {
                            rect: ['1052px', '778px', '163px', '238px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRectCopy10',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['675px', '1007px', '47px', '51px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRect2Copy9',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1)']
                        },
                        {
                            rect: ['618px', '778px', '163px', '238px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRectCopy9',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['477px', '1007px', '47px', '51px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRect2Copy8',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1)']
                        },
                        {
                            rect: ['420px', '778px', '163px', '238px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRectCopy8',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['280px', '1007px', '47px', '51px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRect2Copy7',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1)']
                        },
                        {
                            rect: ['223px', '778px', '163px', '238px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRectCopy7',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['80px', '1007px', '47px', '51px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRect2Copy6',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1)']
                        },
                        {
                            rect: ['23px', '778px', '163px', '238px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRectCopy6',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['1109px', '680px', '47px', '51px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRect2Copy5',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1)']
                        },
                        {
                            rect: ['1051px', '455px', '163px', '238px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRectCopy5',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['919px', '680px', '47px', '51px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRect2Copy4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1)']
                        },
                        {
                            rect: ['861px', '455px', '163px', '238px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRectCopy4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['697px', '641px', '47px', '90px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRect2Copy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1)']
                        },
                        {
                            rect: ['616px', '490px', '209px', '166px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRectCopy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['420px', '455px', '163px', '238px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRectCopy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['478px', '680px', '47px', '51px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRect2Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1)']
                        },
                        {
                            rect: ['222px', '455px', '163px', '238px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRectCopy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['280px', '680px', '47px', '51px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRect2Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1)']
                        },
                        {
                            rect: ['80px', '680px', '47px', '51px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRect2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1)']
                        },
                        {
                            rect: ['23px', '455px', '163px', '238px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRect',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            type: 'rect',
                            rect: ['435px', '1838px', '150', '225', 'auto', 'auto'],
                            id: 'p26',
                            opacity: '0',
                            cursor: 'pointer',
                            symbolName: 'p26'
                        },
                        {
                            type: 'rect',
                            rect: ['229px', '1838px', '150', '225', 'auto', 'auto'],
                            id: 'p25',
                            opacity: '0',
                            cursor: 'pointer',
                            symbolName: 'p25'
                        },
                        {
                            type: 'rect',
                            rect: ['29px', '1838px', '150', '225', 'auto', 'auto'],
                            id: 'p24',
                            opacity: '0',
                            cursor: 'pointer',
                            symbolName: 'p24'
                        },
                        {
                            type: 'rect',
                            rect: ['1047px', '1477px', '150', '225', 'auto', 'auto'],
                            id: 'p23',
                            opacity: '0',
                            cursor: 'pointer',
                            symbolName: 'p23'
                        },
                        {
                            type: 'rect',
                            rect: ['843px', '1477px', '150', '225', 'auto', 'auto'],
                            id: 'p22',
                            opacity: '0',
                            cursor: 'pointer',
                            symbolName: 'p22'
                        },
                        {
                            type: 'rect',
                            rect: ['639px', '1477px', '150', '225', 'auto', 'auto'],
                            id: 'p21',
                            opacity: '0',
                            cursor: 'pointer',
                            symbolName: 'p21'
                        },
                        {
                            type: 'rect',
                            rect: ['435px', '1477px', '150', '225', 'auto', 'auto'],
                            id: 'p20',
                            opacity: '0',
                            cursor: 'pointer',
                            symbolName: 'p20'
                        },
                        {
                            type: 'rect',
                            rect: ['229px', '1477px', '150', '225', 'auto', 'auto'],
                            id: 'p19',
                            opacity: '0',
                            cursor: 'pointer',
                            symbolName: 'p19'
                        },
                        {
                            type: 'rect',
                            rect: ['29px', '1477px', '150', '225', 'auto', 'auto'],
                            id: 'p18',
                            opacity: '0',
                            cursor: 'pointer',
                            symbolName: 'p18'
                        },
                        {
                            type: 'rect',
                            rect: ['1047px', '1132px', '150', '225', 'auto', 'auto'],
                            id: 'p17',
                            opacity: '0',
                            cursor: 'pointer',
                            symbolName: 'p17'
                        },
                        {
                            type: 'rect',
                            rect: ['843px', '1132px', '150', '225', 'auto', 'auto'],
                            id: 'p16',
                            opacity: '0',
                            cursor: 'pointer',
                            symbolName: 'p16'
                        },
                        {
                            type: 'rect',
                            rect: ['639px', '1132px', '150', '225', 'auto', 'auto'],
                            id: 'p15',
                            opacity: '0',
                            cursor: 'pointer',
                            symbolName: 'p15'
                        },
                        {
                            type: 'rect',
                            rect: ['435px', '1132px', '150', '225', 'auto', 'auto'],
                            id: 'p14',
                            opacity: '0',
                            cursor: 'pointer',
                            symbolName: 'p14'
                        },
                        {
                            type: 'rect',
                            rect: ['233px', '1132px', '150', '225', 'auto', 'auto'],
                            id: 'p13',
                            opacity: '0',
                            cursor: 'pointer',
                            symbolName: 'p13'
                        },
                        {
                            type: 'rect',
                            rect: ['29px', '1132px', '150', '225', 'auto', 'auto'],
                            id: 'p12',
                            opacity: '0',
                            cursor: 'pointer',
                            symbolName: 'p12'
                        },
                        {
                            type: 'rect',
                            rect: ['1058px', '784px', '150', '225', 'auto', 'auto'],
                            id: 'p11',
                            opacity: '0',
                            cursor: 'pointer',
                            symbolName: 'p11'
                        },
                        {
                            type: 'rect',
                            rect: ['820px', '822px', '195', '150', 'auto', 'auto'],
                            id: 'p10',
                            opacity: '0',
                            cursor: 'pointer',
                            symbolName: 'p10'
                        },
                        {
                            type: 'rect',
                            rect: ['624px', '784px', '150', '225', 'auto', 'auto'],
                            id: 'p9',
                            opacity: '0',
                            cursor: 'pointer',
                            symbolName: 'p9'
                        },
                        {
                            type: 'rect',
                            rect: ['427px', '784px', '150', '225', 'auto', 'auto'],
                            id: 'p8',
                            opacity: '0',
                            cursor: 'pointer',
                            symbolName: 'p8'
                        },
                        {
                            type: 'rect',
                            rect: ['229px', '784px', '150', '225', 'auto', 'auto'],
                            id: 'p7',
                            opacity: '0',
                            cursor: 'pointer',
                            symbolName: 'p7'
                        },
                        {
                            type: 'rect',
                            rect: ['29px', '784px', '150', '225', 'auto', 'auto'],
                            id: 'p6',
                            opacity: '0',
                            cursor: 'pointer',
                            symbolName: 'p6'
                        },
                        {
                            type: 'rect',
                            rect: ['1058px', '460px', '150', '225', 'auto', 'auto'],
                            id: 'p5',
                            opacity: '0',
                            cursor: 'pointer',
                            symbolName: 'p5'
                        },
                        {
                            type: 'rect',
                            rect: ['867px', '460px', '150', '225', 'auto', 'auto'],
                            id: 'p4',
                            opacity: '0',
                            cursor: 'pointer',
                            symbolName: 'p4'
                        },
                        {
                            type: 'rect',
                            rect: ['624px', '498px', '195', '150', 'auto', 'auto'],
                            id: 'p3',
                            opacity: '0',
                            cursor: 'pointer',
                            symbolName: 'p3'
                        },
                        {
                            type: 'rect',
                            rect: ['427px', '460px', '150', '225', 'auto', 'auto'],
                            id: 'p2',
                            opacity: '0',
                            cursor: 'pointer',
                            symbolName: 'p2'
                        },
                        {
                            type: 'rect',
                            rect: ['229px', '460px', '150', '225', 'auto', 'auto'],
                            id: 'p1',
                            opacity: '0',
                            cursor: 'pointer',
                            symbolName: 'p1'
                        },
                        {
                            type: 'rect',
                            rect: ['29px', '460px', '150', '225', 'auto', 'auto'],
                            id: 'p0',
                            opacity: '0',
                            cursor: 'pointer',
                            symbolName: 'p0'
                        },
                        {
                            type: 'image',
                            rect: ['1048px', '-26px', '320px', '320px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.1', '0.1']],
                            id: 'cerrar2',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/cerrar2.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['639px', '1838px', '150', '225', 'auto', 'auto'],
                            id: 'p27',
                            opacity: '0',
                            cursor: 'pointer',
                            symbolName: 'p27'
                        },
                        {
                            type: 'rect',
                            rect: ['843px', '1838px', '150', '225', 'auto', 'auto'],
                            id: 'p28',
                            opacity: '0',
                            cursor: 'pointer',
                            symbolName: 'p28'
                        },
                        {
                            type: 'text',
                            rect: ['1116px', '411px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            id: 'Text',
                            text: 'cerrar',
                            cursor: 'pointer',
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(255,255,255,1.00)', '700', 'none', '', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['97px', '701px', 'auto', 'auto', 'auto', 'auto'],
                            text: '0',
                            id: 'Text2',
                            opacity: '0',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '700', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['297px', '701px', 'auto', 'auto', 'auto', 'auto'],
                            text: '1',
                            id: 'Text2Copy',
                            opacity: '0',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '700', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['495px', '701px', 'auto', 'auto', 'auto', 'auto'],
                            text: '2',
                            id: 'Text2Copy2',
                            opacity: '0',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '700', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['715px', '701px', 'auto', 'auto', 'auto', 'auto'],
                            text: '3',
                            id: 'Text2Copy3',
                            opacity: '0',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '700', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['935px', '701px', 'auto', 'auto', 'auto', 'auto'],
                            text: '4',
                            id: 'Text2Copy4',
                            opacity: '0',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '700', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['1126px', '701px', 'auto', 'auto', 'auto', 'auto'],
                            text: '5',
                            id: 'Text2Copy5',
                            opacity: '0',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '700', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['97px', '1026px', 'auto', 'auto', 'auto', 'auto'],
                            text: '6',
                            id: 'Text2Copy11',
                            opacity: '0',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '700', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['297px', '1026px', 'auto', 'auto', 'auto', 'auto'],
                            text: '7',
                            id: 'Text2Copy10',
                            opacity: '0',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '700', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['495px', '1026px', 'auto', 'auto', 'auto', 'auto'],
                            text: '8',
                            id: 'Text2Copy9',
                            opacity: '0',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '700', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['692px', '1026px', 'auto', 'auto', 'auto', 'auto'],
                            text: '9',
                            id: 'Text2Copy8',
                            opacity: '0',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '700', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['905px', '1026px', 'auto', 'auto', 'auto', 'auto'],
                            text: '10',
                            id: 'Text2Copy7',
                            opacity: '0',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '700', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['1120px', '1026px', 'auto', 'auto', 'auto', 'auto'],
                            text: '11',
                            id: 'Text2Copy6',
                            opacity: '0',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '700', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['91px', '1369px', 'auto', 'auto', 'auto', 'auto'],
                            text: '12',
                            id: 'Text2Copy17',
                            opacity: '0',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '700', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['295px', '1369px', 'auto', 'auto', 'auto', 'auto'],
                            text: '13',
                            id: 'Text2Copy16',
                            opacity: '0',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '700', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['497px', '1369px', 'auto', 'auto', 'auto', 'auto'],
                            text: '14',
                            id: 'Text2Copy15',
                            opacity: '0',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '700', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['701px', '1369px', 'auto', 'auto', 'auto', 'auto'],
                            text: '15',
                            id: 'Text2Copy14',
                            opacity: '0',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '700', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['905px', '1369px', 'auto', 'auto', 'auto', 'auto'],
                            text: '16',
                            id: 'Text2Copy13',
                            opacity: '0',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '700', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['1109px', '1369px', 'auto', 'auto', 'auto', 'auto'],
                            text: '17',
                            id: 'Text2Copy12',
                            opacity: '0',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '700', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['91px', '1716px', 'auto', 'auto', 'auto', 'auto'],
                            text: '18',
                            id: 'Text2Copy23',
                            opacity: '0',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '700', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['290px', '1716px', 'auto', 'auto', 'auto', 'auto'],
                            text: '19',
                            id: 'Text2Copy22',
                            opacity: '0',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '700', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['496px', '1716px', 'auto', 'auto', 'auto', 'auto'],
                            text: '20',
                            id: 'Text2Copy21',
                            opacity: '0',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '700', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['701px', '1716px', 'auto', 'auto', 'auto', 'auto'],
                            text: '21',
                            id: 'Text2Copy20',
                            opacity: '0',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '700', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['905px', '1716px', 'auto', 'auto', 'auto', 'auto'],
                            text: '22',
                            id: 'Text2Copy19',
                            opacity: '0',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '700', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['90px', '2082px', 'auto', 'auto', 'auto', 'auto'],
                            text: '24',
                            id: 'Text2Copy28',
                            opacity: '0',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '700', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['291px', '2082px', 'auto', 'auto', 'auto', 'auto'],
                            text: '25',
                            id: 'Text2Copy27',
                            opacity: '0',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '700', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['495px', '2082px', 'auto', 'auto', 'auto', 'auto'],
                            text: '26',
                            id: 'Text2Copy26',
                            opacity: '0',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '700', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['701px', '2082px', 'auto', 'auto', 'auto', 'auto'],
                            text: '27',
                            id: 'Text2Copy25',
                            opacity: '0',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '700', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['905px', '2082px', 'auto', 'auto', 'auto', 'auto'],
                            text: '28',
                            id: 'Text2Copy24',
                            opacity: '0',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '700', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['1109px', '1716px', 'auto', 'auto', 'auto', 'auto'],
                            text: '23',
                            id: 'Text2Copy18',
                            opacity: '0',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '700', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'nowrap']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1250px', '1886px']
                        }
                    }
                },
                timeline: {
                    duration: 2250,
                    autoPlay: false,
                    labels: {
                        "paginas": 0,
                        "instrucciones": 750,
                        "creditos": 1500
                    },
                    data: [
                        [
                            "eid591",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2Copy13}",
                            '1369px',
                            '1077px'
                        ],
                        [
                            "eid264",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2Copy11}",
                            '0',
                            '1'
                        ],
                        [
                            "eid557",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRect2Copy11}",
                            '1',
                            '0'
                        ],
                        [
                            "eid121",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${p16}",
                            '0',
                            '1'
                        ],
                        [
                            "eid541",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${p16}",
                            '1',
                            '0'
                        ],
                        [
                            "eid322",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2Copy20}",
                            '0',
                            '1'
                        ],
                        [
                            "eid463",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${Text2Copy20}",
                            '1',
                            '0'
                        ],
                        [
                            "eid374",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2Copy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid469",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${Text2Copy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid789",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${p3}",
                            '498px',
                            '206px'
                        ],
                        [
                            "eid767",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${p19}",
                            '1477px',
                            '1185px'
                        ],
                        [
                            "eid344",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid530",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${Text2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid595",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2Copy7}",
                            '1026px',
                            '734px'
                        ],
                        [
                            "eid310",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRectCopy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid476",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRectCopy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid338",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2Copy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid565",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${Text2Copy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid689",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRectCopy2}",
                            '455px',
                            '163px'
                        ],
                        [
                            "eid717",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2Copy14}",
                            '1353px',
                            '1061px'
                        ],
                        [
                            "eid204",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRectCopy17}",
                            '0',
                            '1'
                        ],
                        [
                            "eid518",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRectCopy17}",
                            '1',
                            '0'
                        ],
                        [
                            "eid675",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${p16}",
                            '1132px',
                            '840px'
                        ],
                        [
                            "eid234",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2Copy10}",
                            '0',
                            '1'
                        ],
                        [
                            "eid472",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRect2Copy10}",
                            '1',
                            '0'
                        ],
                        [
                            "eid677",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRectCopy18}",
                            '1832px',
                            '1540px'
                        ],
                        [
                            "eid270",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRectCopy14}",
                            '0',
                            '1'
                        ],
                        [
                            "eid512",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRectCopy14}",
                            '1',
                            '0'
                        ],
                        [
                            "eid673",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2Copy2}",
                            '701px',
                            '409px'
                        ],
                        [
                            "eid248",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRectCopy25}",
                            '0',
                            '1'
                        ],
                        [
                            "eid548",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRectCopy25}",
                            '1',
                            '0'
                        ],
                        [
                            "eid739",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2Copy18}",
                            '1716px',
                            '1424px'
                        ],
                        [
                            "eid605",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRectCopy22}",
                            '1471px',
                            '1179px'
                        ],
                        [
                            "eid609",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${p25}",
                            '1838px',
                            '1546px'
                        ],
                        [
                            "eid316",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2Copy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid532",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRect2Copy4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid809",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2Copy12}",
                            '1369px',
                            '1077px'
                        ],
                        [
                            "eid761",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${p11}",
                            '784px',
                            '492px'
                        ],
                        [
                            "eid129",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${p28}",
                            '0',
                            '1'
                        ],
                        [
                            "eid500",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${p28}",
                            '1',
                            '0'
                        ],
                        [
                            "eid244",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2Copy17}",
                            '0',
                            '1'
                        ],
                        [
                            "eid467",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRect2Copy17}",
                            '1',
                            '0'
                        ],
                        [
                            "eid619",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2Copy2}",
                            '680px',
                            '388px'
                        ],
                        [
                            "eid226",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRectCopy28}",
                            '0',
                            '1'
                        ],
                        [
                            "eid483",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRectCopy28}",
                            '1',
                            '0'
                        ],
                        [
                            "eid771",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${p2}",
                            '460px',
                            '168px'
                        ],
                        [
                            "eid326",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid505",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${Text2Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid372",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2Copy11}",
                            '0',
                            '1'
                        ],
                        [
                            "eid491",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${Text2Copy11}",
                            '1',
                            '0'
                        ],
                        [
                            "eid773",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2Copy3}",
                            '641px',
                            '349px'
                        ],
                        [
                            "eid141",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${p22}",
                            '0',
                            '1'
                        ],
                        [
                            "eid471",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${p22}",
                            '1',
                            '0'
                        ],
                        [
                            "eid127",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${p19}",
                            '0',
                            '1'
                        ],
                        [
                            "eid546",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${p19}",
                            '1',
                            '0'
                        ],
                        [
                            "eid691",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${p18}",
                            '1477px',
                            '1185px'
                        ],
                        [
                            "eid659",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2Copy24}",
                            '2061px',
                            '1769px'
                        ],
                        [
                            "eid266",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRectCopy12}",
                            '0',
                            '1'
                        ],
                        [
                            "eid560",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRectCopy12}",
                            '1',
                            '0'
                        ],
                        [
                            "eid254",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRectCopy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid534",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRectCopy4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid332",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2Copy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid551",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${Text2Copy4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid222",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRectCopy5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid474",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRectCopy5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid334",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2Copy5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid456",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${Text2Copy5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid286",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRectCopy21}",
                            '0',
                            '1'
                        ],
                        [
                            "eid556",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRectCopy21}",
                            '1',
                            '0'
                        ],
                        [
                            "eid278",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRectCopy23}",
                            '0',
                            '1'
                        ],
                        [
                            "eid517",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRectCopy23}",
                            '1',
                            '0'
                        ],
                        [
                            "eid593",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRectCopy4}",
                            '455px',
                            '163px'
                        ],
                        [
                            "eid637",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${p27}",
                            '1838px',
                            '1546px'
                        ],
                        [
                            "eid797",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2Copy5}",
                            '701px',
                            '409px'
                        ],
                        [
                            "eid681",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2Copy28}",
                            '2082px',
                            '1790px'
                        ],
                        [
                            "eid707",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRectCopy23}",
                            '1471px',
                            '1179px'
                        ],
                        [
                            "eid360",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2Copy18}",
                            '0',
                            '1'
                        ],
                        [
                            "eid453",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${Text2Copy18}",
                            '1',
                            '0'
                        ],
                        [
                            "eid147",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${p1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid501",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${p1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid232",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRectCopy27}",
                            '0',
                            '1'
                        ],
                        [
                            "eid470",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRectCopy27}",
                            '1',
                            '0'
                        ],
                        [
                            "eid603",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${p14}",
                            '1132px',
                            '840px'
                        ],
                        [
                            "eid113",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${p11}",
                            '0',
                            '1'
                        ],
                        [
                            "eid459",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${p11}",
                            '1',
                            '0'
                        ],
                        [
                            "eid645",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2Copy6}",
                            '1007px',
                            '715px'
                        ],
                        [
                            "eid623",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text}",
                            '411px',
                            '119px'
                        ],
                        [
                            "eid805",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2Copy23}",
                            '1700px',
                            '1408px'
                        ],
                        [
                            "eid224",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2Copy16}",
                            '0',
                            '1'
                        ],
                        [
                            "eid527",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRect2Copy16}",
                            '1',
                            '0'
                        ],
                        [
                            "eid713",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2Copy15}",
                            '1369px',
                            '1077px'
                        ],
                        [
                            "eid599",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2Copy4}",
                            '680px',
                            '388px'
                        ],
                        [
                            "eid284",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2Copy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid478",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRect2Copy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid693",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2Copy21}",
                            '1700px',
                            '1408px'
                        ],
                        [
                            "eid697",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRectCopy8}",
                            '778px',
                            '486px'
                        ],
                        [
                            "eid250",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2Copy19}",
                            '0',
                            '1'
                        ],
                        [
                            "eid506",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRect2Copy19}",
                            '1',
                            '0'
                        ],
                        [
                            "eid296",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRectCopy16}",
                            '0',
                            '1'
                        ],
                        [
                            "eid511",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRectCopy16}",
                            '1',
                            '0'
                        ],
                        [
                            "eid799",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${p22}",
                            '1477px',
                            '1185px'
                        ],
                        [
                            "eid613",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${p12}",
                            '1132px',
                            '840px'
                        ],
                        [
                            "eid348",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid362",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2Copy16}",
                            '0',
                            '1'
                        ],
                        [
                            "eid458",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${Text2Copy16}",
                            '1',
                            '0'
                        ],
                        [
                            "eid729",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${p21}",
                            '1477px',
                            '1185px'
                        ],
                        [
                            "eid601",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${p5}",
                            '460px',
                            '168px'
                        ],
                        [
                            "eid671",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2Copy18}",
                            '2061px',
                            '1769px'
                        ],
                        [
                            "eid368",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2Copy15}",
                            '0',
                            '1'
                        ],
                        [
                            "eid537",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${Text2Copy15}",
                            '1',
                            '0'
                        ],
                        [
                            "eid721",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2Copy15}",
                            '1353px',
                            '1061px'
                        ],
                        [
                            "eid290",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRectCopy10}",
                            '0',
                            '1'
                        ],
                        [
                            "eid528",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRectCopy10}",
                            '1',
                            '0'
                        ],
                        [
                            "eid302",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRectCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid543",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRectCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid276",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2Copy18}",
                            '0',
                            '1'
                        ],
                        [
                            "eid462",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRect2Copy18}",
                            '1',
                            '0'
                        ],
                        [
                            "eid288",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2Copy15}",
                            '0',
                            '1'
                        ],
                        [
                            "eid455",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRect2Copy15}",
                            '1',
                            '0'
                        ],
                        [
                            "eid370",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2Copy28}",
                            '0',
                            '1'
                        ],
                        [
                            "eid553",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${Text2Copy28}",
                            '1',
                            '0'
                        ],
                        [
                            "eid653",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${p23}",
                            '1477px',
                            '1185px'
                        ],
                        [
                            "eid727",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRectCopy16}",
                            '1124px',
                            '832px'
                        ],
                        [
                            "eid366",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2Copy26}",
                            '0',
                            '1'
                        ],
                        [
                            "eid555",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${Text2Copy26}",
                            '1',
                            '0'
                        ],
                        [
                            "eid779",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${p17}",
                            '1132px',
                            '840px'
                        ],
                        [
                            "eid292",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRectCopy9}",
                            '0',
                            '1'
                        ],
                        [
                            "eid524",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRectCopy9}",
                            '1',
                            '0'
                        ],
                        [
                            "eid216",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRectCopy8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid562",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRectCopy8}",
                            '1',
                            '0'
                        ],
                        [
                            "eid169",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${p13}",
                            '0',
                            '1'
                        ],
                        [
                            "eid540",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${p13}",
                            '1',
                            '0'
                        ],
                        [
                            "eid733",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2Copy}",
                            '680px',
                            '388px'
                        ],
                        [
                            "eid167",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${p6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid509",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${p6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid280",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRectCopy7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid516",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRectCopy7}",
                            '1',
                            '0'
                        ],
                        [
                            "eid324",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2Copy9}",
                            '0',
                            '1'
                        ],
                        [
                            "eid564",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${Text2Copy9}",
                            '1',
                            '0'
                        ],
                        [
                            "eid336",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2Copy21}",
                            '0',
                            '1'
                        ],
                        [
                            "eid566",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${Text2Copy21}",
                            '1',
                            '0'
                        ],
                        [
                            "eid153",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${p20}",
                            '0',
                            '1'
                        ],
                        [
                            "eid486",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${p20}",
                            '1',
                            '0'
                        ],
                        [
                            "eid238",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2Copy26}",
                            '0',
                            '1'
                        ],
                        [
                            "eid519",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRect2Copy26}",
                            '1',
                            '0'
                        ],
                        [
                            "eid759",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2Copy3}",
                            '701px',
                            '409px'
                        ],
                        [
                            "eid358",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2Copy17}",
                            '0',
                            '1'
                        ],
                        [
                            "eid507",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${Text2Copy17}",
                            '1',
                            '0'
                        ],
                        [
                            "eid807",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${p8}",
                            '784px',
                            '492px'
                        ],
                        [
                            "eid300",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2Copy7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid526",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRect2Copy7}",
                            '1',
                            '0'
                        ],
                        [
                            "eid709",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2Copy25}",
                            '2082px',
                            '1790px'
                        ],
                        [
                            "eid125",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${p27}",
                            '0',
                            '1'
                        ],
                        [
                            "eid559",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${p27}",
                            '1',
                            '0'
                        ],
                        [
                            "eid356",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2Copy27}",
                            '0',
                            '1'
                        ],
                        [
                            "eid523",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${Text2Copy27}",
                            '1',
                            '0'
                        ],
                        [
                            "eid376",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2Copy19}",
                            '0',
                            '1'
                        ],
                        [
                            "eid464",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${Text2Copy19}",
                            '1',
                            '0'
                        ],
                        [
                            "eid579",
                            "opacity",
                            750,
                            500,
                            "easeOutElastic",
                            "${textoinstrucciones}",
                            '0',
                            '1'
                        ],
                        [
                            "eid582",
                            "opacity",
                            1250,
                            250,
                            "easeOutElastic",
                            "${textoinstrucciones}",
                            '1',
                            '0'
                        ],
                        [
                            "eid783",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRectCopy12}",
                            '1124px',
                            '832px'
                        ],
                        [
                            "eid763",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2Copy26}",
                            '2061px',
                            '1769px'
                        ],
                        [
                            "eid228",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRectCopy15}",
                            '0',
                            '1'
                        ],
                        [
                            "eid515",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRectCopy15}",
                            '1',
                            '0'
                        ],
                        [
                            "eid701",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${p26}",
                            '1838px',
                            '1546px'
                        ],
                        [
                            "eid615",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRectCopy21}",
                            '1471px',
                            '1179px'
                        ],
                        [
                            "eid306",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRectCopy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid536",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRectCopy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid715",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRectCopy17}",
                            '1124px',
                            '832px'
                        ],
                        [
                            "eid793",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2Copy19}",
                            '1716px',
                            '1424px'
                        ],
                        [
                            "eid210",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2Copy6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid457",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRect2Copy6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid340",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2Copy10}",
                            '0',
                            '1'
                        ],
                        [
                            "eid487",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${Text2Copy10}",
                            '1',
                            '0'
                        ],
                        [
                            "eid268",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRectCopy13}",
                            '0',
                            '1'
                        ],
                        [
                            "eid494",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRectCopy13}",
                            '1',
                            '0'
                        ],
                        [
                            "eid801",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${p6}",
                            '784px',
                            '492px'
                        ],
                        [
                            "eid629",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRectCopy28}",
                            '1471px',
                            '1179px'
                        ],
                        [
                            "eid575",
                            "left",
                            1500,
                            500,
                            "easeOutElastic",
                            "${crewditos2}",
                            '75px',
                            '77px'
                        ],
                        [
                            "eid769",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRectCopy24}",
                            '1832px',
                            '1540px'
                        ],
                        [
                            "eid577",
                            "top",
                            1500,
                            500,
                            "easeOutElastic",
                            "${crewditos2}",
                            '462px',
                            '158px'
                        ],
                        [
                            "eid585",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2Copy21}",
                            '1716px',
                            '1424px'
                        ],
                        [
                            "eid581",
                            "top",
                            750,
                            500,
                            "easeOutElastic",
                            "${textoinstrucciones}",
                            '-3179px',
                            '-3360px'
                        ],
                        [
                            "eid587",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2Copy22}",
                            '1716px',
                            '1424px'
                        ],
                        [
                            "eid745",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRectCopy27}",
                            '1832px',
                            '1540px'
                        ],
                        [
                            "eid755",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2Copy26}",
                            '2082px',
                            '1790px'
                        ],
                        [
                            "eid589",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2Copy16}",
                            '1369px',
                            '1077px'
                        ],
                        [
                            "eid777",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRectCopy3}",
                            '490px',
                            '198px'
                        ],
                        [
                            "eid274",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2Copy9}",
                            '0',
                            '1'
                        ],
                        [
                            "eid489",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRect2Copy9}",
                            '1',
                            '0'
                        ],
                        [
                            "eid161",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${p26}",
                            '0',
                            '1'
                        ],
                        [
                            "eid495",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${p26}",
                            '1',
                            '0'
                        ],
                        [
                            "eid791",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2Copy24}",
                            '2082px',
                            '1790px'
                        ],
                        [
                            "eid781",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2Copy23}",
                            '1716px',
                            '1424px'
                        ],
                        [
                            "eid747",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${p10}",
                            '822px',
                            '530px'
                        ],
                        [
                            "eid751",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2Copy14}",
                            '1369px',
                            '1077px'
                        ],
                        [
                            "eid242",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRectCopy19}",
                            '0',
                            '1'
                        ],
                        [
                            "eid484",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRectCopy19}",
                            '1',
                            '0'
                        ],
                        [
                            "eid252",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRectCopy20}",
                            '0',
                            '1'
                        ],
                        [
                            "eid493",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRectCopy20}",
                            '1',
                            '0'
                        ],
                        [
                            "eid811",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${p15}",
                            '1132px',
                            '840px'
                        ],
                        [
                            "eid749",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRectCopy7}",
                            '778px',
                            '486px'
                        ],
                        [
                            "eid236",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2Copy28}",
                            '0',
                            '1'
                        ],
                        [
                            "eid531",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRect2Copy28}",
                            '1',
                            '0'
                        ],
                        [
                            "eid683",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${p20}",
                            '1477px',
                            '1185px'
                        ],
                        [
                            "eid137",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${p7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid567",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${p7}",
                            '1',
                            '0'
                        ],
                        [
                            "eid687",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2Copy11}",
                            '1026px',
                            '734px'
                        ],
                        [
                            "eid641",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2Copy7}",
                            '1007px',
                            '715px'
                        ],
                        [
                            "eid123",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${p4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid568",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${p4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid625",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2Copy28}",
                            '1700px',
                            '1408px'
                        ],
                        [
                            "eid737",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2Copy10}",
                            '1007px',
                            '715px'
                        ],
                        [
                            "eid230",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRectCopy11}",
                            '0',
                            '1'
                        ],
                        [
                            "eid513",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRectCopy11}",
                            '1',
                            '0'
                        ],
                        [
                            "eid212",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid498",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRect2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid743",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRectCopy9}",
                            '778px',
                            '486px'
                        ],
                        [
                            "eid294",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2Copy25}",
                            '0',
                            '1'
                        ],
                        [
                            "eid477",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRect2Copy25}",
                            '1',
                            '0'
                        ],
                        [
                            "eid206",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect}",
                            '0',
                            '1'
                        ],
                        [
                            "eid547",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRect}",
                            '1',
                            '0'
                        ],
                        [
                            "eid163",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${p15}",
                            '0',
                            '1'
                        ],
                        [
                            "eid473",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${p15}",
                            '1',
                            '0'
                        ],
                        [
                            "eid633",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2Copy8}",
                            '1007px',
                            '715px'
                        ],
                        [
                            "eid202",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2Copy13}",
                            '0',
                            '1'
                        ],
                        [
                            "eid508",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRect2Copy13}",
                            '1',
                            '0'
                        ],
                        [
                            "eid364",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2Copy7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid535",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${Text2Copy7}",
                            '1',
                            '0'
                        ],
                        [
                            "eid639",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2Copy5}",
                            '680px',
                            '388px'
                        ],
                        [
                            "eid570",
                            "opacity",
                            1500,
                            500,
                            "easeOutElastic",
                            "${crewditos2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid583",
                            "opacity",
                            2000,
                            250,
                            "easeOutElastic",
                            "${crewditos2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid657",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2Copy19}",
                            '1700px',
                            '1408px'
                        ],
                        [
                            "eid298",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRectCopy18}",
                            '0',
                            '1'
                        ],
                        [
                            "eid461",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRectCopy18}",
                            '1',
                            '0'
                        ],
                        [
                            "eid651",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRectCopy25}",
                            '1832px',
                            '1540px'
                        ],
                        [
                            "eid119",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${p24}",
                            '0',
                            '1'
                        ],
                        [
                            "eid558",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${p24}",
                            '1',
                            '0'
                        ],
                        [
                            "eid272",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRectCopy24}",
                            '0',
                            '1'
                        ],
                        [
                            "eid539",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRectCopy24}",
                            '1',
                            '0'
                        ],
                        [
                            "eid262",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2Copy24}",
                            '0',
                            '1'
                        ],
                        [
                            "eid480",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRect2Copy24}",
                            '1',
                            '0'
                        ],
                        [
                            "eid685",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2Copy20}",
                            '1700px',
                            '1408px'
                        ],
                        [
                            "eid173",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${p5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid552",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${p5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid627",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2Copy27}",
                            '2082px',
                            '1790px'
                        ],
                        [
                            "eid320",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2Copy25}",
                            '0',
                            '1'
                        ],
                        [
                            "eid479",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${Text2Copy25}",
                            '1',
                            '0'
                        ],
                        [
                            "eid165",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${p3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid554",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${p3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid342",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2Copy22}",
                            '0',
                            '1'
                        ],
                        [
                            "eid481",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${Text2Copy22}",
                            '1',
                            '0'
                        ],
                        [
                            "eid139",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${p18}",
                            '0',
                            '1'
                        ],
                        [
                            "eid563",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${p18}",
                            '1',
                            '0'
                        ],
                        [
                            "eid256",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2Copy22}",
                            '0',
                            '1'
                        ],
                        [
                            "eid496",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRect2Copy22}",
                            '1',
                            '0'
                        ],
                        [
                            "eid330",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2Copy12}",
                            '0',
                            '1'
                        ],
                        [
                            "eid465",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${Text2Copy12}",
                            '1',
                            '0'
                        ],
                        [
                            "eid669",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRectCopy20}",
                            '1471px',
                            '1179px'
                        ],
                        [
                            "eid354",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2Copy8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid514",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${Text2Copy8}",
                            '1',
                            '0'
                        ],
                        [
                            "eid143",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${p0}",
                            '0',
                            '1'
                        ],
                        [
                            "eid485",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${p0}",
                            '1',
                            '0'
                        ],
                        [
                            "eid649",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2Copy25}",
                            '2061px',
                            '1769px'
                        ],
                        [
                            "eid731",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2Copy12}",
                            '1353px',
                            '1061px'
                        ],
                        [
                            "eid352",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2Copy6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid544",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${Text2Copy6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid607",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRectCopy15}",
                            '1124px',
                            '832px'
                        ],
                        [
                            "eid159",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${p10}",
                            '0',
                            '1'
                        ],
                        [
                            "eid454",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${p10}",
                            '1',
                            '0'
                        ],
                        [
                            "eid214",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2Copy8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid460",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRect2Copy8}",
                            '1',
                            '0'
                        ],
                        [
                            "eid258",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2Copy23}",
                            '0',
                            '1'
                        ],
                        [
                            "eid503",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRect2Copy23}",
                            '1',
                            '0'
                        ],
                        [
                            "eid753",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2Copy10}",
                            '1026px',
                            '734px'
                        ],
                        [
                            "eid665",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2Copy13}",
                            '1353px',
                            '1061px'
                        ],
                        [
                            "eid775",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2Copy9}",
                            '1026px',
                            '734px'
                        ],
                        [
                            "eid218",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2Copy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid475",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRect2Copy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid133",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${p9}",
                            '0',
                            '1'
                        ],
                        [
                            "eid549",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${p9}",
                            '1',
                            '0'
                        ],
                        [
                            "eid611",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2Copy17}",
                            '1369px',
                            '1077px'
                        ],
                        [
                            "eid314",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid502",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRect2Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid663",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRectCopy5}",
                            '455px',
                            '163px'
                        ],
                        [
                            "eid723",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2}",
                            '701px',
                            '409px'
                        ],
                        [
                            "eid711",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRectCopy13}",
                            '1124px',
                            '832px'
                        ],
                        [
                            "eid655",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRectCopy11}",
                            '815px',
                            '523px'
                        ],
                        [
                            "eid220",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRectCopy6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid521",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRectCopy6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid617",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRectCopy14}",
                            '1124px',
                            '832px'
                        ],
                        [
                            "eid635",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2}",
                            '680px',
                            '388px'
                        ],
                        [
                            "eid785",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect}",
                            '455px',
                            '163px'
                        ],
                        [
                            "eid699",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2Copy22}",
                            '1700px',
                            '1408px'
                        ],
                        [
                            "eid795",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${p24}",
                            '1838px',
                            '1546px'
                        ],
                        [
                            "eid135",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${p12}",
                            '0',
                            '1'
                        ],
                        [
                            "eid545",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${p12}",
                            '1',
                            '0'
                        ],
                        [
                            "eid318",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2Copy24}",
                            '0',
                            '1'
                        ],
                        [
                            "eid490",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${Text2Copy24}",
                            '1',
                            '0'
                        ],
                        [
                            "eid282",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2Copy14}",
                            '0',
                            '1'
                        ],
                        [
                            "eid550",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRect2Copy14}",
                            '1',
                            '0'
                        ],
                        [
                            "eid667",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${p0}",
                            '460px',
                            '168px'
                        ],
                        [
                            "eid246",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRectCopy22}",
                            '0',
                            '1'
                        ],
                        [
                            "eid499",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRectCopy22}",
                            '1',
                            '0'
                        ],
                        [
                            "eid328",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2Copy14}",
                            '0',
                            '1'
                        ],
                        [
                            "eid522",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${Text2Copy14}",
                            '1',
                            '0'
                        ],
                        [
                            "eid131",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${p21}",
                            '0',
                            '1'
                        ],
                        [
                            "eid561",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${p21}",
                            '1',
                            '0'
                        ],
                        [
                            "eid117",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${p2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid497",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${p2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid151",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${p8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid529",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${p8}",
                            '1',
                            '0'
                        ],
                        [
                            "eid304",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2Copy12}",
                            '0',
                            '1'
                        ],
                        [
                            "eid492",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRect2Copy12}",
                            '1',
                            '0'
                        ],
                        [
                            "eid765",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRectCopy26}",
                            '1832px',
                            '1540px'
                        ],
                        [
                            "eid647",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2Copy27}",
                            '2061px',
                            '1769px'
                        ],
                        [
                            "eid757",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2Copy8}",
                            '1026px',
                            '734px'
                        ],
                        [
                            "eid695",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2Copy4}",
                            '701px',
                            '409px'
                        ],
                        [
                            "eid813",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${p7}",
                            '784px',
                            '492px'
                        ],
                        [
                            "eid621",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2Copy20}",
                            '1716px',
                            '1424px'
                        ],
                        [
                            "eid661",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${p9}",
                            '784px',
                            '492px'
                        ],
                        [
                            "eid815",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2Copy9}",
                            '1007px',
                            '715px'
                        ],
                        [
                            "eid312",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2Copy20}",
                            '0',
                            '1'
                        ],
                        [
                            "eid538",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRect2Copy20}",
                            '1',
                            '0'
                        ],
                        [
                            "eid155",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${cerrar2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid703",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${p28}",
                            '1838px',
                            '1546px'
                        ],
                        [
                            "eid149",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${p14}",
                            '0',
                            '1'
                        ],
                        [
                            "eid488",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${p14}",
                            '1',
                            '0'
                        ],
                        [
                            "eid350",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2Copy23}",
                            '0',
                            '1'
                        ],
                        [
                            "eid520",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${Text2Copy23}",
                            '1',
                            '0'
                        ],
                        [
                            "eid817",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${p4}",
                            '460px',
                            '168px'
                        ],
                        [
                            "eid346",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2Copy13}",
                            '0',
                            '1'
                        ],
                        [
                            "eid525",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${Text2Copy13}",
                            '1',
                            '0'
                        ],
                        [
                            "eid597",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${p1}",
                            '460px',
                            '168px'
                        ],
                        [
                            "eid115",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${fondomenu}",
                            '0',
                            '1'
                        ],
                        [
                            "eid171",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${p25}",
                            '0',
                            '1'
                        ],
                        [
                            "eid533",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${p25}",
                            '1',
                            '0'
                        ],
                        [
                            "eid157",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${p23}",
                            '0',
                            '1'
                        ],
                        [
                            "eid510",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${p23}",
                            '1',
                            '0'
                        ],
                        [
                            "eid308",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2Copy27}",
                            '0',
                            '1'
                        ],
                        [
                            "eid468",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRect2Copy27}",
                            '1',
                            '0'
                        ],
                        [
                            "eid725",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2Copy16}",
                            '1353px',
                            '1061px'
                        ],
                        [
                            "eid803",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2Copy17}",
                            '1353px',
                            '1061px'
                        ],
                        [
                            "eid643",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRectCopy6}",
                            '778px',
                            '486px'
                        ],
                        [
                            "eid631",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRectCopy}",
                            '455px',
                            '163px'
                        ],
                        [
                            "eid719",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2Copy}",
                            '701px',
                            '409px'
                        ],
                        [
                            "eid705",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2Copy11}",
                            '972px',
                            '680px'
                        ],
                        [
                            "eid787",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2Copy6}",
                            '1026px',
                            '734px'
                        ],
                        [
                            "eid208",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2Copy21}",
                            '0',
                            '1'
                        ],
                        [
                            "eid482",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRect2Copy21}",
                            '1',
                            '0'
                        ],
                        [
                            "eid260",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2Copy5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid466",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRect2Copy5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid741",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${p13}",
                            '1132px',
                            '840px'
                        ],
                        [
                            "eid679",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRectCopy19}",
                            '1471px',
                            '1179px'
                        ],
                        [
                            "eid145",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${p17}",
                            '0',
                            '1'
                        ],
                        [
                            "eid504",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${p17}",
                            '1',
                            '0'
                        ],
                        [
                            "eid735",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRectCopy10}",
                            '778px',
                            '486px'
                        ],
                        [
                            "eid240",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRectCopy26}",
                            '0',
                            '1'
                        ],
                        [
                            "eid542",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRectCopy26}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "ventana_1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-21px', '101px', '1280px', '1812px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle',
                            opacity: '1',
                            type: 'rect',
                            fill: ['rgba(0,0,0,0.67)']
                        },
                        {
                            rect: ['887px', '635px', '218px', '315px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'RoundRectCopy8',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['972px', '937px', '47px', '51px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'RoundRect2Copy8',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(0,0,0,1)']
                        },
                        {
                            rect: ['989px', '958px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '700', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'nowrap'],
                            align: 'center',
                            id: 'Text2Copy8',
                            opacity: '0',
                            text: '9',
                            type: 'text'
                        },
                        {
                            rect: ['636px', '635px', '218px', '315px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'RoundRectCopy7',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['721px', '937px', '47px', '51px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'RoundRect2Copy7',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(0,0,0,1)']
                        },
                        {
                            rect: ['738px', '958px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '700', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'nowrap'],
                            align: 'center',
                            id: 'Text2Copy7',
                            opacity: '0',
                            text: '8',
                            type: 'text'
                        },
                        {
                            rect: ['390px', '635px', '218px', '315px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'RoundRectCopy6',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['475px', '937px', '47px', '51px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'RoundRect2Copy6',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(0,0,0,1)']
                        },
                        {
                            rect: ['492px', '958px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '700', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'nowrap'],
                            align: 'center',
                            id: 'Text2Copy6',
                            opacity: '0',
                            text: '7',
                            type: 'text'
                        },
                        {
                            rect: ['138px', '635px', '218px', '315px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'RoundRectCopy5',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['223px', '937px', '47px', '51px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'RoundRect2Copy5',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(0,0,0,1)']
                        },
                        {
                            rect: ['240px', '958px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '700', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'nowrap'],
                            align: 'center',
                            id: 'Text2Copy5',
                            opacity: '0',
                            text: '6',
                            type: 'text'
                        },
                        {
                            rect: ['1004px', '199px', '218px', '315px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'RoundRectCopy4',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['1089px', '501px', '47px', '51px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'RoundRect2Copy4',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(0,0,0,1)']
                        },
                        {
                            rect: ['1106px', '522px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '700', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'nowrap'],
                            align: 'center',
                            id: 'Text2Copy4',
                            opacity: '0',
                            text: '5',
                            type: 'text'
                        },
                        {
                            rect: ['759px', '199px', '218px', '315px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'RoundRectCopy3',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['844px', '501px', '47px', '51px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'RoundRect2Copy3',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(0,0,0,1)']
                        },
                        {
                            rect: ['861px', '522px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '700', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'nowrap'],
                            align: 'center',
                            id: 'Text2Copy3',
                            opacity: '0',
                            text: '4',
                            type: 'text'
                        },
                        {
                            rect: ['508px', '199px', '218px', '315px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'RoundRectCopy2',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['593px', '501px', '47px', '51px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'RoundRect2Copy2',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(0,0,0,1)']
                        },
                        {
                            rect: ['260px', '199px', '218px', '315px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'RoundRect',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['345px', '501px', '47px', '51px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'RoundRect2',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(0,0,0,1)']
                        },
                        {
                            rect: ['362px', '522px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '700', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'nowrap'],
                            align: 'center',
                            id: 'Text2',
                            opacity: '0',
                            text: '2',
                            type: 'text'
                        },
                        {
                            rect: ['610px', '522px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '700', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'nowrap'],
                            align: 'center',
                            id: 'Text2Copy2',
                            opacity: '0',
                            text: '3',
                            type: 'text'
                        },
                        {
                            rect: ['-5372px', '-3179px', '11983px', '7840px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.1', '0.1']],
                            id: 'textoinstrucciones',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/textoinstrucciones2.svg', '0px', '0px']
                        },
                        {
                            rect: ['14px', '199px', '218px', '315px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'RoundRectCopy',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['99px', '501px', '47px', '51px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'RoundRect2Copy',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(0,0,0,1)']
                        },
                        {
                            rect: ['952px', '-106px', '480px', '480px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.1', '0.1']],
                            type: 'image',
                            id: 'cerrar2',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/cerrar22.svg', '0px', '0px']
                        },
                        {
                            rect: ['1064px', '111px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [36, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', '', 'break-word', 'nowrap'],
                            text: 'close',
                            id: 'Text',
                            opacity: '0',
                            cursor: 'pointer',
                            type: 'text'
                        },
                        {
                            rect: ['116px', '522px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '700', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'nowrap'],
                            align: 'center',
                            id: 'Text2Copy',
                            opacity: '0',
                            text: '1',
                            type: 'text'
                        },
                        {
                            rect: ['895px', '642px', '200px', '300px', 'auto', 'auto'],
                            id: 'ELECTRIC_BOOGALOO_No1_COMIXOLOGY9',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ELECTRIC_BOOGALOO_No1_COMIXOLOGY9.jpg', '0px', '0px']
                        },
                        {
                            rect: ['645px', '642px', '200px', '300px', 'auto', 'auto'],
                            id: 'ELECTRIC_BOOGALOO_No1_COMIXOLOGY8',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ELECTRIC_BOOGALOO_No1_COMIXOLOGY8.jpg', '0px', '0px']
                        },
                        {
                            rect: ['397px', '642px', '200px', '300px', 'auto', 'auto'],
                            id: 'ELECTRIC_BOOGALOO_No1_COMIXOLOGY7',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ELECTRIC_BOOGALOO_No1_COMIXOLOGY7.jpg', '0px', '0px']
                        },
                        {
                            rect: ['147px', '642px', '200px', '300px', 'auto', 'auto'],
                            id: 'ELECTRIC_BOOGALOO_No1_COMIXOLOGY6',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ELECTRIC_BOOGALOO_No1_COMIXOLOGY6.jpg', '0px', '0px']
                        },
                        {
                            rect: ['1013px', '207px', '200px', '300px', 'auto', 'auto'],
                            id: 'ELECTRIC_BOOGALOO_No1_COMIXOLOGY5',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ELECTRIC_BOOGALOO_No1_COMIXOLOGY5.jpg', '0px', '0px']
                        },
                        {
                            rect: ['767px', '207px', '200px', '300px', 'auto', 'auto'],
                            id: 'ELECTRIC_BOOGALOO_No1_COMIXOLOGY4',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ELECTRIC_BOOGALOO_No1_COMIXOLOGY4.jpg', '0px', '0px']
                        },
                        {
                            rect: ['517px', '207px', '200px', '300px', 'auto', 'auto'],
                            id: 'ELECTRIC_BOOGALOO_No1_COMIXOLOGY3',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ELECTRIC_BOOGALOO_No1_COMIXOLOGY3.jpg', '0px', '0px']
                        },
                        {
                            rect: ['269px', '207px', '200px', '300px', 'auto', 'auto'],
                            id: 'ELECTRIC_BOOGALOO_No1_COMIXOLOGY2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ELECTRIC_BOOGALOO_No1_COMIXOLOGY2.jpg', '0px', '0px']
                        },
                        {
                            rect: ['23px', '207px', '200px', '300px', 'auto', 'auto'],
                            id: 'ELECTRIC_BOOGALOO_No1_COMIXOLOGY',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ELECTRIC_BOOGALOO_No1_COMIXOLOGY.jpg', '0px', '0px']
                        },
                        {
                            rect: ['66px', '462px', '1100px', '304px', 'auto', 'auto'],
                            id: 'crewditos2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/crewditos2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1250px', '1886px']
                        }
                    }
                },
                timeline: {
                    duration: 2250,
                    autoPlay: false,
                    labels: {
                        "paginas": 170,
                        "instrucciones": 750,
                        "creditos": 1500
                    },
                    data: [
                        [
                            "eid116",
                            "opacity",
                            0,
                            500,
                            "easeOutCubic",
                            "${ELECTRIC_BOOGALOO_No1_COMIXOLOGY9}",
                            '0',
                            '1'
                        ],
                        [
                            "eid128",
                            "opacity",
                            500,
                            250,
                            "easeOutCubic",
                            "${ELECTRIC_BOOGALOO_No1_COMIXOLOGY9}",
                            '1',
                            '0'
                        ],
                        [
                            "eid95",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2Copy8}",
                            '680px',
                            '937px'
                        ],
                        [
                            "eid39",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2Copy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid40",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${Text2Copy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid575",
                            "left",
                            1500,
                            500,
                            "easeOutElastic",
                            "${crewditos2}",
                            '87px',
                            '66px'
                        ],
                        [
                            "eid30",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid31",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${Text2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid83",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2Copy7}",
                            '701px',
                            '958px'
                        ],
                        [
                            "eid45",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRectCopy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid46",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRectCopy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid48",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2Copy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid49",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${Text2Copy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid44",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRectCopy2}",
                            '455px',
                            '199px'
                        ],
                        [
                            "eid53",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRectCopy3}",
                            '455px',
                            '199px'
                        ],
                        [
                            "eid106",
                            "opacity",
                            0,
                            500,
                            "easeOutCubic",
                            "${ELECTRIC_BOOGALOO_No1_COMIXOLOGY2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid130",
                            "opacity",
                            500,
                            250,
                            "easeOutCubic",
                            "${ELECTRIC_BOOGALOO_No1_COMIXOLOGY2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid86",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2Copy7}",
                            '680px',
                            '937px'
                        ],
                        [
                            "eid89",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRectCopy7}",
                            '455px',
                            '635px'
                        ],
                        [
                            "eid38",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2Copy2}",
                            '701px',
                            '522px'
                        ],
                        [
                            "eid36",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect}",
                            '0',
                            '1'
                        ],
                        [
                            "eid37",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRect}",
                            '1',
                            '0'
                        ],
                        [
                            "eid60",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2Copy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid61",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRect2Copy4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid84",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2Copy7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid85",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${Text2Copy7}",
                            '1',
                            '0'
                        ],
                        [
                            "eid68",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2Copy5}",
                            '680px',
                            '937px'
                        ],
                        [
                            "eid570",
                            "opacity",
                            1500,
                            500,
                            "easeOutElastic",
                            "${crewditos2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid583",
                            "opacity",
                            2000,
                            250,
                            "easeOutElastic",
                            "${crewditos2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid41",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2Copy2}",
                            '680px',
                            '501px'
                        ],
                        [
                            "eid110",
                            "opacity",
                            0,
                            500,
                            "easeOutCubic",
                            "${ELECTRIC_BOOGALOO_No1_COMIXOLOGY3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid134",
                            "opacity",
                            500,
                            250,
                            "easeOutCubic",
                            "${ELECTRIC_BOOGALOO_No1_COMIXOLOGY3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid326",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid505",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${Text2Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid348",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid50",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2Copy3}",
                            '680px',
                            '501px'
                        ],
                        [
                            "eid57",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2Copy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid58",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${Text2Copy4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid72",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRectCopy5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid73",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRectCopy5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid29",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2}",
                            '701px',
                            '522px'
                        ],
                        [
                            "eid62",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRectCopy4}",
                            '455px',
                            '199px'
                        ],
                        [
                            "eid51",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2Copy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid52",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRect2Copy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid65",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2Copy5}",
                            '701px',
                            '958px'
                        ],
                        [
                            "eid104",
                            "opacity",
                            0,
                            500,
                            "easeOutCubic",
                            "${ELECTRIC_BOOGALOO_No1_COMIXOLOGY6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid142",
                            "opacity",
                            500,
                            250,
                            "easeOutCubic",
                            "${ELECTRIC_BOOGALOO_No1_COMIXOLOGY6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid96",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2Copy8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid97",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRect2Copy8}",
                            '1',
                            '0'
                        ],
                        [
                            "eid77",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2Copy6}",
                            '680px',
                            '937px'
                        ],
                        [
                            "eid314",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid502",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRect2Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid71",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRectCopy5}",
                            '455px',
                            '635px'
                        ],
                        [
                            "eid42",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2Copy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid43",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRect2Copy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid81",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRectCopy6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid82",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRectCopy6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid32",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2}",
                            '680px',
                            '501px'
                        ],
                        [
                            "eid35",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect}",
                            '455px',
                            '199px'
                        ],
                        [
                            "eid577",
                            "top",
                            1500,
                            500,
                            "easeOutElastic",
                            "${crewditos2}",
                            '462px',
                            '158px'
                        ],
                        [
                            "eid98",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRectCopy8}",
                            '455px',
                            '635px'
                        ],
                        [
                            "eid251",
                            "height",
                            1250,
                            0,
                            "linear",
                            "${Rectangle}",
                            '1812px',
                            '1812px'
                        ],
                        [
                            "eid302",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRectCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid543",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRectCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid54",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRectCopy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid55",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRectCopy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid108",
                            "opacity",
                            0,
                            500,
                            "easeOutCubic",
                            "${ELECTRIC_BOOGALOO_No1_COMIXOLOGY5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid132",
                            "opacity",
                            500,
                            250,
                            "easeOutCubic",
                            "${ELECTRIC_BOOGALOO_No1_COMIXOLOGY5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid56",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2Copy4}",
                            '701px',
                            '522px'
                        ],
                        [
                            "eid581",
                            "top",
                            750,
                            500,
                            "easeOutElastic",
                            "${textoinstrucciones}",
                            '-3179px',
                            '-3360px'
                        ],
                        [
                            "eid93",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2Copy8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid94",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${Text2Copy8}",
                            '1',
                            '0'
                        ],
                        [
                            "eid78",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2Copy6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid79",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRect2Copy6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid33",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid34",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRect2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid733",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2Copy}",
                            '680px',
                            '501px'
                        ],
                        [
                            "eid155",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${cerrar2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid90",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRectCopy7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid91",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRectCopy7}",
                            '1',
                            '0'
                        ],
                        [
                            "eid120",
                            "opacity",
                            0,
                            500,
                            "easeOutCubic",
                            "${ELECTRIC_BOOGALOO_No1_COMIXOLOGY8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid140",
                            "opacity",
                            500,
                            250,
                            "easeOutCubic",
                            "${ELECTRIC_BOOGALOO_No1_COMIXOLOGY8}",
                            '1',
                            '0'
                        ],
                        [
                            "eid92",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2Copy8}",
                            '701px',
                            '958px'
                        ],
                        [
                            "eid112",
                            "opacity",
                            0,
                            500,
                            "easeOutCubic",
                            "${ELECTRIC_BOOGALOO_No1_COMIXOLOGY}",
                            '0',
                            '1'
                        ],
                        [
                            "eid136",
                            "opacity",
                            500,
                            250,
                            "easeOutCubic",
                            "${ELECTRIC_BOOGALOO_No1_COMIXOLOGY}",
                            '1',
                            '0'
                        ],
                        [
                            "eid631",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRectCopy}",
                            '455px',
                            '199px'
                        ],
                        [
                            "eid47",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2Copy3}",
                            '701px',
                            '522px'
                        ],
                        [
                            "eid80",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRectCopy6}",
                            '455px',
                            '635px'
                        ],
                        [
                            "eid87",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2Copy7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid88",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRect2Copy7}",
                            '1',
                            '0'
                        ],
                        [
                            "eid146",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid623",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text}",
                            '411px',
                            '119px'
                        ],
                        [
                            "eid59",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2Copy4}",
                            '680px',
                            '501px'
                        ],
                        [
                            "eid579",
                            "opacity",
                            750,
                            500,
                            "easeOutElastic",
                            "${textoinstrucciones}",
                            '0',
                            '1'
                        ],
                        [
                            "eid582",
                            "opacity",
                            1250,
                            250,
                            "easeOutElastic",
                            "${textoinstrucciones}",
                            '1',
                            '0'
                        ],
                        [
                            "eid719",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2Copy}",
                            '701px',
                            '522px'
                        ],
                        [
                            "eid102",
                            "opacity",
                            0,
                            500,
                            "easeOutCubic",
                            "${ELECTRIC_BOOGALOO_No1_COMIXOLOGY7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid126",
                            "opacity",
                            500,
                            250,
                            "easeOutCubic",
                            "${ELECTRIC_BOOGALOO_No1_COMIXOLOGY7}",
                            '1',
                            '0'
                        ],
                        [
                            "eid74",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2Copy6}",
                            '701px',
                            '958px'
                        ],
                        [
                            "eid66",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2Copy5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid67",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${Text2Copy5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid69",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRect2Copy5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid70",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRect2Copy5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid253",
                            "top",
                            1250,
                            0,
                            "linear",
                            "${Rectangle}",
                            '101px',
                            '101px'
                        ],
                        [
                            "eid124",
                            "opacity",
                            0,
                            500,
                            "easeOutCubic",
                            "${ELECTRIC_BOOGALOO_No1_COMIXOLOGY4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid138",
                            "opacity",
                            500,
                            250,
                            "easeOutCubic",
                            "${ELECTRIC_BOOGALOO_No1_COMIXOLOGY4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid63",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRectCopy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid64",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRectCopy4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid99",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${RoundRectCopy8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid100",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${RoundRectCopy8}",
                            '1',
                            '0'
                        ],
                        [
                            "eid75",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${Text2Copy6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid76",
                            "opacity",
                            500,
                            250,
                            "easeOutElastic",
                            "${Text2Copy6}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "contenido": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1280px', '1925px', 'auto', 'auto'],
                            id: 'content',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280px', '1925px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "menuelectric": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'menufondoCopy',
                            type: 'image',
                            rect: ['0px', '0px', '500px', '1920px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/menufondo.jpg', '0px', '0px']
                        },
                        {
                            id: 'neonmenu_02Copy',
                            type: 'image',
                            rect: ['32px', '254px', '428px', '149px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/neonmenu_02.png', '0px', '0px']
                        },
                        {
                            id: 'neonmenu_04Copy',
                            type: 'image',
                            rect: ['32px', '353px', '428px', '149px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/neonmenu_04.png', '0px', '0px']
                        },
                        {
                            id: 'neonmenu_06Copy',
                            type: 'image',
                            rect: ['32px', '452px', '428px', '149px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/neonmenu_06.png', '0px', '0px']
                        },
                        {
                            id: 'neonmenu_08Copy',
                            type: 'image',
                            rect: ['32px', '551px', '428px', '149px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/neonmenu_08.png', '0px', '0px']
                        },
                        {
                            rect: ['-912px', '433px', '2320px', '650px', 'auto', 'auto'],
                            id: 'socialbtnCopy',
                            transform: [[], [], [], ['0.1', '0.1']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/socialbtn.svg', '0px', '0px']
                        },
                        {
                            rect: ['32px', '395px', '428px', '68px', 'auto', 'auto'],
                            id: 'RectangleCopy14',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            rect: ['32px', '494px', '428px', '68px', 'auto', 'auto'],
                            id: 'RectangleCopy13',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            rect: ['112px', '718px', '70px', '80px', 'auto', 'auto'],
                            id: 'RectangleCopy11',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            rect: ['215px', '718px', '70px', '80px', 'auto', 'auto'],
                            id: 'RectangleCopy10',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            rect: ['305px', '718px', '70px', '80px', 'auto', 'auto'],
                            id: 'RectangleCopy9',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            rect: ['32px', '593px', '428px', '68px', 'auto', 'auto'],
                            id: 'RectangleCopy8',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '500px', '1920px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid14",
                            "left",
                            0,
                            1000,
                            "easeOutCirc",
                            "${menufondoCopy}",
                            '0px',
                            '-500px'
                        ],
                        [
                            "eid15",
                            "left",
                            0,
                            1000,
                            "easeOutCirc",
                            "${neonmenu_06Copy}",
                            '32px',
                            '-500px'
                        ],
                        [
                            "eid19",
                            "left",
                            0,
                            1000,
                            "easeOutCirc",
                            "${neonmenu_08Copy}",
                            '32px',
                            '-500px'
                        ],
                        [
                            "eid16",
                            "left",
                            0,
                            1000,
                            "easeOutCirc",
                            "${RectangleCopy13}",
                            '32px',
                            '-500px'
                        ],
                        [
                            "eid17",
                            "left",
                            0,
                            1000,
                            "easeOutCirc",
                            "${RectangleCopy10}",
                            '215px',
                            '-285px'
                        ],
                        [
                            "eid18",
                            "left",
                            0,
                            1000,
                            "easeOutCirc",
                            "${neonmenu_02Copy}",
                            '32px',
                            '-500px'
                        ],
                        [
                            "eid13",
                            "left",
                            0,
                            1000,
                            "easeOutCirc",
                            "${RectangleCopy8}",
                            '32px',
                            '-500px'
                        ],
                        [
                            "eid23",
                            "left",
                            0,
                            1000,
                            "easeOutCirc",
                            "${neonmenu_04Copy}",
                            '32px',
                            '-500px'
                        ],
                        [
                            "eid21",
                            "left",
                            0,
                            1000,
                            "easeOutCirc",
                            "${RectangleCopy11}",
                            '112px',
                            '-388px'
                        ],
                        [
                            "eid24",
                            "left",
                            0,
                            1000,
                            "easeOutCirc",
                            "${RectangleCopy9}",
                            '305px',
                            '-195px'
                        ],
                        [
                            "eid20",
                            "left",
                            0,
                            1000,
                            "easeOutCirc",
                            "${socialbtnCopy}",
                            '-912px',
                            '-1410px'
                        ],
                        [
                            "eid26",
                            "left",
                            0,
                            1000,
                            "easeOutCirc",
                            "${RectangleCopy14}",
                            '32px',
                            '-500px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-2246004");
