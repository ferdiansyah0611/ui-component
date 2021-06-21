<template>
	<button :type="role ? role: 'button'" :class="cls"><slot></slot></button>
</template>
<script>
const list = [
	{type: 'primary', cls: 'bg-blue-500 text-white focus:outline-none focus:ring-4 focus:ring-blue-200 text-center hover:bg-blue-600 transition-all duration-500'},
	{type: 'danger', cls: 'bg-red-500 text-white focus:outline-none focus:ring-4 focus:ring-red-200 text-center hover:bg-red-600 transition-all duration-500'},
	{type: 'success', cls: 'bg-green-500 text-white focus:outline-none focus:ring-4 focus:ring-green-200 text-center hover:bg-green-600 transition-all duration-500'},
	{type: 'warning', cls: 'bg-yellow-500 text-white focus:outline-none focus:ring-4 focus:ring-yellow-200 text-center hover:bg-yellow-600 transition-all duration-500'},
	{type: 'dark', cls: 'bg-black text-white focus:outline-none focus:ring-4 focus:ring-gray-600 hover:bg-gray-700 transition-all duration-500'},
	{type: 'light', cls: 'bg-white text-black focus:outline-none focus:ring-4 focus:ring-gray-100 text-center hover:bg-gray-200 transition-all duration-500'},
	{type: 'secondary', cls: 'bg-gray-200 text-black focus:outline-none focus:ring-4 focus:ring-gray-200 border border-gray-100 text-center hover:bg-gray-300 transition-all duration-500'},
	{type: 'outline-primary', cls: 'bg-white text-black focus:outline-none focus:ring-4 focus:ring-blue-200 focus:bg-blue-500 hover:bg-blue-500 border-2 hover:text-white focus:text-white border-blue-500 text-center transition-all duration-500'},
	{type: 'outline-danger', cls: 'bg-white text-black focus:outline-none focus:ring-4 focus:ring-red-200 focus:bg-red-500 hover:bg-red-500 border-2 hover:text-white focus:text-white border-red-500 text-center transition-all duration-500'},
	{type: 'outline-success', cls: 'bg-white text-black focus:outline-none focus:ring-4 focus:ring-green-200 focus:bg-green-500 hover:bg-green-500 border-2 hover:text-white focus:text-white border-green-500 text-center transition-all duration-500'},
	{type: 'outline-warning', cls: 'bg-white text-black focus:outline-none focus:ring-4 focus:ring-yellow-200 focus:bg-yellow-500 hover:bg-yellow-500 border-2 hover:text-white focus:text-white border-yellow-500 text-center transition-all duration-500'},
	{type: 'outline-dark', cls: 'bg-white text-black focus:outline-none focus:ring-4 focus:ring-gray-600 focus:bg-black hover:bg-black border-2 hover:text-white focus:text-white border-black text-center transition-all duration-500'},
	{type: 'outline-light', cls: 'bg-white text-black focus:outline-none focus:ring-4 focus:ring-gray-100 focus:bg-gray-300 hover:bg-gray-300 border-2 hover:text-white focus:text-white border-gray-300 text-center transition-all duration-500'},
	{type: 'outline-secondary', cls: 'bg-white text-black focus:outline-none focus:ring-4 focus:ring-gray-200 focus:bg-gray-500 hover:bg-gray-500 border-2 hover:text-white focus:text-white border-gray-500 text-center transition-all duration-500'},
]
export default{
	name: 'Button UI',
	props: {
		type: {
			type: String, required: true
		},
		config: {
			type: Object, required: false
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
			if(this.config){
				if(this.config.noBorder) {
					this.cls = this.cls.replace('border', 'border-0')
				}
				if(this.config.p) {
					this.cls = this.cls.replace(/p-[0-9]+/, this.config.p)
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