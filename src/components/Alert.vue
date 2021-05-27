<template>
	<div :id="id" :class="cls">
		<p class="w-full"><slot></slot></p>
		<span @click="handle" class="cursor-pointer">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
			</svg>
		</span>
	</div>
</template>
<script>
const list = [
	{type: 'primary', cls: 'bg-blue-500 text-white shadow flex'},
	{type: 'danger', cls: 'bg-red-500 text-white shadow flex'},
	{type: 'success', cls: 'bg-green-500 text-white shadow flex'},
	{type: 'warning', cls: 'bg-yellow-500 text-white shadow flex'},
	{type: 'dark', cls: 'bg-black text-white shadow flex'},
	{type: 'light', cls: 'bg-white text-black border border-gray-200 flex'},
	{type: 'secondary', cls: 'bg-gray-200 text-black border border-gray-300 flex'},
]
export default{
	name: 'Alert UI',
	props: {
		open: {
			required: true
		},

		type: {
			type: String, required: true
		},
		bg: {
			type: String, required: false
		},
		color: {
			type: String, required: false
		},
		p: {
			type: String, required: false
		},
		size: {
			type: String, required: false
		},
		role: {
			type: String, required: false
		},
	},
	data(){
		return{
			id: 'alert-' + Math.floor(Math.random() * 100000),
			cls: ' '
		}
	},
	beforeMount(){
		this.open == "false" ? this.cls = this.cls.replace('', ' hidden'): false
		if(this.type !== 'custom'){
			for (var i = 0; i < list.length; i++) {
				if(list[i].type == this.type){
					if(this.size == 'sm'){
						this.cls = this.cls.replace('', ' ' + list[i].cls + ' p-2')
					}
					if(this.size == 'md'){
						this.cls = this.cls.replace('', ' ' + list[i].cls + ' p-3')
					}
					if(this.size == 'lg'){
						this.cls = this.cls.replace('', ' ' + list[i].cls + ' p-4')
					}
					else{
						this.cls = this.cls.replace('', ' ' + list[i].cls + ' p-3')
					}
				}
			}
		}else{
			this.cls = this.cls.replace('', ' flex')
			this.bg ? this.cls = this.cls.replace('', ' bg-' + this.bg): this.cls = this.cls.replace('', ' bg-white')
			this.color ? this.cls = this.cls.replace('', ' text-' + this.color): this.cls = this.cls.replace('', ' text-white')
			this.p ? this.cls = this.cls.replace('', ' p-' + this.p): this.cls = this.cls.replace('', ' p-3')
			this.ring ? this.cls = this.cls.replace('', ' focus:ring-' + this.ring): this.cls = this.cls.replace('', ' focus:ring-gray-200')
			this.sizeRing ? this.cls = this.cls.replace('', ' focus:ring-' + this.sizeRing): this.cls = this.cls.replace('', ' focus:ring')
		}
	},
	watch: {
		open(value){
			const el = document.querySelector(`#${this.id}`)
			if(value == 'false'){
				el.classList.remove('flex')
				el.classList.add('hidden')
			}
			else{
				el.classList.remove('hidden')
				el.classList.add('flex')
			}
		}
	},
	methods: {
		handle(){
			const el = document.querySelector(`#${this.id}`)
			if(el.classList.contains('hidden')){
				el.classList.remove('hidden')
				el.classList.add('flex')
			}else{
				el.classList.remove('flex')
				el.classList.add('hidden')
			}
		}
	}
}
</script>