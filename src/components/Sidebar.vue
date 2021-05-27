<template>
	<a @click="action" href="/" :class="'p-' + p">
		<slot name="icon"></slot>
	</a>
	<div :id="id" class="menu">
		<div @click="action" class="opacity bg-black bg-opacity-50 h-screen top-0 left-0 w-full z-30 fixed overflow-auto cursor-pointer hidden"></div>
		<div v-if="this.post == 'right' || this.post == 'left'" :class="sidebar.classes">
			<div class="bg-white w-48 h-screen overflow-auto text-black">
				<div class="p-3 font-bold text-center">
					<slot name="head"></slot>
				</div>
				<div class="flex flex-wrap">
					<slot name="link"></slot>
				</div>
			</div>
		</div>
		<div v-if="this.post == 'bottom' || this.post == 'top'" :class="sidebar.classes">
			<div class="bg-white w-full h-auto overflow-auto text-black">
				<div class="p-3 font-bold text-center">
					<slot name="head"></slot>
				</div>
				<div class="flex flex-wrap">
					<slot name="link"></slot>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default{
	name: 'Sidebar UI',
	props: {
		post: {
			type: String,
			required: true
		},
		p: {
			type: String,
			required: true
		},
	},
	data(){
		return{
			id: 'id-' + Math.floor(Math.random() * 100000),
			open: false,
			sidebar: {
				classes: ' body'
			},
		}
	},
	beforeMount(){
		if(this.post == 'right'){
			this.$data.sidebar.classes = this.$data.sidebar.classes.replace('', ' fixed z-40 top-0 transition-all duration-500 right-0 mr-full')
		}
		if(this.post == 'left'){
			this.$data.sidebar.classes = this.$data.sidebar.classes.replace('', ' fixed z-40 top-0 transition-all duration-500 left-0 ml-full')
		}
		if(this.post == 'top'){
			this.$data.sidebar.classes = this.$data.sidebar.classes.replace('', ' fixed z-40 transition-all duration-500 top-0 left-0 mt-full')
		}
		if(this.post == 'bottom'){
			this.$data.sidebar.classes = this.$data.sidebar.classes.replace('', ' fixed z-40 transition-all duration-500 bottom-0 left-0 mb-full')
		}
	},
	methods: {
		action(e){
			e.preventDefault()
			const opacity = document.querySelector(`#${this.id}>.opacity`)
			const body = document.querySelector(`#${this.id}>.body`)
			if(!this.open){
				this.open = true
				opacity.classList.remove('hidden')
				if(this.post == 'right'){
					body.classList.remove('mr-full')
				}
				if(this.post == 'left'){
					body.classList.remove('ml-full')
				}
				if(this.post == 'top'){
					body.classList.remove('mt-full')
				}
				if(this.post == 'bottom'){
					body.classList.remove('mb-full')
				}
			}else{
				this.open = false
				opacity.classList.add('hidden')
				if(this.post == 'right'){
					body.classList.add('mr-full')
				}
				if(this.post == 'left'){
					body.classList.add('ml-full')
				}
				if(this.post == 'top'){
					body.classList.add('mt-full')
				}
				if(this.post == 'bottom'){
					body.classList.add('mb-full')
				}
			}
		}
	}
}
</script>
<style>
.mr-full{
	margin-right: -200vh;
}
.ml-full{
	margin-left: -200vh;
}
.mb-full{
	margin-bottom: -200vh;
}
.mt-full{
	margin-top: -200vh;
}
</style>