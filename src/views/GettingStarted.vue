<template>
	<h5 class="font-bold text-2xl mb-2">Getting Started</h5>
	<p>Get started with UI Component,
		the world’s most popular framework ui for building responsive,
		mobile-first sites, with jsDelivr and a template page.
	</p>
	<h5 class="font-bold text-xl mb-2">Installation</h5>
	<div class="bg-gray-100 p-3 mb-2">
		<p><span class="text-blue-600">vue</span> create my-app</p>
	</div>
	<div class="bg-gray-100 p-3 mb-2">
		<p><span class="text-blue-600">cd</span> my-app</p>
	</div>
	<div class="bg-gray-100 p-3 mb-2">
		<p><span class="text-blue-600">vue</span> add tailwind</p>
	</div>
	<div class="bg-gray-100 p-3 mb-2 flex">
		<p>
			<span class="text-blue-600">cd </span>
			<span> src</span>
		</p>
	</div>
	<div class="bg-gray-100 p-3 mb-2">
		<p>
			<span class="text-blue-600">git</span> 
				clone 
			<span class="underline">https://github.com/ferdiansyah0611/ui-component</span>
		</p>
	</div>
	<div class="bg-gray-100 p-3 mb-2 flex">
		<p>
			<span class="text-blue-600">cd </span>
			<span> ui-component</span>
		</p>
	</div>
	<p class="p-3 mb-2">> Remove all folders & files except folder src</p>
	<p class="p-3 mb-2">> Moved folder src/components to src</p>
	<p class="p-3 mb-2">> Edit file main.js in folder src your project</p>
	<pre class="flex w-full border p-3 focus:outline-none mb-2" contenteditable="">
		<code class="w-full overflow-auto text-sm"><span class="text-gray-400">//main.js</span>
<span class="text-red-400">import</span> Navbar <span class="text-red-400">from</span> <span class="text-yellow-600">'@/components/Navbar'</span>
<span class="text-red-400">import</span> Dropdown <span class="text-red-400">from</span> <span class="text-yellow-600">'@/components/Dropdown'</span>
<span class="text-red-400">import</span> Button <span class="text-red-400">from</span> <span class="text-yellow-600">'@/components/Button'</span>
<span class="text-red-400">import</span> Text <span class="text-red-400">from</span> <span class="text-yellow-600">'@/components/form/Text'</span>
<span class="text-red-400">import</span> Area <span class="text-red-400">from</span> <span class="text-yellow-600">'@/components/form/Area'</span>
<span class="text-red-400">import</span> Select <span class="text-red-400">from</span> <span class="text-yellow-600">'@/components/form/Select'</span>
<span class="text-red-400">import</span> File <span class="text-red-400">from</span> <span class="text-yellow-600">'@/components/form/File'</span>
<span class="text-red-400">import</span> Alert <span class="text-red-400">from</span> <span class="text-yellow-600">'@/components/Alert'</span>
<span class="text-red-400">import</span> Cards <span class="text-red-400">from</span> <span class="text-yellow-600">'@/components/Card'</span>
<span class="text-blue-400">const</span> app = createApp({})
app.component('Navbar', Navbar)
app.component('Dropdown', Dropdown)
app.component('Button', Button)
app.component('Text', Text)
app.component('Area', Area)
app.component('Select', Select)
app.component('File', File)
app.component('Alert', Alert)
app.component('Cards', Cards)
</code>
	</pre>
	<div class="bg-gray-100 p-3 mb-2">
		<p><span class="text-blue-600">npm</span> run serve</p>
	</div>
</template>
<script>
export default{
	created(){
		document.title = 'Getting Started | UI Component Docs'
	},
}
</script>