// copyright 2014, mikedice417@hotmail.com
// This script is responsible for rendering the data in the 
// ViewModel using jQuery/Dhtml

var View = (function(){
   
   currentIndex = 0;

   function onNextImageButtonClick()
   {
        var imageLinks = ViewModel.GetImageLinks();
        if (currentIndex + 1 < imageLinks.length)
        {
            currentIndex++;
        }
        else
        {
            currentIndex = 0;
        }
        
        var imageLink = imageLinks[currentIndex];
        $("#mainImage").attr("src",ViewModel.GetImageLinks()[currentIndex]);        

   }; 

    // public interface
    return {

        // View.Initialize is called by the ViewController after the controller is
        // initialized, has loaded its data and is ready to render a view on the data.
        Initialize: function(){
            // hook up event handlers for UI elements
            $("#nextImageButton").click(onNextImageButtonClick);

            // render elements
            $("#mainImage").attr("src",ViewModel.GetImageLinks()[currentIndex]);
        }
    };

}());




