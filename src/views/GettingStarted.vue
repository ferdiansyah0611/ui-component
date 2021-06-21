<template>
	<div class="bg-white p-3">
		<h5 class="font-bold text-2xl mb-2">Getting Started</h5>
		<p>Get started with UI Component, the best library ui component for faster development.</p>
		<h5 class="font-bold text-xl mb-2">Installation for VueJS</h5>
		<div class="bg-gray-100 p-3 mb-2 text-sm">
			<code><span class="text-blue-600">vue</span> create my-app</code>
		</div>
		<div class="bg-gray-100 p-3 mb-2 text-sm">
			<code><span class="text-blue-600">cd</span> my-app</code>
		</div>
		<div class="bg-gray-100 p-3 mb-2 text-sm">
			<code><span class="text-blue-600">vue</span> add tailwind</code>
		</div>
		<div class="bg-gray-100 p-3 mb-2 text-sm">
			<code><span class="text-blue-600">npm i</span> ui-component-vue</code>
		</div>
		<pre class="flex w-full border p-3 focus:outline-none mb-2" contenteditable="">
			<code class="w-full overflow-auto text-sm" v-html="example.one"></code>
		</pre>
		<div class="bg-gray-100 p-3 mb-2 text-sm">
			<code><span class="text-blue-600">npm</span> run serve</code>
		</div>
	</div>
</template>
<script>
export default{
	data(){
		return{
			example: {
				one: 
`<pre class="javascript" style="font-family:monospace;"><span style="color: #FF0000;">import</span> Navbar from <span style="color: #3366CC;">'ui-component-vue/Navbar'</span>
<span style="color: #FF0000;">import</span> Dropdown from <span style="color: #3366CC;">'ui-component-vue/Dropdown'</span>
<span style="color: #FF0000;">import</span> Button from <span style="color: #3366CC;">'ui-component-vue/Button'</span>
<span style="color: #FF0000;">import</span> Text from <span style="color: #3366CC;">'ui-component-vue/form/Text'</span>
<span style="color: #FF0000;">import</span> Area from <span style="color: #3366CC;">'ui-component-vue/form/Area'</span>
<span style="color: #FF0000;">import</span> Select from <span style="color: #3366CC;">'ui-component-vue/form/Select'</span>
<span style="color: #FF0000;">import</span> File from <span style="color: #3366CC;">'ui-component-vue/form/File'</span>
<span style="color: #FF0000;">import</span> Alert from <span style="color: #3366CC;">'ui-component-vue/Alert'</span>
<span style="color: #FF0000;">import</span> Cards from <span style="color: #3366CC;">'ui-component-vue/Card'</span>
<span style="color: #FF0000;">import</span> Sidebar from <span style="color: #3366CC;">'ui-component-vue/Sidebar'</span>
<span style="color: #FF0000;">import</span> ButtonIcon from <span style="color: #3366CC;">'ui-component-vue/ButtonIcon'</span>
<span style="color: #FF0000;">import</span> Tabs from <span style="color: #3366CC;">'ui-component-vue/Tabs'</span>
<span style="color: #FF0000;">import</span> Collapse from <span style="color: #3366CC;">'ui-component-vue/Collapse'</span>
<span style="color: #000066; font-weight: bold;">const</span> app <span style="color: #339933;">=</span> createApp<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#123;</span><span style="color: #009900;">&#125;</span><span style="color: #009900;">&#41;</span>
app.<span style="color: #660066;">component</span><span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'Navbar'</span><span style="color: #339933;">,</span> Navbar<span style="color: #009900;">&#41;</span>
app.<span style="color: #660066;">component</span><span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'Dropdown'</span><span style="color: #339933;">,</span> Dropdown<span style="color: #009900;">&#41;</span>
app.<span style="color: #660066;">component</span><span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'Button'</span><span style="color: #339933;">,</span> Button<span style="color: #009900;">&#41;</span>
app.<span style="color: #660066;">component</span><span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'Text'</span><span style="color: #339933;">,</span> Text<span style="color: #009900;">&#41;</span>
app.<span style="color: #660066;">component</span><span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'Area'</span><span style="color: #339933;">,</span> Area<span style="color: #009900;">&#41;</span>
app.<span style="color: #660066;">component</span><span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'Select'</span><span style="color: #339933;">,</span> Select<span style="color: #009900;">&#41;</span>
app.<span style="color: #660066;">component</span><span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'File'</span><span style="color: #339933;">,</span> File<span style="color: #009900;">&#41;</span>
app.<span style="color: #660066;">component</span><span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'Alert'</span><span style="color: #339933;">,</span> Alert<span style="color: #009900;">&#41;</span>
app.<span style="color: #660066;">component</span><span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'Cards'</span><span style="color: #339933;">,</span> Cards<span style="color: #009900;">&#41;</span>
app.<span style="color: #660066;">component</span><span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'Sidebar'</span><span style="color: #339933;">,</span> Sidebar<span style="color: #009900;">&#41;</span>
app.<span style="color: #660066;">component</span><span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'ButtonIcon'</span><span style="color: #339933;">,</span> ButtonIcon<span style="color: #009900;">&#41;</span>
app.<span style="color: #660066;">component</span><span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'Tabs'</span><span style="color: #339933;">,</span> Tabs<span style="color: #009900;">&#41;</span>
app.<span style="color: #660066;">component</span><span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'Collapse'</span><span style="color: #339933;">,</span> Collapse<span style="color: #009900;">&#41;</span></pre>`
			}
		}
	},
	created(){
		document.title = 'Getting Started | UI Component Docs'
	},
}
</script>