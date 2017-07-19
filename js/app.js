// Strictly Speaking //
'use strict';

var model = {
    cats: [],
    init: function(){
        this.cats = [
            {
                name: "Bill",
                clicks: 0,
                imageUrl: "img/Bill.jpg"
            },
            {
                name: "Frank",
                clicks: 0,
                imageUrl: "img/Frank.jpg"
            },
            {
                name: "George",
                clicks: 0,
                imageUrl: "img/George.jpg"
            },
            {
                name: "Little",
                clicks: 0,
                imageUrl: "img/Little.jpg"
            },
            {
                name: "Skittle",
                clicks: 0,
                imageUrl: "img/Skittle.jpg"
            },
            {
                name: "Scott",
                clicks: 0,
                imageUrl: "img/Scott.jpg"
            }
        ];
    },

    addClick: function(currentCat) {
        model.cats[currentCat].clicks++;
    }
};

// Controller
var octopus = {
    init: function() {
        model.init();
        listView.makeCatList();
    },

    listenForListClick: function() {
        var list = document.getElementById('catSelector');
        var catLI = catSelector.children;
        var ilen = catLI.length;
        for (var i = 0; i < ilen; i++) {
            (function(currentCat) {
                catLI[currentCat].addEventListener('click', function() {
                    // Draws the currnet cat and cat count
                    catView.drawCurrentCat(currentCat);
                })
            })(i);
        }
    },

    listenForCatClick: function(currentCat) {
        document.getElementById('catImage').onclick = function() {
            model.addClick(currentCat);
            catView.drawCurrentCat(currentCat);
        };
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

        };
    octopus.listenForListClick();
    }
};

var catView = {
    drawCurrentCat: function(currentCat){
        //console.log("You selected a Cat " + currentCat);

        // Make cat image url element
        var catImageUrl = model.cats[currentCat].imageUrl;

        // Make cat click count element
        var catImageClickCount = model.cats[currentCat].clicks;

        // Make Dom Element for image
        var catImageDiv = document.createElement('img');
        // Make Dom Element for Count indicator
        var catCountDiv = document.createElement('h2');

        var imgDiv = document.getElementById('catImage');

        var countDiv = document.getElementById('catCount');

        // Clear div
        while (imgDiv.firstChild) {
            imgDiv.removeChild(imgDiv.firstChild);
            countDiv.removeChild(countDiv.firstChild);
        };

        // Set cat image source url
        catImageDiv.setAttribute('src', catImageUrl);

        // Set cat cat count
        // catCountDiv.textContent(catImageClickCount);

        // Append Selected Cat Image
        countDiv.append(catImageClickCount);

        // Append Selected Cat Image
        imgDiv.append(catImageDiv);

        // Run the image click
        octopus.listenForCatClick(currentCat);
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
