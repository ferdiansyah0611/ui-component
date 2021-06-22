<template>
	<Cards type="light">
		<template v-slot:head>
			<h5 class="font-bold text-2xl"># Alert Component</h5>
		</template>
		<template v-slot:content>
			<p class="text-xl tracking-wide">Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.</p>
		</template>
	</Cards>
	<Cards class="mt-2" type="light">
		<template v-slot:head>
			<h5 class="font-bold text-2xl"># Display</h5>
		</template>
		<template v-slot:content>
			<div class="w-full flex-wrap flex mt-2 sm:mt-0">
				<div class="w-full md:w-2/4 xl:w-1/4 p-1">
					<p class="w-full mb-2 mt-2 text-sm sm:text-base">Primary Type</p>
					<Alert :open="true" type="primary">
						Uploading file successfuly.
					</Alert>
				</div>
				<div class="w-full md:w-2/4 xl:w-1/4 p-1">
					<p class="w-full mb-2 mt-2 text-sm sm:text-base">Error Type</p>
					<Alert :open="true" type="danger">
						Unexpected token ,
					</Alert>
				</div>
				<div class="w-full md:w-2/4 xl:w-1/4 p-1">
					<p class="w-full mb-2 mt-2 text-sm sm:text-base">Success Type</p>
					<Alert :open="true" type="success">
						Uploading file successfuly.
					</Alert>
				</div>
				<div class="w-full md:w-2/4 xl:w-1/4 p-1">
					<p class="w-full mb-2 mt-2 text-sm sm:text-base">Warning Type</p>
					<Alert :open="true" type="warning">
						[Warn]: Unhandled error
					</Alert>
				</div>
				<div class="w-full md:w-2/4 xl:w-1/4 p-1">
					<p class="w-full mb-2 mt-2 text-sm sm:text-base">Dark Type</p>
					<Alert :open="true" type="dark">
						Uploading file successfuly.
					</Alert>
				</div>
				<div class="w-full md:w-2/4 xl:w-1/4 p-1">
					<p class="w-full mb-2 mt-2 text-sm sm:text-base">Light Type</p>
					<Alert :open="true" type="light">
						Uploading file successfuly.
					</Alert>
				</div>
				<div class="w-full md:w-2/4 xl:w-1/4 p-1">
					<p class="w-full mb-2 mt-2 text-sm sm:text-base">Secondary Type</p>
					<Alert :open="true" type="secondary">
						Uploading file successfuly.
					</Alert>
				</div>
				<div class="w-full md:w-2/4 xl:w-1/4 p-1">
					<p class="w-full mb-2 mt-2 text-sm sm:text-base">Custom Type</p>
					<Alert :open="true" type="custom" bg="indigo-600" color="white">
						Uploading file successfuly.
					</Alert>
				</div>
			</div>
		</template>
	</Cards>
	<Cards class="mt-2" type="light">
		<template v-slot:head>
			<h5 class="text-2xl">Example Code</h5>
		</template>
		<template v-slot:content>
			<pre class="flex w-full border p-3 focus:outline-none mb-2" contenteditable="">
				<code class="w-full overflow-auto text-sm" v-html="example.one"></code>
			</pre>
		</template>
	</Cards>
	<Cards class="mt-2" type="light">
		<template v-slot:head>
			<h5 class="text-2xl">Refference</h5>
		</template>
		<template v-slot:content>
			<div class="w-full border-b py-2">
				<h5 class="font-medium mb-1"><code>open (Boolean)</code></h5>
				<p class="text-sm">A statement of alert opened or not.</p>
			</div>
			<div class="w-full border-b py-2">
				<h5 class="font-medium mb-1"><code>type (String)</code></h5>
				<p class="text-sm">A type of alert. List type: error, success, warning, dark, light, secondary, and custom.</p>
			</div>
		</template>
	</Cards>
</template>
<script>
export default{
	created(){
		document.title = 'Alert Component | UI Component Docs'
	},
	data(){
		return{
			example: {
				one: `<<span class="text-red-500">Alert</span>
	:<span class="text-green-500">open</span>="true"
	<span class="text-green-500">type</span>="error"
>Uploading file successfuly.<<span class="text-red-500">/Alert</span>>`
			}
		}
	}
}
</script>