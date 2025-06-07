var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 0.242000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_openspace_1 = new ol.format.GeoJSON();
var features_openspace_1 = format_openspace_1.readFeatures(json_openspace_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_openspace_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_openspace_1.addFeatures(features_openspace_1);
var lyr_openspace_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_openspace_1, 
                style: style_openspace_1,
                popuplayertitle: 'openspace',
                interactive: false,
                title: '<img src="styles/legend/openspace_1.png" /> openspace'
            });
var format_Roads_2 = new ol.format.GeoJSON();
var features_Roads_2 = format_Roads_2.readFeatures(json_Roads_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roads_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads_2.addFeatures(features_Roads_2);
var lyr_Roads_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roads_2, 
                style: style_Roads_2,
                popuplayertitle: 'Roads',
                interactive: false,
                title: '<img src="styles/legend/Roads_2.png" /> Roads'
            });
var format_pinebrookextent_3 = new ol.format.GeoJSON();
var features_pinebrookextent_3 = format_pinebrookextent_3.readFeatures(json_pinebrookextent_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pinebrookextent_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pinebrookextent_3.addFeatures(features_pinebrookextent_3);
var lyr_pinebrookextent_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pinebrookextent_3, 
                style: style_pinebrookextent_3,
                popuplayertitle: 'pinebrook extent',
                interactive: false,
                title: '<img src="styles/legend/pinebrookextent_3.png" /> pinebrook extent'
            });
var format_Parcels_4 = new ol.format.GeoJSON();
var features_Parcels_4 = format_Parcels_4.readFeatures(json_Parcels_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parcels_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parcels_4.addFeatures(features_Parcels_4);
var lyr_Parcels_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parcels_4, 
                style: style_Parcels_4,
                popuplayertitle: 'Parcels',
                interactive: false,
                title: '<img src="styles/legend/Parcels_4.png" /> Parcels'
            });
var format_pinebrookTrails_5 = new ol.format.GeoJSON();
var features_pinebrookTrails_5 = format_pinebrookTrails_5.readFeatures(json_pinebrookTrails_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pinebrookTrails_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pinebrookTrails_5.addFeatures(features_pinebrookTrails_5);
var lyr_pinebrookTrails_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pinebrookTrails_5, 
                style: style_pinebrookTrails_5,
                popuplayertitle: 'pinebrookTrails',
                interactive: true,
                title: 'pinebrookTrails'
            });
var format_mm_6 = new ol.format.GeoJSON();
var features_mm_6 = format_mm_6.readFeatures(json_mm_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mm_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mm_6.addFeatures(features_mm_6);
var lyr_mm_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mm_6, 
                style: style_mm_6,
                popuplayertitle: 'mm',
                interactive: true,
                title: '<img src="styles/legend/mm_6.png" /> mm'
            });
var format_seperimeter_7 = new ol.format.GeoJSON();
var features_seperimeter_7 = format_seperimeter_7.readFeatures(json_seperimeter_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_seperimeter_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_seperimeter_7.addFeatures(features_seperimeter_7);
var lyr_seperimeter_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_seperimeter_7, 
                style: style_seperimeter_7,
                popuplayertitle: 'seperimeter',
                interactive: true,
    title: 'seperimeter<br />\
    <img src="styles/legend/seperimeter_7_0.png" /> First Revision<br />\
    <img src="styles/legend/seperimeter_7_1.png" /> Ht Of Mid Mountain<br />\
    <img src="styles/legend/seperimeter_7_2.png" /> SE Perimeter<br />\
    <img src="styles/legend/seperimeter_7_3.png" /> Second Revision<br />\
    <img src="styles/legend/seperimeter_7_4.png" /> <br />' });
var format_trailheadparking_8 = new ol.format.GeoJSON();
var features_trailheadparking_8 = format_trailheadparking_8.readFeatures(json_trailheadparking_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_trailheadparking_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_trailheadparking_8.addFeatures(features_trailheadparking_8);
var lyr_trailheadparking_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_trailheadparking_8, 
                style: style_trailheadparking_8,
                popuplayertitle: 'trailhead parking',
                interactive: true,
                title: '<img src="styles/legend/trailheadparking_8.png" /> trailhead parking'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_openspace_1.setVisible(true);lyr_Roads_2.setVisible(true);lyr_pinebrookextent_3.setVisible(true);lyr_Parcels_4.setVisible(true);lyr_pinebrookTrails_5.setVisible(true);lyr_mm_6.setVisible(true);lyr_seperimeter_7.setVisible(true);lyr_trailheadparking_8.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_openspace_1,lyr_Roads_2,lyr_pinebrookextent_3,lyr_Parcels_4,lyr_pinebrookTrails_5,lyr_mm_6,lyr_seperimeter_7,lyr_trailheadparking_8];
