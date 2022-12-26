function getOS() {
    var userAgent = window.navigator.userAgent,
        platform = window.navigator?.userAgentData?.platform || window.navigator.platform
  
    if (platform.includes("mac") != false) {
      return 'Mac OS';
    } else if (platform.includes("Win") != false) {
      console.log("Windows")
      return 'Windows';
    } else if (/Linux/.test(platform)) {
      console.log("Linux")
      return 'Linux';
    } else {
      return 'Phone'
    }
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
  }else{
      buttonDownload.textContent="Not Available On Device";
  }
}

