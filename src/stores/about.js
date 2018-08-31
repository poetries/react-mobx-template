import { observable } from 'mobx';

class AboutStore {
    @observable title = 'this is about page'
}
 export const aboutStore = new AboutStore()