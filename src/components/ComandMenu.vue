<template>
    <div>
       <div class="absolute">
   	<b-button class="btnclose" v-on:click="hidden">X</b-button>
   		<b-img :src="'~' + car.img" class="carsimg sizeimg carimg" />
   		<h2><span class="brand">{{car.brand}}</span>
   			<span class="model">{{car.model}}</span></h2>
   		<table>
   			<tr>
   				<td>
   					<table class="tabledefoult">
   						<tr>
   							<td>
   								<span class="defoltoptions">An productie: </span>
   							</td>
   							<td>
   								<span class="age">{{car.anproductie}}</span>
   							</td>
   						</tr>
   						<tr>
   							<td>
   								<span class="defoltoptions">Capacitatea motorului: </span>
   							</td>
   							<td>
   								<span class="motorcapacity">{{car.capacitateamotor}}</span>
   							</td>
   						</tr>
   						<tr>
   							<td>
   								<span class="defoltoptions">Puterea motorului(H.P.): </span>
   							</td>
   							<td>
   								<span class="motorputere">{{car.puteremotor}}</span>
   							</td>
   						</tr>
   						<tr>
   							<td>
   								<span class="defoltoptions">Tip combustibil: </span>
   							</td>
   							<td>
   								<span class="motortoplivo">{{car.tipmotor}}</span>
   							</td>
   						</tr>
   						<tr>
   							<td>
   								<span class="defoltoptions">Tipul cutiei: </span>
   							</td>
   							<td>
   								<span class="motorcutie">{{car.tipcutie}}</span>
   							</td>
   						</tr>
   						<tr>
   							<td>
   								<span class="defoltoptions">Tractiunea: </span>
   							</td>
   							<td>
   								<span class="tractiunea">{{car.tiptract}}</span>
   							</td>
   						</tr>
   						<tr>
   							<td >
   								<span class="defoltoptions">Tip corp: </span>
   							</td>
   							<td>
   								<span class="carcorp">{{car.tipcorp}}</span>
   							</td>
   						</tr>
   						<tr>
   							<td>
   								<span class="defoltoptions">Pretu defoult: </span>
   							</td>
   							<td>
   								<b>$<span class="pretdefoult">{{car.pretdefolt}}</span></b>
   							</td>
   						</tr>
   					</table>

   				</td>
   				<td>
	<table class="tablechanch">
			<tr>
				<td>
					<div class="defoltoptions">Culoarea: </div>
				</td>
				<td>
					<b-form-select class="form-control" id="color" v-model="dataListener[0][0]">
						<option v-for="(option, index) in car.color" :value="option.price">{{option.text}} {{setPrice(option.price)}}</option>
				</b-form-select>   		
				</td>
			</tr>
			<tr>
				<td>
					<div class="defoltoptions">Culoarea salon: </div>
				</td>
				<td>
					<b-form-select class="form-control" id="colorin" v-model="dataListener[0][1]">
						<option v-for="(option, index) in car.colorsalon" :value="option.price">{{option.text}} {{setPrice(option.price)}}</option>						
				</b-form-select>   		
				</td>
			</tr>
			<tr>
				<td>
					<div class="defoltoptions">Discuri: </div>
				</td>
				<td>
					<b-form-select class="form-control" id="discuri" v-model="dataListener[0][2]"> 
						<option v-for="(option, index) in car.disck" :value="option.price">{{option.text}} {{setPrice(option.price)}}</option>						
				</b-form-select>   		
				</td>
			</tr>
			<tr>
				<td>
					<div class="defoltoptions">Sistem audio: </div>
				</td>
				<td>
					<b-form-select class="form-control" id="audio" v-model="dataListener[0][3]">
						<option v-for="(option, index) in car.audio" :value="option.price">{{option.text}} {{setPrice(option.price)}}</option>						
				</b-form-select>   		
				</td>
			</tr>
			<tr>
				<td>
					<div class="defoltoptions">sistem conditionare: </div>
				</td>
				<td>
					<b-form-select class="form-control" id="aer" v-model="dataListener[0][4]">
						<option v-for="(option, index) in car.aer" :value="option.price">{{option.text}} {{setPrice(option.price)}}</option>						
				</b-form-select>   		
				</td>
			</tr>
			<tr>
				<td>
					<div class="defoltoptions">Deschiderea parbrizelor: </div>
				</td>
				<td>
					<b-form-select class="form-control" id="parbrize" v-model="dataListener[0][5]">
						<option v-for="(option, index) in car.parbrize" :value="option.price">{{option.text}} {{setPrice(option.price)}}</option>						
				</b-form-select>   		
				</td>
			</tr>
		</table>
	</td>
	</tr>
	</table>

	<div class="row chouserwo">	
		<div class="col-lg-6">
			<div class="card" >
				<div class="card-header">Comfort</div>            
				<ul class="list-group list-group-flush">                   
					<li class="list-group-item" v-for="(option, index) in car.comfort">
						<label class="switch" >
							<b-form-checkbox  v-model="dataListener[1][index]" :disabled="isEnableComfort(index)"   />
						</label>
						{{data_comfort[index]}}
					</li>
					<!--<li class="list-group-item">
						<label class="switch">
							<b-form-checkbox id="comfort2" :value="car.comfort[1].price" unchecked-value="0"/>
							
						</label>
						Scaune cu incalzire
					</li>
					<li class="list-group-item">
						<label class="switch">
							<input type="checkbox" class="primary" id="comfort3" :value="car.comfort[2].price">
							<span class="slider"></span>
						</label>
						Oglinzi laterale cu incalzire
					</li>
					<li class="list-group-item">
						<label class="switch">
							<input type="checkbox" class="primary" id="comfort4" :value="car.comfort[3].price">
							<span class="slider"></span>
						</label>
						Scaune cu electro regulare
					</li>
					<li class="list-group-item">
						<label class="switch">
							<input type="checkbox" class="primary" id="comfort5" :value="car.comfort[4].price">
							<span class="slider"></span>
						</label>
						Piele interior
					</li>
					<li class="list-group-item">
						<label class="switch">
							<input type="checkbox" class="primary" id="comfort6" :value="car.comfort[5].price">
							<span class="slider"></span>
						</label>
						Sistem de navigare
					</li>
					<li class="list-group-item">
						<label class="switch">
							<input type="checkbox" class="primary" id="comfort7" :value="car.comfort[6].price">
							<span class="slider"></span>
						</label>
						Controlu vitezii de cruiza
					</li>
					<li class="list-group-item">
						<label class="switch">
							<input type="checkbox" class="primary" id="comfort8" :value="car.comfort[7].price">
							<span class="slider"></span>
						</label>
						liuk
					</li> !-->                
				</ul>
			</div>
		</div>
		<div class="col-lg-6">
			<div class="card" >
				<div class="card-header">Securitatea</div>            
					<ul class="list-group list-group-flush">                   
						<li class="list-group-item" v-for="(option, index) in car.securitate">
						<label class="switch" >
							<b-form-checkbox  v-model="dataListener[2][index]" :disabled="isEnableSecuritate(index)"   />
						</label>
						{{data_securitate[index]}}
					</li>
						<!--<li class="list-group-item">
							<label class="switch">
								<input type="checkbox" class="primary" id="secure2">
								<span class="slider"></span>
							</label>
							Sensor ploaie
						</li>
						<li class="list-group-item">
							<label class="switch">
								<input type="checkbox" class="primary" id="secure3">
								<span class="slider"></span>
							</label>
							Sensor parcare
						</li>
						<li class="list-group-item">
							<label class="switch">
								<input type="checkbox" class="primary" id="secure4">
								<span class="slider"></span>
							</label>
							Airbag-uri
						</li>
						<li class="list-group-item">
							<label class="switch">
								<input type="checkbox" class="primary" id="secure5">
								<span class="slider"></span>
							</label>
							Anvelope de iarna
						</li>
						<li class="list-group-item">
							<label class="switch">
								<input type="checkbox" class="primary" id="secure6">
								<span class="slider"></span>
							</label>
							Faruri xenon
						</li>
						<li class="list-group-item">
							<label class="switch">
								<input type="checkbox" class="primary" id="secure7">
								<span class="slider"></span>
							</label>
							Controlu tractiunii
						</li>
						<li class="list-group-item">
							<label class="switch">
								<input type="checkbox" class="primary" id="secure8">
								<span class="slider"></span>
							</label>
							Sistemu de stabilizare
						</li> !-->                
					</ul>
				</div>
			</div>
		</div>
		<h1>$ <span class="finalprice" >{{pretTotal}}</span></h1>			
		<button class="btn btn-primary incosh">Adauga in cosh</button>
	</div>
    </div>
