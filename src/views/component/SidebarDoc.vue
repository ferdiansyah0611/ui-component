<template>
	<div>
		<h5 class="mb-5 font-bold text-2xl"># Sidebar Component</h5>
		<p class="text-xl tracking-wide">Use UI Components custom sidebar styles for actions in navigations.</p>
		<div class="flex justify-center flex-wrap">
			<Sidebar post="left" p="4">
				<template v-slot:head>
					<h5>UI Component</h5>
				</template>
				<template v-slot:link>
					<router-link class="p-3 font-medium text-black hover:bg-gray-200 w-full" to="/">Home</router-link>
					<router-link class="p-3 font-medium text-black hover:bg-gray-200 w-full" to="/">About</router-link>
					<router-link class="p-3 font-medium text-black hover:bg-gray-200 w-full" to="/">Github</router-link>
				</template>
				<template v-slot:icon>
					<span class="border p-3">Left Position</span>
				</template>
			</Sidebar>
			<Sidebar post="right" p="4">
				<template v-slot:head>
					<h5>UI Component</h5>
				</template>
				<template v-slot:link>
					<router-link class="p-3 font-medium text-black hover:bg-gray-200 w-full" to="/">Home</router-link>
					<router-link class="p-3 font-medium text-black hover:bg-gray-200 w-full" to="/">About</router-link>
					<router-link class="p-3 font-medium text-black hover:bg-gray-200 w-full" to="/">Github</router-link>
				</template>
				<template v-slot:icon>
					<span class="border p-3">Right Position</span>
				</template>
			</Sidebar>
			<Sidebar post="top" p="4">
				<template v-slot:head>
					<h5>UI Component</h5>
				</template>
				<template v-slot:link>
					<router-link class="p-3 font-medium text-black hover:bg-gray-200 w-full" to="/">Home</router-link>
					<router-link class="p-3 font-medium text-black hover:bg-gray-200 w-full" to="/">About</router-link>
					<router-link class="p-3 font-medium text-black hover:bg-gray-200 w-full" to="/">Github</router-link>
				</template>
				<template v-slot:icon>
					<span class="border p-3">Top Position</span>
				</template>
			</Sidebar>
			<Sidebar post="bottom" p="4">
				<template v-slot:head>
					<h5>UI Component</h5>
				</template>
				<template v-slot:link>
					<router-link class="p-3 font-medium text-black hover:bg-gray-200 w-full" to="/">Home</router-link>
					<router-link class="p-3 font-medium text-black hover:bg-gray-200 w-full" to="/">About</router-link>
					<router-link class="p-3 font-medium text-black hover:bg-gray-200 w-full" to="/">Github</router-link>
				</template>
				<template v-slot:icon>
					<span class="border p-3">Bottom Position</span>
				</template>
			</Sidebar>
		</div>
		<div class="p-2 border bg-white">
			<h5 class="font-bold text-xl md:text-2xl p-2">Example Code</h5>
			<textarea class="w-full min-h-screen overflow-auto focus:outline-none text-sm">
				<Sidebar post="right" p="4">
					<template v-slot:head>
						<h5>My App</h5>
					</template>
					<template v-slot:link>
						<router-link class="p-3 font-medium text-black hover:bg-gray-200 w-full" to="/">Home</router-link>
						<router-link class="p-3 font-medium text-black hover:bg-gray-200 w-full" to="/">About</router-link>
						<router-link class="p-3 font-medium text-black hover:bg-gray-200 w-full" to="/">Github</router-link>
					</template>
					<template v-slot:icon>
						<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					</template>
				</Sidebar>
			</textarea>
		</div>
	</div>
</template>
<script>
export default{
	created(){
		document.title = 'Sidebar Component | UI Component Docs'
	}
}
</script>