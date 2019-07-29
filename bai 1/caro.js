var arr =[],
X_or_O = 0;
var boxes ;
var m=0,n=0;

var tbody = document.querySelector('#tbody');

//set up

function setUp(){
    n = document.getElementById("row").value;
    m = document.getElementById("column").value;
    for ( let i =0 ; i< n ; i++){

        var tr = document.createElement('tr');
        tr.setAttribute('class','row');
        for ( let k =0 ; k<n ;k ++){

            var td = document.createElement('td');
            td.setAttribute('class','cell');
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    
    }
    boxes = document.querySelectorAll('.cell');
    // boxes.forEach(function(a) {
    //     console.log("phong");
    // });


    //khai bao mang 2 chieu
    for ( let i =0 ; i < n;i++){
        arr.push([]);
    }
    for (var i = 0; i < n; i++)
    {
        for (var j =  0; j < n; j++)
        {
            arr[i].push(-1);
        }
    }
    
    

for(let i = 0; i < boxes.length; i++){
    boxes[i].onclick = function(){
        
        if(this.innerHTML !== "X" && this.innerHTML !== "O"){
            var row = Math.floor( i / n );
            var col = i % n;
            console.log(i +" " + n);
            arr[row][col] = X_or_O % 2;
        
        if(X_or_O%2 === 0){
           this.innerHTML = "X"; 
            getWinner(i);
           X_or_O += 1;
           
        }else{
           this.innerHTML = "O";
           getWinner(i);
           X_or_O += 1;  
        }
    }
    
    };
}

}
// m chua xai`
function getWinner(data){
    // var  ;   
    //kiem tra ngang
    console.log("data"+data);
    var row = Math.floor(data/n); 
    var col = data % n;
    console.log("this"+row+":"+col);
    var countNgang =0,
    countDoc=0,
    countCheo=0,
    countCheoNguoc=0;
        for ( let k = 0 ; k < n ; k++){          
            //so sanh ngang
            if (arr[row][k] == arr[row][col] ){
                countNgang++;
            }   
            else {
                countNgang=0;
            }           
            //so sanh doc
            if ( arr[row][col] == arr[k][col]){
                countDoc++;
            }
            else{
                countDoc = 0;
            }
            //so sanh cheo
            let cheo2 = 0;
            if (row-k >=0 && col-k >=0 ){
                if ( arr[row][col] == arr[row-k][col-k]){
                    cheo2++;
                }
                else{
                    cheo2--;
                }
            }
            else {
                cheo2--;
            }
            if ( row+k <n && col+k < n){
                if (  arr[row][col] == arr[row+k][col+k]  ){
                    cheo2++;
                }
                else{
                    cheo2--;
                }
            }
            else{
                cheo2 --;
            }
            if ( k==0){
                cheo2--;
            }

            switch(cheo2){
                case -2:
                    countCheo=0;
                    break;
                case -1:
                    break;
                case 0:
                    countCheo++;
                    break;
                case 1:
                    break;
                case 2:
                    countCheo+=2;
                    break;
                default:
                    break;
            }

             //so sanh cheo nguoc
            let cheo2Nguoc =0;
            if (row-k >=0 && col+k <0 ){
                if ( arr[row][col] == arr[row-k][col+k]){
                    cheo2Nguoc++;
                }
                else{
                    cheo2Nguoc--;
                }
            }
            else {
                cheo2Nguoc--;
            }
            if ( row+k <n && col-k >=0){
                if (  arr[row][col] == arr[row+k][col-k]  ){
                    cheo2Nguoc++;
                }
                else{
                    cheo2Nguoc--;
                }
            }
            else{
                cheo2Nguoc --;
            }
            if ( k==0){
                cheo2Nguoc--;
            }

            switch(cheo2Nguoc){
                case -2:
                    countCheoNguoc=0;
                    break;
                case -1:
                    break;
                case 0:
                    countCheoNguoc++;
                    break;
                case 1:
                    break;
                case 2:
                    countCheoNguoc+=2;
                    break;
                default:
                    break;
            }
            if ( countNgang== m || countDoc == m || countCheo ==m-1 || countCheoNguoc == m-1){
                alert((arr[row][col]==0 ? "X" : "O" ) + " is the winner <3");
                var c = document.querySelectorAll(".cell");
                [].forEach.call(c, function(c) {
                    c.innerHTML = '';
                  });
            }

        }
}





