var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CiudaddeMxico_1 = new ol.format.GeoJSON();
var features_CiudaddeMxico_1 = format_CiudaddeMxico_1.readFeatures(json_CiudaddeMxico_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CiudaddeMxico_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CiudaddeMxico_1.addFeatures(features_CiudaddeMxico_1);
var lyr_CiudaddeMxico_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CiudaddeMxico_1, 
                style: style_CiudaddeMxico_1,
                popuplayertitle: 'Ciudad de México',
                interactive: true,
                title: '<img src="styles/legend/CiudaddeMxico_1.png" /> Ciudad de México'
            });
var format_Xochimilco_2 = new ol.format.GeoJSON();
var features_Xochimilco_2 = format_Xochimilco_2.readFeatures(json_Xochimilco_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Xochimilco_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Xochimilco_2.addFeatures(features_Xochimilco_2);
var lyr_Xochimilco_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Xochimilco_2, 
                style: style_Xochimilco_2,
                popuplayertitle: 'Xochimilco',
                interactive: true,
                title: '<img src="styles/legend/Xochimilco_2.png" /> Xochimilco'
            });
var format_Usodesuelo_3 = new ol.format.GeoJSON();
var features_Usodesuelo_3 = format_Usodesuelo_3.readFeatures(json_Usodesuelo_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Usodesuelo_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Usodesuelo_3.addFeatures(features_Usodesuelo_3);
var lyr_Usodesuelo_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Usodesuelo_3, 
                style: style_Usodesuelo_3,
                popuplayertitle: 'Uso de suelo',
                interactive: true,
    title: 'Uso de suelo<br />\
    <img src="styles/legend/Usodesuelo_3_0.png" /> AGRICULTURA DE RIEGO ANUAL<br />\
    <img src="styles/legend/Usodesuelo_3_1.png" /> AGRICULTURA DE TEMPORAL ANUAL<br />\
    <img src="styles/legend/Usodesuelo_3_2.png" /> AGRICULTURA DE TEMPORAL ANUAL Y PERMANENTE<br />\
    <img src="styles/legend/Usodesuelo_3_3.png" /> ASENTAMIENTOS HUMANOS<br />\
    <img src="styles/legend/Usodesuelo_3_4.png" /> BOSQUE CULTIVADO<br />\
    <img src="styles/legend/Usodesuelo_3_5.png" /> BOSQUE DE ENCINO<br />\
    <img src="styles/legend/Usodesuelo_3_6.png" /> BOSQUE DE ENCINO-PINO<br />\
    <img src="styles/legend/Usodesuelo_3_7.png" /> CUERPO DE AGUA<br />\
    <img src="styles/legend/Usodesuelo_3_8.png" /> PASTIZAL CULTIVADO<br />\
    <img src="styles/legend/Usodesuelo_3_9.png" /> PASTIZAL HALÓFILO<br />\
    <img src="styles/legend/Usodesuelo_3_10.png" /> PASTIZAL INDUCIDO<br />\
    <img src="styles/legend/Usodesuelo_3_11.png" /> VEGETACIÓN SECUNDARIA ARBÓREA DE BOSQUE DE ENCINO<br />\
    <img src="styles/legend/Usodesuelo_3_12.png" /> VEGETACIÓN SECUNDARIA ARBÓREA DE BOSQUE DE PINO<br />\
    <img src="styles/legend/Usodesuelo_3_13.png" /> VEGETACIÓN SECUNDARIA ARBUSTIVA DE BOSQUE DE ENCINO<br />\
    <img src="styles/legend/Usodesuelo_3_14.png" /> <br />' });

lyr_OSMStandard_0.setVisible(true);lyr_CiudaddeMxico_1.setVisible(true);lyr_Xochimilco_2.setVisible(true);lyr_Usodesuelo_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_CiudaddeMxico_1,lyr_Xochimilco_2,lyr_Usodesuelo_3];
lyr_CiudaddeMxico_1.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'NOMGEO': 'NOMGEO', 'CVE_CAP': 'CVE_CAP', 'NOM_CAP': 'NOM_CAP', 'COV_': 'COV_', 'COV_ID': 'COV_ID', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', });
lyr_Xochimilco_2.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'NOM_ENT': 'NOM_ENT', 'COV_': 'COV_', 'COV_ID': 'COV_ID', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', });
lyr_Usodesuelo_3.set('fieldAliases', {'fid': 'fid', 'DESCRIPCIO': 'DESCRIPCIO', 'COV_': 'COV_', 'COV_ID': 'COV_ID', 'codigo': 'codigo', });
lyr_CiudaddeMxico_1.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'NOMGEO': 'TextEdit', 'CVE_CAP': 'TextEdit', 'NOM_CAP': 'TextEdit', 'COV_': 'TextEdit', 'COV_ID': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', });
lyr_Xochimilco_2.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'NOM_ENT': 'TextEdit', 'COV_': 'TextEdit', 'COV_ID': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', });
lyr_Usodesuelo_3.set('fieldImages', {'fid': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'COV_': 'TextEdit', 'COV_ID': 'TextEdit', 'codigo': 'TextEdit', });
lyr_CiudaddeMxico_1.set('fieldLabels', {'CVEGEO': 'inline label - always visible', 'CVE_ENT': 'inline label - always visible', 'NOMGEO': 'inline label - always visible', 'CVE_CAP': 'inline label - always visible', 'NOM_CAP': 'inline label - visible with data', 'COV_': 'inline label - always visible', 'COV_ID': 'inline label - always visible', 'AREA': 'inline label - always visible', 'PERIMETER': 'inline label - always visible', });
lyr_Xochimilco_2.set('fieldLabels', {'CVEGEO': 'inline label - always visible', 'CVE_ENT': 'inline label - always visible', 'CVE_MUN': 'inline label - always visible', 'NOMGEO': 'inline label - always visible', 'NOM_ENT': 'inline label - always visible', 'COV_': 'inline label - always visible', 'COV_ID': 'inline label - always visible', 'AREA': 'inline label - always visible', 'PERIMETER': 'inline label - always visible', });
lyr_Usodesuelo_3.set('fieldLabels', {'fid': 'inline label - always visible', 'DESCRIPCIO': 'inline label - always visible', 'COV_': 'inline label - always visible', 'COV_ID': 'inline label - always visible', 'codigo': 'inline label - always visible', });
lyr_Usodesuelo_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});