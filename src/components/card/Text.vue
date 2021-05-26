<template>
	<div :class="cls">
		<img v-if="img && img.position == 'top'" :src="img.url" alt="image" class="max-w-full p-3">
		<router-link :to="{path: link}" class="font-medium mb-2 w-full p-3 pb-0">{{title}}</router-link>
		<img v-if="img && img.position == 'afterTitle'" :src="img.url" alt="image" class="max-w-full p-3">
		<p class="text-xs sm:text-sm w-full p-3 pt-0">{{content}}</p>
		<img v-if="img && img.position == 'afterContent'" :src="img.url" alt="image" class="max-w-full p-3">
		<div v-if="footer" class="w-full flex text-center mt-2 space-x-2 text-sm sm:text-base p-1">
			<router-link v-for="(data, key) in footer" v-bind:key="key" :to="{path: data.link}" :class="data.class + ' p-3 shadow'">{{data.name}}</router-link>
		</div>
	</div>
</template>
<script>
const list = [
	{type: 'primary', cls: 'bg-blue-500 text-white border flex flex-wrap'},
	{type: 'danger', cls: 'bg-red-500 text-white border flex flex-wrap'},
	{type: 'success', cls: 'bg-green-500 text-white border flex flex-wrap'},
	{type: 'warning', cls: 'bg-yellow-500 text-white border flex flex-wrap'},
	{type: 'dark', cls: 'bg-black text-white border flex flex-wrap'},
	{type: 'light', cls: 'bg-white text-black border flex flex-wrap'},
	{type: 'secondary', cls: 'bg-gray-200 text-black border flex flex-wrap'},
]
export default{
	name: 'TextCard UI',
	props: {
		title: {
			type: String,
			required: true
		},
		content: {
			type: String,
			required: true
		},
		link: {
			type: String,
			required: true
		},
		type: {
			type: String,
			required: true
		},
		footer: {
			type: Array,
			required: false
		},
		img: {
			type: Object,
			required: false
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
					if(this.size == 'sm'){
						this.cls = list[i].cls + ' p-2'
					}
					if(this.size == 'md'){
						this.cls = list[i].cls + ' p-3'
					}
					if(this.size == 'lg'){
						this.cls = list[i].cls + ' p-4'
					}
					else{
						this.cls = list[i].cls + ' p-3'
					}
				}
			}
		}else{
			this.cls = this.cls.replace('', ' flex flex-wrap')
			this.bg ? this.cls = this.cls.replace('', ' bg-' + this.bg): this.cls = this.cls.replace('', ' bg-white')
			this.color ? this.cls = this.cls.replace('', ' text-' + this.color): this.cls = this.cls.replace('', ' text-white')
			this.p ? this.cls = this.cls.replace('', ' p-' + this.p): this.cls = this.cls.replace('', ' p-3')
		}
	}
}
</script>