function makeGrid() {
    var inputHeight = document.forms["sizePicker"]["height"].value;
    var inputWidth = document.forms["sizePicker"]["width"].value;
    var mybody = document.getElementsByTagName("body")[0];

    if(mybody.contains(document.getElementById("grid1"))) {
        document.getElementById("grid1").remove();
        document.getElementById('colorPicker').style.backgroundColor ="";
    }
    // if(mybody.contains(document.getElementById("colorPicker").value)){
    //     document.getElementById("colorPicker").value.remove();
    // }
    mytable = document.createElement("table");
    mytable.id="grid1";
    for(var j = 0; j < inputHeight; j++) {
        mycurrent_row = document.createElement("tr");
        for(var i = 0; i < inputWidth; i++) {
            mycurrent_cell = document.createElement("td");
            mycurrent_cell.class = "cellId";
            mycurrent_row.appendChild(mycurrent_cell);
        }
        mytable.appendChild(mycurrent_row);
    }
    mybody.appendChild(mytable);
    mytable.setAttribute("border","2");

     // Adding Event listener to the color picker so that everytime
    // a new color is selected, it is stored in chosenColor
    var choosenColor = document.getElementById('colorPicker');
    var  chosenColor;
    console.log("choosencolor", choosenColor)
    choosenColor.addEventListener("change",function(){
       chosenColor = document.getElementById('colorPicker').value;
    })
    console.log("choosencolor", choosenColor)
    //
    var testTable = document.getElementById('grid1');
    var tds = testTable.getElementsByTagName("td");
    var arrayTds = Array.prototype.slice.call(tds);
     console.log("trs", tds, "arrayTrs", arrayTds, choosenColor);
    //
     // Adding Event Listeners to each cell in the table
    arrayTds.forEach(function(singleCell, j, array){
            singleCell.addEventListener("click",
            function(){
                singleCell.bgColor = chosenColor;
            });
        });
    return false;
 }
