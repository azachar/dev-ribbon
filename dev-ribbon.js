function devRibbon(str) {
    switch (true) {
      case /localhost/.test(str):
      case /.*\.dev$/.test(str):
      case /.*\.local$/.test(str):
        document.body.innerHTML += "<div style='position:fixed;padding:5px 45px;width:225px;z-index:16777271;background-color:#087c15;color:#fff;font-size:13px;font-family:sans-serif;text-decoration:none; font-weight:bold;-webkit-backface-visibility:hidden;border:2px dotted #fff;box-shadow:0 0 0 3px #087c15,0 0 20px -3px rgba(0,0,0,.5);text-shadow:0 0 0 #fff,0 0 5px rgba(0,0,0,.3);top:50px;right:-50px;-ms-transform:rotate(45deg);-moz-transform:rotate(45deg);-webkit-transform:rotate(45deg);transform: rotate(45deg);'>Development</div>"
        break;
      default:
        break;
    }
}

devRibbon(window.location.hostname);
