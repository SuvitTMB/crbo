var config = {
  apiKey: "AIzaSyDfTJJ425U4OY0xac6jdhtSxDeuJ-OF-lE",
  authDomain: "retailproject-6f4fc.firebaseapp.com",
  projectId: "retailproject-6f4fc",
  storageBucket: "retailproject-6f4fc.appspot.com",
  messagingSenderId: "653667385625",
  appId: "1:653667385625:web:a5aed08500de80839f0588",
  measurementId: "G-9SKTRHHSW9"
};

firebase.initializeApp(config);

var dataSrc = [];
var count =1;


//firebase.initializeApp(firebaseConfig);
//var db = firebase.firestore().collection("CheckProfile");

function loadData(callback){
  //var databaseRef = firebase.firestore().collection("CheckProfile");
  var db = firebase.firestore().collection("CheckProfile");

  //var table = $('#ex-table').DataTable();

  console.log("Loading data starts ...");


  db.orderBy('empID','asc').get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      var dataSet = [doc.data().empID, doc.data().empName, doc.data().empBr, doc.data().linename];
      dataSrc.push(dataSet);
      count++;
    });
  //});

/*
  db.on("child_added", function(data) {
     var storageObj = data.val();
    console.log("Loading data starts3 ...");
     var dataSet = [storageObj.empID, storageObj.empName, storageObj.empBr, storageObj.linename];
    

   //table.rows.add([dataSet]).draw(); 
    dataSrc.push(dataSet);
  
    console.log("dataSrc= "+dataSrc);
      
    console.log("Loading data..."+count);
      
    count++;
*/      
 //  $.holdReady( true );
//$('#ex-table').DataTable().clear().destroy();
  //    
  
console.log("Loading data ends ...");
    
     console.log("table initialization started ...");
        var dTable=$('#ex-table').DataTable({
          "bDestroy": true,    
          data: dataSrc,

       //   data: dataSrc,
          columns: [
                { title: "Department" },
                { title: "EmpId" },
                { title: "Name" },
                { title: "Position" }
            ],
          dom: 'lfrtipB', buttons: [ 
                    {
                          extend: 'copyHtml5',
                          title:  'Records'
                      },
                      {
                          extend: 'csvHtml5',
                          title:  'Records'
                      },
                      {
                          extend: 'excelHtml5',
                          title:  'Records'
                      },
                      {
                          extend: 'pdfHtml5',
                          title:  'Records'
                      },
                      'print'
                        ],
                 lengthMenu: [[5, 20, 50, -1], [5, 20, 50, "All"]]


          });

      console.log("table initialization ends ...");
    
 

  });
  
   if(callback){callback();}
}


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