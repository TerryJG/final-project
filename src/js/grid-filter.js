// -*- coding: utf-8 -*-

var videoItems = document.querySelectorAll('.video-item');
var imageItems = document.querySelectorAll('.image-item');

var videoEditing = document.getElementById('video-editing');
videoEditing.addEventListener('click', function (event) { // whenever the user clicks on an element with id 'video-editing'...
    imageItems.forEach(function (image) { // start a for loop selecting each image with a variable name image...
        image.style.display = 'none'; // and set its display to none (hidden)
    });
    videoItems.forEach(function (video) {
        video.style.display = 'inline'; // set videos to inline (visible)
    });
});

var graphicDesign = document.getElementById('graphic-design');
graphicDesign.addEventListener('click', function (event) {
    videoItems.forEach(function (video) {
        video.style.display = 'none';
    });
    imageItems.forEach(function (image) {
        image.style.display = 'inline';
    });
});


var appleMusic = document.getElementById('apple-music');
appleMusic.addEventListener('click', function (event) {
    videoItems.forEach(function (video) {
        video.style.display = 'none';
    });
    imageItems.forEach(function (image) {
        image.style.display = 'none';
    });

    var appleMusicItems = document.querySelectorAll('.apple-music'); // get all elements with the class 'apple-music'

    appleMusicItems.forEach(function (item) { // start a for loop to display each item with class 'apple music'
        item.style.display = 'inline';
    });
});

var beholdTheLamb = document.getElementById('behold-the-lamb');
beholdTheLamb.addEventListener('click', function (event) {
    videoItems.forEach(function (video) {
        video.style.display = 'none';
    });
    imageItems.forEach(function (image) {
        image.style.display = 'none';
    });

    var beholdTheLambItems = document.querySelectorAll('.behold-the-lamb');

    beholdTheLambItems.forEach(function (item) {
        item.style.display = 'inline';
    });
});

var soundsOfAfrica = document.getElementById('sounds-of-africa');
soundsOfAfrica.addEventListener('click', function (event) {
    videoItems.forEach(function (video) {
        video.style.display = 'none';
    });
    imageItems.forEach(function (image) {
        image.style.display = 'none';
    });

    var soundsOfAfricaItems = document.querySelectorAll('.sounds-of-africa');

    soundsOfAfricaItems.forEach(function (item) {
        item.style.display = 'inline';
    });
});

var toastmasters = document.getElementById('toastmasters');
toastmasters.addEventListener('click', function (event) {
    videoItems.forEach(function (video) {
        video.style.display = 'none';
    });
    imageItems.forEach(function (image) {
        image.style.display = 'none';
    });

    var toastmastersItems = document.querySelectorAll('.toastmasters');

    toastmastersItems.forEach(function (item) {
        item.style.display = 'inline';
    });
});