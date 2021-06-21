<template>
	<Button @click="Handle" :type="type">{{title}}</Button>
	<div :id="id" class="bg-black bg-opacity-75 w-full fixed left-0 top-0 transform transition-all duration-200 scale-0 flex flex-wrap h-screen z-50">
		<div v-if="!template" class="bg-white shadow-md border w-full sm:w-2/3 md:w-3/5 p-3 mx-5 sm:mx-auto my-10 relative">
			<slot></slot>
			<div class="border flex p-3 absolute bottom-0 left-0 w-full">
				<Button @click="Handle" type="danger">Close</Button>
			</div>
		</div>
		<div v-else-if="template == 'full'" class="bg-white shadow-md border w-full sm:w-2/3 md:w-3/5 mx-5 sm:mx-auto my-10 relative">
			<div class="border-b flex p-3 absolute top-0 left-0 w-full font-bold bg-whiteS">
				<slot name="header"></slot>
			</div>
			<div class="p-3 mt-12">
				<slot></slot>
			</div>
			<div class="border-t flex p-3 absolute bottom-0 left-0 w-full">
				<Button @click="Handle" type="danger">Close</Button>
			</div>
		</div>
	</div>
</template>
<script>
export default{
	name: 'Modal UI',
	props: {
		type: {
			type: String,
			required: true
		},
		title: {
			type: String,
			required: true
		},
		template: {
			type: String,
			required: false
		},
	},
	data(){
		return{
			id: 'modal-' + Math.floor(Math.random() * 100000),
			open: false
		}
	},

	methods: {
		Handle(e){
			e.preventDefault()
			const el = document.querySelector(`#${this.id}`)
			if(!this.open){
				this.open = true
				el.classList.add('scale-100')
				el.classList.remove('scale-0')
			}else{
				this.open = false
				el.classList.remove('scale-100')
				el.classList.add('scale-0')
			}
		}
	}
}
</script>