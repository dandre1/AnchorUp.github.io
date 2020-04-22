/*function timenow() {
    var dateObj = new Date();0
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    
    newdate = year + "/" + month + "/" + day;
    return newdate;
}

document.getElementById("current-date-text").innerHTML = timenow();  
document.getElementById("current-date-box").innerHTML = timenow(); 
*/

// Resize if the width changes 
old_width = window.innerWidth;
window.onresize = function() { 
    new_width = window.innerWidth;

    if(Math.abs(old_width - new_width) >= 10) {
        old_width = new_width;
        this.location.reload();
    }
}

/* Make the landing page the same height as its image */
document.getElementById("landing-page").style.height = document.getElementById("landing-image").clientHeight + "px";