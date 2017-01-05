import {
    getUrl
} from './map.js';
import {
    getFLayersA
} from './map.js';
import {
    getMLayersA
} from './map.js';
import {
    setFLayersA
} from './map.js';
import {
    setMLayersA
} from './map.js';
import {
    addSingleLayerToMap
} from './map.js';
// import {createMapserverLayer} from './mapservice.js';
// import {createFeatureLayer} from './featureservice.js';

export function filter(layerId, featureName1, operatorName1, checkWaarde1) {

    var url = getUrl();
    var featureLayersArray = getFLayersA();
    var mapLayersArray = getMLayersA();
    var imageSource = mapLayersArray[0].getSource();

    var layerDefString = layerDefFilter(featureName1, checkWaarde1, layerId);

    imageSource.updateParams({
        'layerDefs': layerDefString
    });

    //// featureservice filter
    // var vectorSource = mapLayersArray[0].getSource();
    // var features = vectorSource.getFeatures();
    // var filtered = features.filter(function(feature) {
    //     //console.log(feature.values_);
    //     return feature.values_[featureName1] == checkWaarde1;
    // });
    // vectorSource.clear();
    // var length = filtered.length;
    // for (var i = 0; i < length; i++) {
    //     vectorSource.addFeature(filtered[i])
    // }

}

function layerDefFilter(featureName1,checkWaarde1,layerId) {
  var s = '{"show:'+layerId+'": "'+featureName1+'=\''+checkWaarde1+'\'"}';
  return s;
}
