// copyright 2014, mikedice417@hotmail.com
// This script contains the view model class for the image viewer
// View model is populated by the view controller class.

var ViewModel = (function(){

    var imageLinks;

    // public interface
    return {
        GetImageLinks: function(){
            return imageLinks;
        },
        SetImageLinks: function(newImageLinks){
            imageLinks = newImageLinks
       }
    };

}());
