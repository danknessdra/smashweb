function getOS() {
    var userAgent = window.navigator.userAgent,
        platform = window.navigator?.userAgentData?.platform || window.navigator.platform
  
    if (platform.includes("Mac") !== -1) {
      return 'Mac OS';
    } else if (platform.includes("Win") !== -1) {
      return 'Windows';
    } else if (/Linux/.test(platform)) {
      return 'Linux';
    }  
    return null;
}

function changeDownloadButton(){
  os = getOS();
  buttonDownload = document.getElementById("buttonDownload");
  buttonDownload.textContent="Download for " + os;
  if(os == "Mac OS") {
      buttonDownload.setAttribute("href", "#")
      buttonDownload.setAttribute("download", "BrawlBackMac.zip")
  }
  else if(os == "Windows") {
      buttonDownload.setAttribute("href", "#")
      buttonDownload.setAttribute("download", "BrawlBackWindows.zip")
  }
  else if(os == "Linux") {
      buttonDownload.setAttribute("href", "#")
      buttonDownload.setAttribute("download", "BrawlBackLinux.png")
}
}

