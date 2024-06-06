const { useEffect,useState } = require("react");

const useOnlineStatus =() =>{

const [onlineStatus,setOnlineStatus] = useState(true);

// try to check if online

//to check online or offline we have event olistneer to find out wheather you r are online or offiline

useEffect(()=>{
      window.addEventListener("offline",()=>{
        setOnlineStatus(false);
      })

      window.addEventListener("online",()=>{
        setOnlineStatus(true);
      })



},[])


// boolean value 
return onlineStatus;


}
export default useOnlineStatus;