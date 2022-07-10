
function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

// Add table row to investors table
function add_investor() {   
unique = makeid(4) 
document.getElementById("investor_table").insertRow(-1).innerHTML = '<tr><td><input type="value" class="" placeholder="Investor" id="invest_name_'+unique+'"></td><td><input type="text" class="yearpicker" placeholder="Year (yyyy)" id="invest_year_'+unique+'"></td><td><select id="invest_source_'+unique+'"><option value="0">Investor Type</option><option value="crowd">Crowdfunding Platforms</option><option value="multilateral">Multilateral or Bilateral Development Financial Institutions</option><option value="government">Government</option><option value="foundation">Foundation</option><option value="pvt_equity">Private Equity</option><option value="angel">Angel Investors</option><option value="impact">Impact Fund</option><option value="other_pvt">Other Private Investors</option></select></td><td><select id="invest_type_'+unique+'"><option value="0">Investment Type</option><option value="debt">Debt</option><option value="equity">Equity</option><option value="grant">Grant</option></select></td><td><input type="number" min="0" step="0" class="num num_pos" placeholder="Amount ($ USD)" id="invest_amount_'+unique+'"></td><td><select id="invest_gender_'+unique+'"><option value="0">Gender Lens?</option><option value="yes">Yes</option><option value="no">No</option></select></td><td><input type="button" value="Delete Row" onclick="SomeDeleteRowFunction()"></td></tr>';
$(".yearpicker").yearpicker()
prevent_negative()
}

function SomeDeleteRowFunction() {
      // event.target will be the input element.
      var td = event.target.parentNode; 
      var tr = td.parentNode; // the row to be removed
      tr.parentNode.removeChild(tr);
}

// End of table row


//Start of country sales details
document.getElementById("stove_sales").addEventListener("change",function(){
  if(document.getElementById("stove_sales").value=="yes"){
    document.getElementById("grid-container_stove_sales").style.display="grid"
  }
  else{document.getElementById("grid-container_stove_sales").style.display="none"}
})


document.getElementById("y2021_n_stove_customer").addEventListener("change",function(){sales_math()})
document.getElementById("y2021_n_stove_distributor").addEventListener("change",function(){sales_math()})

function sales_math(){
  if(document.getElementById("y2021_n_stove_customer").innerHTML==""){document.getElementById("y2021_n_stove_customer").innerHTML="0"}
  if(document.getElementById("y2021_n_stove_distributor").innerHTML==""){document.getElementById("y2021_n_stove_distributor").innerHTML="0"}
  document.getElementById("y2021_n_stove_sales").innerHTML = parseInt(Number(document.getElementById("y2021_n_stove_customer").value))+parseInt(Number(document.getElementById("y2021_n_stove_distributor").value))
  
  
}


function country_sales_details(){
  sales_countries_detail = []
  els = document.getElementsByClassName("country_sales_chbx")
  // console.log(els)
  for (var i = 0; i < els.length; i++) {
    if (els[i].checked == true)
      sales_countries_detail.push(els[i].id)
  }

  sales_stoves_details = []
  els = document.getElementsByClassName("stove_sales_types")
  for (var i = 0; i < els.length; i++) {
    if (els[i].checked == true) {
      sales_stoves_details.push(els[i].id)
      document.getElementById("type_"+els[i].id).style.display="inline-block"
    }
    else {
     document.getElementById("type_"+els[i].id).style.display="none" 
    }
  }


  els = document.getElementsByClassName("sales_ctr")
  for (var i = 0; i < els.length; i++) {
    els[i].style.display="none"
    for (var j = 0; j < sales_countries_detail.length; j++) {
      if(sales_countries_detail[j].includes(els[i].classList[1].slice(els[i].classList[1].length - 3))) {
        els[i].style.display="block"
      }

      if(sales_countries_detail.length == 0) {
        els[i].style.display="none"
      }
    }
  }
}

