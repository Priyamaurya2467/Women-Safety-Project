  const axios = require('axios')

  const getTracking = async(token)=>{
    const res = await axios.get(
        `https://safeher-backend-0hzz.onrender.com/api/tracking/${token}`
    )
    return res.data;
  }