import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    brands : Array,
    models : Array,
    cars : Array,
    cupons : Array

  },
  mutations: {   
    setBrands (state, brands) {
      state.brands = brands
    },
    setModels (state, models) {
      state.models = models
    },
    setCars (state, cars) {
      state.cars = cars
    },
    setCupons (state, cupons) {
      state.cupons = cupons
    },
  },
  getters: {
    getX (state) {
      return state.x
    },
  },
  actions: {
    fetchData (context) {
      fetch('http://localhost:3000/brands')
        .then(response => {
          return response.json()
        })
        .then(data => {
          context.commit('setX', data[0].value)
        })
    }
  }
})

export default store