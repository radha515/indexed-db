var sscvalue;
var sscmks;
var sscmks1;
var sscradio;
var sscper;
var sscyop;

var intervalue;
var intermks;
var intermks1;
var interradio;
var interper;
var interyop;

var btechvalue;
var btechmks;
var btechmks1;
var btechradio;
var btechper;
var btechyop;

var name;
var RollNo;
var Email;
var store;
var co;
function getDetails() {
  co=document.getElementById('co').value;
  sscvalue=document.getElementById('sscvalue').value;
  sscmks=document.getElementById('sscmks');
  sscmks1=document.getElementById('sscmks1');
  sscper=document.getElementById('sscper').value;
  sscyop=document.getElementById('sscyop').value;

  intervalue=document.getElementById('intervalue').value;
  intermks=document.getElementById('intermks');
  intermks1=document.getElementById('intermks1');
  interper=document.getElementById('interper').value;
  interyop=document.getElementById('interyop').value;

  btechvalue=document.getElementById('btechvalue').value;
  btechmks=document.getElementById('btechmks');
  btechmks1=document.getElementById('btechmks1');
  btechper=document.getElementById('btechper').value;
  btechyop=document.getElementById('btechyop').value;

if (sscmks.checked) {
 sscradio=sscmks.value;
}
else{
 sscradio=sscmks1.value;
}

if (intermks.checked) {
 interradio=intermks.value;
}
else{
 interradio=intermks1.value;
}

if (btechmks.checked) {
 btechradio=btechmks.value;
}
else{
 btechradio=btechmks1.value;
}
console.log(co);
console.log(sscvalue+" "+sscradio+" "+sscper+" "+sscyop);
console.log(intervalue+" "+interradio+" "+interper+" "+interyop);
console.log(btechvalue+" "+btechradio+" "+btechper+" "+btechyop);



name=document.getElementById('name').value;
RollNo=document.getElementById('RollNo').value;
Email=document.getElementById('Email').value;
console.log(name+" "+RollNo+" "+Email);

if (!window.indexedDB) {
console.log("indexedDB is not working...");
}
var request=window.indexedDB.open("svitDB",1);
request.onerror=e=>{
  console.log(e);
}
request.onupgradeneeded=e=>{
var dbname=e.target.result;
dbname.createObjectStore("cse",{keyPath:"roll"});
  console.log("upgraded..");
}

request.onsuccess=e=>{
  var dbname=e.target.result;
  store=dbname.transaction("cse","readwrite").objectStore("cse");
  store.put(
  {
    "name":name,
    "roll":RollNo,
    "Email":Email,
    "co":co,

    "eduDetails":
    {
      "ssc":[
      sscvalue,
      sscradio,
      sscper,
      sscyop
    ],
     "inter":[
       intervalue,
       interradio,
       interper,
       interyop
     ],
     "btech":[
       btechvalue,
       btechradio,
       btechper,
       btechyop
     ]
  }
  }
);
  console.log("success....");
}
localStorage.setItem("roll",RollNo);
window.open("resume.html","_self");

}
