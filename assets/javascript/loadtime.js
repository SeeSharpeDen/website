window.onload = function() {
    var loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    console.log('Page load time is ' + loadTime / 1000);
    performanceDisplay = document.getElementById("performance-display") // get a reference to the paragraph
    performanceDisplay.innerText = loadTime / 1000 // put the value of the variable loadTime into the paragraph
}