lyr_openspace_1.set('fieldAliases', {'pk': 'pk', 'objectid': 'objectid', 'bound3_': 'bound3_', 'bound3_id': 'bound3_id', 'name': 'name', 'lotnum': 'lotnum', 'code': 'code', 'serial': 'serial', 'notes': 'notes', 'gisid': 'gisid', 'subid': 'subid', 'lastupdate': 'lastupdate', 'lasteditor': 'lasteditor', 'shape_area': 'shape_area', 'shape_len': 'shape_len', 'objectid_1': 'objectid_1', 'gisid_1': 'gisid_1', 'account': 'account', 'serial_1': 'serial_1', 'taxdist': 'taxdist', 'assessyr': 'assessyr', 'owner': 'owner', 'address1': 'address1', 'address2': 'address2', 'city': 'city', 'state': 'state', 'zip': 'zip', 'country': 'country', 'taxval': 'taxval', 'mrktvallnd': 'mrktvallnd', 'mrktvalimp': 'mrktvalimp', 'acres': 'acres', 'situs': 'situs', 'incareof': 'incareof', 'totaltaxes': 'totaltaxes', });
lyr_Roads_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'STREET': 'STREET', 'S_JURIS': 'S_JURIS', 'OTHER_NAME': 'OTHER_NAME', 'CLASSIFICA': 'CLASSIFICA', 'FROMLEFT': 'FROMLEFT', 'TOLEFT': 'TOLEFT', 'FROMRIGHT': 'FROMRIGHT', 'TORIGHT': 'TORIGHT', 'PREFIX_DIR': 'PREFIX_DIR', 'CITY': 'CITY', 'Zip': 'Zip', 'Status': 'Status', 'DateAdded': 'DateAdded', 'NAME': 'NAME', 'POST_DIR': 'POST_DIR', 'SUFF_TYPE': 'SUFF_TYPE', 'OneWay': 'OneWay', 'PRE_TYPE': 'PRE_TYPE', 'GISID': 'GISID', 'JoinID': 'JoinID', 'Lcityrd': 'Lcityrd', 'Rcityrd': 'Rcityrd', 'Lzip': 'Lzip', 'Rzip': 'Rzip', 'side': 'side', 'location': 'location', 'lz_left': 'lz_left', 'lz_right': 'lz_right', 'la_left': 'la_left', 'la_right': 'la_right', 'fz_left': 'fz_left', 'fz_right': 'fz_right', 'fa_left': 'fa_left', 'fa_right': 'fa_right', 'ls_zone': 'ls_zone', 'exclude': 'exclude', 'Spillman_S': 'Spillman_S', 'ESN': 'ESN', 'lr_right': 'lr_right', 'lr_left': 'lr_left', 'fr_right': 'fr_right', 'fr_left': 'fr_left', 'sde_DBO_Ce': 'sde_DBO_Ce', 'GlobalID': 'GlobalID', 'RuleID': 'RuleID', 'ez_left': 'ez_left', 'ez_right': 'ez_right', 'ea_left': 'ea_left', 'ea_right': 'ea_right', 'er_right': 'er_right', 'er_left': 'er_left', 'Shape_len': 'Shape_len', });
lyr_pinebrookextent_3.set('fieldAliases', {'fid': 'fid', 'cat': 'cat', 'id': 'id', 'name': 'name', });
lyr_Parcels_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'BOUND3_': 'BOUND3_', 'BOUND3_ID': 'BOUND3_ID', 'NAME': 'NAME', 'Lotnum': 'Lotnum', 'CODE': 'CODE', 'Serial': 'Serial', 'Notes': 'Notes', 'GISID': 'GISID', 'SubID': 'SubID', 'LASTUPDATE': 'Last Update Date', 'LASTEDITOR': 'Last Editor', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_pinebrookTrails_5.set('fieldAliases', {'Name': 'Name', 'Surface': 'Surface', 'Difficulty': 'Difficulty', 'Status': 'Status', 'Descriptn': 'Descriptn', 'Length': 'Length', });
lyr_mm_6.set('fieldAliases', {'Name': 'Name', 'Surface': 'Surface', 'Difficulty': 'Difficulty', 'Status': 'Status', 'Descriptn': 'Descriptn', 'Length': 'Length', });
lyr_seperimeter_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PrimaryNam': 'PrimaryNam', 'ID': 'ID', 'Status': 'Status', 'Designated': 'Designated', 'SurfaceTyp': 'SurfaceTyp', 'Class': 'Class', 'CartoCode': 'CartoCode', 'OtherRestr': 'OtherRestr', 'HorseAllow': 'HorseAllow', 'MotorizedA': 'MotorizedA', 'HikeDiffic': 'HikeDiffic', 'BikeDiffic': 'BikeDiffic', 'ADAAccessi': 'ADAAccessi', 'OwnerStewa': 'OwnerStewa', 'County': 'County', 'Recreation': 'Recreation', 'SystemName': 'SystemName', 'TransNetwo': 'TransNetwo', 'Comments': 'Comments', 'DataSource': 'DataSource', 'Unique_ID': 'Unique_ID', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_trailheadparking_8.set('fieldAliases', {'id': 'id', 'name': 'name', 'summercap': 'summercap', 'wintercap': 'wintercap', 'hndicap': 'hndicap', });
lyr_openspace_1.set('fieldImages', {'pk': 'TextEdit', 'objectid': 'TextEdit', 'bound3_': 'TextEdit', 'bound3_id': 'TextEdit', 'name': 'TextEdit', 'lotnum': 'TextEdit', 'code': 'TextEdit', 'serial': 'TextEdit', 'notes': 'TextEdit', 'gisid': 'TextEdit', 'subid': 'TextEdit', 'lastupdate': 'TextEdit', 'lasteditor': 'TextEdit', 'shape_area': 'TextEdit', 'shape_len': 'TextEdit', 'objectid_1': 'TextEdit', 'gisid_1': 'TextEdit', 'account': 'TextEdit', 'serial_1': 'TextEdit', 'taxdist': 'TextEdit', 'assessyr': 'TextEdit', 'owner': 'TextEdit', 'address1': 'TextEdit', 'address2': 'TextEdit', 'city': 'TextEdit', 'state': 'TextEdit', 'zip': 'TextEdit', 'country': 'TextEdit', 'taxval': 'TextEdit', 'mrktvallnd': 'TextEdit', 'mrktvalimp': 'TextEdit', 'acres': 'TextEdit', 'situs': 'TextEdit', 'incareof': 'TextEdit', 'totaltaxes': 'TextEdit', });
lyr_Roads_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'STREET': 'TextEdit', 'S_JURIS': 'TextEdit', 'OTHER_NAME': 'TextEdit', 'CLASSIFICA': 'TextEdit', 'FROMLEFT': 'TextEdit', 'TOLEFT': 'TextEdit', 'FROMRIGHT': 'TextEdit', 'TORIGHT': 'TextEdit', 'PREFIX_DIR': 'TextEdit', 'CITY': 'TextEdit', 'Zip': 'TextEdit', 'Status': 'TextEdit', 'DateAdded': 'DateTime', 'NAME': 'TextEdit', 'POST_DIR': 'TextEdit', 'SUFF_TYPE': 'TextEdit', 'OneWay': 'Range', 'PRE_TYPE': 'TextEdit', 'GISID': 'TextEdit', 'JoinID': 'TextEdit', 'Lcityrd': 'TextEdit', 'Rcityrd': 'TextEdit', 'Lzip': 'TextEdit', 'Rzip': 'TextEdit', 'side': 'TextEdit', 'location': 'TextEdit', 'lz_left': 'TextEdit', 'lz_right': 'TextEdit', 'la_left': 'TextEdit', 'la_right': 'TextEdit', 'fz_left': 'TextEdit', 'fz_right': 'TextEdit', 'fa_left': 'TextEdit', 'fa_right': 'TextEdit', 'ls_zone': 'TextEdit', 'exclude': 'TextEdit', 'Spillman_S': 'TextEdit', 'ESN': 'TextEdit', 'lr_right': 'TextEdit', 'lr_left': 'TextEdit', 'fr_right': 'TextEdit', 'fr_left': 'TextEdit', 'sde_DBO_Ce': 'TextEdit', 'GlobalID': 'TextEdit', 'RuleID': 'TextEdit', 'ez_left': 'TextEdit', 'ez_right': 'TextEdit', 'ea_left': 'TextEdit', 'ea_right': 'TextEdit', 'er_right': 'TextEdit', 'er_left': 'TextEdit', 'Shape_len': 'TextEdit', });
lyr_pinebrookextent_3.set('fieldImages', {'fid': 'TextEdit', 'cat': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', });
lyr_Parcels_4.set('fieldImages', {'OBJECTID': '', 'BOUND3_': '', 'BOUND3_ID': '', 'NAME': '', 'Lotnum': '', 'CODE': '', 'Serial': '', 'Notes': '', 'GISID': '', 'SubID': '', 'LASTUPDATE': '', 'LASTEDITOR': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_pinebrookTrails_5.set('fieldImages', {'Name': 'TextEdit', 'Surface': 'TextEdit', 'Difficulty': 'TextEdit', 'Status': 'TextEdit', 'Descriptn': 'TextEdit', 'Length': 'TextEdit', });
lyr_mm_6.set('fieldImages', {'Name': 'TextEdit', 'Surface': 'TextEdit', 'Difficulty': 'TextEdit', 'Status': 'TextEdit', 'Descriptn': 'TextEdit', 'Length': 'TextEdit', });
lyr_seperimeter_7.set('fieldImages', {'OBJECTID': 'Range', 'PrimaryNam': 'TextEdit', 'ID': 'TextEdit', 'Status': 'TextEdit', 'Designated': 'TextEdit', 'SurfaceTyp': 'TextEdit', 'Class': 'TextEdit', 'CartoCode': 'TextEdit', 'OtherRestr': 'TextEdit', 'HorseAllow': 'TextEdit', 'MotorizedA': 'TextEdit', 'HikeDiffic': 'TextEdit', 'BikeDiffic': 'TextEdit', 'ADAAccessi': 'TextEdit', 'OwnerStewa': 'TextEdit', 'County': 'TextEdit', 'Recreation': 'TextEdit', 'SystemName': 'TextEdit', 'TransNetwo': 'TextEdit', 'Comments': 'TextEdit', 'DataSource': 'TextEdit', 'Unique_ID': 'TextEdit', 'created_us': 'TextEdit', 'created_da': 'DateTime', 'last_edite': 'TextEdit', 'last_edi_1': 'DateTime', 'SHAPE_Leng': 'TextEdit', });
lyr_trailheadparking_8.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'summercap': 'Range', 'wintercap': 'Range', 'hndicap': 'Range', });
lyr_openspace_1.set('fieldLabels', {'pk': 'inline label - visible with data', 'objectid': 'inline label - visible with data', 'bound3_': 'inline label - visible with data', 'bound3_id': 'inline label - visible with data', 'name': 'inline label - visible with data', 'lotnum': 'inline label - visible with data', 'code': 'inline label - visible with data', 'serial': 'inline label - visible with data', 'notes': 'inline label - visible with data', 'gisid': 'inline label - visible with data', 'subid': 'inline label - visible with data', 'lastupdate': 'inline label - visible with data', 'lasteditor': 'inline label - visible with data', 'shape_area': 'inline label - visible with data', 'shape_len': 'inline label - visible with data', 'objectid_1': 'inline label - visible with data', 'gisid_1': 'inline label - visible with data', 'account': 'inline label - visible with data', 'serial_1': 'inline label - visible with data', 'taxdist': 'inline label - visible with data', 'assessyr': 'inline label - visible with data', 'owner': 'inline label - visible with data', 'address1': 'inline label - visible with data', 'address2': 'inline label - visible with data', 'city': 'inline label - visible with data', 'state': 'inline label - visible with data', 'zip': 'inline label - visible with data', 'country': 'inline label - visible with data', 'taxval': 'inline label - visible with data', 'mrktvallnd': 'inline label - visible with data', 'mrktvalimp': 'inline label - visible with data', 'acres': 'inline label - visible with data', 'situs': 'inline label - visible with data', 'incareof': 'inline label - visible with data', 'totaltaxes': 'inline label - visible with data', });
lyr_Roads_2.set('fieldLabels', {'OBJECTID': 'inline label - visible with data', 'STREET': 'inline label - visible with data', 'S_JURIS': 'inline label - visible with data', 'OTHER_NAME': 'inline label - visible with data', 'CLASSIFICA': 'inline label - visible with data', 'FROMLEFT': 'inline label - visible with data', 'TOLEFT': 'inline label - visible with data', 'FROMRIGHT': 'inline label - visible with data', 'TORIGHT': 'inline label - visible with data', 'PREFIX_DIR': 'inline label - visible with data', 'CITY': 'inline label - visible with data', 'Zip': 'inline label - visible with data', 'Status': 'inline label - visible with data', 'DateAdded': 'inline label - visible with data', 'NAME': 'inline label - visible with data', 'POST_DIR': 'inline label - visible with data', 'SUFF_TYPE': 'inline label - visible with data', 'OneWay': 'inline label - visible with data', 'PRE_TYPE': 'inline label - visible with data', 'GISID': 'inline label - visible with data', 'JoinID': 'inline label - visible with data', 'Lcityrd': 'inline label - visible with data', 'Rcityrd': 'inline label - visible with data', 'Lzip': 'inline label - visible with data', 'Rzip': 'inline label - visible with data', 'side': 'inline label - visible with data', 'location': 'inline label - visible with data', 'lz_left': 'inline label - visible with data', 'lz_right': 'inline label - visible with data', 'la_left': 'inline label - visible with data', 'la_right': 'inline label - visible with data', 'fz_left': 'inline label - visible with data', 'fz_right': 'inline label - visible with data', 'fa_left': 'inline label - visible with data', 'fa_right': 'inline label - visible with data', 'ls_zone': 'inline label - visible with data', 'exclude': 'inline label - visible with data', 'Spillman_S': 'inline label - visible with data', 'ESN': 'inline label - visible with data', 'lr_right': 'inline label - visible with data', 'lr_left': 'inline label - visible with data', 'fr_right': 'inline label - visible with data', 'fr_left': 'inline label - visible with data', 'sde_DBO_Ce': 'inline label - visible with data', 'GlobalID': 'inline label - visible with data', 'RuleID': 'inline label - visible with data', 'ez_left': 'inline label - visible with data', 'ez_right': 'inline label - visible with data', 'ea_left': 'inline label - visible with data', 'ea_right': 'inline label - visible with data', 'er_right': 'inline label - visible with data', 'er_left': 'inline label - visible with data', 'Shape_len': 'inline label - visible with data', });
lyr_pinebrookextent_3.set('fieldLabels', {'fid': 'inline label - visible with data', 'cat': 'inline label - visible with data', 'id': 'inline label - visible with data', 'name': 'inline label - visible with data', });
lyr_Parcels_4.set('fieldLabels', {'OBJECTID': 'inline label - visible with data', 'BOUND3_': 'inline label - visible with data', 'BOUND3_ID': 'inline label - visible with data', 'NAME': 'inline label - visible with data', 'Lotnum': 'inline label - visible with data', 'CODE': 'inline label - visible with data', 'Serial': 'inline label - visible with data', 'Notes': 'inline label - visible with data', 'GISID': 'inline label - visible with data', 'SubID': 'inline label - visible with data', 'LASTUPDATE': 'inline label - visible with data', 'LASTEDITOR': 'inline label - visible with data', 'Shape_Length': 'inline label - visible with data', 'Shape_Area': 'inline label - visible with data', });
lyr_pinebrookTrails_5.set('fieldLabels', {'Name': 'inline label - visible with data', 'Surface': 'inline label - visible with data', 'Difficulty': 'inline label - visible with data', 'Status': 'inline label - visible with data', 'Descriptn': 'inline label - visible with data', 'Length': 'inline label - visible with data', });
lyr_mm_6.set('fieldLabels', {'Name': 'inline label - visible with data', 'Surface': 'inline label - visible with data', 'Difficulty': 'inline label - visible with data', 'Status': 'inline label - visible with data', 'Descriptn': 'inline label - visible with data', 'Length': 'inline label - visible with data', });
lyr_seperimeter_7.set('fieldLabels', {'OBJECTID': 'inline label - visible with data', 'PrimaryNam': 'inline label - visible with data', 'ID': 'inline label - visible with data', 'Status': 'inline label - visible with data', 'Designated': 'inline label - visible with data', 'SurfaceTyp': 'inline label - visible with data', 'Class': 'inline label - visible with data', 'CartoCode': 'inline label - visible with data', 'OtherRestr': 'inline label - visible with data', 'HorseAllow': 'inline label - visible with data', 'MotorizedA': 'inline label - visible with data', 'HikeDiffic': 'inline label - visible with data', 'BikeDiffic': 'inline label - visible with data', 'ADAAccessi': 'inline label - visible with data', 'OwnerStewa': 'inline label - visible with data', 'County': 'inline label - visible with data', 'Recreation': 'inline label - visible with data', 'SystemName': 'inline label - visible with data', 'TransNetwo': 'inline label - visible with data', 'Comments': 'inline label - visible with data', 'DataSource': 'inline label - visible with data', 'Unique_ID': 'inline label - visible with data', 'created_us': 'inline label - visible with data', 'created_da': 'inline label - visible with data', 'last_edite': 'inline label - visible with data', 'last_edi_1': 'inline label - visible with data', 'SHAPE_Leng': 'inline label - visible with data', });
lyr_trailheadparking_8.set('fieldLabels', {'id': 'inline label - visible with data', 'name': 'inline label - visible with data', 'summercap': 'inline label - visible with data', 'wintercap': 'inline label - visible with data', 'hndicap': 'inline label - visible with data', });
lyr_trailheadparking_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});