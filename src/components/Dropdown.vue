<template>
	<div data-ui="dropdown" class="w-full flex flex-wrap relative">
		<a @click="action" href="/" :class="classNames + ' w-full'">
			{{title}}
		</a>
		<div :class="clasess">
			<router-link v-for="(data, key) in link" v-bind:key="key" :to="{path: data.link}" class="p-2 w-full hover:bg-gray-100 transition-all duration-200 z-10 bg-white">{{data.name}}</router-link>
		</div>
	</div>
</template>
<script>
export default{
	name: 'Dropdown',
	props: {
		title: String,
		link: Array,
		classNames: String,
	},
	data(){
		return{
			clasess: 'hidden',
			open: false
		}
	},
	methods: {
		action(e){
			e.preventDefault()
			if(!this.open){
				this.open = true
				this.clasess = 'flex flex-wrap w-full bg-white p-1 border border-t-0 absolute top-0 left-0 mt-12'
			}else{
				this.open = false
				this.clasess = 'hidden'
			}
		}
	}
}
</script>