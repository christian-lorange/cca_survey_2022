
async function load_company_name_analysis(name){
Parse.initialize("cca_locker");
    //javascriptKey is required only if you have it on server.
    Parse.serverURL = 'http://www.orangehouse-cca.com:1337/parse'
    const query = new Parse.Query("survey_2022"); //Connect to server
    query.equalTo("business_name", name)
    query.limit(400)
   	const results = await query.find().then(results => {
   		x = results[0].get("key")
   		if (typeof x !== "undefined"){
   			return 1
   		}
   		else {
   			return 0
   		}

   	})
   	return results
 	
   }



async function key_submit(){
	Parse.initialize("cca_locker");
    //javascriptKey is required only if you have it on server.
    Parse.serverURL = 'http://www.orangehouse-cca.com:1337/parse'

    var comp = new Parse.Query('survey_2022');
		comp.limit(1)
		comp.equalTo("business_name", document.getElementById("business_name").value);
		var v_results = await comp.first();

    const key = new Parse.Object("survey_2022")
   		if (typeof v_results !== 'undefined') {  //check if object already exists
		        key.id=v_results.id
		}
    key.set("business_name", document.getElementById("business_name").value);
	key.set("key", document.getElementById("new_key").value);
	key.save()


}


async function key_check_search(){
	Parse.initialize("cca_locker");
    //javascriptKey is required only if you have it on server.
    Parse.serverURL = 'http://www.orangehouse-cca.com:1337/parse'

    var comp = new Parse.Query('survey_2022');
		comp.limit(1)
		comp.equalTo("business_name", document.getElementById("business_name").value);
		await comp.find().then(results => {
   		x = results[0].get("key")
   		y=0
   		key = document.getElementById("key").value
   		if (key == x){
   			y =1
   		}
   		else {y=0}
   		console.log(y)
   		return y 
   		})
   	return y
}



async function check_company_names(){
Parse.initialize("cca_locker");
    //javascriptKey is required only if you have it on server.
    Parse.serverURL = 'http://www.orangehouse-cca.com:1337/parse'
    const query2 = new Parse.Query("survey_2022"); //Connect to server
    query2.limit(400)
   	const results2 = await query2.find().then(results => {
   		names=[]
   		for (var i = 0; i < results.length; i++) {
			names.push(results[i].get("business_name"))
		}
		return names
   	})
   	return names
   }

