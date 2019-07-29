
var tbody = document.querySelector('#tbody');


//set up

function setUp(){
    n = document.getElementById("row").value;
    m = document.getElementById("column").value;



    

    for ( let i =0 ; i<= n ; i++){
        var tr = document.createElement('tr');
        tr.setAttribute('class','row');
        for ( let k =0 ; k<=m ;k ++){
            var td = document.createElement('td');
            if ( i==0){
                if ( k==0){
                td.innerHTML ="STT";
                }
                else{
                    td.innerHTML ='<input type="button" value="'+(k)+'" onclick=sortTable('+k+')>';
                }
            }
            else if ( k==0){
                td.innerHTML = i;
            }
            else{
            td.innerHTML= Math.floor(Math.random()*1000);
        }   
            td.setAttribute('class','cell');
            tr.appendChild(td);
            
        }
        tbody.appendChild(tr);
    
    }
    boxes = document.querySelectorAll('.cell');
    boxes.forEach(function(a) {
        console.log("phong");
    });


}


function sortTable(val) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("table");
    switching = true;
   
    while (switching) {
      
      switching = false;
      rows = table.rows;
     
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
       
        x = rows[i].getElementsByTagName("TD")[val];
        y = rows[i + 1].getElementsByTagName("TD")[val];
        if (Number(x.innerHTML) > Number(y.innerHTML)) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
      
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }
    