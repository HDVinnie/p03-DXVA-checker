function injestMediainfo(mediainfo){

  // Extract file encoding settings
  var lines = mediainfo.split('\n');
  var passedObject = {};
  var codec;
  var level;
  var ref;
  var width;
  var hight;
  var colorSpace;
  var chromaSub;
  var bitDepth;
  var x264Settings; //might not exist
  var deblock; //might not exist
  var analyse; //might not exist
  var me; //might not exist
  var subme; //might not exist
  var psy; //might not exist
  var psy_rd; //might not exist
  var me_range; //might not exist
  var rc_lookahead; //might not exist
  var rc; //might not exist
  var qcomp; //might not exist
  var bframes; //might not exist
  var mbtree; //might not exist
  // run through array
  for (var i = 0; i < lines.length; i++) {
    // find codec
    if (/^Video/.test(lines[i])) {
      while (!codec){
        i++;
        if (/Format[ ]+ :\ /.test(lines[i])) {
          codec = lines[i].replace(/Format[ ]+ :\ /, "");
        }
      }
    }
  }

  for (var i = 0; i < lines.length; i++) {
    // find level
    if (/^Video/.test(lines[i])) {
      while (!level){
        i++;
        if (/Format\ profile[ ]+:\ /.test(lines[i])) {
          level = lines[i].replace(/Format\ profile[ ]+:\ /, "");
          if (/^High@L/.test(level)){
            level = level.replace(/^High@L/, "");
          }
        }
      }
    }
  }

  for (var i = 0; i < lines.length; i++) {
    // find ref
    if (/Format\ settings,\ ReFrames[ ]+:\ /.test(lines[i])) {
      ref = lines[i].match(/\d/g);
      ref = ref.join("");
    }
  }

  for (var i = 0; i < lines.length; i++) {
    // find width
    if (/Width[ ]+ :\ /.test(lines[i])) {
      width = lines[i].match(/\d/g);
      width = width.join("");
    }
  }

  for (var i = 0; i < lines.length; i++) {
    // find hight
    if (/Height[ ]+ :\ /.test(lines[i])) {
      hight = lines[i].match(/\d/g);
      hight = hight.join("");
    }
  }

  for (var i = 0; i < lines.length; i++) {
    // find color space
    if (/^Color\ space[ ]+ :\ /.test(lines[i])) {
      colorSpace = lines[i].replace(/^Color\ space[ ]+ :\ /, "");
    }
  }

  for (var i = 0; i < lines.length; i++) {
    // find chroma sub
    if (/^Chroma\ subsampling[ ]+ :\ /.test(lines[i])) {
      chromaSub = lines[i].replace(/^Chroma\ subsampling[ ]+ :\ /, "");
    }
  }

  for (var i = 0; i < lines.length; i++) {
    // find video section
    if (/^Video/.test(lines[i])) {
      while (!bitDepth){
        i++;
        if (/^Bit\ depth[ ]+ :\ /.test(lines[i])) {
          bitDepth = lines[i].match(/\d/g);
          bitDepth = bitDepth.join("");
        }
      }
    }
  }

  for (var i = 0; i < lines.length; i++) {
    if (/^Encoding\ settings[ ]+ :\ /.test(lines[i])) {
      // All x264 settings
      x264Settings = lines[i].replace(/^Encoding\ settings\ :\ /, "").split(" / ");
    }
  }

  if (!x264Settings) {
    x264Settings = "x264 settings not found";
  }

  if (x264Settings != "x264 settings not found"){
    for (var i = 0; i < x264Settings.length; i++) {
      if (/^deblock=/.test(x264Settings[i])) {
        deblock = x264Settings[i].replace(/^deblock=/, "");
      }
    }
    for (var i = 0; i < x264Settings.length; i++) {
      if (/^analyse=/.test(x264Settings[i])) {
        analyse = x264Settings[i].replace(/^analyse=/, "");
      }
    }
    for (var i = 0; i < x264Settings.length; i++) {
      if (/^me=/.test(x264Settings[i])) {
        me = x264Settings[i].replace(/^me=/, "");
      }
    }
    for (var i = 0; i < x264Settings.length; i++) {
      if (/^subme=/.test(x264Settings[i])) {
        subme = x264Settings[i].replace(/^subme=/, "");
      }
    }
    for (var i = 0; i < x264Settings.length; i++) {
      if (/^psy=/.test(x264Settings[i])) {
        psy = x264Settings[i].replace(/^psy=/, "");
      }
    }
    for (var i = 0; i < x264Settings.length; i++) {
      if (/^psy_rd=/.test(x264Settings[i])) {
        psy_rd = x264Settings[i].replace(/^psy_rd=/, "");
      }
    }
    for (var i = 0; i < x264Settings.length; i++) {
      if (/^me_range=/.test(x264Settings[i])) {
        me_range = x264Settings[i].replace(/^me_range=/, "");
      }
    }
    for (var i = 0; i < x264Settings.length; i++) {
      if (/^rc_lookahead=/.test(x264Settings[i])) {
        rc_lookahead = x264Settings[i].replace(/^rc_lookahead=/, "");
      }
    }
    for (var i = 0; i < x264Settings.length; i++) {
      if (/^rc=/.test(x264Settings[i])) {
        rc = x264Settings[i].replace(/^rc=/, "");
      }
    }
    for (var i = 0; i < x264Settings.length; i++) {
      if (/^qcomp=/.test(x264Settings[i])) {
        qcomp = x264Settings[i].replace(/^qcomp=/, "");
      }
    }
    for (var i = 0; i < x264Settings.length; i++) {
      if (/^bframes=/.test(x264Settings[i])) {
        bframes = x264Settings[i].replace(/^bframes=/, "");
      }
    }
    for (var i = 0; i < x264Settings.length; i++) {
      if (/^mbtree=/.test(x264Settings[i])) {
        mbtree = x264Settings[i].replace(/^mbtree=/, "");
      }
    }
  }

    passedObject["codec"] = codec;
    passedObject["level"] = level;
    passedObject["ref"] = ref,
    passedObject["width"] = width,
    passedObject["hight"] = hight,
    passedObject["colorSpace"] = colorSpace,
    passedObject["chromaSub"] = chromaSub,
    passedObject["bitDepth"] = bitDepth,
    passedObject["deblock"] = deblock,
    passedObject["analyse"] = analyse,
    passedObject["me"] = me,
    passedObject["subme"] = subme,
    passedObject["psy"] = psy,
    passedObject["psy_rd"] = psy_rd,
    passedObject["me_range"] = me_range,
    passedObject["rc_lookahead"] = rc_lookahead,
    passedObject["rc"] = rc,
    passedObject["qcomp"] = qcomp,
    passedObject["bframes"] = bframes,
    passedObject["mbtree"] = mbtree,
    passedObject["x264Settings"] = x264Settings

    sessionStorage['fileObject'] = JSON.stringify(passedObject);
    //sessionStorage.setItem('fileObject', JSON.stringify(passedObject));
};

