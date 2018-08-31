import * as Api from './request'

export  const getPoetryList = async ()=> {
    return await Api.get({ 
        url:'/mock/5b7fd63f719c7b7241f4e2fa/tangshi/tang-shi',
        params:{
            // user_name:'',
            // code:''
        }
    })
}
