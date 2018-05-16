/**
 * @file
 * Handles initialization events and declaration of global variables
 */

//Global Variables
var phpSDKMetaData;
var javaSDKMetaData;
var jsSDKMetaData;


/**
 * Control starts here. (Document.ready)
 */
$(function(){
    loadJS();
});

function loadJS() {
    $.getJSON('https://api.github.com/repos/2012ucp1430/lp2', function(data) {//Get Config From File
        loadConfigJS(data);
    });
}

function loadConfigJS(json){
    if (typeof json!="string") {
        jsSDKMetaData=json;
    } else {
        jsSDKMetaData=JSON.parse(json);
    }
    loadPHP();
}

function loadPHP() {
    $.getJSON('https://api.github.com/repos/2012ucp1430/lp1', function(data) {//Get Config From File
        loadConfigPHP(data);
    });
}

function loadConfigPHP(json){
    if (typeof json!="string") {
        phpSDKMetaData=json;
    } else {
        phpSDKMetaData=JSON.parse(json);
    }
    loadJava();
}

function loadJava() {
    $.getJSON('https://api.github.com/repos/2012ucp1430/landing.page', function(data) {//Get Config From File
        loadConfigJava(data);
    });
}
function loadConfigJava(json){
    if (typeof json!="string") {
        javaSDKMetaData=json;
    } else {
        javaSDKMetaData=JSON.parse(json);
    }
    init();
}

/**
 * Function that initializes execution - handlers, requests, UI
 */
function init(){
    console.log("init starts");
    updateCardFooters();
}

function updateCardFooters() {
    $('#java-footer').text('Last Updated at ' +  new Date(jsSDKMetaData.updated_at).toUTCString());
    $('#php-footer').text('Last Updated at ' + new Date(phpSDKMetaData.updated_at).toUTCString());
    $('#js-footer').text('Last Updated at ' + new Date(jsSDKMetaData.updated_at).toUTCString());
}

