<template>
	<div v-if="theme == 'light'" class="theme-light-navbar">
		<div v-if="position == 'fixed-top'" class="bg-white fixed z-20 top-0 left-0 flex shadow w-full">
			<div class="w-1/2">
				<div v-if="linkLeft.length >= 1" class="flex justify-start">
					<router-link v-for="(data, key) in linkLeft" v-bind:key="key" :class="'p-' + p + ' font-' + fontType +' hover:bg-gray-100 transition-all duration-200 text-black hidden md:block'" :to="{path: data.link}">{{data.name}}</router-link>
					<router-link :class="'p-' + p + ' font-' + fontType +' hover:bg-gray-100 transition-all duration-200 text-black block md:hidden'" :to="{path: linkLeft[0].link}">{{linkLeft[0].name}}</router-link>
				</div>
			</div>
			<div class="w-1/2">
				<div v-if="linkRight.length >= 1" class="flex justify-end">
					<router-link v-for="(data, key) in linkRight" v-bind:key="key" :class="'p-' + p + ' font-' + fontType +' hover:bg-gray-100 transition-all duration-200 text-black hidden md:block'" :to="{path: data.link}">{{data.name}}</router-link>
					<a @click="action" href="/" :class="classLink + ' p-' + p + ' block md:hidden'">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					</a>
				</div>
			</div>
		</div>
		<div v-if="position == 'fixed-bottom'" class="bg-white fixed z-20 bottom-0 left-0 flex shadow w-full">
			<div class="w-1/2">
				<div v-if="linkLeft.length >= 1" class="flex justify-start">
					<router-link v-for="(data, key) in linkLeft" v-bind:key="key" :class="'p-' + p + ' font-' + fontType +' hover:bg-gray-100 transition-all duration-200 text-black hidden md:block'" :to="{path: data.link}">{{data.name}}</router-link>
					<router-link :class="'p-' + p + ' font-' + fontType +' hover:bg-gray-100 transition-all duration-200 text-black block md:hidden'" :to="{path: linkLeft[0].link}">{{linkLeft[0].name}}</router-link>
				</div>
			</div>
			<div class="w-1/2">
				<div v-if="linkRight.length >= 1" class="flex justify-end">
					<router-link v-for="(data, key) in linkRight" v-bind:key="key" :class="'p-' + p + ' font-' + fontType +' hover:bg-gray-100 transition-all duration-200 text-black hidden md:block'" :to="{path: data.link}">{{data.name}}</router-link>
					<a @click="action" href="/" :class="classLink + ' p-' + p + ' block md:hidden'">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					</a>
				</div>
			</div>
		</div>
	</div>
	<div v-if="theme == 'dark'" class="theme-dark-navbar">
		<div v-if="position == 'fixed-top'" class="bg-black fixed z-20 top-0 left-0 flex shadow w-full">
			<div class="w-1/2">
				<div v-if="linkLeft.length >= 1" class="flex justify-start">
					<router-link v-for="(data, key) in linkLeft" v-bind:key="key" :class="'p-' + p + ' font-' + fontType +' hover:bg-gray-800 transition-all duration-200 text-white hidden md:block'" :to="{path: data.link}">{{data.name}}</router-link>
					<router-link :class="'p-' + p + ' font-' + fontType +' hover:bg-gray-900 transition-all duration-200 text-white block md:hidden'" :to="{path: linkLeft[0].link}">{{linkLeft[0].name}}</router-link>
				</div>
			</div>
			<div class="w-1/2">
				<div v-if="linkRight.length >= 1" class="flex justify-end">
					<router-link v-for="(data, key) in linkRight" v-bind:key="key" :class="'p-' + p + ' font-' + fontType +' hover:bg-gray-800 transition-all duration-200 text-white hidden md:block'" :to="{path: data.link}">{{data.name}}</router-link>
					<a @click="action" href="/" :class="classLink + ' p-' + p + ' block md:hidden'">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					</a>
				</div>
			</div>
		</div>
		<div v-if="position == 'fixed-bottom'" class="bg-black fixed z-20 bottom-0 left-0 flex shadow w-full">
			<div class="w-1/2">
				<div v-if="linkLeft.length >= 1" class="flex justify-start">
					<router-link v-for="(data, key) in linkLeft" v-bind:key="key" :class="'p-' + p + ' font-' + fontType +' hover:bg-gray-800 transition-all duration-200 text-white hidden md:block'" :to="{path: data.link}">{{data.name}}</router-link>
					<router-link :class="'p-' + p + ' font-' + fontType +' hover:bg-gray-900 transition-all duration-200 text-white block md:hidden'" :to="{path: linkLeft[0].link}">{{linkLeft[0].name}}</router-link>
				</div>
			</div>
			<div class="w-1/2">
				<div v-if="linkRight.length >= 1" class="flex justify-end">
					<router-link v-for="(data, key) in linkRight" v-bind:key="key" :class="'p-' + p + ' font-' + fontType +' hover:bg-gray-800 transition-all duration-200 text-white hidden md:block'" :to="{path: data.link}">{{data.name}}</router-link>
					<a @click="action" href="/" :class="classLink + ' p-' + p + ' block md:hidden'">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					</a>
				</div>
			</div>
		</div>
	</div>
	<div v-else-if="bg" class="theme-custom-navbar">
		<div v-if="position == 'fixed-top'" :class="'bg-' + bg + ' fixed z-20 top-0 left-0 flex shadow w-full'">
			<div class="w-1/2">
				<div v-if="linkLeft.length >= 1" class="flex justify-start">
					<router-link v-for="(data, key) in linkLeft" v-bind:key="key" :class="classLink + ' hidden md:block'" :to="{path: data.link}">{{data.name}}</router-link>
					<router-link :class="classLink +' block md:hidden'" :to="{path: linkLeft[0].link}">{{linkLeft[0].name}}</router-link>
				</div>
			</div>
			<div class="w-1/2">
				<div v-if="linkRight.length >= 1" class="flex justify-end">
					<router-link v-for="(data, key) in linkRight" v-bind:key="key" :class="classLink + ' hidden md:block'" :to="{path: data.link}">{{data.name}}</router-link>
					<a @click="action" href="/" :class="classLink + ' block md:hidden'">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					</a>
				</div>
			</div>
		</div>
		<div v-if="position == 'fixed-bottom'" :class="'bg-' + bg + ' fixed z-20 bottom-0 left-0 flex shadow w-full'">
			<div class="w-1/2">
				<div v-if="linkLeft.length >= 1" class="flex justify-start">
					<router-link v-for="(data, key) in linkLeft" v-bind:key="key" :class="classLink + ' hidden md:block'" :to="{path: data.link}">{{data.name}}</router-link>
					<router-link :class="classLink +' block md:hidden'" :to="{path: linkLeft[0].link}">{{linkLeft[0].name}}</router-link>
				</div>
			</div>
			<div class="w-1/2">
				<div v-if="linkRight.length >= 1" class="flex justify-end">
					<router-link v-for="(data, key) in linkRight" v-bind:key="key" :class="classLink + ' hidden md:block'" :to="{path: data.link}">{{data.name}}</router-link>
					<a @click="action" href="/" :class="classLink + ' block md:hidden'">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					</a>
				</div>
			</div>
		</div>
	</div>
	<div class="menu block md:hidden">
		<div @click="action" class="opacity bg-black bg-opacity-50 h-screen top-0 w-full z-30 fixed overflow-auto cursor-pointer hidden"></div>
		<div :class="sidebar.classes">
			<div v-if="!sidebarConfig.width" class="bg-white w-48 h-screen overflow-auto">
				<div class="border-b pb-3 pt-3">
					<h5 class="text-center font-medium">{{sidebarConfig.title}}</h5>
				</div>
				<div class="flex flex-wrap w-full border-b">
					<router-link v-for="(data, key) in linkLeft" v-bind:key="key" class="hover:bg-gray-100 transition-all duration-200 text-black w-full hover:bg-gray-100 p-3" :to="{path: data.link}">{{data.name}}</router-link>
				</div>
				<div class="flex flex-wrap w-full border-b">
					<router-link v-for="(data, key) in linkRight" v-bind:key="key" class="hover:bg-gray-100 transition-all duration-200 text-black w-full hover:bg-gray-100 p-3" :to="{path: data.link}">{{data.name}}</router-link>
				</div>
			</div>
			<div v-else :class="'w-' + sidebarConfig.width + 'bg-white h-screen overflow-auto'">
				<div class="border-b pb-3 pt-3">
					<h5 class="text-center font-medium">{{sidebarConfig.title}}</h5>
				</div>
				<div class="flex flex-wrap w-full border-b">
					<router-link v-for="(data, key) in linkLeft" v-bind:key="key" class="hover:bg-gray-100 transition-all duration-200 text-black w-full hover:bg-gray-100 p-3" :to="{path: data.link}">{{data.name}}</router-link>
				</div>
				<div class="flex flex-wrap w-full border-b">
					<router-link v-for="(data, key) in linkRight" v-bind:key="key" class="hover:bg-gray-100 transition-all duration-200 text-black w-full hover:bg-gray-100 p-3" :to="{path: data.link}">{{data.name}}</router-link>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default{
	name: 'Navbar',
	props: {
		theme: String,
		position: String,
		linkLeft: Array,
		linkRight: Array,
		p: String,
		fontType: String,
		bg: String,

		hoverBg: String,
		color: String,
		sidebarConfig: Object
	},
	data(){
		return{
			classLink: ' transition-all duration-200',
			open: false,
			sidebar: {
				classes: ' body'
			},
			positionNavbar: ''
		}
	},
	beforeMount(){
		let d = this.$data,
			p = this
		if(p.sidebarConfig){
			if(p.sidebarConfig.position == 'rtl'){
				d.sidebar.classes = d.sidebar.classes.replace('', ' fixed z-40 top-0 transition-all duration-300 right-0 mr-full')
			}
			if(p.sidebarConfig.position == 'ltl'){
				d.sidebar.classes = d.sidebar.classes.replace('', ' fixed z-40 top-0 transition-all duration-300 left-0 ml-full')
			}
		}
		if(p.theme == 'dark'){
			p
		}
		if(p.theme == 'light'){
			p
		}else{
			if(p.p){
				d.classLink = d.classLink.replace('', ' p-' + p.p)
			}
			if(p.hoverBg){
				d.classLink = d.classLink.replace('', ' hover:bg-' + p.hoverBg)
			}
			if(p.color){
				d.classLink = d.classLink.replace('', ' text-' + p.color)
			}
			if(p.fontType){
				d.classLink = d.classLink.replace('', ' font-' + p.fontType)
			}
		}
	},
	methods: {
		action(e){
			e.preventDefault()
			const opacity = document.querySelector('.menu>.opacity')
			const body = document.querySelector('.menu>.body')
			const p = this
			if(!this.open){
				this.open = true
				opacity.classList.remove('hidden')
				if(p.sidebarConfig.position == 'rtl'){
					body.classList.remove('mr-full')
				}else{
					body.classList.remove('ml-full')
				}
			}else{
				this.open = false
				opacity.classList.add('hidden')
				if(p.sidebarConfig.position == 'rtl'){
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