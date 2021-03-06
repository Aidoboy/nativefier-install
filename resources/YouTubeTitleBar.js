var script = document.createElement('script');
script.type = 'text/javascript';
script.src = "https://cdn.rawgit.com/Zren/ResizeYoutubePlayerToWindowSize/035b192e/153699.user.js";
var head = document.getElementsByTagName('head')[0];
if(head) head.appendChild(script);

console.log("HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello");
document.getElementById("end").append(document.createElement('div'));
document.getElementById("end").lastChild.id = "title-bar-btns";
document.getElementById("title-bar-btns").append(document.createElement('div'));
document.getElementById("title-bar-btns").lastChild.id = "min-btn";
document.getElementById("title-bar-btns").append(document.createElement('div'));
document.getElementById("title-bar-btns").lastChild.id = "max-btn";
document.getElementById("title-bar-btns").append(document.createElement('div'));
document.getElementById("title-bar-btns").lastChild.id = "close-btn";
document.getElementById("min-btn").append("-");
document.getElementById("max-btn").append("+");
document.getElementById("close-btn").append("X");

(function () {
    
    //var remote = require('electron').remote;
    const {BrowserWindow} = require('electron').remote;
    const activeWindow = BrowserWindow.getFocusedWindow();
    
    function init() { 
        document.getElementById("min-btn").addEventListener("click", function (e) {
            //var window = BrowserWindow.getFocusedWindow();
            activeWindow.minimize(); 
        });
	
        document.getElementById("max-btn").addEventListener("click", function (e) {
            //var window = BrowserWindow.getFocusedWindow();
	    if(activeWindow.isMaximized()){
		activeWindow.unmaximize(); 
	    }else{
		activeWindow.maximize(); 
	    }
        });
	
        document.getElementById("close-btn").addEventListener("click", function (e) {
            //var window = BrowserWindow.getFocusedWindow();
            activeWindow.close();
        }); 
    }; 
    
    document.onreadystatechange = function () {
        if (document.readyState == "complete") {
            init(); 
        }
    };
    
})();
