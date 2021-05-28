<template>
	<div class="w-full bg-white p-3 mt-2">
		<h1 class="text-2xl font-bold mb-5">UI Component</h1>
		<p class="text-xl mt-3">
			A modern components front-end framework based on Material Design
		</p>
		<div class="grid grid-rows-1 sm:grid-rows-2 md:grid-flow-col mt-5">
			<Cards class="mt-2 md:mt-0" type="light">
				<template v-slot:head>
					Speeds up development
				</template>
				<template v-slot:content>
					We did most of the heavy lifting for you to provide a 
					default stylings that incorporate our custom components. 
					Additionally, we refined animations and transitions to 
					provide a smoother experience for developers.
				</template>
			</Cards>
			<Cards class="mt-2 md:mt-0" type="light">
				<template v-slot:head>
					User Experience Focused
				</template>
				<template v-slot:content>
					By utilizing elements and principles of Material Design, 
					we were able to create a framework that incorporates components 
					and animations that provide more feedback to users. Additionally, 
					a single underlying responsive system across all platforms allow 
					for a more unified user experience.
				</template>
			</Cards>
			<Cards class="mt-2 md:mt-0" type="light">
				<template v-slot:head>
					Easy to work with
				</template>
				<template v-slot:content>
					We have provided detailed documentation as well as 
					specific code examples to help new users get started. 
					We are also always open to feedback and can answer any 
					questions a user may have about UI Component.
				</template>
			</Cards>
			<Cards class="mt-2 md:mt-0" type="light">
				<template v-slot:head>
					Multi Framework
				</template>
				<template v-slot:content>
					UI Component supported frontend framework, as Vue, React and Angular.
					In backend framework supported laravel blade template.
				</template>
			</Cards>
		</div>
	</div>
</template>
<script>

export default {
	name: 'Home',
	created(){
		document.title = 'Welcome to UI Component Docs'
	},
}
</script>
