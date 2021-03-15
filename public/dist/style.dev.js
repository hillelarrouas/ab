"use strict";

function ff(titel, text, typeError) {
  if (text == undefined && titel == undefined) {
    console.log('לא שלחת כלום');
  }

  if (text !== undefined && titel !== undefined) document.body.innerHTML += "\n    <div class=\"erroorr\">\n       <div class=\"whit100\">\n        <div class=\"carerror\">\n        <div class=\"cardimg\"></div>\n          <div class=\"texteror\"><b>".concat(titel, "</b></br>\n          <div style=\"padding: 10px 0;\">").concat(text, "</div>\n          <button class='buttonaupdet' onclick=\"reternbuttonaupdet()\">\u05E2\u05D3\u05DB\u05DF \u05D2\u05D9\u05E8\u05E1\u05D4</button>\n        </div>\n       </div>\n    </div>");
  $(".erroorr").css({
    "background-color": "rgba(184, 184, 184, 0.651)",
    "position": "fixed",
    "width": "100%",
    "height": "100vh",
    "top": "0",
    "left": "0",
    "z-index": "1000000000000000",
    "display": "flex",
    "justify-content": "center",
    "align-items": "center",
    "text-align": "center",
    "overflow": "hidden" // "display": "none",

  });
  $(".whit100").css({
    "width": "100%",
    "text-align": "center",
    "transition": "top 0.3s"
  });
  $(".carerror").css({
    "max-width": "400px",
    "width": "80%",
    "background-color": "red",
    "border-radius": "15px",
    "border": "1px solid gray",
    "font-size": "20px",
    "margin": "auto"
  });
  $(".carerror").css({
    "max-width": "450px",
    "width": "80%",
    "background-color": "#a6aebeb9",
    "border-radius": "15px",
    // "border": "3px solid gray",
    "font-size": "20px",
    "margin": "auto",
    "box-shadow": "2px 2px 8px 3px #aaaaaa, -2px -1px 8px 3px #aaaaaa"
  });
  $(".texteror").css({
    "padding": "10px"
  });
  $("b").css({
    "font-size": "25px",
    "color": "brown",
    "padding": "5px"
  });
  $(".buttonaupdet").css({
    "margin": "5px 0px 30px",
    "padding": "10px 20px",
    "font-size": "20px",
    "border-radius": "10px",
    "border": "1px solid grey",
    "outline": "none",
    "background": "#7b828f",
    "color": "white",
    "font-weight": "600",
    "cursor": "pointer"
  });
  $(".cardimg").css({
    "height": "95px"
  });
  $(".buttonaupdet").click(function () {
    $(".erroorr").css({
      "display": "none"
    });
  }); //         button:active {
  //             color: black;
  //             transition: color 0.3s;
  //         }
  //         button:hover {
  //             background: rgb(72, 122, 124);
  //             transition: color 0.3s;
  //         }
  // $(".buttonaupdet").hover(function () {
  //     $(this).css({
  //         "background": "rgb(72, 122, 124)",
  //         "transition": "color 0.3s"
  //     });
  // });
  //         img {
  //             margin: 10px;
  //             height: 80%;
  //         }
  //         button {
  //             margin: 5px 0px 30px;
  //             padding: 10px 20px;
  //             font-size: 20px;
  //             border-radius: 10px;
  //             border: 1px solid grey;
  //             font-family: var(--font-family);
  //             outline: none;
  //             background: cadetblue;
  //             color: white;
  //             font-weight: 600;
  //             cursor: pointer;
  //         }
  //         button:active {
  //             color: black;
  //             transition: color 0.3s;
  //         }
  //         button:hover {
  //             background: rgb(72, 122, 124);
  //             transition: color 0.3s;
  //         }
  //         .texteror {
  //             padding: 10px;
  //             b {
  //                 font-size: 25px;
  //                 color: brown;
  //                 padding: 5px;
  //             }
  //         }
  //     }
  // }
  // .imggifreturn {
  //     width: 30px;
  // }
  // `    
  //         <div class="cardimg"><img src="/img/Refresh.png" alt=""></div>
  //             <div style="padding: 10px 0;">גירסה חדשה זמינה לחץ כאן כדי לעדכן</div>
  //         </div>
  //         <button onclick='buttoneroor()'>עדכן גירסה</button>
  //     </div>
  // `
  // let r= document.querySelector('.cardmessag')
  // r.style.position= 'fixed'
  // r.style.top = '0'
}