function loadResults() {
  window.location = "results.html";
}

function parseResults() {
  var passedObject = JSON.parse(sessionStorage.fileObject);
  console.log(passedObject);
  if (passedObject["codec"] != "AVC") {
    document.getElementById("dxva").innerHTML += "Codec: must be AVC<br>";
  }
  if (passedObject["level"] > 4.1) {
    document.getElementById("dxva").innerHTML += "Level: must be 4.1 or less<br>";
  }
  else if (passedObject["level"] <= 4.1) {
    var compRef;
    if (passedObject["level"] == 4.1) {
      compRef = Math.floor( (32768) / ( Math.ceil( passedObject["width"] / 16 ) * Math.ceil( passedObject["height"] / 16 ) ) )
      if (passedObject["ref"] > compRef) {
        if (compRef != 0) {
          document.getElementById("dxva").innerHTML += "Ref: to high your ref should be " + compRef + " <br>";
        }
        else {
          document.getElementById("dxva").innerHTML += "Ref: Your video is to large to be stored at this level<br>";
        }
      }
    }
    if (passedObject["level"] == 4) {
      compRef = Math.floor( (32768) / ( Math.ceil( passedObject["width"] / 16 ) * Math.ceil( passedObject["height"] / 16 ) ) )
      if (passedObject["ref"] > compRef) {
        if (compRef != 0) {
          document.getElementById("dxva").innerHTML += "Ref: to high your ref should be " + compRef + " <br>";
        }
        else {
          document.getElementById("dxva").innerHTML += "Ref: Your video is to large to be stored at this level<br>";
        }
      }
    }
    if (passedObject["level"] == 3.2) {
      compRef = Math.floor( (20480) / ( Math.ceil( passedObject["width"] / 16 ) * Math.ceil( passedObject["height"] / 16 ) ) )
      if (passedObject["ref"] > compRef) {
        if (compRef != 0) {
          document.getElementById("dxva").innerHTML += "Ref: to high your ref should be " + compRef + " <br>";
        }
        else {
          document.getElementById("dxva").innerHTML += "Ref: Your video is to large to be stored at this level<br>";
        }
      }
    }
    if (passedObject["level"] == 3.1) {
      compRef = Math.floor( (18000) / ( Math.ceil( passedObject["width"] / 16 ) * Math.ceil( passedObject["height"] / 16 ) ) )
      if (passedObject["ref"] > compRef) {
        if (compRef != 0) {
          document.getElementById("dxva").innerHTML += "Ref: to high your ref should be " + compRef + " <br>";
        }
        else {
          document.getElementById("dxva").innerHTML += "Ref: Your video is to large to be stored at this level<br>";
        }
      }
    }
    else if (passedObject["level"] == 3) {
      compRef = Math.floor( (8100) / ( Math.ceil( passedObject["width"] / 16 ) * Math.ceil( passedObject["height"] / 16 ) ) )
      if (passedObject["ref"] > compRef) {
        if (compRef != 0) {
          document.getElementById("dxva").innerHTML += "Ref: to high your ref should be " + compRef + " <br>";
        }
        else {
          document.getElementById("dxva").innerHTML += "Ref: Your video is to large to be stored at this level<br>";
        }
      }
    }
    else if (passedObject["level"] == 2.2) {
      compRef = Math.floor( (8100) / ( Math.ceil( passedObject["width"] / 16 ) * Math.ceil( passedObject["height"] / 16 ) ) )
      if (passedObject["ref"] > compRef) {
        if (compRef != 0) {
          document.getElementById("dxva").innerHTML += "Ref: to high your ref should be " + compRef + " <br>";
        }
        else {
          document.getElementById("dxva").innerHTML += "Ref: Your video is to large to be stored at this level<br>";
        }
      }
    }
    else if (passedObject["level"] == 2.1) {
      compRef = Math.floor( (4752) / ( Math.ceil( passedObject["width"] / 16 ) * Math.ceil( passedObject["height"] / 16 ) ) )
      if (passedObject["ref"] > compRef) {
        if (compRef != 0) {
          document.getElementById("dxva").innerHTML += "Ref: to high your ref should be " + compRef + " <br>";
        }
        else {
          document.getElementById("dxva").innerHTML += "Ref: Your video is to large to be stored at this level<br>";
        }
      }
    }
    else if (passedObject["level"] == 2) {
      compRef = Math.floor( (2376) / ( Math.ceil( passedObject["width"] / 16 ) * Math.ceil( passedObject["hight"] / 16 ) ) )
      if (passedObject["ref"] > compRef) {
        if (compRef != 0) {
          document.getElementById("dxva").innerHTML += "Ref: to high your ref should be " + compRef + " <br>";
        }
        else {
          document.getElementById("dxva").innerHTML += "Ref: Your video is to large to be stored at this level<br";
        }
      }
    }
    else if (passedObject["level"] == 1.3) {
      compRef = Math.floor( (2376) / ( Math.ceil( passedObject["width"] / 16 ) * Math.ceil( passedObject["height"] / 16 ) ) )
      if (passedObject["ref"] > compRef) {
        if (compRef != 0) {
          document.getElementById("dxva").innerHTML += "Ref: to high your ref should be " + compRef + " <br>";
        }
        else {
          document.getElementById("dxva").innerHTML += "Ref: Your video is to large to be stored at this level<br>";
        }
      }
    }
    else if (passedObject["level"] == 1.2) {
      compRef = Math.floor( (2376) / ( Math.ceil( passedObject["width"] / 16 ) * Math.ceil( passedObject["height"] / 16 ) ) )
      if (passedObject["ref"] > compRef) {
        if (compRef != 0) {
          document.getElementById("dxva").innerHTML += "Ref: to high your ref should be " + compRef + " <br>";
        }
        else {
          document.getElementById("dxva").innerHTML += "Ref: Your video is to large to be stored at this level<br>";
        }
      }
    }
    else if (passedObject["level"] == 1.1) {
      compRef = Math.floor( (900) / ( Math.ceil( passedObject["width"] / 16 ) * Math.ceil( passedObject["height"] / 16 ) ) )
      if (passedObject["ref"] > compRef) {
        if (compRef != 0) {
          document.getElementById("dxva").innerHTML += "Ref: to high your ref should be " + compRef + " <br>";
        }
        else {
          document.getElementById("dxva").innerHTML += "Ref: Your video is to large to be stored at this level<br>";
        }
      }
    }
    else if (passedObject["level"] == 1) {
      compRef = Math.floor( (396) / ( Math.ceil( passedObject["width"] / 16 ) * Math.ceil( passedObject["height"] / 16 ) ) )
      if (passedObject["ref"] > compRef) {
        if (compRef != 0) {
          document.getElementById("dxva").innerHTML += "Ref: to high your ref should be " + compRef + " <br>";
        }
        else {
          document.getElementById("dxva").innerHTML += "Ref: Your video is to large to be stored at this level<br>";
        }
      }
    }
    if (passedObject["colorSpace"] != "YUV") {
      document.getElementById("dxva").innerHTML += "ColorSpace: must be YUV<br>";
    }
    if (passedObject["chromaSub"] != "4:2:0") {
      document.getElementById("dxva").innerHTML += "Chroma subsampling: must be 4:2:0<br>";
    }
    if (passedObject["bitDepth"] != 8) {
      document.getElementById("dxva").innerHTML += "BitDepth: must be 8<br>";
    }
    if (document.getElementById("dxva").innerHTML == "") {
      document.getElementById("dxva").innerHTML += "File passes all DXVA checks<br>";
    }

    if (passedObject["x264Settings"] == "x264 settings not found") {
      document.getElementById("x264").innerHTML = "This is not an x264 file, I have no input";
    }
    else {
      document.getElementById("x264").innerHTML = "This x264 parser assumes the user used preset veryslow or placebo and wants input about typical settings that improve video fidelity.<br><br>"
      if (passedObject["deblock"] != "1:-3:-3") {
        document.getElementById("x264").innerHTML += "Deblock: ";
        document.getElementById("x264").innerHTML += passedObject["deblock"];
        document.getElementById("x264").innerHTML += "<br>The recomended value is 1:-3:-3, values greater than 0 should never be used.<br><br>";
      }
      if (passedObject["analyse"] != "0x3:0x133") {
        document.getElementById("x264").innerHTML += "Analyse: ";
        document.getElementById("x264").innerHTML += passedObject["analyse"];
        document.getElementById("x264").innerHTML += "<br>The recomended value is 0x3:0x133, this is set with partitions = all.<br><br>";
      }
      if (passedObject["me"] != "umh" || passedObject["me"] != "tesa") {
        document.getElementById("x264").innerHTML += "Me: ";
        document.getElementById("x264").innerHTML += passedObject["me"];
        document.getElementById("x264").innerHTML += "<br>The recomended value is umh, if you have a great CPU or need every bit to count use tesa. Never use esa.<br><br>";
      }
      if (passedObject["me_range"] < 24) {
        document.getElementById("x264").innerHTML += "Me_Range: ";
        document.getElementById("x264").innerHTML += passedObject["me_range"];
        document.getElementById("x264").innerHTML += "<br>This value is dependent on the video resolution, a larger value is needed for larger video resolutions. In a general sense for 720p 24 is the minimum and 48 is the max, 1080p 32 is the minimum and 64 is the max, 2016p 48 is the minimum and 64 is the max.<br><br>";
      }
      if (passedObject["psy"] != 1) {
        document.getElementById("x264").innerHTML += "Psy: ";
        document.getElementById("x264").innerHTML += passedObject["psy"];
        document.getElementById("x264").innerHTML += "<br>This should be turned on and the value should be set to 1 for the variable setting if you don't understand what it does.<br><br>";
      }
      if (passedObject["psy_rd"]) {
        document.getElementById("x264").innerHTML += "Psy_rd: ";
        document.getElementById("x264").innerHTML += passedObject["psy_rd"];
        document.getElementById("x264").innerHTML += "<br>This setting is impossible to recommend a good setting for, in general the minimum is .4:0.0 and the max is 1.2:0.2. If you don't understand what it's doing leave it at 1:0.0.<br><br>";
      }
      if (passedObject["subme"] <= 9 || passedObject["subme"] == 11) {
        document.getElementById("x264").innerHTML += "SubMe: ";
        document.getElementById("x264").innerHTML += passedObject["subme"];
        document.getElementById("x264").innerHTML += "<br>This should be set to 10, 11 does nothing.<br><br>";
      }
      if (passedObject["rc_lookahead"] != 250) {
        document.getElementById("x264").innerHTML += "Rc_Lookahead: ";
        document.getElementById("x264").innerHTML += passedObject["rc_lookahead"];
        document.getElementById("x264").innerHTML += "<br>This should be set to 250. Unless you are encoding 2160p then set it as high as your ram allows.<br><br>";
      }
      if (passedObject["rc"] != "crf") {
        document.getElementById("x264").innerHTML += "Rc: ";
        document.getElementById("x264").innerHTML += passedObject["rc"];
        document.getElementById("x264").innerHTML += "<br>2pass artificially limits the peak bitrate of the encode and also adds ~20% to the encode time. Testing a crf value is best. Do not use anything other than 2pass or crf.<br><br>";
      }
      if (passedObject["qcomp"] < .6 || passedObject["qcomp"] > .8) {
        document.getElementById("x264").innerHTML += "Qcomp: ";
        document.getElementById("x264").innerHTML += passedObject["qcomp"];
        document.getElementById("x264").innerHTML += "<br>Qcomp sets the amout of variablity allowed in the bitrate over time. 0 sets it to no limits and 1 sets it to constant bitrate. In theory you should try to keep it within the range of .6-.8 unless you understand how it interacts with other settings.<br><br>";
      }
      if (passedObject["bframes"] != 16) {
        document.getElementById("x264").innerHTML += "Bframes: ";
        document.getElementById("x264").innerHTML += passedObject["bframes"];
        document.getElementById("x264").innerHTML += "<br>Set this to 16 if you care about getting as much compression as possible. Else set it to 9, the difference in encode speed is under 3%.<br><br>";
      }
      if (passedObject["mbtree"] != 0) {
        document.getElementById("x264").innerHTML += "Mbtree: ";
        document.getElementById("x264").innerHTML += passedObject["mbtree"];
        document.getElementById("x264").innerHTML += "<br>Turn this off unless you know what you're doing.<br><br>";
      }
    }
  }
  
}

function update() {
  var mediainfo = document.getElementById("mediainfo").value;
  injestMediainfo(mediainfo);
};
