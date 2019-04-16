<template>
  <div >
    <aside>
    <nav>
     <div class="">
      <div class="form-group row">
          <label class="col-sm-2 col-form-label">Brand: </label>
          <div class="col-sm-10">
             <div class="">
              <select class="custom-select" id="brand">
                <!-- <option value=""></option>
                <option value="1">One</option>
								<option value="2">Two</option>
								<option value="3">Three</option> -->
              </select>
              <!-- <div class="invalid-feedback">Alege brand</div> -->
            </div>
          </div>
      </div>
      <div class="form-group row">
          <label class="col-sm-2 col-form-label">Model: </label>
          <div class="col-sm-10">
              <div class="form-group">
              <select class="custom-select" required id="model">
                  <option value=""></option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
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
                    <input class="form-check-input" type="radio" name="gridRadiosMotor" value="Benzin" >
                    <label class="form-check-label">
                    Benzin
                  </label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="gridRadiosMotor" value="Disel">
                    <label class="form-check-label">
                    Disel
                  </label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="gridRadiosMotor" value="Electro">
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
                    <input class="form-check-input" type="radio" name="gridRadiosGearbox" value="Automat" >
                    <label class="form-check-label">
                      Automat
                  </label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="gridRadiosGearbox" value="Mecanica">
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
                    <input class="form-check-input" type="radio" name="gridRadiosPrivod" value="Fata" >
                    <label class="form-check-label">
                      Fata
                  </label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="gridRadiosPrivod" value="Spate">
                    <label class="form-check-label">
                      Spate
                  </label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="gridRadiosPrivod" value="4x4">
                    <label class="form-check-label">
                      4x4
                  </label>
                </div>
            </div>
          </div>
      </fieldset>
      <div class="form-group">
          <div class="">
            <button class="btn btn-primary" id="cauta">Cauta</button>
            <!-- <button class="btn btn-info">Adauga cos</button> -->
          </div>
      </div>
    </div>
    </nav>
   </aside>
   <News :cars="carsForDrow" v-on:comandMenuEmit="openCloseComandMeniu" :showComand="showComand"/>
   <ComandMenu :idcar="0" v-if="showComand" v-on:comandMenuEmit="openCloseComandMeniu"/>
  </div>
</template>

<script>

import News from '@/components/News.vue'
import ComandMenu from '@/components/ComandMenu.vue'


