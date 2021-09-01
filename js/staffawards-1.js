//var sGetDate = "05/08/2021";
var sGetDate = "";
var data = "";
var str1 = "";
var LimitData = 10;

var firebaseConfig = {
    apiKey: "AIzaSyDfTJJ425U4OY0xac6jdhtSxDeuJ-OF-lE",
    authDomain: "retailproject-6f4fc.firebaseapp.com",
    projectId: "retailproject-6f4fc",
    storageBucket: "retailproject-6f4fc.appspot.com",
    messagingSenderId: "653667385625",
    appId: "1:653667385625:web:a5aed08500de80839f0588",
    measurementId: "G-9SKTRHHSW9"
};
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore().collection("users");


$(document).ready(function() {
    DropDownDisplay();
    LastData();
    //alert('<ul>'+str1+'</ul>');
    //getData(sGetDate);
} );


function LastData() {
    db.orderBy('GetDate','desc').limit(1).get().then((snapshot)=> {
      snapshot.forEach(doc=> {
        sGetDate = doc.data().GetDate;
        data = doc.data().memo;
        //$("#DisplayDate").html('Report Date : '+sGetDate);
        getData(sGetDate);
        //alert(sGetDate);
      });
    });
}



function getData(x) {
    db.where('GetDate','==',x).get().then((snapshot)=> {
      snapshot.forEach(doc=> {
        //$("#DisplayDate").html('Report Date : '+doc.data().GetDate);
        $("#DisplayDate").html('ประจำวันที่ : '+doc.data().GetDate);
        data = doc.data().memo;
        load();
      });
    });
}


//var table = document.querySelector(#example);
var table="";
var rowData = "";
function load() {
    //$("#DisplayDate").html('Report Date : '+sGetDate);
    //var data ='[{"Rank": 248,"Bank": "<img class=a src=./img/up.png>","Branch Name": "สาขาบางนา","Zone": "บางนา","Region": "RH1","Score": "81.08%"},{"Rank": 758,"Bank": "TBANK","Branch Name": "สาขาบิ๊กซี บางพลี","Zone": "บางนา","Region": "RH1","Score": "62.61%"},{"Rank": 641,"Bank": "TBANK","Branch Name": "สาขาบิ๊กซี บางนา","Zone": "บางนา","Region": "RH1","Score": "69.08%"},{"Rank": 645,"Bank": "TBANK","Branch Name": "สาขาวัน-โอ-วัน เดอะเทิร์ดเพลส","Zone": "บางนา","Region": "RH1","Score": "68.88%"},{"Rank": 537,"Bank": "TBANK","Branch Name": "สาขาบางนา-ตราด กม. 4","Zone": "บางนา","Region": "RH1","Score": "72.40%"},{"Rank": 349,"Bank": "TBANK","Branch Name": "สาขาถนนพัฒนาการ 22","Zone": "บางนา","Region": "RH1","Score": "78.32%"},{"Rank": 316,"Bank": "TBANK","Branch Name": "สาขามหาวิทยาลัยหัวเฉียวเฉลิมพระเกียรติ","Zone": "บางนา","Region": "RH1","Score": "79.10%"},{"Rank": 796,"Bank": "TBANK","Branch Name": "สาขาเซ็นทรัล บางนา","Zone": "บางนา","Region": "RH1","Score": "57.42%"},{"Rank": 681,"Bank": "TBANK","Branch Name": "สาขาเมืองใหม่-บางพลี","Zone": "บางนา","Region": "RH1","Score": "67.43%"},{"Rank": 495,"Bank": "<img class=a src=./img/down.png>","Branch Name": "สาขาปู่เจ้าสมิงพราย","Zone": "บางนา","Region": "RH1","Score": "73.78%"},{"Rank": 775,"Bank": "TBANK","Branch Name": "สาขามาร์เก็ตวิลเลจ สุวรรณภูมิ","Zone": "บางนา","Region": "RH1","Score": "60.39%"},{"Rank": 788,"Bank": "TBANK","Branch Name": "สำนักชิดลม","Zone": "ปทุมวัน","Region": "RH1","Score": "58.47%"},{"Rank": 453,"Bank": "TBANK","Branch Name": "สาขามาบุญครอง","Zone": "ปทุมวัน","Region": "RH1","Score": "75.15%"},{"Rank": 786,"Bank": "TBANK","Branch Name": "สาขาสยามพารากอน [T-Next]","Zone": "ปทุมวัน","Region": "RH1","Score": "59.15%"},{"Rank": 715,"Bank": "TBANK","Branch Name": "สาขาเซ็นทรัลเวิลด์","Zone": "ปทุมวัน","Region": "RH1","Score": "65.11%"}]';
    var mydata = JSON.parse(data);
    $('#example').DataTable( {

        pageLength :25,
        data: mydata,
        columns: [
            { data: "Rank", className: "txt-center" },
            { data: "Bank", className: "txt-center" },
            { data: "Branch Name" },
            { data: "Zone" },
            { data: "Region" },
            { data: "Score", className: "txt-right" }
        ],
        "bDestroy": true
    } );

    table = "";
    rowData="";
    table = $('#example').DataTable();
    $('#example tbody').on( 'click', 'tr', function () {
        rowData = table.row( this ).data();
        console.log(rowData);
        //alert(rowData.Zone);
        //table = "";
      // ... do something with `rowData`
    } );
/*
    $('#example tbody').on( 'click', 'tr', function () {
       // alert(data[idx.row][0]);
        alert($(this).children(":first").text());
        //console.log($(this).children(":first").text());
        $(this).toggleClass('selected');
    } );


    $('#button').click( function () {
        alert("Click-2");
        alert( table.rows('.selected').data().length +' row(s) selected' );
    } );
*/
/*
                $('#tmcustlist tbody').on( 'click', 'tr', function () {
                if ( $(this).hasClass('selected') ) {
                  $(this).removeClass('selected');
               }
                else {
                    table.$('tr.selected').removeClass('selected');
                    $(this).addClass('selected');
                }      
                var custid = (table.row(this).data());             
                var custString = custid.toString();
                var custidFix = custString.substr(0, custString.indexOf(','));
                 
                 
                 
                var link;
                link = 'marketreg.php?task=tm&id=' + custidFix;
                window.location = link;
                } );
*/


}



