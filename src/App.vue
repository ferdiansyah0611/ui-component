<template>
	<Navbar
		bg="blue-500"
		position="fixed-top"
		:link-left="[
			{name: 'UI Component', link: '/'},
			{name: 'Home', link: '/'}
		]"
		:link-right="[
			{name: 'Github', link: '/'},
			{name: 'Twitter', link: '/'}
		]"
		p="4"
		font-type="medium"
		hover-bg="blue-500"
		color="white"
		:sidebar-config="{
			title: 'UI Component',
			position: 'rtl'
		}"
	/>
	<div class="mt-14 p-3 sm:p-8">
		<div class="flex flex-wrap">
			<div class="w-full md:w-1/5 md:fixed left-0 bg-white md:ml-1">
				<div class="border pb-3 flex flex-wrap">
					<h5 class="font-bold p-3">Documentation</h5>
					<router-link to="/docs/getting-started" class="p-3 py-1 hover:underline w-full">Getting Started</router-link>
					<h5 class="font-bold p-3">Components</h5>
					<router-link to="/component/alert" class="p-3 py-1 hover:underline w-full">Alert</router-link>
					<router-link to="/component/button" class="p-3 py-1 hover:underline w-full">Button</router-link>
					<router-link to="/component/card" class="p-3 py-1 hover:underline w-full">Card</router-link>
					<router-link to="/component/dropdown" class="p-3 py-1 hover:underline w-full">Dropdown</router-link>
					<router-link to="/component/form" class="p-3 py-1 hover:underline w-full">Form</router-link>
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