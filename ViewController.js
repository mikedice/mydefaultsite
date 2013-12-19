// copyright 2014, mikedice417@hotmail.com
// This script populates/updates the view model
// and renders the page elements as new data arrives.

var ViewController = (function(){

    // public interface
    return {
        Initialize: function(){
            // Load static images for now
            ViewModel.SetImageLinks(["images/DSC_7212-86.jpg", "images/hilton%20waikaloa2.jpg"]);
            View.Initialize();
        }
    };
}());


// ViewController will load data, populate the model 
// and render the view  after the doc is loaded.
$(document).ready(function(){
    ViewController.Initialize();
});
