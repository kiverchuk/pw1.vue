<template>
  <div id="app">
    <b-container>
      <Header />
      <router-view/>
      <Footer />
    </b-container>
  </div>
</template>

<script>

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Header,
    Footer
  },
}
</script>
<style>
  .absolute, .absolute2{
	width: 705px;
  min-height: 500px;
  background: wheat;
  position: absolute;
  top: calc(50vh - (500px / 2));
  left: calc(50vw - (700px / 2)); 
  padding: 20px;
  margin-bottom: 75px;
  /* display:none; */
}
.hclas{
  border-bottom: 1px dotted black;
}
.absolute2{
  width: 370px;
  left: calc(50vw - (370px / 2));
}
.defoltoptions{
	margin: 2px;
}
.history{
  margin: 0 !important;
}
#form{
  display: none;
}
.margin{
  margin: 10px;
}
.float{
  float: right;
  cursor: pointer;
}
.floatmargin{
  float: right;
  margin-right: 20px;

}
.disabled + .slider{
  cursor: default;
}
.disabled:not(:checked) + .slider{
  opacity: 0.3;
} 
/*.defchoose{
	margin: 7px;
}*/
.custom-select, button{
	font: 8pt Arial, Helvetica, sans-serif !important;
}
.coshopen{
	float: right;
	padding: 5px;
    /*margin-top: -5px;	*/
}
.logopng{
	width: 55px;
}
.form-check-label{
	color: black !important;
}
.new{
	width: 250px;
	min-height: 100px;
    display: inline-block;
    outline: 1px solid black;
    padding: 5px;
}
.carsimg{
	width: 100px;
    height: 70px;
    float: right;
    margin: 5px;
}
.sizeimg{
	border-radius: 5px;
	width: 200px;
	height: 140px;
	margin-right: 25px;
}

.card-header{
	padding: 5px !important;
}
.card{
	margin-top: 10px;

}
.incosh{
	margin-top: 10px;
}
.list-group-item{
	padding: 5px !important;
}
.switch{
	width: 25px !important;
    height: 10px !important;
    border-radius: 2px;

}
.slider:before{
	height: 7px !important;
    width: 8px !important;
    left: 4px !important;
    bottom: 1px !important;
    border-radius: 5px;
}
.chouserwo{
	width: 100%;
}
.btnclose, .coshclose{
	position: absolute;
    right: 1px;
    top: 1px;
    width: 20px;
    height: 20px;
    padding: 0;
    font-size: large !important;
}
.form-control{
	display: inline-block;
	width: 110px;
	font-size: 10px; 
	height: auto;
	padding: 2px;
}
.tabledefoult{
	margin: 2px;
}
input:checked + .slider:before{
	transform: translateX(10px) !important;
}
p{
	margin: 0px;
}
body {
 font: 8pt Arial, Helvetica, sans-serif; 
 background: #54463d !important; 
 margin: 0; 
}
h2 {
 font-size: 8pt; 
 color: #752641; 
 margin-bottom: 0;
 font-weight: bolder;
}
#container {
 width: 1020px; 
 margin: 0 auto; 
}
header {
 background: #8fa09b; 
 padding: 15px; 
}
header h1 {
 font-size: 20pt; 
 color: #edeed5; 
 margin: 0;
}
article {
 margin-right: 250px; 
 padding: 10px; 
 background: #fff; 
}
article p {
 margin-top: 0.3em 
}
aside {
 float: right; 
 width: 250px; 
 padding: 10px; 
 background: #cbc0b7; 
}
aside a {
 color: #752641; 
}
footer {
 background: #8fa09b; 
 color: #fff; 
 padding: 5px; 
 margin-top: 15px; 
}
header, aside, article, footer {
 display: block; 
} 







/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  float:right;
}

/* Hide default HTML checkbox */
.switch input {display:none;}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input.default:checked + .slider {
  background-color: #444;
}
input.primary:checked + .slider {
  background-color: #2196F3;
}
input.success:checked + .slider {
  background-color: #8bc34a;
}
input.info:checked + .slider {
  background-color: #3de0f5;
}
input.warning:checked + .slider {
  background-color: #FFC107;
}
input.danger:checked + .slider {
  background-color: #f44336;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>