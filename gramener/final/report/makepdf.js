var casper = require('casper').create({viewportSize:{width:1696,height:1200}});
var args = casper.cli.args;
var imgfile = (args[1] || Math.random().toString(36).slice(2))
casper.start(args[0], function() {
  this.wait(args[2], function(){
    this.captureSelector(imgfile, "slides");
  });
});
 
casper.run();
