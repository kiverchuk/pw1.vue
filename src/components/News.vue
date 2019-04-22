<template>
    <div>
        <article>
            <div class="new" v-for="(car, index) in cars" >
                <img :src="car.img" class="carsimg" />
                <h2>{{car.brand}} {{car.model}}</h2>
                <p>Age : {{car.anproductie}}</p>
                <p>Motor capacity : {{car.capacitateamotor}}</p>
                <p>price: $ {{car.pretdefolt}}</p>
                <button class="btn btn-primary comand" v-on:click="show" :id="index">Comand</button>
            </div>
        </article>
    </div>
</template>

<script>
export default {
    name : "News",
    data() {
        return {
        }
    },
    props: {
        cars : Array,
    },
     methods: {
         show : function(e){
             this.$emit('comandMenuEmit', [true,e.target.id])
         }
         
     }
   
}
</script>
