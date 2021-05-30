<template>
	<h5 class="font-bold text-2xl mb-2">Getting Started</h5>
	<p>Get started with UI Component, the best library ui component for faster development.</p>
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
	<div class="bg-gray-100 p-3 mb-2">
		<p><span class="text-blue-600">npm i</span> ui-component-vue</p>
	</div>
	<pre class="flex w-full border p-3 focus:outline-none mb-2" contenteditable="">
		<code class="w-full overflow-auto text-sm"><span class="text-gray-400">//main.js</span>
<span class="text-red-400">import</span> Navbar <span class="text-red-400">from</span> <span class="text-yellow-600">'ui-component-vue/Navbar'</span>
<span class="text-red-400">import</span> Dropdown <span class="text-red-400">from</span> <span class="text-yellow-600">'ui-component-vue/Dropdown'</span>
<span class="text-red-400">import</span> Button <span class="text-red-400">from</span> <span class="text-yellow-600">'ui-component-vue/Button'</span>
<span class="text-red-400">import</span> Text <span class="text-red-400">from</span> <span class="text-yellow-600">'ui-component-vue/form/Text'</span>
<span class="text-red-400">import</span> Area <span class="text-red-400">from</span> <span class="text-yellow-600">'ui-component-vue/form/Area'</span>
<span class="text-red-400">import</span> Select <span class="text-red-400">from</span> <span class="text-yellow-600">'ui-component-vue/form/Select'</span>
<span class="text-red-400">import</span> File <span class="text-red-400">from</span> <span class="text-yellow-600">'ui-component-vue/form/File'</span>
<span class="text-red-400">import</span> Alert <span class="text-red-400">from</span> <span class="text-yellow-600">'ui-component-vue/Alert'</span>
<span class="text-red-400">import</span> Cards <span class="text-red-400">from</span> <span class="text-yellow-600">'ui-component-vue/Card'</span>
<span class="text-red-400">import</span> Sidebar <span class="text-red-400">from</span> <span class="text-yellow-600">'ui-component-vue/Sidebar'</span>
<span class="text-red-400">import</span> ButtonIcon <span class="text-red-400">from</span> <span class="text-yellow-600">'ui-component-vue/ButtonIcon'</span>
<span class="text-red-400">import</span> Tabs <span class="text-red-400">from</span> <span class="text-yellow-600">'ui-component-vue/Tabs'</span>
<span class="text-red-400">import</span> Collapse <span class="text-red-400">from</span> <span class="text-yellow-600">'ui-component-vue/Collapse'</span>
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
app.component('Sidebar', Sidebar)
app.component('ButtonIcon', ButtonIcon)
app.component('Tabs', Tabs)
app.component('Collapse', Collapse)
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