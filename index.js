var iris = require('./data/iris.js')

var shortestDistance = Infinity;

/*
{sepelLength: 6.8,sepelWidth:3.2, pedalLength:5.9, pedealWidth: 2.3,class: `Iri's-virginica`},
{sepelLength: 5.8,sepelWidth:2.7, pedalLength:4.1, pedealWidth: 1.0,class: `Iris-versicolor`},
{sepelLength: 5.4,sepelWidth:3.9, pedalLength:1.7, pedealWidth: 0.4,class: `Iris-setosa`},
*/

var sepelLengthTest = 5.8
var sepelWidthTest = 2.7
var pedalLengthTest = 4.1
var pedealWidthTest = 1
var irisClass;

for (var i = 0; i < iris.irisData.length; i++){

    var sepelLengthCtrl = iris.irisData[i].sepelLength;
    var sepelWidthCtrl  = iris.irisData[i].sepelWidth;
    var pedalLengthCtrl = iris.irisData[i].pedalLength;
    var pedealWidthCtrl = iris.irisData[i].pedealWidth;

    var euclidianDistance = Math.pow(
    ((sepelLengthTest - sepelLengthCtrl) * (sepelLengthTest - sepelLengthCtrl) + 
    (sepelWidthTest - sepelWidthCtrl)   * (sepelWidthTest - sepelWidthCtrl) +
    (pedalLengthTest - pedalLengthCtrl) * (pedalLengthTest - pedalLengthCtrl) +
    (pedealWidthTest - pedealWidthCtrl) * (pedealWidthTest - pedealWidthCtrl)), 0.5)

    if (shortestDistance > euclidianDistance){
        shortestDistance = euclidianDistance;
        irisClass = iris.irisData[i].class;
    }
}



console.log(irisClass)
