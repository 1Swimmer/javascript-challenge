// Assign the data from `data.js` to a descriptive variable
var tableData = data;
console.log(tableData)

// select the table Tbody from HTML
var tablebody = d3.select("tbody")
/// cleaning previous search
function keyboard(tableData){
  //clearing existing data
tablebody.html("")
//loop thru tabledata and appedning each UFObject
   tableData.forEach(ufodata=> {
     // appendig tbody
     var tablerow = tablebody.append("tr")
     // looping thru each row
     Object.entries(ufodata).forEach(([key, value])=>{
       tablerow.append("td").text(value)
     })
   })}
// Select the button
var button = d3.select("#filter-btn");
//we can use "button" var button = d3.select("button")
//
button.on("click",FilterSearch)
keyboard(tableData)
function FilterSearch(){
  //Cleanning existing information
  $("#tbody").empty()
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");
// Get the value property of the input element
  var inputValue = inputElement.property("value");
  var tableData = data;
  var FilterTable = tableData.filter(rightdate => rightdate.datetime === inputValue);
    console.log(FilterTable)
      var tablebody = d3.select("tbody")

keyboard(FilterTable)
d3.event.preventDefault()
}