function prep_country_sales_details(){
  sales_stoves_details = []
  els = document.getElementsByClassName("stove_sales_types")
  sales_table = document.getElementById("stove_sales_details_body")

  var row = sales_table.insertRow(-1);
  // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell1.innerHTML = "Stove Type";
  cell2.innerHTML = "Country";
  cell3.innerHTML = 'Number Solid in 2021';
  cell1.style.width="32vw"
  cell2.style.width="32vw"
  cell3.style.width="32vw"

  for (var i = 0; i < els.length; i++) {

    // Create an empty <tr> element and add it to the 1st position of the table:
    var row = sales_table.insertRow(-1);
    row.setAttribute("id","type_"+els[i].id)

    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell2.classList.add("st_header");

    cell2.innerHTML = ""
    cell3.innerHTML = ""

    cell2_t=""
    cell3_t=""


    for (var j = 0; j < countries.length; j++) {
      cell2_t +=('<span class="sales_ctr ctr_'+country_code[j]+'" style="margin:auto;width:32vw">'+countries[j]+'</span>')
      cell3_t +=('<input type="number" min="0" id="stove_sales_'+country_code[j]+'_'+els[i].id+'" class="sales_ctr ctr_'+country_code[j]+'" style="margin:auto;width:20vw">')
    }

    // Add some text to the new cells:
    cell1.innerHTML = els[i].labels[0].innerText;
    cell2.innerHTML = cell2_t;
    cell3.innerHTML = cell3_t;

    cell1.style.width="32vw"
    cell2.style.width="32vw"
    cell3.style.width="32vw"

      }


}

//End of country sales details

prep_country_sales_details()
country_sales_details()


setTimeout(function() {
    els = document.getElementsByClassName("stove_sales_types")
  for (var i = 0; i < els.length; i++) {
    els[i].addEventListener("change", 
      function(){country_sales_details()
      });
  }

 els2 = document.getElementsByClassName("country_sales_chbx")
  for (var i = 0; i < els2.length; i++) {
    els2[i].addEventListener("change", 
      function(){country_sales_details();
      });
  }
}, 1000);



function prep_fuel_sales_details(){
  sales_fuels_details = []
  els = document.getElementsByClassName("fuel_sales_types")
  sales_table = document.getElementById("fuel_sales_details_body")

  var row = sales_table.insertRow(-1);
  // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = "Fuel Type";
  cell2.innerHTML = "Amound Sold in 2021";
 
  cell1.style.width="32vw"
  cell2.style.width="32vw"


  for (var i = 0; i < els.length; i++) {

    // Create an empty <tr> element and add it to the 1st position of the table:
    var row = sales_table.insertRow(-1);
    row.setAttribute("id","fuel_type_"+els[i].id)

    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    cell2.classList.add("st_header");

    cell2.innerHTML = ""
  

    cell2_t = ('<input type="number" min="0" class="fuel_sales_ctr" id=fuel_sales_'+els[i].id+'" style="margin:auto;width:20vw">')


    // Add some text to the new cells:
    cell1.innerHTML = els[i].labels[0].innerText;
    cell2.innerHTML = cell2_t;

    cell1.style.width="32vw"
    cell2.style.width="32vw"
      }


}

prep_fuel_sales_details()

function fuel_sales (){
fuel_els = document.getElementsByClassName("fuel_sales_types")

  for (var i = 0; i < fuel_els.length; i++) {
    if (fuel_els[i].checked == true) {
      document.getElementById("fuel_type_"+fuel_els[i].id).style.display="inline-block"
    }
    else {
     document.getElementById("fuel_type_"+fuel_els[i].id).style.display="none" 
    }
  }
}



setTimeout(function() {
 els2 = document.getElementsByClassName("fuel_sales_types")
  for (var i = 0; i < els2.length; i++) {
    els2[i].addEventListener("change", 
      function(){fuel_sales ();console.log("this happened")
      });
  }
    fuel_sales();
}, 1000);


// Start of navigation
  if (document.getElementById("previous_section").innerHTML !== "") {
   document.getElementById("previous_section").style.display="block" 
  }
  else {
    document.getElementById("previous_section").style.display="none"
  }

var section_tags = ['login','section1','section2','section3','section4','section5','section6','error_check']
var section_text = ['Login Information','Company Information','2020 Sales Revenue','2021 Sales Revenue','Investments','Cookstove Sales','Fuel Sales','Review Information']

document.getElementById("previous_section").addEventListener("click",function(){navigation("prev")})
document.getElementById("next_section").addEventListener("click",function(){navigation("next")})

