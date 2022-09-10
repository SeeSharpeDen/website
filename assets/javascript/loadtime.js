window.onload = function() {
    var loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    console.log('Page load time is ' + loadTime / 1000);
    performanceDisplay = document.getElementById("performance-display") // get a reference to the paragraph

    if(loadTime < 1000)
    {
        performanceDisplay.innerText = `${loadTime } ms`; // put the value of the variable loadTime into the paragraph
    } else {
        performanceDisplay.innerText = `${loadTime / 1000} seconds`; // put the value of the variable loadTime into the paragraph`
    }
}