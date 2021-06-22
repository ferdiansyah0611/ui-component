<template>
	<Cards type="light">
		<template v-slot:head>
			<h1 class="text-2xl font-bold">UI Component</h1>
		</template>
		<template v-slot:content>
			<p class="text-xl">
				Open source components framework based on UI Component Web App.
			</p>
		</template>
	</Cards>
	<div class="grid grid-rows-1 sm:grid-rows-2 md:grid-flow-col gap-2 mt-5">
		<Cards class="mt-2 md:mt-0" type="light">
			<template v-slot:head>
				Speeds up development
			</template>
			<template v-slot:content>
				We do most of the heavy lifting for you making it easier and faster for your development.
			</template>
		</Cards>
		<Cards class="mt-2 md:mt-0" type="light">
			<template v-slot:head>
				User Experience Focused
			</template>
			<template v-slot:content>
				Using the principles of Material Design, we can create a framework that incorporates components.
			</template>
		</Cards>
		<Cards class="mt-2 md:mt-0" type="light">
			<template v-slot:head>
				Easy to work with
			</template>
			<template v-slot:content>
				We also provide documentation sample code specifically to help new users get started. We are always open to feedback for users.
			</template>
		</Cards>
		<Cards class="mt-2 md:mt-0" type="light">
			<template v-slot:head>
				Multi Framework
			</template>
			<template v-slot:content>
				UI Component supported frontend framework, as Vue, React.
			</template>
		</Cards>
	</div>
	<Cards class="mt-2 md:mt-0" type="light">
		<template v-slot:head>
			Contributors
		</template>
		<template v-slot:content>
			<ul>
				<li>1. Ferdiansyah</li>
			</ul>
		</template>
	</Cards>
</template>
<script>

export default {
	name: 'Home',
	created(){
		document.title = 'Welcome to UI Component Docs'
	},
}
</script>
