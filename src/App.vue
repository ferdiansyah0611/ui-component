<template>
	<Navbars type="top-primary">
		<template v-slot:navs>
			<div class="w-1/2 flex justify-start">
				<router-link class="p-4 font-bold hover:bg-blue-600" to="/">UI Component</router-link>
				<router-link class="p-4 font-bold hover:bg-blue-600" to="/">Getting Started</router-link>
				<router-link class="p-4 font-bold hover:bg-blue-600" to="/">Docs</router-link>
			</div>
			<div class="w-1/2 flex justify-end">
				<router-link class="p-4 font-bold hover:bg-blue-600" to="/">Github</router-link>
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
						<router-link class="p-3 font-medium text-black hover:bg-gray-200 w-full" to="/">Home</router-link>
						<router-link class="p-3 font-medium text-black hover:bg-gray-200 w-full" to="/">Component</router-link>
						<router-link class="p-3 font-medium text-black hover:bg-gray-200 w-full" to="/">Github</router-link>
						<router-link class="p-3 font-medium text-black hover:bg-gray-200 w-full" to="/">Donate</router-link>
					</template>
					<template v-slot:icon>
						<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					</template>
				</Sidebar>
			</div>
		</template>
	</Navbars>
	<div class="mt-14 p-3 sm:p-8">
		<div class="flex flex-wrap">
			<div class="w-full md:w-1/5 md:fixed left-0 bg-white md:ml-1 md:z-10">
				<div class="border pb-3 flex flex-wrap overflow-auto md:max-h-screen">
					<h5 class="font-bold p-3">Documentation</h5>
					<router-link to="/docs/getting-started" class="p-3 py-1 hover:underline w-full">Getting Started</router-link>
					<h5 class="font-bold p-3">Components</h5>
					<router-link to="/component/alert" class="p-3 py-1 hover:underline w-full">Alert</router-link>
					<router-link to="/component/button" class="p-3 py-1 hover:underline w-full">Button</router-link>
					<router-link to="/component/card" class="p-3 py-1 hover:underline w-full">Card</router-link>
					<router-link to="/component/dropdown" class="p-3 py-1 hover:underline w-full">Dropdown</router-link>
					<router-link to="/component/form" class="p-3 py-1 hover:underline w-full">Form</router-link>
					<router-link to="/component/form" class="p-3 py-1 hover:underline w-full">Nav</router-link>
					<router-link to="/component/form" class="p-3 py-1 hover:underline w-full">Sidebar</router-link>
				</div>
				<h5 class="text-center mt-2 hidden md:block">&copy; {{new Date().getFullYear()}} ferdiansyah0611</h5>
			</div>
			<div class="w-full md:w-1/5 mb-2"></div>
			<div class="w-full md:w-4/5">
				<router-view/>
			</div>
		</div>
	</div>
</template>
<script>
import Navbars from '@/components/Navbars'
import Sidebar from '@/components/Sidebar'
export default{
	name: 'App',
	components: {
		Navbars,
		Sidebar
	}
}
</script>