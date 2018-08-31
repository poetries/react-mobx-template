import { observable ,action} from 'mobx';
import {
    getPoetryList 
} from '../api/'

class HomeStore {
    @observable title = 'this is home page'
    @observable state = {
        fetching:false,
        error:false,
        data:[]
    }

    @action async getHomeList(){
        try{
            this.state.fetching = true
            this.state.data = await getPoetryList()
            this.state.fetching = false
        }catch(error){
            this.state.error = true
        }
    }
}
 export const homeStore = new HomeStore()