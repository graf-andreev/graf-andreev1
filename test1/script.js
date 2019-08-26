
    document.getElementById("frame-slider").oninput = function() {
        myFunction()
    }
    function myFunction() {
       var val = document.getElementById("frame-slider").value
        document.getElementById('output').innerHTML = Math.abs(val-15)
    }

    var follower = document.getElementById('slider-follow');
    var follower_val = document.getElementById('slider-val');
    var slider = document.getElementById('frame-slider');
    
    var updateFollowerValue = function(val) {
      follower_val.innerHTML = val;
      follower.style.left = val + '%';
    };
    
    updateFollowerValue(slider.value);