function navigation(direction){
  index = section_text.indexOf(document.getElementById("next_section").innerHTML.replace("Go forward to ",""))
  if (index==-1){
    index=8
  }

  for (var i = 0; i < section_tags.length; i++) {
    document.getElementById(section_tags[i]).style.display="none"
  }
  if (direction=="next"){
    document.getElementById("previous_section").innerHTML="Go back to "+section_text[index-1]
    document.getElementById("next_section").innerHTML="Go forward to "+section_text[index+1]
    document.getElementById(section_tags[index]).style.display="block"
  }
  else {
    document.getElementById("previous_section").innerHTML="Go back to "+section_text[index-3]
    document.getElementById("next_section").innerHTML="Go forward to "+section_text[index-1]
    document.getElementById(section_tags[index-2]).style.display="block"
  }

  if (document.getElementById("previous_section").innerHTML !== "") {
   document.getElementById("previous_section").style.display="" 
  }
  else {
    document.getElementById("previous_section").style.display="none"
  }
  if (document.getElementById("previous_section").innerHTML == "Go back to undefined") {
   document.getElementById("previous_section").style.display="none" 
  }
  else {
    document.getElementById("previous_section").style.display=""
  }
  if (document.getElementById("next_section").innerHTML == "Go forward to undefined") {
   document.getElementById("next_section").style.display="none" 
  }
  else {
    document.getElementById("next_section").style.display=""
  }

  if(index == 7){
    error_check()
  }
}
// End of navigation

// Start of employee demographics
els = document.getElementsByClassName("emp_num")
for (var i = 0; i < els.length; i++) {
  els[i].addEventListener("change",function(){
    this.style.background=""
    this.style.color=""
  if(document.getElementById("n_male").innerHTML==""){document.getElementById("n_male").innerHTML="0"}
  if(document.getElementById("n_female").innerHTML==""){document.getElementById("n_female").innerHTML="0"}
  if(document.getElementById("n_other").innerHTML==""){document.getElementById("n_other").innerHTML="0"}
  
    document.getElementById("n_male").innerHTML = parseInt(Number(document.getElementById("n_ft_male").value))+parseInt(Number(document.getElementById("n_pt_male").value))
    document.getElementById("n_female").innerHTML = parseInt(Number(document.getElementById("n_ft_female").value))+parseInt(Number(document.getElementById("n_pt_female").value))
    document.getElementById("n_other").innerHTML = parseInt(Number(document.getElementById("n_ft_other").value))+parseInt(Number(document.getElementById("n_pt_other").value))
  })
}


// End of demographics


 document.getElementById("smartmeter").addEventListener("change", 
      function(){
        if (document.getElementById("smartmeter").value=="yes"){
          document.getElementById("q_smartmeter").style.display="block"
        }
        else { document.getElementById("q_smartmeter").style.display="none"}
      });


document.getElementById("fuel_sales").addEventListener("change", function(){
  if(document.getElementById("fuel_sales").value=="yes"){
    document.getElementById("fuel_sales_div").style.display="block";
  }
  else {
    document.getElementById("fuel_sales_div").style.display="none";
  }
})

document.getElementById("stove_sales").addEventListener("change", function(){
  if(document.getElementById("stove_sales").value=="yes"){
    document.getElementById("stove_sales_div").style.display="block";
  }
  else {
    document.getElementById("stove_sales_div").style.display="none";
  }
})


// Start of revenue calculations
y2020_r = ['y2020_rev_stoves','y2020_rev_prod_other','y2020_rev_carbon','y2020_rev_rbf','y2020_rev_other']
for (var i = 0; i < y2020_r.length; i++) {
  document.getElementById(y2020_r[i]).addEventListener("change", function(){
    calc_y2020()
    })
}

function calc_y2020(){
  t=0;
  for (var i = 0; i < y2020_r.length; i++) {
    if(parseInt(document.getElementById(y2020_r[i]).value)>0){
      t=t+parseInt(document.getElementById(y2020_r[i]).value)
    }
  }
  document.getElementById('y2020_rev').innerHTML="$"+t
}

y2021_r = ['y2021_rev_stoves','y2021_rev_prod_other','y2021_rev_carbon','y2021_rev_rbf','y2021_rev_other']
for (var i = 0; i < y2021_r.length; i++) {
  document.getElementById(y2021_r[i]).addEventListener("change", function(){
    calc_y2021()
  })
}

function calc_y2021(){
  t=0;
  for (var i = 0; i < y2021_r.length; i++) {
    if(parseInt(document.getElementById(y2021_r[i]).value)>0){
      t=t+parseInt(document.getElementById(y2021_r[i]).value)
    }
  }
  document.getElementById('y2021_rev').innerHTML="$"+t
}



// End of revenue calculations


// Start of error checking
grant_errs=['capital_raised','capital_raised_grants']
for (var i = 0; i < grant_errs.length; i++) {
    document.getElementById(grant_errs[i]).addEventListener("change", 
      function(){grants_check()
      });
}