export default {
  name: 'Home',
  components: {
    News,
    ComandMenu
  },
  props: {
    
  },
  data() {
    return {
      showComand : false,
      carsForDrow : [{
			"brand" : "Audi",
			"model" : "A5",
			"anproductie" : "2018",
			"capacitateamotor" : "2500",
			"puteremotor" : "213",
			"tipmotor" : "Benzin",
			"tipcutie" : "Automat",
			"tiptract" : "Fata",
			"tipcorp" : "Sedan",
			"pretdefolt" : "40300",
			"img" : "img/a-a5-2018.jpg",
			"color" : [
				{"text" : "black" , "price" : "0"},
				{"text" : "White" , "price" : "0"},
				{"text" : "blue" , "price" : "500"},
				{"text" : "orange" , "price" : "700"},
				{"text" : "red" , "price" : "700"}
			],
			"colorsalon" : [
				{"text" : "black" , "price" : "0"},
				{"text" : "black + scaune red" , "price" : "500"},
				{"text" : "White" , "price" : "200"},
				{"text" : "gray" , "price" : "0"},
				{"text" : "gray + scaune brown" , "price" : "650"},				
				{"text" : "pink" , "price" : "1000"},
				{"text" : "red" , "price" : "1500"}
			],
			"disck" : [
				{"text" : "15" , "price" : "0"},
				{"text" : "16" , "price" : "500"},
				{"text" : "17" , "price" : "1000"}
			],
			"audio" : [
				{"text" : "6 boxe" , "price" : "0"},
				{"text" : "8 boxe" , "price" : "300"},
				{"text" : "6 boxe + 1 subwoofer" , "price" : "200"},
				{"text" : "8 boxe + 1 subwoofer" , "price" : "600"}
			],
			"aer":[
				{"text" : "Conditioner", "price" : "0"},
				{"text" : "Climat control", "price" : "100"},
				{"text" : "Climat control pe 2 canale", "price" : "250"}
			],
			"parbrize" : [
				{"text" : "4 automate" , "price" : "0"}				
			],
			
			"comfort" : [
				{"proprety" : "0" , "price" : "200"},
				{"proprety" : "1" , "price" : "150"},
				{"proprety" : "1" , "price" : "100"},
				{"proprety" : "1" , "price" : "150"},
				{"proprety" : "1" , "price" : "1500"},
				{"proprety" : "2" , "price" : "1000"},
				{"proprety" : "0" , "price" : "700"},
				{"proprety" : "1" , "price" : "880"}
			],
			"securitate" : [
				{"proprety" : "1" , "price" : "245"},
				{"proprety" : "1" , "price" : "180"},
				{"proprety" : "2" , "price" : "120"},
				{"proprety" : "1" , "price" : "600"},
				{"proprety" : "1" , "price" : "400"},
				{"proprety" : "0" , "price" : "200"},
				{"proprety" : "1" , "price" : "1200"},
				{"proprety" : "0" , "price" : "400"}	
			]

		},
		{
			"brand" : "Audi",
			"model" : "A5",
			"anproductie" : "2017",
			"capacitateamotor" : "2000",
			"puteremotor" : "180",
			"tipmotor" : "Disel",
			"tipcutie" : "Automat",
			"tiptract" : "Fata",
			"tipcorp" : "Sedan",
			"pretdefolt" : "37999",
			"img" : "img/a-a5-2018.jpg",
			"color" : [
				{"text" : "black" , "price" : "0"},
				{"text" : "White" , "price" : "0"},
				{"text" : "blue" , "price" : "500"},
				{"text" : "orange" , "price" : "700"},
				{"text" : "red" , "price" : "700"}
			],
			"colorsalon" : [
				{"text" : "black" , "price" : "0"},
				{"text" : "black + scaune red" , "price" : "500"},
				{"text" : "White" , "price" : "200"},
				{"text" : "gray" , "price" : "0"},
				{"text" : "gray + scaune brown" , "price" : "650"},				
				{"text" : "pink" , "price" : "1000"},
				{"text" : "red" , "price" : "1500"}
			],
			"disck" : [
				{"text" : "15" , "price" : "0"},
				{"text" : "16" , "price" : "500"},
				{"text" : "17" , "price" : "1000"}
			],
			"audio" : [
				{"text" : "6 boxe" , "price" : "0"},
				{"text" : "8 boxe" , "price" : "300"},
				{"text" : "6 boxe + 1 subwoofer" , "price" : "200"},
				{"text" : "8 boxe + 1 subwoofer" , "price" : "600"}
			],
			"aer":[
				{"text" : "Conditioner", "price" : "0"},
				{"text" : "Climat control", "price" : "100"},
				{"text" : "Climat control pe 2 canale", "price" : "250"}
			],
			"parbrize" : [
				{"text" : "4 automate" , "price" : "0"}				
			],
			
			"comfort" : [
				{"proprety" : "0" , "price" : "200"},
				{"proprety" : "1" , "price" : "150"},
				{"proprety" : "1" , "price" : "100"},
				{"proprety" : "1" , "price" : "150"},
				{"proprety" : "1" , "price" : "1500"},
				{"proprety" : "2" , "price" : "1000"},
				{"proprety" : "0" , "price" : "700"},
				{"proprety" : "1" , "price" : "880"}
			],
			"securitate" : [
				{"proprety" : "1" , "price" : "245"},
				{"proprety" : "1" , "price" : "180"},
				{"proprety" : "2" , "price" : "120"},
				{"proprety" : "1" , "price" : "600"},
				{"proprety" : "1" , "price" : "400"},
				{"proprety" : "0" , "price" : "200"},
				{"proprety" : "1" , "price" : "1200"},
				{"proprety" : "0" , "price" : "400"}	
			]

		}]
    }
    
  },
  methods: {
      openCloseComandMeniu(val){
        this.showComand = val;
      }
  },
}
</script>


