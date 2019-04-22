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
    getBrands (state) {
      return state.brands
    },
    getModels (state) {
      return state.models
    },
    getCars (state) {
      return state.cars
    },
    getCupons (state) {
      return state.cupons
    }
  },
  actions: {
    fetchBrands (context) {
      fetch('http://localhost:3000/brands')
        .then(response => {
          return response.json()
        })
        .then(data => {
          context.commit('setBrands', data)
        })
    },
    fetchModels (context) {
      fetch('http://localhost:3000/models')
        .then(response => {
          return response.json()
        })
        .then(data => {
          context.commit('setModels', data)
        })
    },
    fetchCars (context) {
      fetch('http://localhost:3000/cars')
        .then(response => {
          return response.json()
        })
        .then(data => {
          context.commit('setCars', data)
        })
    },
    fetchCupons (context) {
      fetch('http://localhost:3000/cupons')
        .then(response => {
          return response.json()
        })
        .then(data => {
          context.commit('setCupons', data)
        })
    }
  
  }
})

export default store