<template>
	<button :type="role ? role: 'button'" :class="cls"><slot></slot></button>
</template>
<script>
const list = [
	{type: 'primary', cls: 'bg-blue-500 text-white focus:outline-none focus:ring-4 focus:ring-blue-300 text-center'},
	{type: 'danger', cls: 'bg-red-500 text-white focus:outline-none focus:ring-4 focus:ring-red-300 text-center'},
	{type: 'success', cls: 'bg-green-500 text-white focus:outline-none focus:ring-4 focus:ring-green-300 text-center'},
	{type: 'warning', cls: 'bg-yellow-500 text-white focus:outline-none focus:ring-4 focus:ring-yellow-300 text-center'},
	{type: 'dark', cls: 'bg-black text-white focus:outline-none focus:ring-4 focus:ring-gray-600'},
	{type: 'light', cls: 'bg-white text-black focus:outline-none focus:ring-4 focus:ring-gray-100 border border-gray-200 text-center'},
	{type: 'secondary', cls: 'bg-gray-200 text-black focus:outline-none focus:ring-4 focus:ring-gray-100 border border-gray-100 text-center'},
]
export default{
	name: 'Button UI',
	props: {
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
			cls: ' text-center focus:outline-none'
		}
	},
	beforeMount(){
		if(this.type !== 'custom'){
			for (var i = 0; i < list.length; i++) {
				if(list[i].type == this.type){
					if(this.size == 'sm'){
						this.cls = list[i].cls + ' p-2'
						break;
					}
					if(this.size == 'md'){
						this.cls = list[i].cls + ' p-3'
						break;
					}
					if(this.size == 'lg'){
						this.cls = list[i].cls + ' p-4'
						break;
					}
					else{
						this.cls = list[i].cls + ' p-3'
						break;
					}
				}
			}
		}else{
			if(this.bg){
				this.cls = this.cls.replace('', ' bg-' + this.bg)
			}
			if(this.color){
				this.cls = this.cls.replace('', ' text-' + this.color)
			}
			if(this.p){
				this.cls = this.cls.replace('', ' p-' + this.p)
			}
			if(this.ring){
				this.cls = this.cls.replace('', ' focus:ring-' + this.ring)
			}
			if(this.sizeRing){
				if(this.sizeRing == "1"){
					this.cls = this.cls.replace('', ' focus:ring')
				}
				else{
					this.cls = this.cls.replace('', ' focus:ring-' + this.sizeRing)
				}
			}
		}
	}
}
</script>