</template>

<script>
export default {
    name : "ComandMenu",
    props: {
		car : {},		
	},
	data() {
		return {
			dataListener : [[], [], []],
			data_comfort : ["Led luminatia in salon", "Scaune cu incalzire", "Oglinzi laterale cu incalzire", "Scaune cu electro regulare", "Piele interior", "Sistem de navigare", "Controlu vitezii de cruiza", "liuk"],
			data_securitate : ["ABS", "Sensor ploaie", "Sensor parcare", "Airbag-uri", "Anvelope de iarna", "Faruri xenon", "Controlu tractiunii", "Sistemu de stabilizare"]
}
	},
	computed:{
		pretTotal: function(){
			var temp = 0
			for(let i = 0; i < 8; i++){
				if (this.dataListener[1][i])
					 temp += parseInt(this.car.comfort[i].price)
				if (this.dataListener[2][i])
					 temp += parseInt(this.car.securitate[i].price)
			 }
			for(let i = 0; i < 6; i++)
				temp += parseInt(this.dataListener[0][i])
			return parseInt(this.car.pretdefolt) + temp
		}
	},
    methods: {
         hidden : function(){
             this.$emit('comandMenuEmit', [false])
		 }, 
		 setPrice : function(price){
			 return (price != 0)? "$ " + price : ""
		 },
		 isEnableComfort: function(val){
				 return (this.car.comfort[val].proprety == 0)? false : true
		 } , 
		 isEnableSecuritate: function(val){

				return (this.car.securitate[val].proprety == 0)? false : true
		 }      
	 },
	 created() {
		for(let i = 0; i < 8; i++){			 
			this.dataListener[1][i] = (this.car.comfort[i].proprety == 1) ? true : false;
			this.dataListener[2][i] = (this.car.securitate[i].proprety == 1) ? true : false;
		}
		for(let i = 0; i < 6; i++)
			this.dataListener[0][i] = 0
	 },
	
}
</script>
