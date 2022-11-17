// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

// Select the buttons
var filter_button = d3.select("#filter-btn");
// Select the input elements and get the raw HTML node
var filter_bar_0 = d3.select("#datetime");
var filter_bar_1 = d3.select("#city");
var filter_bar_2 = d3.select("#state");
var filter_bar_3 = d3.select("#country");
var filter_bar_4 = d3.select("#shape");

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

filter_button.on("click", handleClick);

function handleClick() {

  // Get the value property of the input elements
  var input0 = filter_bar_0.property("value");
  var input1 = filter_bar_1.property("value");
  var input2 = filter_bar_2.property("value");
  var input3 = filter_bar_3.property("value");
  var input4 = filter_bar_4.property("value");

  var filteredData = tableData;

  // Define conditions for filteredData

  if (input0) {
      filteredData = filteredData.filter(data => data.datetime === input0);
  }

  if (input1) {
      filteredData = filteredData.filter(data => data.city === input1);
  }

  if (input2) {
      filteredData = filteredData.filter(data => data.state === input2);
  }

  if (input3) {
      filteredData = filteredData.filter(data => data.country === input3);
  }

  if (input4) {
      filteredData = filteredData.filter(data => data.shape === input4);
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
      // Revert to displaying all the ufo sightings in a table format
      table(tableData);
  }
};

/* function handleClick() {
  // Grab the datetime value from the filter
  let date = d3.select("#datetime").property("value");
  let filteredData = tableData;

   // Check to see if a date was entered and filter the
  // data using that date.
  if (date) {
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
    filteredData = filteredData.filter(row => row.datetime === date);
  }

   // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  buildTable(filteredData);
} */

// Attach an event to listen for the form button
// d3.selectAll("#filter-btn").on("click", handleClick);

// 1. Create a variable to keep track of all the filters as an object.
var filters;

// 3. Use this function to update the filters. 
function updateFilters() {

    // 4a. Save the element that was changed as a variable.

    // 4b. Save the value that was changed as a variable.

    // 4c. Save the id of the filter that was changed as a variable.

  
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
 
  
    // 6. Call function to apply all filters and rebuild the table
    filterTable();
  
  }
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
  
    // 8. Set the filtered data to the tableData.
    
  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    
  
    // 10. Finally, rebuild the table using the filtered data
    
  }
  
  // 2. Attach an event to listen for changes to each filter
  d3.selectAll("#datetime").on("change", handleClick);
  
  // Build the table when the page loads
  buildTable(tableData);
