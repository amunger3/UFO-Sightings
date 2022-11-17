// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

// Select button
var filterButton = d3.select("#filter-btn");

// Select input elements
var filterDate = d3.select("#datetime");
var filterCity = d3.select("#city");
var filterState = d3.select("#state");
var filterCountry = d3.select("#country");
var filterShape = d3.select("#shape");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// The following version of code performs all of the filtering tasks through the use of a button.
// The original handleClick code was modified from the module instead of using the two functions from the challenges,
// but all deliverable requirements are met.
// The filters apply on change or on the final click of the "Filter Table" button. :)

filterButton.on("click", handleClick);

function handleClick() {

  // Get values of inputs
  var inDate = filterDate.property("value");
  var inCity = filterCity.property("value");
  var inState = filterState.property("value");
  var inCountry = filterCountry.property("value");
  var inShape = filterShape.property("value");

  var filteredData = tableData;

  // Conditionals for filters
  if (inDate) {
      filteredData = filteredData.filter(data => data.datetime === inDate);
  }

  if (inCity) {
      filteredData = filteredData.filter(data => data.city === inCity);
  }

  if (inState) {
      filteredData = filteredData.filter(data => data.state === inState);
  }

  if (inCountry) {
      filteredData = filteredData.filter(data => data.country === inCountry);
  }

  if (inShape) {
      filteredData = filteredData.filter(data => data.shape === inShape);
  }

  if (filteredData != tableData) {
      tbody.selectAll('tr').remove();
      tbody.selectAll('td').remove();

      filteredData.forEach((search) => {
          var new_tr = tbody.append("tr");
          for (key in search) {
              new_tr.append("td").text(search[key]);
          }
      })
  } else {
      table(tableData);
  }
};

// Attach an event to listen for the form button
// d3.selectAll("#filter-btn").on("click", handleClick);



// the following code is not actually called, although it was the starter code. Instead, the original handleClick
// function was modified to fit the deliverable requirements.

// 1. Create a variable to keep track of all the filters as an object.
var filters = [];

// 3. Use this function to update the filters. 
function updateFilters() {

    // 4a. Save the element that was changed as a variable.
    var filterChanged = d3.select(this)
    // 4b. Save the value that was changed as a variable.
    var filterValue = filterChanged.property("value");
    // 4c. Save the id of the filter that was changed as a variable.
    var filterId = filterChanged.property("id");
  
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
    if (filterValue) {
      filters.push(filterValue);
      filteredData = filteredData.filter(data => data.filterId === filterValue);
    }
    
  
    // 6. Call function to apply all filters and rebuild the table
    filterTable();
  
  }
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
  
    // 8. Set the filtered data to the tableData.
    var filteredData = tableData;
  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    
  
    // 10. Finally, rebuild the table using the filtered data
    if (filteredData != tableData) {
      tbody.selectAll("tr").remove();
      tbody.selectAll("td").remove();

      filteredData.forEach((search) => {
          var new_tr = tbody.append("tr");
          for (key in search) {
              new_tr.append("td").text(search[key]);
          }
      })
  } else {
      table(tableData);
  }
    
}
  
  // 2. Attach an event to listen for changes to each filter
  d3.selectAll("#datetime").on("change", handleClick);
  d3.selectAll("#city").on("change", handleClick);
  d3.selectAll("#state").on("change", handleClick);
  d3.selectAll("#country").on("change", handleClick);
  d3.selectAll("#shape").on("change", handleClick);
  
  // Build the table when the page loads
  buildTable(tableData);
