<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<script>

	export default {
		name: 'App',
		data(){
			return {
				
			}
		},
		created(){
			
		}
	}
</script>

<style>
	#app {
		width: 100%;
		height: 100%;
		position: absolute;
		overflow: hidden;
	}
	
	/*.vanNavBars {
		position: fixed;
		width: 100%;
		top: 0px;
	}*/
	.app-container{
		position: fixed;
		width:100%;
		height:100%;
		overflow-x: hidden;
		overflow-y: hidden;
		top:0px;
	}
</style>