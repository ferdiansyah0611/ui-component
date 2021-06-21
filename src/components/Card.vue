<template>
	<div :class="cls">
		<div class="w-full p-1 sm:p-2 font-bold">
			<slot name="head"></slot>
		</div>
		<div class="w-full text-sm p-1 sm:p-2">
			<slot name="content"></slot>
		</div>
		<div class="w-full p-1 sm:p-2 grid grid-flow-col gap-1">
			<slot name="footer"></slot>
		</div>
	</div>
</template>
<script>
const list = [
	{type: 'primary', cls: 'bg-blue-500 text-white flex flex-wrap p-2 sm:p-3 shadow-md'},
	{type: 'danger', cls: 'bg-red-500 text-white flex flex-wrap p-2 sm:p-3 shadow-md'},
	{type: 'success', cls: 'bg-green-500 text-white flex flex-wrap p-2 sm:p-3 shadow-md'},
	{type: 'warning', cls: 'bg-yellow-500 text-white flex flex-wrap p-2 sm:p-3 shadow-md'},
	{type: 'dark', cls: 'bg-black text-white flex flex-wrap p-2 sm:p-3 shadow-md'},
	{type: 'light', cls: 'bg-white text-black flex flex-wrap p-2 sm:p-3 shadow-md'},
	{type: 'secondary', cls: 'bg-gray-200 text-black flex flex-wrap p-2 sm:p-3 shadow-md'},
]
export default{
	name: 'Cards UI',
	props: {
		type: {
			type: String,
			required: true
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
		ring: {
			type: String, required: false
		},
		sizeRing: {
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
			cls: ' '
		}
	},
	beforeMount(){
		if(this.type !== 'custom'){
			for (var i = 0; i < list.length; i++) {
				if(list[i].type == this.type){
					this.cls = list[i].cls
					break;
				}
			}
		}else{
			this.bg ? this.cls = this.cls.replace('', ' bg-' + this.bg): this.cls = this.cls.replace('', ' bg-white')
			this.color ? this.cls = this.cls.replace('', ' text-' + this.color): this.cls = this.cls.replace('', ' text-white')
			this.p ? this.cls = this.cls.replace('', ' p-' + this.p): this.cls = this.cls.replace('', ' p-3')
		}
	}
}
</script>