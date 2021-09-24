/*
var config = {
  apiKey: "AIzaSyDfTJJ425U4OY0xac6jdhtSxDeuJ-OF-lE",
  authDomain: "retailproject-6f4fc.firebaseapp.com",
  projectId: "retailproject-6f4fc",
  storageBucket: "retailproject-6f4fc.appspot.com",
  messagingSenderId: "653667385625",
  appId: "1:653667385625:web:a5aed08500de80839f0588",
  measurementId: "G-9SKTRHHSW9"
};
*/
var dataSrc = [];
var count = 0;
var sstatusconfirm = 2;
var _0x2223a8=_0x4a06;function _0x4a06(_0x58d05f,_0x37522b){var _0x51897b=_0x5189();return _0x4a06=function(_0x4a065c,_0x574a38){_0x4a065c=_0x4a065c-0xa6;var _0x5ad908=_0x51897b[_0x4a065c];return _0x5ad908;},_0x4a06(_0x58d05f,_0x37522b);}function _0x5189(){var _0x4c9d9a=['1193208OLbmRR','retailproject-6f4fc.firebaseapp.com','793537bcfEnc','1029280khHJRm','AIzaSyDfTJJ425U4OY0xac6jdhtSxDeuJ-OF-lE','3048VLbdVv','retailproject-6f4fc','653667385625','15090327YLbHCA','3241BeunWp','20392sIqUAD','retailproject-6f4fc.appspot.com','380qTLowL','1133772GbhIaw','G-9SKTRHHSW9'];_0x5189=function(){return _0x4c9d9a;};return _0x5189();}(function(_0xd95154,_0xe1abc4){var _0xb84bf7=_0x4a06,_0x110b75=_0xd95154();while(!![]){try{var _0x27bd57=-parseInt(_0xb84bf7(0xab))/0x1+-parseInt(_0xb84bf7(0xa9))/0x2+-parseInt(_0xb84bf7(0xa7))/0x3+-parseInt(_0xb84bf7(0xb3))/0x4*(-parseInt(_0xb84bf7(0xa6))/0x5)+parseInt(_0xb84bf7(0xae))/0x6*(parseInt(_0xb84bf7(0xb2))/0x7)+-parseInt(_0xb84bf7(0xac))/0x8+parseInt(_0xb84bf7(0xb1))/0x9;if(_0x27bd57===_0xe1abc4)break;else _0x110b75['push'](_0x110b75['shift']());}catch(_0x436a60){_0x110b75['push'](_0x110b75['shift']());}}}(_0x5189,0x624c6));var firebaseConfig={'apiKey':_0x2223a8(0xad),'authDomain':_0x2223a8(0xaa),'projectId':_0x2223a8(0xaf),'storageBucket':_0x2223a8(0xb4),'messagingSenderId':_0x2223a8(0xb0),'appId':'1:653667385625:web:a5aed08500de80839f0588','measurementId':_0x2223a8(0xa8)};
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore().collection("CheckProfile");


SelectMeunu();
//loadData();

function SelectMeunu() {
  var x = document.getElementById("ClickMenu").value;
  //if(x==null) {
  //  sstatusconfirm = 1;
  //} else {
  //  sstatusconfirm = x;
  //}
  //alert("Onload : " +sstatusconfirm);
  loadData(x);
  //document.getElementById("demo").innerHTML = "You selected: " + x;

}


//firebase.initializeApp(firebaseConfig);
//var db = firebase.firestore().collection("CheckProfile");
//function loadData(callback){

function loadData(x){
  //sstatusconfirm = 1;
  sstatusconfirm = x;
  alert(sstatusconfirm);
  //var table = $('#example').DataTable();
  //console.log("Loading data starts ...");
  db.where('statusconfirm','==',parseInt(sstatusconfirm))
  .orderBy('empID','asc').get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      var dataSet = ['<img src="'+ doc.data().empPicture +'" style="width:35px;height:35px;">', doc.data().linename, doc.data().empID, doc.data().empName, doc.data().empBr,  doc.data().statusconfirm, doc.id,doc.data().empPicture,doc.data().lineID];
      dataSrc.push(dataSet);
      count++;
    }); 
    //alert(count);
    console.log("Select : "+ sstatusconfirm +" | จำนวน "+ count + " ข้อมูล");

    document.getElementById('loading').style.display = 'none';
    document.getElementById('OpenData').style.display = 'block';
    var dTable=$('#ex-table').DataTable({
      "bDestroy": true,    
      data: dataSrc,
      columns: [
        { title: "รูป", className: "txt-center" },
        { title: "LINE Name" },
        { title: "รหัส", className: "txt-center" },
        { title: "ชื่อ-นามสกุล" },
        { title: "สังกัด" },
        { title: "Status", className: "txt-center" }
        ],
      dom: 'lfrtipB', buttons: [ 
          { extend: 'csvHtml5', title:  'Records'},
          { extend: 'csvHtml5', title:  'Records'},
          { extend: 'csvHtml5', title:  'Records'},
          { extend: 'csvHtml5', title:  'Records'},
          { extend: 'csvHtml5', title:  'Records'},
          { extend: 'csvHtml5', title:  'Records'},
          'print'
            ],
          lengthMenu: [[30, 50, 100, -1], [30, 50, 100, "All"]]
      });   

      $('#ex-table tbody').on( 'click', 'tr', function () {
        //alert(dTable.row( this ).data()[0]);
        //alert(dTable.row( this ).data()[3]);
        FindEmployee(dTable.row( this ).data()[8]);
        //EditMember(dTable.row( this ).data()[7], dTable.row( this ).data()[8]);
      } );
  });
   //if(callback){callback();}
}