//var getJSON = 0;
function DropDownDisplay() {
    var i = 0;
    var str = '';
    db.orderBy('GetDate','desc')
    .limit(LimitData)
    .get().then((snapshot)=> {
      snapshot.forEach(doc=> {
        getDropDown(doc);
      });
    //alert(str1);
    $("#DisplayDropDown").html('<ul>'+str1+'</ul>');
    });
}



//var getJSON = "";
var iii = 0;
var myArray = [];

function getDropDown(doc) {
    myArray = JSON.parse(doc.data().memo);
    console.log(myArray);
    //if(iii==1) { Data=doc.data().memo; } 
    //else if(iii==2) { Data=doc.data().memo; }
    //else if(iii==3) { Data=doc.data().memo; }
    //else if(iii==4) { Data=doc.data().memo; }
    //getJSON = getJSON+1;
    //getJSON+(iii) = doc.data().memo;
    //str1 += "<li onclick='Linkweb('"+ doc.data().memo +"');'><a href='#'>ประจำวันที่ "+ doc.data().GetDate +"</a></li>";
    //str1 += '<li onclick="Linkweb('+ iii +')"><a href="#">ประจำวันที่ '+ doc.data().GetDate +'</a></li>';
    //str1 += "<li onclick='Linkweb("+ iii +")'><a href='#'>ประจำวันที่ "+ doc.data().GetDate +"</a></li>";
    str1 += "<li onclick='Linkweb(\""+ doc.data().GetDate +"\")'><a href='#'>ประจำวันที่ "+ doc.data().GetDate +"</a></li>";
    iii = iii+1;

    //str1 += '<li onclick="Linkweb("'+ doc.data().memo +'");"><a href="#">ประจำวันที่ '+ doc.data().GetDate +'</a></li>';
    //var ii = ii+1;
    //str1+='<li onclick="Linkweb('+ doc.data().memo +');"><a href="#">ประจำวันที่ '+ doc.data().GetDate +'</a></li>';
    //str1+='<li onclick="Linkweb('+sGetDate+')">'+sGetDate+'</li>';
    //str1+='<li onclick="Linkweb('+sGetDate+')">'+ii+'</li>';
}


function Linkweb(n) {


    //var data1 = myArray[n];
    //console.log(myArray[n]);

    //$('#example').empty();

    //$("#DisplayDropDown").html("");
    //document.getElementById("demo").innerHTML = data1;
    //alert(data1);
    //data = myArray[n];
    //alert(n);
    getData(n);
    //load();
    //alert(getJSON+n);
}