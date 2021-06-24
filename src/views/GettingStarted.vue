<template>
	<Cards class="mt-2" type="light">
		<template v-slot:head>
			<h5 class="text-2xl">Getting Started</h5>
		</template>
		<template v-slot:content>
			<p>Get started with UI Component, the best library ui component for faster development.</p>
		</template>
	</Cards>
	<Cards class="mt-2" type="light">
		<template v-slot:head>
			<h5 class="text-2xl">Installation for VueJS</h5>
		</template>
		<template v-slot:content>
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
		</template>
	</Cards>
	<Cards class="mt-2" type="light">
		<template v-slot:head>
			<h5 class="text-2xl">Installation for ReactJS</h5>
		</template>
		<template v-slot:content>
			<div class="bg-gray-100 p-3 mb-2 text-sm">
				<code><span class="text-blue-600">npx</span> create-react-app my-app</code>
			</div>
			<div class="bg-gray-100 p-3 mb-2 text-sm">
				<code><span class="text-blue-600">cd</span> my-app</code>
			</div>
			<div class="bg-gray-100 p-3 mb-2 text-sm">
				<code><span class="text-blue-600">npm</span> install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9</code>
			</div>
			<div class="bg-gray-100 p-3 mb-2 text-sm">
				<code><span class="text-blue-600">npm</span> install @craco/craco</code>
			</div>
			<pre class="flex w-full border p-3 focus:outline-none mb-2" contenteditable="">
				<code class="w-full overflow-auto text-sm" v-html="react.one"></code>
			</pre>
			<pre class="flex w-full border p-3 focus:outline-none mb-2" contenteditable="">
				<code class="w-full overflow-auto text-sm" v-html="react.two"></code>
			</pre>
			<div class="bg-gray-100 p-3 mb-2 text-sm">
				<code><span class="text-blue-600">npx</span> tailwindcss-cli@latest init</code>
			</div>
			<pre class="flex w-full border p-3 focus:outline-none mb-2" contenteditable="">
				<code class="w-full overflow-auto text-sm" v-html="react.three"></code>
			</pre>
			<div class="bg-gray-100 p-3 mb-2 text-sm">
				<code><span class="text-blue-600">npm</span> install ui-component-react</code>
			</div>
			<pre class="flex w-full border p-3 focus:outline-none mb-2" contenteditable="">
				<code class="w-full overflow-auto text-sm" v-html="react.fourth"></code>
			</pre>
			<div class="bg-gray-100 p-3 mb-2 text-sm">
				<code><span class="text-blue-600">npm</span> run start</code>
			</div>
		</template>
	</Cards>
