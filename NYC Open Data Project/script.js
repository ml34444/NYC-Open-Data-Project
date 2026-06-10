let data, info;

async function init(){   
  let link = "svi.json";
  info = await fetch(link);
  data = await info.json();

  let output = document.getElementById("output");

  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let info = data[i];
    build += `<div class="card">
                 <h3>${info.location_name}</h3>
                 <h3>Number of Schools at Location: ${info.schools}</h3>
                 <h3>Schools in Building: ${info.schools_in_building}</h3>
                 <h3>${info.address}</h3>
                 <h3>${info.borough}</h3>
                 <h3>District ${info.geographical_district_code}</h3>
                 <hr>
                 <h3>Average Number of Violent Incidents: ${info.avgofvio_n}</h3>
                 <h3>Average Number of Crime: ${info.avgofnocrim_n}</h3>
                </div>`;
    ct+=1;
  }
  search.innerHTML = `${ct} Results found.`;
  output.innerHTML = build;
}

function FilterByAddress(){
  let s = document.getElementById("school");
  let output = document.getElementById("output");
  let search = document.getElementById("search");

  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i++){
    let info = data[i];
    if (info.address == s){
      build += `<div class="card">
                   <h3>${info.location_name}</h3>
                   <h3>Number of Schools at Location: ${info.schools}</h3>
                   <h3>Schools in Building: ${info.schools_in_building}</h3>
                   <h3>${info.address}</h3>
                   <h3>${info.borough}</h3>
                   <h3>${info.geographical_district_code}</h3>
                   <hr>
                   <h3>Average Number of Violent Incidents: ${info.avgofvio_n}</h3>
                   <h3>Average Number of Crime: ${info.avgofnocrim_n}</h3>
                  </div>`;
      ct+=1;
    }
  }
  search.innerHTML = `${ct} Results found.`;
  output.innerHTML = build;
}

function FilterByCrime(){
  let c = document.getElementById("crime");
  let output = document.getElementById("output");
  let search = document.getElementById("search");

  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let info = data[i];
    if (info.nocrim_n == c){
      build += `<div class="card">
                   <h3>${info.location_name}</h3>
                   <h3>Number of Schools at Location: ${info.schools}</h3>
                   <h3>Schools in Building: ${info.schools_in_building}</h3>
                   <h3>${info.address}</h3>
                   <h3>${info.borough}</h3>
                   <h3>District ${info.geographical_district_code}</h3>
                   <hr>
                   <h3>Average Number of Violent Incidents: ${info.avgofvio_n}</h3>
                   <h3>Average Number of Crime: ${info.avgofnocrim_n}</h3>
                  </div>`;
      ct+=1;
    }
  }
  search.innerHTML = `${ct} Results found.`;
  output.innerHTML = build;
}

function FilterByCrimAvg(){
  let c = document.getElementById("crime");
  let output = document.getElementById("output");
  let search = document.getElementById("search");

  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let info = data[i];
    if (info.nocrim_n == c){
      build += `<div class="card">
                   <h3>${info.location_name}</h3>
                   <h3>Number of Schools at Location: ${info.schools}</h3>
                   <h3>Schools in Building: ${info.schools_in_building}</h3>
                   <h3>${info.address}</h3>
                   <h3>${info.borough}</h3>
                   <h3>District ${info.geographical_district_code}</h3>
                   <hr>
                   <h3>Average Number of Violent Incidents: ${info.avgofvio_n}</h3>
                   <h3>Average Number of Crime: ${info.avgofnocrim_n}</h3>
                  </div>`;
      ct+=1;
    }
  }
  search.innerHTML = `${ct} Results found.`;
  output.innerHTML = build;
}

function FilterBySchool(){
  let c = document.getElementById("crime");
  let output = document.getElementById("output");
  let search = document.getElementById("search");

  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let info = data[i];
    if (info.nocrim_n == c){
      build += `<div class="card">
                   <h3>${info.location_name}</h3>
                   <h3>Number of Schools at Location: ${info.schools}</h3>
                   <h3>Schools in Building: ${info.schools_in_building}</h3>
                   <h3>${info.address}</h3>
                   <h3>${info.borough}</h3>
                   <h3>District ${info.geographical_district_code}</h3>
                   <hr>
                   <h3>Average Number of Violent Incidents: ${info.avgofvio_n}</h3>
                   <h3>Average Number of Crime: ${info.avgofnocrim_n}</h3>
                  </div>`;
      ct+=1;
    }
  }
  search.innerHTML = `${ct} Results found.`;
  output.innerHTML = build;
}

function accidentsByBorough(){
  let q = 0, bk = 0, bx = 0, m = 0;

  for(let i = 0; i < data.length; i++){
    let accident = data[i];
    if(accident.borough == "Q"){
      q++;
    }else if(accident.borough == "M"){
      m++;
    }else if(accident.borough == "K"){
      bk++;
    }else if(accident.borough == "X"){
      bx++;
    }
  }

  let chartData = [
    ["Queens",q],
    ["Manhattan",m],
    ["Brooklyn", bk],
    ["Bronx", bx],
  ];

  let chartType = get("chartType").value;  

  displayChart(chartData,"chart",chartType)
}
function get(id){
  return document.getElementById(id);
}

function displayChart( data, chart_id, chart_type ){
  let chart = c3.generate({
    bindto: `#${chart_id}`,
    data: {
      columns: data,
      type:chart_type
    }
  });
}