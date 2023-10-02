'use strict';

const fs = require("fs");
const path = require("path")

const distDir = path.resolve(process.cwd() + "/dist/") + "/";  // Resolve removes trailing slash

// ember-cli-favicon's path config modifies the html, but not the location of the files
// its onSuccess also fires too early, as the files still get moved around afterwards
// this in-repo-addon is a solution for it

function isFaviconFile(filename) {
  const faviconSigns = [
    "android", "apple", "browserconfig.xml", "coast", "favicon", "firefox", "manifest", "mstile", "yandex"
  ]
  for (let i = 0; i < faviconSigns.length; i++) {
    if (filename.toLowerCase().includes(faviconSigns[i])) {
      return true;
    }
  }
  return false;
}


module.exports = {
  name: require('./package').name,

  postBuild: (results) => {
    let files = fs.readdirSync(distDir).filter(isFaviconFile);
    files.forEach((file) => {
      console.log(distDir + file, distDir + "assets/" + file)
      fs.rename(distDir + file, distDir + "assets/images/" + file, (err)=> {
        console.log(err)
      })
      //fs.renameSync(file, "")
    })
  }
};