</template>
<script>
export default{
	data(){
		return{
			react: {
				one: 
`<pre class="javascript" style="font-family:monospace;"><span style="color: #009900;">&#123;</span>
  <span style="color: #006600; font-style: italic;">// package.json</span>
  <span style="color: #3366CC;">&quot;scripts&quot;</span><span style="color: #339933;">:</span> <span style="color: #009900;">&#123;</span>
   <span style="color: #3366CC;">&quot;start&quot;</span><span style="color: #339933;">:</span> <span style="color: #3366CC;">&quot;craco start&quot;</span><span style="color: #339933;">,</span>
   <span style="color: #3366CC;">&quot;build&quot;</span><span style="color: #339933;">:</span> <span style="color: #3366CC;">&quot;craco build&quot;</span><span style="color: #339933;">,</span>
   <span style="color: #3366CC;">&quot;test&quot;</span><span style="color: #339933;">:</span> <span style="color: #3366CC;">&quot;craco test&quot;</span><span style="color: #339933;">,</span>
    <span style="color: #3366CC;">&quot;eject&quot;</span><span style="color: #339933;">:</span> <span style="color: #3366CC;">&quot;react-scripts eject&quot;</span>
  <span style="color: #009900;">&#125;</span><span style="color: #339933;">,</span>
<span style="color: #009900;">&#125;</span></pre>`,
				two:
`<pre class="javascript" style="font-family:monospace;"><span style="color: #006600; font-style: italic;">// craco.config.js</span>
module.<span style="color: #660066;">exports</span> <span style="color: #339933;">=</span> <span style="color: #009900;">&#123;</span>
  style<span style="color: #339933;">:</span> <span style="color: #009900;">&#123;</span>
    postcss<span style="color: #339933;">:</span> <span style="color: #009900;">&#123;</span>
      plugins<span style="color: #339933;">:</span> <span style="color: #009900;">&#91;</span>
        require<span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'tailwindcss'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">,</span>
        require<span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'autoprefixer'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">,</span>
      <span style="color: #009900;">&#93;</span><span style="color: #339933;">,</span>
    <span style="color: #009900;">&#125;</span><span style="color: #339933;">,</span>
  <span style="color: #009900;">&#125;</span><span style="color: #339933;">,</span>
<span style="color: #009900;">&#125;</span></pre>`,
				three:
`<pre class="javascript" style="font-family:monospace;"><span style="color: #006600; font-style: italic;">// tailwind.config.js</span>
module.<span style="color: #660066;">exports</span> <span style="color: #339933;">=</span> <span style="color: #009900;">&#123;</span>
  purge<span style="color: #339933;">:</span> <span style="color: #009900;">&#91;</span><span style="color: #3366CC;">'./src/**/*.{js,jsx,ts,tsx}'</span><span style="color: #339933;">,</span> <span style="color: #3366CC;">'./public/index.html'</span><span style="color: #009900;">&#93;</span><span style="color: #339933;">,</span>
  darkMode<span style="color: #339933;">:</span> <span style="color: #003366; font-weight: bold;">false</span><span style="color: #339933;">,</span> <span style="color: #006600; font-style: italic;">// or 'media' or 'class'</span>
  theme<span style="color: #339933;">:</span> <span style="color: #009900;">&#123;</span>
    extend<span style="color: #339933;">:</span> <span style="color: #009900;">&#123;</span><span style="color: #009900;">&#125;</span><span style="color: #339933;">,</span>
  <span style="color: #009900;">&#125;</span><span style="color: #339933;">,</span>
  variants<span style="color: #339933;">:</span> <span style="color: #009900;">&#123;</span>
    extend<span style="color: #339933;">:</span> <span style="color: #009900;">&#123;</span><span style="color: #009900;">&#125;</span><span style="color: #339933;">,</span>
  <span style="color: #009900;">&#125;</span><span style="color: #339933;">,</span>
  plugins<span style="color: #339933;">:</span> <span style="color: #009900;">&#91;</span><span style="color: #009900;">&#93;</span><span style="color: #339933;">,</span>
<span style="color: #009900;">&#125;</span></pre>`,
				fourth:
`<pre class="javascript" style="font-family:monospace;"><span style="color: #006600; font-style: italic;">// component</span>
<span style="color: #FF0000;">import</span> Alert from <span style="color: #3366CC;">'ui-component-react/Alert'</span><span style="color: #339933;">;</span>
<span style="color: #FF0000;">import</span> Button from <span style="color: #3366CC;">'ui-component-react/Button'</span><span style="color: #339933;">;</span>
<span style="color: #FF0000;">import</span> ButtonIcon from <span style="color: #3366CC;">'ui-component-react/ButtonIcon'</span><span style="color: #339933;">;</span>
<span style="color: #FF0000;">import</span> Card from <span style="color: #3366CC;">'ui-component-react/Card'</span><span style="color: #339933;">;</span>
<span style="color: #FF0000;">import</span> Collapse from <span style="color: #3366CC;">'ui-component-react/Collapse'</span><span style="color: #339933;">;</span>
<span style="color: #FF0000;">import</span> Dropdown from <span style="color: #3366CC;">'ui-component-react/Dropdown'</span><span style="color: #339933;">;</span>
<span style="color: #FF0000;">import</span> Footer from <span style="color: #3366CC;">'ui-component-react/Footer'</span><span style="color: #339933;">;</span>
<span style="color: #FF0000;">import</span> Modal from <span style="color: #3366CC;">'ui-component-react/Modal'</span><span style="color: #339933;">;</span>
<span style="color: #FF0000;">import</span> Navbar from <span style="color: #3366CC;">'ui-component-react/Navbar'</span><span style="color: #339933;">;</span>
<span style="color: #FF0000;">import</span> Sidebar from <span style="color: #3366CC;">'ui-component-react/Sidebar'</span><span style="color: #339933;">;</span>
<span style="color: #FF0000;">import</span> Tabs from <span style="color: #3366CC;">'ui-component-react/Tabs'</span>
<span style="color: #FF0000;">import</span> Text from <span style="color: #3366CC;">'ui-component-react/form/Text'</span>
<span style="color: #FF0000;">import</span> Select from <span style="color: #3366CC;">'ui-component-react/form/Select'</span>
<span style="color: #FF0000;">import</span> File from <span style="color: #3366CC;">'ui-component-react/form/File'</span>
<span style="color: #FF0000;">import</span> Area from <span style="color: #3366CC;">'ui-component-react/form/Area'</span>
<span style="color: #FF0000;">import</span> Login from <span style="color: #3366CC;">'ui-component-react/firebase/Login'</span>
<span style="color: #FF0000;">import</span> Register from <span style="color: #3366CC;">'ui-component-react/firebase/Register'</span></pre>`
			},
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