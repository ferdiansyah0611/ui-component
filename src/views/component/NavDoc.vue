<template>
	<div>
		<h5 class="mb-3 font-bold text-2xl"># Nav Component</h5>
		<p class="text-xl tracking-wide p-2">Documentation and examples for how to use UI Component included navigation components.</p>
		<div class="p-2 w-full" v-for="(data, key) in nav" v-bind:key="key">
			<Navbar :type="data.name">
				<template v-slot:navs>
					<div class="w-1/2 flex justify-start">
						<router-link :class="data.cls" to="/">My App</router-link>
						<router-link :class="data.cls" to="/">Home</router-link>
						<router-link :class="data.cls" to="/">About</router-link>
					</div>
					<div class="w-1/2 flex justify-end">
						<router-link :class="data.cls" to="/">Github</router-link>
					</div>
				</template>
				<template v-slot:mobile>
					<div class="w-1/2 flex justify-start">
						<router-link :class="data.cls" to="/">My App</router-link>
					</div>
					<div class="w-1/2 flex justify-end">
						<router-link :class="data.cls" to="/">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
							</svg>
						</router-link>
					</div>
				</template>
			</Navbar>
		</div>
		<div class="m-2 p-2 border bg-white">
			<h5 class="font-bold text-xl md:text-2xl p-2">Example Code</h5>
			<textarea class="w-full min-h-screen overflow-auto focus:outline-none text-sm">
<Navbar :type="primary">
	<template v-slot:navs>
		<div class="w-1/2 flex justify-start">
			<router-link class="p-4 font-bold hover:bg-blue-600" to="/">My App</router-link>
			<router-link class="p-4 font-bold hover:bg-blue-600" to="/">Home</router-link>
			<router-link class="p-4 font-bold hover:bg-blue-600" to="/">About</router-link>
		</div>
		<div class="w-1/2 flex justify-end">
			<router-link class="p-4 font-bold hover:bg-blue-600" to="/">Github</router-link>
		</div>
	</template>
	<template v-slot:mobile>
		<div class="w-1/2 flex justify-start">
			<router-link class="p-4 font-bold hover:bg-blue-600" to="/">My App</router-link>
		</div>
		<div class="w-1/2 flex justify-end">
			<router-link class="p-4 font-bold hover:bg-blue-600" to="/">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
				</svg>
			</router-link>
		</div>
	</template>
</Navbar>
			</textarea>
		</div>
	</div>
</template>
<script>
export default{
	data(){
		return{
			nav: [
				{name: 'primary', cls: 'p-4 font-bold hover:bg-blue-600'},
				{name: 'danger', cls: 'p-4 font-bold hover:bg-red-600'},
				{name: 'success', cls: 'p-4 font-bold hover:bg-green-600'},
				{name: 'warning', cls: 'p-4 font-bold hover:bg-yellow-600'},
				{name: 'dark', cls: 'p-4 font-bold hover:bg-gray-600'},
				{name: 'light', cls: 'p-4 font-bold hover:bg-gray-200'},
				{name: 'secondary', cls: 'p-4 font-bold hover:bg-gray-600'},
			]
		}
	},
	created(){
		document.title = 'Nav Component | UI Component Docs'
	}
}
</script>