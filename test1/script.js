
    document.getElementById("frame-slider").oninput = function() {
        myFunction()
    }
    function myFunction() {
       var val = document.getElementById("frame-slider").value
        document.getElementById('output').innerHTML = Math.abs(val-15)
        document.getElementsByClassName('value').innerHTML = val
    }


    

   