function grants_check(){
  if(parseInt(document.getElementById('capital_raised_grants').value) > parseInt(document.getElementById("capital_raised").value)){
      document.getElementById("error_grant_amount").style.display="inline-block"
      document.getElementById("capital_raised_grants").style.background="#F08080"
  }
  else {document.getElementById("error_grant_amount").style.display="none"
document.getElementById("capital_raised_grants").style.background=""}
}

function error_check(){
document.getElementById("missed_q").innerHTML=""
el = document.getElementsByClassName("req")

if (document.getElementById("smartmeter").value == "yes") {
  el2 = (document.getElementsByClassName("req_81"));
  el = [...el, ...el2]
}

if (document.getElementById("stove_sales").value == "yes") {
  el2 = (document.getElementsByClassName("req_52"));
  el = [...el, ...el2]
}

var labels = document.getElementsByTagName('LABEL');
for (var i = 0; i < labels.length; i++) {
    if (labels[i].htmlFor != '') {
         var elem = document.getElementById(labels[i].htmlFor);
         if (elem)
            elem.label = labels[i];         
    }
}

for (var i = 0; i < el.length; i++) {
    if(el[i].value =="" || el[i].value =="no_response"){

      var button = document.createElement("button");
      button.innerHTML = el[i].labels[0].innerText.split('\n')[0].toUpperCase()
      button.setAttribute("section",el[i].attributes['data_id'].value)
      button.onclick = function(){err_nav(this.getAttribute("section"))}
      document.getElementById("missed_q").appendChild(button);
      button.classList.add("review_btns")

      el[i].style.background = "#F08080";
      el[i].style.color = "white";
      el[i].style.borderColor = "red";
      el[i].style.borderWidth = "3px";
  }

  else {
    el[i].style.background = ""
    el[i].style.color = ""
      el[i].style.borderColor = "";
      el[i].style.borderWidth = "";
  }
}

document.getElementById("check_errors").style.display="block"
err_nav("error_check")
}
  
function err_nav(section){
  var section_tags = ['login','section1','section2','section3','section4','section5','section6','error_check']
  var section_text = ['Login Information','Company Information','2020 Sales Revenue','2021 Sales Revenue','Investments','Cookstove Sales','Fuel Sales','Review Information']
  index = section_tags.indexOf(section)

  for (var i = 0; i < section_tags.length; i++) {
    document.getElementById(section_tags[i]).style.display="none"
  }
  document.getElementById("previous_section").innerHTML="Go back to "+section_text[index-1]
  document.getElementById("next_section").innerHTML="Go forward to "+section_text[index+1]
  document.getElementById(section).style.display="block"

  if (document.getElementById("previous_section").innerHTML !== "") {
   document.getElementById("previous_section").style.display="" 
  }
  else {
    document.getElementById("previous_section").style.display="none"
  }
  if (document.getElementById("previous_section").innerHTML == "Go back to undefined") {
   document.getElementById("previous_section").style.display="none" 
  }
  else {
    document.getElementById("previous_section").style.display=""
  }
  if (document.getElementById("next_section").innerHTML == "Go forward to undefined") {
   document.getElementById("next_section").style.display="none" 
  }
  else {
    document.getElementById("next_section").style.display=""
  }
}

input_list = document.getElementsByTagName("Input")
for (var i = 0; i < input_list.length; i++) {
  input_list[i].addEventListener("change", 
      function(){
        this.style.background = "";
        this.style.color = "";
        this.style.borderColor = "";
        this.style.borderWidth = "";
      });
}

input_list = document.getElementsByTagName("select")
for (var i = 0; i < input_list.length; i++) {
  input_list[i].addEventListener("change", 
      function(){
        this.style.background = "";
        this.style.color = "";
        this.style.borderColor = "";
        this.style.borderWidth = "";
      });
}
// End of error checking



// prevent negative numbers
function prevent_negative(){
  neg_el = document.getElementsByClassName("num_pos")
  for (var i = 0; i < neg_el.length; i++) {
    if(neg_el[i].value>=0){}
      else {
      neg_el[i].value=0
      neg_el[i].dispatchEvent(new Event('change'));
          }
    neg_el[i].addEventListener("change", function(){prevent_negative_helper()})
  }
}
prevent_negative()
function prevent_negative_helper(){prevent_negative()}
// End of negative numbers