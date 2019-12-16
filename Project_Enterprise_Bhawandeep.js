//Bhawandeep Kaur

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Simar:Sunny123gg@cluster0-xbxcz.mongodb.net/test";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology:true });
client.connect(err => {
  /*
  
  const collection = client.db("SBS_Hospital").collection("Nurses");
  
  var insertNurses=[{Nurse_ID:201,FullName:"Preity Zinta",Gender:"F",Position:"Head Nurse",SalaryPH:35,SSN:91845654,Email:"pz123@sbshosp.com",Phone:1029307831},
						{Nurse_ID:202,FullName:"Krysten Stewart",Gender:"F",Position:"Nurse",SalaryPH:28,SSN:929471054,Email:"kry109@sbshosp.com",Phone:1029327492},
						{Nurse_ID:203,FullName:"Catriona Gray",Gender:"F",Position:"Nurse",SalaryPH:25,SSN:998761234,Email:"muo234@sbshosp.com",Phone:1029381010},
						{Nurse_ID:204,FullName:"Rajpal Yadav",Gender:"M",Position:"Nurse",SalaryPH:25,SSN:910293709,Email:"rajya817@sbshosp.com",Phone:102101011},
						{Nurse_ID:205,FullName:"Sushmita  Sen",Gender:"F",Position:"Nurse",SalaryPH:31,SSN:900023654,Email:"sushi65@sbshosp.com",Phone:1192123451}];
						
	collection.insertMany(insertNurses,function(err,result){
		if(err) throw err;
		
	console.log("Inserted 5 rows into Nurses table..");
  
  */
  /*
  const collection = client.db("SBS_Hospital").collection("Room_Type");
  
  var insertRoom=[{Room_Number:"1A",Type:"ICU",No_Of_Beds:12,Floor:1,RoomCostPerHour:120},
				{Room_Number:"2A",Type:"Emergency Ward",No_Of_Beds:25,Floor:1,RoomCostPerHour:70},
				{Room_Number:"3B",Type:"Operation Theatre",No_Of_Beds:1,Floor:2,RoomCostPerHour:80},
				{Room_Number:"4B",Type:"Casualty",No_Of_Beds:15,Floor:2,RoomCostPerHour:50},
				{Room_Number:"5C",Type:"Consulting Room",No_Of_Beds:1,Floor:3,RoomCostPerHour:10}];
						
	collection.insertMany(insertRoom,function(err,result){
		if(err) throw err;
		
	console.log("Inserted 5 rows into Room table..");
  
  
  */
  /*
   const collection = client.db("SBS_Hospital").collection("Department");
  var insertDept=[{Dept_ID:"AAA1",Dept_Name:"Psychology",Head_ID:103},
					{Dept_ID:"AAA2",Dept_Name:"Dermatology",Head_ID:102},
					{Dept_ID:"AAA3",Dept_Name:"Surgery",Head_ID:105},
					{Dept_ID:"AAA4",Dept_Name:"Neurology",Head_ID:101},
					{Dept_ID:"AAA5",Dept_Name:"Pediatrics",Head_ID:104}];
						
	collection.insertMany(insertDept,function(err,result){
		if(err) throw err;
		
	console.log("Inserted 5 rows into Department table..");
  */
  /*
	const collection = client.db("SBS_Hospital").collection("Nurses");

	var updateBhawan = { Nurse_ID: 205 };
	var newvalueBhawan = { $set: {Position: "OR Nurse" } };
	
	collection.updateOne(updateBhawan, newvalueBhawan, function(err, res) {
    if (err) throw err;
    console.log("Update complete");
  */
  /*
  const collection = client.db("SBS_Hospital").collection("Department");
	var findBhawan={Head_ID:105};
	collection.find(findBhawan,{projection:{_id:0,Dept_ID:1,Dept_Name:1}}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
  */
  
  const collection = client.db("SBS_Hospital").collection("Room_Type");
	var deleteBhawan = { Type:"Casualty" };
	collection.deleteMany(deleteBhawan, function(err, result) {
    if (err) throw err;
    console.log("Deleted the Casualty...");
  
  client.close();
});

});




