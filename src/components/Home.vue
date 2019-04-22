<template>
  <div id="Home">
    <aside>
    <nav>
     <div class="">
      <div class="form-group row">
          <label class="col-sm-2 col-form-label">Brand: </label>
          <div class="col-sm-10">
             <div class="" >
              <select class="custom-select " id="brand" v-model="brandSelected">
                <option  v-for="(brand, index) in brands" :value="index" >{{brand}}</option>                
              </select>
            </div>
          </div>
      </div>
      <div class="form-group row">
          <label class="col-sm-2 col-form-label">Model: </label>
          <div class="col-sm-10">
              <div class="form-group">
              <select class="custom-select" required id="model">
                  <option v-for="(model, index) in models[brands[brandSelected]]" :value="index" v-model="modelselected">{{model}}</option>
              </select>
              <div class="invalid-feedback">Alege model</div>
            </div>  
          </div>
      </div>
      <fieldset class="form-group">
          <div class="row">
            <legend class="col-form-label col-sm-2 pt-0">Tip motor: </legend>
            <div class="col-sm-10">
                 <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="gridRadiosMotor" value="Benzin" v-model="tip_motor">
                    <label class="form-check-label">
                    Benzin
                  </label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="gridRadiosMotor" value="Disel" v-model="tip_motor">
                    <label class="form-check-label">
                    Disel
                  </label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="gridRadiosMotor" value="Electro" v-model="tip_motor">
                    <label class="form-check-label">
                    Electro
                  </label>
                </div>
            </div>
          </div>
      </fieldset>
      <fieldset class="form-group">
          <div class="row">
            <legend class="col-form-label col-sm-2 pt-0">Tip Cutie: </legend>
            <div class="col-sm-10">
                 <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="gridRadiosGearbox" value="Automat" v-model="tip_cutie">
                    <label class="form-check-label">
                      Automat
                  </label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="gridRadiosGearbox" value="Mecanica" v-model="tip_cutie">
                    <label class="form-check-label">
                      Mecanica
                  </label>
                </div>
            </div>
          </div>
      </fieldset>
      <fieldset class="form-group">
          <div class="row">
            <legend class="col-form-label col-sm-2 pt-0">Tract: </legend>
            <div class="col-sm-10">
                 <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="gridRadiosPrivod" value="Fata" v-model="tip_tract">
                    <label class="form-check-label">
                      Fata
                  </label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="gridRadiosPrivod" value="Spate" v-model="tip_tract">
                    <label class="form-check-label">
                      Spate
                  </label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="gridRadiosPrivod" value="4x4" v-model="tip_tract">
                    <label class="form-check-label">
                      4x4
                  </label>
                </div>
            </div>
          </div>
      </fieldset>
      <div class="form-group">
          <div class="">
            <button class="btn btn-primary" id="cauta" @click="getCarListFromCars">Cauta</button>
            <!-- <button class="btn btn-info">Adauga cos</button> -->
          </div>
      </div>
    </div>
    </nav>
   </aside>
   <News :cars="carsForDrow" @comandMenuEmit="openCloseComandMeniu" :showComand="showComand"/>
    <ComandMenu :car="carsForDrow[idCarDrow]" v-if="showComand" @comandMenuEmit="openCloseComandMeniu"/>
  </div>
</template>

<script>

import News from '@/components/News.vue'
import ComandMenu from '@/components/ComandMenu.vue'


export default {
  name: 'Home',
  data() {
    return {
      showComand : false,
      carsForDrow : [],
      idCarDrow : 0,
      brandSelected : 0,
      modelselected : 0,
      allCars : [],
      tip_motor : null,
      tip_cutie : null,
      tip_tract : null
    }
  },
  components: {
    News,
    ComandMenu
  },
  computed: {
    brands : function(){
      return this.$store.getters.getBrands
    },
    models : function(){
      return this.$store.getters.getModels
    },
    cars : function(){
      return this.$store.getters.getCars
    }
  },
  methods: {
    openCloseComandMeniu(val){
      this.showComand = val[0];
      if(val[1])
        this.idCarDrow = val[1]
    },
    messs (){
      return this.$store.getters.getBrands
    },
    getCarListFromCars(){
      this.allCars = this.$store.getters.getCars
      this.carsForDrow = []
      let dBrand = this.$store.getters.getBrands
      let dMmodels = this.$store.getters.getModels
      let brandNow = dBrand[this.brandSelected]
      let modelNow = dMmodels[brandNow][this.modelselected]
      for(let car of this.allCars){
        if((car.brand == brandNow) &&
          (car.model == modelNow) &&
          ((car.tipmotor == this.tip_motor) || (this.tip_motor == null)) &&
          ((car.tipcutie == this.tip_cutie) || (this.tip_cutie == null)) &&
          ((car.tiptract == this.tip_tract) || (this.tip_tract == null)))
            this.carsForDrow.push(car)
      }
    }
  },
  mounted() {
    this.$store.dispatch('fetchBrands').then(() => {})
    this.$store.dispatch('fetchModels').then(() => {})
    this.$store.dispatch('fetchCars').then(() => {})
    
    //this.brandSelected = (brands)[0]
  },
}  
</script>

/*











