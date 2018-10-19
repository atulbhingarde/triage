var patientList = [
  'Paul',
  'Jan',
  'Tri',
  'Maryam'
]
const timeout=10000;
// alert(patientList);
function isInArray(value, array) {
  prompt(String(array.indexOf(value)));
  return array.indexOf(value) > -1;
}
function DisplayList() {
  alert(patientList);
  // for(PatientIndex=0;PateientIndex<temparr.length();PateientIndex++) 
}
alert("Patientlist initialized");

do {

var command = prompt("Choose one operation : update, delete, add, reorder, exit \n exit for exiting the system\nplease remember names/operations are case sensitive\n"+ " list is " +patientList );

// alert("your input is " + `${command}` );
switch( command ) {
  case 'add':
      // get the new name to be added 
      var toBeAdded = prompt("key in name of the person to be added ");
      // check if the name exists in the array 
      if ( isInArray(toBeAdded , patientList) ) { 
        // if it does exist help restected user that operation appears to be bit strange
        alert("This person "+ toBeAdded + " is a already in list \"" + patientList + "\" may be you need to check name" ); }
      else {
        // now we have confirmed that the new person to be added does not exist in the array 
        // so add him and display
        prompt(" try to add")
        patientList.push(toBeAdded);
         };update
      break;
  case 'update':
      //code block
      //alert("will " + command);
      var toBeReplaced = prompt("key in name of the person to be updated ");
      var locatedAt=patientList.indexOf(toBeReplaced)
      // alert(locatedAt);
      if ( locatedAt > -1 ) {
       // located the person 
       var toBeReplacedBy = prompt("key in name of the person " + toBeReplaced +" to be updated ");
       if ( toBeReplacedBy.length > 0 ) {
       if ( toBeReplaced.trim() !==  toBeReplacedBy.trim() )  { 
          if ( patientList.indexOf(toBeReplacedBy) < 0 ) {
             patientList[locatedAt] = toBeReplacedBy ;
             alert(patientList);
           } else {
            alert(" the "+ toBeReplacedBy + " already exists in the list "+ patientList + " can not add a duplicate name you know ! it would be difficult to distingish in my system"  );
          }
       }
       else {
        alert(" excuse me ! but the " + toBeReplaced + " is same as " + toBeReplacedBy);
       } 
      }
      else 
       { alert(" can not select empty string for target value")};
    }
      else {
       //could not locate person 
       alert(" could not locate " + toBeReplaced + " in the " + patientList);

      }
    
      alert(patientList);
      break;
  case 'delete':
      // get the nama that is to be deleted 
      var toBeDeleted= prompt("key in name of the person to be deleted ");
      //LocateThat = patientList.indexOf(toBeDeleted);
      if ( isInArray(toBeDeleted , patientList) )
       {
         patientList.splice(patientList.indexOf(toBeDeleted),1);
         alert("done " + command);
       }
      else 
       {
         alert(" could not delete as " + toBeDeleted + " does not exists ! ");
         alert(" could not delete" ) ;
       }
      break;
  case 'reorder':
      alert("will "+ command);
      var toBeReplaced = prompt("key in name of the first person to be updated ");
      var locatedFirstAt=patientList.indexOf(toBeReplaced)
      //alert(locatedFirstAt);
      if ( locatedFirstAt > -1 ) {
       // located the person 
       var toBeReplacedBy = prompt("key in name of the person " + toBeReplaced +" to be updated ");
       locatedSecondAt = patientList.indexOf(toBeReplacedBy);
       if ( ( locatedFirstAt * locatedSecondAt ) > -1 ) { 
         t = patientList[locatedFirstAt] ; 
         patientList[locatedFirstAt] = patientList[locatedSecondAt];
         patientList[locatedSecondAt] = t }

       }
        break;
  default:
    alert(' Give me a break !');
  //code block
}
alert(" This is the list at the end of operation "+patientList)
}
while ( command.toLowerCase() !== "exit" );
