import { observable,action,computed } from 'mobx';

class AboutStore {
    // Observable 值可以是JS基本数据类型、引用类型、普通对象、类实例、数组和映射
    @observable title = 'this is about page'
    @observable num = 0

    // 计算值(computed values)是可以根据现有的状态或其它计算值衍生出的值
    @computed get getUserInfo(){
       return `我是computed经过计算的getter,currenct num:${this.num}`
    }
    // 注意：当你使用装饰器模式时，@action 中的 this 没有绑定在当前这个实例上，要用过 @action.bound 来绑定 使得 this 绑定在实例对象上
    @action.bound add(){
        this.num ++
    }
    @action.bound reduce(){
        this.num --
    }
}
 export const aboutStore = new AboutStore()