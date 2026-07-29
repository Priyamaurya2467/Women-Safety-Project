const axios = require('axios')

const API="http://localhost:5000/api/journey";

const startJourney=async(data)=>{

const res=await axios.post(

`${API}/start`,

data,

{

headers:{

Authorization:`Bearer ${localStorage.getItem("token")}`

}

}

);

return res.data;

};

const endJourney=async(id)=>{

const res=await axios.put(

`${API}/end/${id}`,

{},

{

headers:{

Authorization:`Bearer ${localStorage.getItem("token")}`

}

}

);

return res.data;

};

module.exports ={startJourney,endJourney}