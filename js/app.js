$(function(){
    // Make that code strictly speaking //
    'use strict';

    // Cats Json //
    var model = {
        var cats = [
            {
                name: "Bill",
                clicks: "0",
                imageUrl: "img/Bill.jpg"
            },
            {
                name: "Frank",
                clicks: "0",
                imageUrl: "img/Frank.jpg"
            },
            {
                name: "George",
                clicks: "0",
                imageUrl: "img/George.jpg"
            },
            {
                name: "Little",
                clicks: "0",
                imageUrl: "img/Little.jpg"
            },
            {
                name: "Skittle",
                clicks: "0",
                imageUrl: "img/Skittle.jpg"
            },
            {
                name: "Scott",
                clicks: "0",
                imageUrl: "img/Scott.jpg"
            },
        ];
        init: function(){
            cat
        }
    };

    var octopus = {

        init: funciton(){
            model.init();
            listView.init();
            catViw.init();
        }
    };

    var listView = {
        init: function(){

        },
        var catSelector = document.getElementById("catSelector");

        var selectList = document.createElement("select");
        selectList.id = "mySelect";
        catSelector.appendChild(selectList);
        ilen = model.cats.length
        for (var i = 0, ; i < ilen; i++) {
            var option = document.createElement("option");
            option.value = moted.cats[i].name;
            option.text = model.cats[i].name;
            selectList.appendChild(option);
            // Make cat image display //
            if (option == active){
                console.log("something!");
            }
        };
    };

    var catView = {
        init: function(){

        }
    };
    octopus init();
});

// Display list for all Cats //




// var showCat = function(event) {
//     console.log("A CAT WAS CLICKED!");
//     // var image = Cats[i].imageUrl;
//     // var imageNode = document.createElement("img");
//     // document.body.appendChild(image);
//     // imageNode.append(image);
// };







// 
//
//
//
//
//
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
