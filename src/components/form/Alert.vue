<template>
	<div v-if="type == 'error'" :id="'alert-' + id" data-ui="alert" class="bg-red-500 p-3 shadow text-white flex">
		<p class="w-full">{{txt}}</p>
		<span @click="handle" class="cursor-pointer">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
			</svg>
		</span>
	</div>
	<div v-if="type == 'success'" :id="'alert-' + id" data-ui="alert" class="bg-green-500 p-3 shadow text-white flex">
		<p class="w-full">{{txt}}</p>
		<span @click="handle" class="cursor-pointer">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
			</svg>
		</span>
	</div>
	<div v-if="type == 'warning'" :id="'alert-' + id" data-ui="alert" class="bg-yellow-500 p-3 shadow text-white flex">
		<p class="w-full">{{txt}}</p>
		<span @click="handle" class="cursor-pointer">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
			</svg>
		</span>
	</div>
	<div v-if="type == 'dark'" :id="'alert-' + id" data-ui="alert" class="bg-black p-3 shadow text-white flex">
		<p class="w-full">{{txt}}</p>
		<span @click="handle" class="cursor-pointer">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
			</svg>
		</span>
	</div>
	<div v-if="type == 'light'" :id="'alert-' + id" data-ui="alert" class="bg-white p-3 shadow text-black flex border">
		<p class="w-full">{{txt}}</p>
		<span @click="handle" class="cursor-pointer">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
			</svg>
		</span>
	</div>
	<div v-if="type == 'secondary'" :id="'alert-' + id" data-ui="alert" class="bg-gray-500 p-3 shadow text-white flex">
		<p class="w-full">{{txt}}</p>
		<span @click="handle" class="cursor-pointer">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
			</svg>
		</span>
	</div>
</template>
<script>
export default{
	name: 'Alert',
	emits: ['update:txt'],
	props: {
		txt: {
			type: String,
			required: true
		},
		open: {
			type: Boolean,
			required: true
		},
		type: {
			type: String,
			required: true
		}
	},
	data(){
		return{
			id: ''
		}
	},
	mounted(){
		this.id = Math.floor(Math.random() * 10000)
	},
	watch: {
		open(value){
			const el = document.querySelector(`#alert-${this.id}`)
			if(value){
				el.classList.remove('hidden')
			}
		}
	},
	methods: {
		handle(){
			const el = document.querySelector(`#alert-${this.id}`)
			if(el.classList.contains('hidden')){
				el.classList.remove('hidden')
			}else{
				el.classList.add('hidden')
			}
		}
	}
}
</script>