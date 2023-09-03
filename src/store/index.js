import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        cardNumber: null,
        cardHolder: null,
        cvv: null,
        expires: null,
    },
        getters:{
            returningCardNumber(state){
                return state.cardNumber
            },
            returningCardHolder(state){
                return state.cardHolder
            },
            returningCardCVV(state){
                return state.cvv
            },
            returningCardexpires(state){
                return state.expires
            },
        }
})

