<template>
	<div :id="id">
		<div class="grid grid-flow-col">
			<Button @click="handle" :type="type">{{title}}</Button>
		</div>
		<div class="body w-full h-0 hidden p-3 border transition-all duration-300 bg-white flex flex-wrap">
			<slot></slot>
		</div>
	</div>
</template>
<script>
export default{
	name: 'Collapse UI',
	props: {
		type: {
			type: String,
			required: true
		},
		title: {
			type: String,
			required: true
		},
	},
	data(){
		return{
			id: 'tabs-' + Math.floor(Math.random() * 100000)
		}
	},
	methods: {
		handle(e){
			e.preventDefault()
			const el = document.querySelector(`#${this.id}>.body`)
			if(el.classList.contains('h-0')){
				el.classList.remove('h-0', 'hidden')
				el.classList.add('h-auto')
			}else{
				el.classList.add('h-0', 'hidden')
				el.classList.remove('h-auto')
			}
		}
	}
}
</script>