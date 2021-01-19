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
  var inputDate = d3.select("#datetime").property("value");
  var inputCity = d3.select("#city").property("value");
  var inputState = d3.select("#state").property("value");
  var inputCountry = d3.select("#country").property("value");
  var inputShape = d3.select("#shape").property("value");

  var filterdata = {
    datetime: inputDate,
    city: inputCity,
    state: inputState,
    country: inputCountry,
    shape: inputShape
  }

filteredData= tableData.filter(input=>{
  for(key in filterdata){
    if (filterdata[key]!=""){
      if (input[key]===undefined || input [key]!=filterdata[key])
      return false;

    }
  }
  return true

})

keyboard(filteredData)
d3.event.preventDefault()
}





