<template>
	<button :class="clasess">{{title}}</button>
</template>
<script>
export default{
	name: 'Button',
	props: {
		title: String,
		classNames: String,
		p: String,
		bg: String,
		color: String,
		ring: String,
	},
	data(){
		return{
			clasess: ' focus:outline-none'
		}
	},
	beforeMount(){
		if(this.bg){
			this.clasess = this.clasess.replace('', ' bg-' + this.bg)
		}
		if(this.color){
			this.clasess = this.clasess.replace('', ' text-' + this.color)
		}
		if(this.p){
			this.clasess = this.clasess.replace('', ' p-' + this.p)
		}
		if(this.ring){
			this.clasess = this.clasess.replace('', ' focus:ring focus:ring-' + this.ring)
		}
		if(this.classNames){
			this.clasess = this.clasess.replace('', ' ' + this.classNames)
		}
		if(!this.classNames){
			this.clasess = this.clasess.replace('', ' p-3 border focus:ring focus:ring-gray-100')
		}
	}
}
</script>