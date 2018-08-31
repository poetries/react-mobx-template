import { observable ,action} from 'mobx';
import {
    getPoetryList 
} from '../api/'

class HomeStore {
    @observable title = 'this is home page'
    @observable list = []

    @action async getHomeList(){
        this.list = await getPoetryList()
    }
}
 export const homeStore = new HomeStore()