"use strict";

function init() {
  var day = reternday();
  fetch('/getdata', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      day: day
    })
  }).then(function (r) {
    return r.json();
  }).then(function (d) {
    document.body.style.display = 'block';
    deta = d.deta[0];
    seconds1 = deta.timeLength * 60 - 1;
    seconds2 = deta.timeLength * 60 - 1;
    RoundCounter = deta.Roundsonthetable;
    $(".textAmount").html(deta.baking);
    $(".textcosher").html(deta.cosher);
    $(".texttable").html("".concat(deta.Tables, " \u05E9\u05D5\u05DC\u05D7\u05E0\u05D5\u05EA"));
    $(".textnumtable").html(deta.Roundsonthetable);
    $(".day").html("\u05DE\u05E9\u05DE\u05E8\u05EA ".concat(deta.Type));
    $('.time1').html(deta.timeLength < 10 ? '0' + deta.timeLength + ':00' : deta.timeLength + ':00');
    $('.time2').html(deta.timeLength < 10 ? '0' + deta.timeLength + ':00' : deta.timeLength + ':00');
  });
}

var deta;
var seconds1 = 0;
var RoundCounter = 0;
var countdownTimer1;
$(document).ready(function () {
  $(".retern1").click(function () {
    if ($(".retern1").html() == 'הפעלה') {
      var timer2 = function timer2() {
        var days = Math.floor(seconds1 / 24 / 60 / 60);
        var hours1 = Math.floor(seconds1 - days * 86400);
        var hours = Math.floor(hours1 / 3600);
        var minutes1 = Math.floor(hours1 - hours * 3600);
        var minutes = Math.floor(minutes1 / 60);
        var remainingseconds1 = seconds1 % 60;
        $('.time1').html(pad(minutes) + ":" + pad(remainingseconds1));

        if (seconds1 == 119) {
          $("#music2subtlety").trigger('play');
        }

        if (seconds1 < 120) {
          $('.time1').css('color', 'red');
        }

        if (seconds1 < 117 && seconds1 > 100 || seconds1 < 30) {
          $("#music").trigger('play');
        }

        if (seconds1 <= 0) {
          $(".retern1").click();
        } else {
          seconds1--;
        }
      };

      $(".retern1").html('כיבוי');
      RoundCounter++;
      $(".textnumtable").html(RoundCounter);
      updating();
      countdownTimer1 = setInterval(timer2, 1000);
    } else {
      $(".retern1").html('הפעלה');
      seconds1 = deta.timeLength * 60 - 1;
      $('.time1').css('color', 'black');
      $('.time1').html(deta.timeLength < 10 ? '0' + deta.timeLength + ':00' : deta.timeLength + ':00');
      clearInterval(countdownTimer1); // countdownTimer1 = undefined
    }
  });
});
var seconds2 = 0;
var countdownTimer2;
$(document).ready(function () {
  $(".retern2").click(function () {
    if ($(".retern2").html() == 'הפעלה') {
      var timer2 = function timer2() {
        var days = Math.floor(seconds2 / 24 / 60 / 60);
        var hours2 = Math.floor(seconds2 - days * 86400);
        var hours = Math.floor(hours2 / 3600);
        var minutes2 = Math.floor(hours2 - hours * 3600);
        var minutes = Math.floor(minutes2 / 60);
        var remainingseconds2 = seconds2 % 60;
        $('.time2').html(pad(minutes) + ":" + pad(remainingseconds2));

        if (seconds2 == 119) {
          $("#music2subtlety").trigger('play');
        }

        if (seconds2 < 120) {
          $('.time2').css('color', 'red');
        }

        if (seconds2 < 117 && seconds2 > 100 || seconds2 < 30) {
          $("#music").trigger('play');
        }

        if (seconds2 <= 0) {
          $(".retern2").click();
        } else {
          seconds2--;
        }
      };

      $(".retern2").html('כיבוי');
      RoundCounter++;
      $(".textnumtable").html(RoundCounter);
      updating();
      countdownTimer2 = setInterval(timer2, 1000);
    } else {
      $(".retern2").html('הפעלה');
      seconds2 = deta.timeLength * 60 - 1;
      $('.time2').css('color', 'black');
      $('.time2').html(deta.timeLength < 10 ? '0' + deta.timeLength + ':00' : deta.timeLength + ':00');
      clearInterval(countdownTimer2);
    }
  });
});

function pad(n) {
  return n < 10 ? "0" + n : n;
}

function reternday() {
  var Datetime = new Date().getHours();

  if (Datetime >= 6 && Datetime < 12) {
    return 'בוקר';
  } else if (Datetime >= 12 && Datetime < 18) {
    return 'צהריים';
  } else if (Datetime >= 18 && Datetime < 23) {
    return 'ערב';
  } else if (Datetime >= 23 || Datetime >= 0 && Datetime < 6) {
    return 'לילה';
  }
}

function updating() {
  var day = reternday();
  RoundCounter;
  fetch('/oupdetRounds', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      day: day,
      RoundCounter: RoundCounter
    })
  }).then(function (r) {
    return r.json();
  }).then(function (d) {
    deta = d.deta[0];
    $(".textAmount").html(deta.baking);
    $(".textcosher").html(deta.cosher);
    $(".texttable").html("".concat(deta.Tables, " \u05E9\u05D5\u05DC\u05D7\u05E0\u05D5\u05EA"));
    $(".textnumtable").html(deta.Roundsonthetable);
    $(".day").html("\u05DE\u05E9\u05DE\u05E8\u05EA ".concat(deta.Type));
  });
}

function popupWindow(url, windowName, win, w, h) {
  var y = win.top.outerHeight / 2 + win.top.screenY - h / 2;
  var x = win.top.outerWidth / 2 + win.top.screenX - w / 2;
  return win.open(url, windowName, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=".concat(w, ", height=").concat(h, ", top=").concat(y, ", left=").concat(x));
}

document.onkeypress = function (evt) {
  evt = evt || window.event;
  var charCode = evt.keyCode || evt.which;
  var charStr = String.fromCharCode(charCode);

  if (charStr == 1) {
    $(".retern1").click();
  }

  if (charStr == 3) {
    $(".retern2").click();
  }
};

setInterval(function () {
  var day = reternday();

  if (day !== deta.Type) {
    updating();
  }
}, 5000);