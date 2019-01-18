import Vue from 'vue';
import Vuex from 'vuex';
import hello from './modules/hello'
import mys from './modules/mys'

Vue.use(Vuex);

export const store = new Vuex.Store({
    //strict:true,//true会强制检查mutations中的方法是否被调用
    modules: {
        hello,
        mys
    }
});