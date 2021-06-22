<template>
	<Navbar type="top-fixed-primary">
		<template v-slot:navs>
			<div class="w-1/2 flex justify-start">
				<router-link class="p-4 font-bold hover:bg-blue-600" to="/">UI Component</router-link>
				<router-link class="p-4 font-bold hover:bg-blue-600" to="/">Docs</router-link>
			</div>
			<div class="w-1/2 flex justify-end">
				<a class="p-4 font-bold hover:bg-blue-600" href="https://github.com/ferdiansyah0611">Github</a>
				<router-link class="p-4 font-bold hover:bg-blue-600" to="/">Donate</router-link>
			</div>
		</template>
		<template v-slot:mobile>
			<div class="w-1/2 flex justify-start">
				<router-link class="p-4 font-bold hover:bg-blue-600" to="/">UI Component</router-link>
			</div>
			<div class="w-1/2 flex justify-end">
				<Sidebar post="right" p="4">
					<template v-slot:head>
						<h5>UI Component</h5>
					</template>
					<template v-slot:link>
						<router-link class="p-3 text-black hover:bg-gray-200 w-full text-center" to="/">Home</router-link>
						<Collapse border="no-border" class="w-full font-medium text-center" type="light" title="Component">
							<router-link to="/component/alert" class="p-3 py-1 w-full hover:bg-gray-200 transition-all duration-300" active-class="bg-gray-100">Alert</router-link>
							<router-link to="/component/button" class="p-3 py-1 w-full hover:bg-gray-200 transition-all duration-300" active-class="bg-gray-100">Button</router-link>
							<router-link to="/component/card" class="p-3 py-1 w-full hover:bg-gray-200 transition-all duration-300" active-class="bg-gray-100">Card</router-link>
							<router-link to="/component/dropdown" class="p-3 py-1 w-full hover:bg-gray-200 transition-all duration-300" active-class="bg-gray-100">Dropdown</router-link>
							<router-link to="/component/form" class="p-3 py-1 w-full hover:bg-gray-200 transition-all duration-300" active-class="bg-gray-100">Form</router-link>
							<router-link to="/component/nav" class="p-3 py-1 w-full hover:bg-gray-200 transition-all duration-300" active-class="bg-gray-100">Nav</router-link>
							<router-link to="/component/sidebar" class="p-3 py-1 w-full hover:bg-gray-200 transition-all duration-300" active-class="bg-gray-100">Sidebar</router-link>
							<router-link to="/component/tabs" class="p-3 py-1 w-full hover:bg-gray-200 transition-all duration-300" active-class="bg-gray-100">Tabs</router-link>
							<router-link to="/component/collapse" class="p-3 py-1 w-full hover:bg-gray-200 transition-all duration-300" active-class="bg-gray-100">Collapse</router-link>
							<router-link to="/component/modal" class="p-3 py-1 w-full hover:bg-gray-200 transition-all duration-300" active-class="bg-gray-100">Modal</router-link>
						</Collapse>
						<Collapse class="w-full font-medium text-center" type="light" title="Page">
							<router-link to="/page/firebase-login" class="p-3 py-1 w-full hover:bg-gray-200 transition-all duration-300" active-class="bg-gray-100">Firebase Login</router-link>
							<router-link to="/page/firebase-register" class="p-3 py-1 w-full hover:bg-gray-200 transition-all duration-300" active-class="bg-gray-100">Firebase Register</router-link>
						</Collapse>
						<a class="p-3 text-black hover:bg-gray-200 w-full text-center" href="https://github.com/ferdiansyah0611">Github</a>
						<router-link class="p-3 text-black hover:bg-gray-200 w-full text-center" to="/">Donate</router-link>
					</template>
					<template v-slot:icon>
						<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					</template>
				</Sidebar>
			</div>
		</template>
	</Navbar>
	<div class="mt-14 sm:mt-8 p-3 sm:p-8 bg-gray-100">
		<div class="flex flex-wrap">
			<div class="hidden md:block md:w-1/5 md:fixed left-0 md:z-10 md:top-0 md:h-screen md:pt-14">
				<div class="border pb-3 flex flex-wrap overflow-auto bg-white" id="left-menu">
					<h5 class="font-bold p-3">Documentation</h5>
					<router-link to="/docs/getting-started" class="p-3 py-1 w-full hover:bg-gray-200 transition-all duration-300" active-class="bg-gray-100">Getting Started</router-link>
					<h5 class="font-bold p-3">Components</h5>
					<router-link to="/component/alert" class="p-3 py-1 w-full hover:bg-gray-200 transition-all duration-300" active-class="bg-gray-100">Alert</router-link>
					<router-link to="/component/button" class="p-3 py-1 w-full hover:bg-gray-200 transition-all duration-300" active-class="bg-gray-100">Button</router-link>
					<router-link to="/component/card" class="p-3 py-1 w-full hover:bg-gray-200 transition-all duration-300" active-class="bg-gray-100">Card</router-link>
					<router-link to="/component/dropdown" class="p-3 py-1 w-full hover:bg-gray-200 transition-all duration-300" active-class="bg-gray-100">Dropdown</router-link>
					<router-link to="/component/form" class="p-3 py-1 w-full hover:bg-gray-200 transition-all duration-300" active-class="bg-gray-100">Form</router-link>
					<router-link to="/component/nav" class="p-3 py-1 w-full hover:bg-gray-200 transition-all duration-300" active-class="bg-gray-100">Nav</router-link>
					<router-link to="/component/sidebar" class="p-3 py-1 w-full hover:bg-gray-200 transition-all duration-300" active-class="bg-gray-100">Sidebar</router-link>
					<router-link to="/component/tabs" class="p-3 py-1 w-full hover:bg-gray-200 transition-all duration-300" active-class="bg-gray-100">Tabs</router-link>
					<router-link to="/component/collapse" class="p-3 py-1 w-full hover:bg-gray-200 transition-all duration-300" active-class="bg-gray-100">Collapse</router-link>
					<router-link to="/component/modal" class="p-3 py-1 w-full hover:bg-gray-200 transition-all duration-300" active-class="bg-gray-100">Modal</router-link>
					<router-link to="/component/footer" class="p-3 py-1 w-full hover:bg-gray-200 transition-all duration-300" active-class="bg-gray-100">Footer</router-link>
					<h5 class="font-bold p-3">Page</h5>
					<router-link to="/page/firebase-login" class="p-3 py-1 w-full hover:bg-gray-200 transition-all duration-300" active-class="bg-gray-100">Firebase > Login</router-link>
					<router-link to="/page/firebase-register" class="p-3 py-1 w-full hover:bg-gray-200 transition-all duration-300" active-class="bg-gray-100">Firebase > Register</router-link>
				</div>
				<h5 class="text-center mt-2 hidden md:block">&copy; {{new Date().getFullYear()}} ferdiansyah0611</h5>
			</div>
			<div class="w-full md:w-1/5 mb-2"></div>
			<div class="w-full md:w-4/5">
				<router-view/>
				<div class="mt-4">
					<Footer pos="default" color="bg-indigo-400">
						<template v-slot:left>
							<p class="p-4">&copy; {{new Date().getFullYear()}} Ferdiansyah0611 Corporation</p>
						</template>
						<template v-slot:right>
							<a href="/" class="p-4 hover:bg-indigo-500">Privacy & Policy</a>
							<a href="." class="p-4 hover:bg-indigo-500">MIT License</a>
						</template>
					</Footer>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default{
	name: 'App',
}
</script>
<style>
@media (min-width: 768px){
	#left-menu{
		height: 91.7vh;
	}
}
</style>