const state = {
    products:[
        {name:'product-a',price:30},
        {name:'product-b',price:35},
    ]
}

const getters = {
    saleProducts:state=>{
        let salePs=state.products.map(pro=>{
            return{
                name:'**'+pro.name,
                price:pro.price
            }
        });
        return salePs;
    }
}

const mutations = {
    reduce:(store,param)=>{
        store.products.forEach(pro=>{
            pro.price-=param;
        });
    }
}

const actions = {
    reduce:(context,param)=>{
        //call mutation
        context.commit('reduce',param);
    }
}

export default {
	namespaced: true,
    state,
    getters,
    actions,
    mutations
}