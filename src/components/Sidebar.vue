<template>
	<a @click="action" href="/" :class="'p-' + p">
		<slot name="icon"></slot>
	</a>
	<div class="menu">
		<div @click="action" class="opacity bg-black bg-opacity-50 h-screen top-0 left-0 w-full z-30 fixed overflow-auto cursor-pointer hidden"></div>
		<div :class="sidebar.classes">
			<div class="bg-white w-48 h-screen overflow-auto text-black">
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
	},
	methods: {
		action(e){
			e.preventDefault()
			const opacity = document.querySelector('.menu>.opacity')
			const body = document.querySelector('.menu>.body')
			if(!this.open){
				this.open = true
				opacity.classList.remove('hidden')
				if(this.post == 'right'){
					body.classList.remove('mr-full')
				}else{
					body.classList.remove('ml-full')
				}
			}else{
				this.open = false
				opacity.classList.add('hidden')
				if(this.post == 'right'){
					body.classList.add('mr-full')
				}else{
					body.classList.add('ml-full')
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
</style>