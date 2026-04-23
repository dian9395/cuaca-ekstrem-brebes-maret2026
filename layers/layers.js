var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_CuacaEkstremdiBrebes_1 = new ol.format.GeoJSON();
var features_CuacaEkstremdiBrebes_1 = format_CuacaEkstremdiBrebes_1.readFeatures(json_CuacaEkstremdiBrebes_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CuacaEkstremdiBrebes_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CuacaEkstremdiBrebes_1.addFeatures(features_CuacaEkstremdiBrebes_1);
var lyr_CuacaEkstremdiBrebes_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CuacaEkstremdiBrebes_1, 
                style: style_CuacaEkstremdiBrebes_1,
                popuplayertitle: 'Cuaca Ekstrem di Brebes',
                interactive: true,
    title: 'Cuaca Ekstrem di Brebes<br />\
    <img src="styles/legend/CuacaEkstremdiBrebes_1_0.png" /> Rendah (0 kejadian)<br />\
    <img src="styles/legend/CuacaEkstremdiBrebes_1_1.png" /> Sedang (1 kejadian)<br />\
    <img src="styles/legend/CuacaEkstremdiBrebes_1_2.png" /> Tinggi (1-3 kejadian)<br />' });

lyr_GoogleMaps_0.setVisible(true);lyr_CuacaEkstremdiBrebes_1.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_CuacaEkstremdiBrebes_1];
lyr_CuacaEkstremdiBrebes_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'Kecamatan', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'luas': 'Luas Wilayah', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'JoinNO': 'JoinNO', 'JoinBANJIR': 'JoinBANJIR', 'JoinLONGSO': 'JoinLONGSO', 'JoinTANAH': 'JoinTANAH', 'JoinCUACA': 'Jumlah Kejadian', 'JoinKEKERI': 'JoinKEKERI', 'JoinGEMPA': 'JoinGEMPA', 'JoinBENCAN': 'JoinBENCAN', 'JoinKEBAKA': 'JoinKEBAKA', 'JoinGELOMB': 'JoinGELOMB', 'JoinBENC_1': 'JoinBENC_1', });
lyr_CuacaEkstremdiBrebes_1.set('fieldImages', {'NAMOBJ': 'Hidden', 'FCODE': 'Hidden', 'REMARK': 'Hidden', 'METADATA': 'Hidden', 'SRS_ID': 'Hidden', 'KDBBPS': 'Hidden', 'KDCBPS': 'Hidden', 'KDCPUM': 'Hidden', 'KDEBPS': 'Hidden', 'KDEPUM': 'Hidden', 'KDPBPS': 'Hidden', 'KDPKAB': 'Hidden', 'KDPPUM': 'Hidden', 'LUASWH': 'Hidden', 'TIPADM': 'Hidden', 'WADMKC': 'TextEdit', 'WADMKD': 'Hidden', 'WADMKK': 'Hidden', 'WADMPR': 'Hidden', 'WIADKC': 'Hidden', 'WIADKK': 'Hidden', 'WIADPR': 'Hidden', 'WIADKD': 'Hidden', 'UUPP': 'Hidden', 'luas': 'Hidden', 'SHAPE_Leng': 'Hidden', 'SHAPE_Area': 'Hidden', 'JoinNO': 'Hidden', 'JoinBANJIR': 'Hidden', 'JoinLONGSO': 'Hidden', 'JoinTANAH': 'Hidden', 'JoinCUACA': 'TextEdit', 'JoinKEKERI': 'Hidden', 'JoinGEMPA': 'Hidden', 'JoinBENCAN': 'Hidden', 'JoinKEBAKA': 'Hidden', 'JoinGELOMB': 'Hidden', 'JoinBENC_1': 'Hidden', });
lyr_CuacaEkstremdiBrebes_1.set('fieldLabels', {'WADMKC': 'inline label - always visible', 'JoinCUACA': 'inline label - always visible', });
lyr_CuacaEkstremdiBrebes_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});