var str1 = "";
var aDocID = "";
var aEmpLineID = "";
var aEmpID = "";
var aEmpName = "";
var aEmpImg = "";
var aEmpBR = "";
var aStatusConfirm = "";


function FindEmployee(id) {
	alert(id);
  Eid = "";
  aEmpLineID = "";
  aEmpID = "";
  aEmpName = "";
  aEmpImg = "";
  aEmpBR = "";
  aStatusConfirm = "";
  db.where('lineID','==',id).get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      Eid = doc.id;
      aEmpLineID = doc.data().lineID;
      aEmpID = doc.data().empID;
      aEmpName = doc.data().empName;
      aEmpBR = doc.data().empBr;
      aEmpImg = doc.data().empPicture;
      aStatusConfirm = doc.data().statusconfirm;
      ShowMember();
    });
  });  
}


function ShowMember() {
  //alert(a+"-"+b+"-"+c+"-"+d);
  str1 += '<div><div style="padding:10px;color:#000000;font-size:14px;font-weight:600;">ขอสิทธิ์เข้าใช้ระบบงาน</div>';
  str1 += '<div><img src="'+ aEmpImg +'" style="max-width:120px;"></div>';
  str1 += '<div style="padding:8px; font-weight: 600; color:#0056ff;">'+ aEmpID +'<br>'+ aEmpName +'<br>'+ aEmpBR +'</div>';
  if(aStatusConfirm==1) {
    str1 += '<div style="color:#15c809;">คุณได้รับอนุมัติแล้ว</div><div class="clr"></div>';
    str1 += '<div class="btn-t3" onclick="CancelRead()">ยกเลิกสิทธืิ์</div>';
  } else if(aStatusConfirm==9) {
    str1 += '<div style="color:#ff0000;">คุณไม่ได้รับอนุมัติ</div><div class="clr"></div>';
    str1 += '<div class="btn-t1" onclick="ConfirmRead()">อนุมัติสิทธิ์</div><div class="clr"></div>';
  } else if(aStatusConfirm==2) {
    str1 += '<div class="btn-t1" onclick="ConfirmRead()">อนุมัติ</div><div class="clr"></div>';
    str1 += '<div class="btn-t3" onclick="CancelRead()">ไม่อนุมัติ</div>';
  }
  str1 += '</div>';
  $("#DisplayMember").html(str1);
  str1 = "";
  document.getElementById("id01").style.display = "block";

}


function ConfirmRead() {
  var a1 = 1;
  db.doc(Eid).update({
      statusconfirm : parseInt(a1)
  });
  loadData();
  Eid = "";
  document.getElementById("id01").style.display = "none";
}


function CancelRead() {
  //alert("Cancel : "+aEmpLineID);
  var a1 = 9;
  db.doc(Eid).update({
      statusconfirm : parseInt(a1)
  });
  loadData();
  Eid = "";
  document.getElementById("id01").style.display = "none";
}


function CloseAll() {
  document.getElementById('id01').style.display='none';
}

/*
function 	downloadObjectAsJson(exportObj, exportName){
  
  var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href",     dataStr);
    downloadAnchorNode.setAttribute("download", exportName + ".json");
//    document.body.appendChild(downloadAnchorNode); // required for firefox
  var container = document.getElementById('container');
container.appendChild(downloadAnchorNode);
//    downloadAnchorNode.click();
//    downloadAnchorNode.remove();
 
}


document.addEventListener("DOMContentLoaded", function(event) {
  var NewFile = "records";
	loadData(downloadObjectAsJson(dataSrc, NewFile));
  
  
 // loadData(intializeDataTable);
   // var tableData = "["+dataSrc+"]";


    
  
  
  
    });

*/
