// https://stackoverflow.com/questions/3450593/how-do-i-clear-the-content-of-a-div-using-javascript




function get_Input(table_id){
    var table_value, max_column, min_row, max_row;
    // min_column = document.getElementById('table_min_column').value;
   
    // max_column = document.getElementById('table_max_column').value;
    // min_row = document.getElementById('table_min_row').value;
    // max_row = document.getElementById('table_max_row').value;
    // console.log(min_column);
    // console.log(max_column);
    // console.log(min_row);
    // console.log(max_row);
    table_value = document.getElementById(table_id).value;
    return table_value;
}

function generate_Table(){
    var min_column = get_Input('table_min_column');
    var max_column = get_Input('table_max_column');
    var min_row = get_Input('table_min_row');
    var max_row = get_Input('table_max_row');
    // console.log(min_column);
    // console.log(max_column);
    // console.log(min_row);
    max_row = Number(max_row);
    max_column = Number(max_column);
    min_row = Number(min_row);
    min_column = Number(min_column);

    // max_row+=2;
    // max_column+=2;
    // console.log(max_row);
    // console.log(max_column);
    addTable(min_column, max_column, min_row, max_row);
}

// function generate_row(){
//     // var msg = "<tr> <th> 1 </th> </tr>";
//     document.body.innerHTML += "<tr> <th> 1 </th> "; 
// }

// function generate_column(){
//     var elem_th = document.createElement('th');
// }


// generate_row();
// generate_row();

function addTable(min_column, max_column, min_row, max_row) {

  var div = document.getElementById('mult-table');
    while(div.firstChild){
      div.removeChild(div.firstChild);
    }

    // var dummy = min_row;
    // var dummy2 = min_column;
    var dummy = min_column;
    var dummy2 = min_row;
    // var r = -1;
    // var c = -1;
    var r = min_row - 1;
    var c = min_column - 1;
    var arr = [];
    if (min_row < 0){
      var row_length = Math.abs(max_row) + Math.abs(min_row) + 2;
    }
    else{
      var row_length = Math.abs(max_row) - Math.abs(min_row) + 2;
    }
    if (min_column < 0){
      var column_length = Math.abs(max_column) + Math.abs(min_column) + 2;
    }
    else {
      var column_length = Math.abs(max_column) - Math.abs(min_column) + 2;
    }
    // length += 2;
    // num_columns = num_columns + 2;
    console.log(column_length);
    console.log(row_length);

    for(var i = 0; i < row_length; i++) {
      arr[i] = []
      if(i == 0) {
        for(var j = 1; j < column_length; j++){
          arr[0][j] = dummy;
          dummy++;
        }
      }
      else {
        for(var j = 0; j < column_length; j++){
          if(j==0){
            arr[i][j] = dummy2;
            dummy2++
          }
          else {
            // c = j--;
            arr[i][j] = r * c;
            // dummy2++;
            
          }
          // r++;
          c++;
        }
      }
      // dummy2=1;
      c=min_column-1;
      r++;
    }
    // arr[1][1] = 69;
  // arr[0][1] = 10000;    


    var myTableDiv = document.getElementById("mult-table");
  
    var tableBody = document.createElement('table');
  
    for (var i = 0; i < row_length; i++) {
      var tr = document.createElement('tr');
      tableBody.appendChild(tr);
  
      for (var j = 0; j < column_length; j++) {
        var td = document.createElement('th');
        td.appendChild(document.createTextNode(arr[i][j]));
        tr.appendChild(td);
      }
    }
    myTableDiv.appendChild(tableBody);
  }


  // addTable(0,50,0,50);



// updateMessage();