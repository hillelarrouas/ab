"use strict";

var radio;

function Typeradio(e) {
  $(".hoverflwh").css('height', 'auto');
  var Type = e.target.value;
  radio = Type;
  console.log(Type);
  fetch('/gettyperadio', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      Type: Type
    })
  }).then(function (res) {
    return res.json();
  }).then(function (deta) {
    $("#timeLength").val(deta.deta[0].timeLength);
    $("#cosher").val(deta.deta[0].cosher);
    $("#Tables").val(deta.deta[0].Tables);
    $("#baking").val(deta.deta[0].baking);
  });
}

$(document).ready(function () {
  $(".butoonsubmit").click(function () {
    var timeLength = $("#timeLength").val();
    var cosher = $("#cosher").val();
    var Tables = $("#Tables").val();
    var baking = $("#baking").val();

    if (radio === '') {
      $(".error").html('הזן סוג משמרת לשינויים');
    } else if (timeLength < 1 || timeLength > 18) {
      $(".error").html('הזן באורך הטיימר לפחות בין 1 ל 18');
    } else if (cosher.length === 0) {
      $(".error").html('הזן כשרות למשמרת');
    } else if (Tables.length === 0) {
      $(".error").html('הזן כמות סיבובים למשמרת');
    } else if (baking.length === 0) {
      $(".error").html('הזן סוג אפיה למשמרת');
    } else {
      fetch('/savetime', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          timeLength: timeLength,
          cosher: cosher,
          Tables: Tables,
          baking: baking,
          radio: radio
        })
      }).then(function (res) {
        return res.json();
      }).then(function (deta) {
        console.log(deta);
        $(".error").html("\u05D4\u05E9\u05D9\u05E0\u05D5\u05D9\u05D9\u05DD \u05DC\u05DE\u05E9\u05DE\u05E8\u05EA ".concat(radio, " \u05E0\u05E9\u05DE\u05E8\u05D5 \u05D1\u05D4\u05E6\u05DC\u05D7\u05D4"));
        setTimeout(function () {
          $(".error").html('');
        }, 3000);
      });
    }
  });
});