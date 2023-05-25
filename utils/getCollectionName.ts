export default function getCollectionName(query: string){
  switch(query){
    case "Mechanical-Engineering":
      return "mech";;
    case "Aeronautical-Engineering":
      return "aero";
    case "EC-Engineering":
      return "ec";
    case "IC-Engineering":
      return "ic";
    case "Computer-Engineering":
      return "comp";
    case "Information-Technology":
      return "it";
    case "Civil-Engineering":
      return "civil";
    case "Electrical-Engineering":
      return "electrical";
    case "MCA":
      return "mca";
  }
}