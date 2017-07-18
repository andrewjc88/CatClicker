// Strictly Speaking //
// 'use strict';

var model = {
    cats: [],
    init: function(){
        this.cats = [
            {
                index: 1,
                name: "Bill",
                clicks: "0",
                imageUrl: "img/Bill.jpg"
            },
            {
                index: 2,
                name: "Frank",
                clicks: "0",
                imageUrl: "img/Frank.jpg"
            },
            {
                index: 3,
                name: "George",
                clicks: "0",
                imageUrl: "img/George.jpg"
            },
            {
                index: 4,
                name: "Little",
                clicks: "0",
                imageUrl: "img/Little.jpg"
            },
            {
                index: 5,
                name: "Skittle",
                clicks: "0",
                imageUrl: "img/Skittle.jpg"
            },
            {
                index: 6,
                name: "Scott",
                clicks: "0",
                imageUrl: "img/Scott.jpg"
            }
        ];
    }
};

// Controller
var octopus = {
    init: function() {
        model.init();
        listView.makeCatList();
        octopus.listenForListClick();
        octopus.listenForListClick();
    },

    listenForListClick: function() {

        var list = document.getElementById('catSelector');
        var catLI = catSelector.children;
        var ilen = catLI.length;

        for (var i = 0; i < ilen; i++) {
            (function(currentCat) {
                catLI[currentCat].addEventListener('click', function() {
                    catView.drawCurrentCat(currentCat);
                    octopus.listenForCatClick(currentCat)
                })
            })(i);
        }

    },
    listenForCatClick: function(currentCat) {
        currentCat.addEventListener('click', (function(numCopy) {
            selectedCat.clicks++;
        }));
    }
};

var listView = {
    makeCatList: function() {
        var ilen = model.cats.length;
        for (var i = 0; i < ilen; i++) {

            // Make dom element
            var listItem = document.createElement('li');

            // Set dome element to cat name
            listItem.textContent = model.cats[i].name;

            // append cat name to document body.
            document.getElementById('catSelector').append(listItem);

            // // add index ID to li
            // listItem.id = i;

        };
    }
};

var catView = {
    drawCurrentCat: function(currentCat){
        // console.log("You selected a Cat!" + index);

        // Make Dom Element
        var catImageDiv = document.createElement('div');

        // Set
        // var image = Cats[i].imageUrl;
        // var imageNode = document.createElement("img");
        // document.body.appendChild(image);
        // imageNode.append(image);
    }
};
octopus.init();










// WTF WAS I THINKING?
//     // Click listener that displays initial cat image
//     name.addEventListener('click', (function(){
//     document.getElementById('catIDImage1').onclick = function()
//         var imageNode = document.createElement("img");
//         document.body.appendChild(imageNode);
//         imageNode.append(image);
//     }))
// };
//
// // Display cat that is selected //
// document.getElementById('catIDImage1').onclick = function() {
//     catCounter1++;
//     document.getElementById('clickNum1').innerHTML = catCounter1;
// }
// // Increment clicks on cat image click //
//
// // Cat Object Creator //
//
// var CatCreator = function(cat) {
//     this.name = cat.name || undefined;
//     this.clicks = cat.clicks || 0;
//     this.imageUrl = cat.imageUrl || undefined;
// };
//
// // Post cat to page & increment //
// CatCreator.prototype.increment = function () {
//     this.clicks++;
// }
//
//
// // Construct Cats Obs //
// var catObjs = [];
// for (var i = 0, iLen = Cats.length; i > iLen; i++) {
//     catObjs.push(new CatCreator(Cats[i]));
// };
//
// for (var i = 0, ilen = Cats.length; i < ilen; i++) {
//     document.body.appendChild(name);
//     document.body.appendChild(imageUrl);
//     document.body.appendChild(clicks);
// };
//
// for (var i = 0, ilen = Cats.length; i < ilen; i++) {
//
//     // This is the number we are on...
//     var cat = Cats.[i];
//
//     // Makes new dome element for the number we are on
//     var catNode = document.createElement('option');
//     catNode.textContent = cat;
//
//
//     // Increment clicks on clicks
//     catNode.addEventListener('click', (function(catCopy) {
//         return function() {
//             var newclicks = cat.clicks++;
//             console.log(cat.clicks);
//         }
//     })(index));
//
//
//     document.getElementById('catIDImage1').onclick = function() {
//         catCounter1++;
//         document.getElementById('clickNum1').innerHTML = catCounter1;
//     }
// };
