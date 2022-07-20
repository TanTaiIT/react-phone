import axios from 'axios' 

let config = {
    headers:{
        'Content-Type' : "application/json",
        'Token' : 'b1e1bbcb-ef7f-11eb-9388-d6e0030cbbb7'
    }
    
}
export const getAllProvince = ()=> async(dispatch)=>{
    try{
        const response = await axios.get('https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/province',config)
        dispatch({
            type:"GET_PROVINCE",
            payload:response.data.data
        })
    }catch(error){
        console.log(error)
    }
}

export const getAllDistrict = (provinceId)=> async(dispatch)=>{
    const configtow = {
        headers:{
            "Content-Type" : "application/json",
            Token: "b1e1bbcb-ef7f-11eb-9388-d6e0030cbbb7"
        },
        params: {
            province_id: provinceId
          }
        
    }
    try {
        const {data} = await axios.get('https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/district',configtow)
        dispatch({
            type:"GET_DISTRICT",
            payload:data
        })
    } catch (error) {
        console.log(error)
    }
    

}
export const getALLWard = (districtId)=> async(dispatch)=>{
    const configthree = {
        headers: {
            Token: "b1e1bbcb-ef7f-11eb-9388-d6e0030cbbb7"
          },
          params: {
            district_id:districtId
          }
    }
    try {
        const {data} = await axios.get(`https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/ward?${districtId}`,configthree)
        dispatch({
            type:"GET_WARD",
            payload:data
        })
    } catch (error) {
        console.log(error)
    }
}