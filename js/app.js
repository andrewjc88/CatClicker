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
    },
    saveCatData: function(currentCat, newCatName, newCatImgUrl, newCatClickCount) {
        // console.log(currentCat, newCatName, newCatImgUrl, newCatClickCount);
        model.cats[currentCat].name = (newCatName);
        model.cats[currentCat].imageUrl = (newCatImgUrl);
        model.cats[currentCat].clicks = (newCatClickCount);
        // console.log("save button was clicked!");
        listView.makeCatList();
        catView.drawCurrentCat(currentCat);
    }
};

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
    },
    listenForAdminClick: function(currentCat) {
        document.getElementById('adminBut').onclick = function() {
            adminView.showAdmin();
        };
    },
    listenForSaveClick: function(currentCat) {
        document.getElementById('saveButton').onclick = function() {
            var newCatName = document.getElementById('catNameId').value;
            var newCatImgUrl = document.getElementById('catImageUrlId').value;
            var newCatClickCount = document.getElementById('catImageClickCountId').value;

            model.saveCatData(currentCat, newCatName, newCatImgUrl, newCatClickCount);
            catView.drawCurrentCat(currentCat);
            listView.makeCatList();
        };
    },
    listenForCancelClick: function() {
        document.getElementById('cancelButton').onclick = function() {
            adminView.hideAdmin();
        };
    }
};
var listView = {
    makeCatList: function() {

        // Clear old list
        var listDiv = document.getElementById('catSelector');
        while (listDiv.firstChild) {
            listDiv.removeChild(listDiv.firstChild);
        };
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

        // Make variables for currentCat
        var catImageUrl = model.cats[currentCat].imageUrl;
        var catImageClickCount = model.cats[currentCat].clicks;

        // Make Dom Element for CurrentCat
        var catImageDiv = document.createElement('img');
        var catCountDiv = document.createElement('h2');

        // Make variables for dom elements
        var imgDiv = document.getElementById('catImage');
        var countDiv = document.getElementById('catCount');

        // Clear div
        while (imgDiv.firstChild) {
            imgDiv.removeChild(imgDiv.firstChild);
            countDiv.removeChild(countDiv.firstChild);
        };

        // Set cat image source url
        catImageDiv.setAttribute('src', catImageUrl);

        // Append Selected Cat Image
        countDiv.append(catImageClickCount);
        imgDiv.append(catImageDiv);

        // Run the image click listener in ocotpus (controller)
        octopus.listenForCatClick(currentCat);
        adminView.adminPanel(currentCat);
    }
};

var adminView = {

    adminPanel: function(currentCat) {
        // console.log(currentCat);

        // Make CurrentCat Variables
        var catName = model.cats[currentCat].name;
        var catImageUrl = model.cats[currentCat].imageUrl;
        var catImageClickCount = model.cats[currentCat].clicks;

        // Make Currenet Cat Dom Elements
        var domCatName = document.createElement('input');
        var domCatImgUrl = document.createElement('input');
        var domCatImgCount = document.createElement('input');
        var domSaveButt = document.createElement('input');
        var domCancelButt = document.createElement('input');

        // Make variables for parent dom element
        var adminViewNode = document.getElementById('adminView');

        // Clear old admin panel
        while (adminViewNode.firstChild) {
            adminViewNode.removeChild(adminViewNode.lastChild);
        };

        // Set node type attributes
        domCatName.setAttribute('type', 'text');
        domCatImgUrl.setAttribute('type', 'text');
        domCatImgCount.setAttribute('type', 'text');

        // Set node value attributes
        domCatName.setAttribute('value', catName);
        domCatImgUrl.setAttribute('value', catImageUrl);
        domCatImgCount.setAttribute('value', catImageClickCount);

        // Set node ID attributes
        domCatName.setAttribute('id', 'catNameId');
        domCatImgUrl.setAttribute('id', 'catImageUrlId');
        domCatImgCount.setAttribute('id', 'catImageClickCountId');

        // Set Save button attributes
        domSaveButt.setAttribute('type', 'button');
        domSaveButt.setAttribute('id', 'saveButton');
        domSaveButt.setAttribute('value', 'Save');
        domSaveButt.setAttribute('textContent', 'Save');

        // Set Cancel button attributes
        domCancelButt.setAttribute('type', 'button');
        domCancelButt.setAttribute('id', 'cancelButton');
        domCancelButt.setAttribute('value', 'Cancel');
        domCancelButt.setAttribute('textContent', 'Cancel');

        // Append current cat data to dom nodes.
        adminViewNode.append(domCatName);
        adminViewNode.append(domCatImgUrl);
        adminViewNode.append(domCatImgCount);
        adminViewNode.append(domSaveButt);
        adminViewNode.append(domCancelButt);

        // Hide admin view!
        //adminView.style.display = 'none';
        adminView.hideAdmin();

        // Make input field for number of clicks
        octopus.listenForAdminClick(currentCat);
        octopus.listenForSaveClick(currentCat);
        octopus.listenForCancelClick();

    },
    showAdmin: function() {
        var adminViewNode = document.getElementById('adminView');
        adminViewNode.style.display = 'block';
    },
    hideAdmin: function() {
        var adminViewNode = document.getElementById('adminView');
        adminViewNode.style.display = 'none';
    },
};

octopus.init();
