<template>
	<div>
		<div class="bg-white w-full border">
			<h5 class="mb-3 font-bold text-2xl p-3"># Nav Component</h5>
			<p class="text-xl tracking-wide px-3">Documentation and examples for how to use UI Component included navigation components.</p>
			<div class="p-2 w-full" v-for="(data, key) in nav" v-bind:key="key">
				<Navbar :type="data.name">
					<template v-slot:navs>
						<div class="w-1/2 flex justify-start">
							<router-link :class="data.cls" to="/">My App</router-link>
							<router-link :class="data.cls" to="/">Home</router-link>
							<router-link :class="data.cls" to="/">About</router-link>
						</div>
						<div class="w-1/2 flex justify-end">
							<router-link :class="data.cls" to="/">Github</router-link>
						</div>
					</template>
					<template v-slot:mobile>
						<div class="w-1/2 flex justify-start">
							<router-link :class="data.cls" to="/">My App</router-link>
						</div>
						<div class="w-1/2 flex justify-end">
							<router-link :class="data.cls" to="/">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
								</svg>
							</router-link>
						</div>
					</template>
				</Navbar>
			</div>
			
		</div>
		<div class="w-full bg-white border p-3 mt-2">
			<h5 class="mb-5 font-bold text-2xl">Example Code</h5>
			<pre class="flex w-full border p-3 focus:outline-none mb-2" contenteditable="">
				<code class="w-full overflow-auto text-sm" v-html="example.one"></code>
			</pre>
		</div>
		<div class="w-full bg-white border p-3 mt-2">
			<h5 class="font-bold text-2xl">Refference</h5>
			<div class="w-full border-b py-2">
				<h5 class="font-medium mb-1"><code>type (String)</code></h5>
				<p class="text-sm">A type of navbar. List type: error, success, warning, dark, light, secondary, top-fixed-primary, top-fixed-danger, top-fixed-success,
				top-fixed-warning, top-fixed-dark, top-fixed-light, top-fixed-secondary, bottom-fixed-primary, bottom-fixed-danger,
				bottom-fixed-success, bottom-fixed-warning, bottom-fixed-dark, bottom-fixed-light, bottom-fixed-secondary, top-absolute-primary, top-absolute-danger, 
				top-absolute-success, top-absolute-warning, top-absolute-dark, top-absolute-light, top-absolute-secondary
				</p>
			</div>
		</div>
	</div>
</template>
<script>
export default{
	data(){
		return{
			example: {
				one: 
`<pre class="html5" style="font-family:monospace;"><span style="color: #009900;">&lt;Navbar :<span style="color: #000066;">type</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;primary&quot;</span>&gt;</span>
	<span style="color: #009900;">&lt;template v-slot:navs&gt;</span>
		<span style="color: #009900;">&lt;<span style="color: #000000; font-weight: bold;">div</span> <span style="color: #000066;">class</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;w-1/2 flex justify-start&quot;</span>&gt;</span>
			<span style="color: #009900;">&lt;router-<span style="color: #000066;">link</span> <span style="color: #000066;">class</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;p-4 font-bold hover:bg-blue-600&quot;</span> to<span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;/&quot;</span>&gt;</span>My App<span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span>router-link&gt;</span>
			<span style="color: #009900;">&lt;router-<span style="color: #000066;">link</span> <span style="color: #000066;">class</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;p-4 font-bold hover:bg-blue-600&quot;</span> to<span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;/&quot;</span>&gt;</span>Home<span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span>router-link&gt;</span>
			<span style="color: #009900;">&lt;router-<span style="color: #000066;">link</span> <span style="color: #000066;">class</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;p-4 font-bold hover:bg-blue-600&quot;</span> to<span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;/&quot;</span>&gt;</span>About<span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span>router-link&gt;</span>
		<span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span><span style="color: #000000; font-weight: bold;">div</span>&gt;</span>
		<span style="color: #009900;">&lt;<span style="color: #000000; font-weight: bold;">div</span> <span style="color: #000066;">class</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;w-1/2 flex justify-end&quot;</span>&gt;</span>
			<span style="color: #009900;">&lt;router-<span style="color: #000066;">link</span> <span style="color: #000066;">class</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;p-4 font-bold hover:bg-blue-600&quot;</span> to<span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;/&quot;</span>&gt;</span>Github<span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span>router-link&gt;</span>
		<span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span><span style="color: #000000; font-weight: bold;">div</span>&gt;</span>
	<span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span>template&gt;</span>
	<span style="color: #009900;">&lt;template v-slot:mobile&gt;</span>
		<span style="color: #009900;">&lt;<span style="color: #000000; font-weight: bold;">div</span> <span style="color: #000066;">class</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;w-1/2 flex justify-start&quot;</span>&gt;</span>
			<span style="color: #009900;">&lt;router-<span style="color: #000066;">link</span> <span style="color: #000066;">class</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;p-4 font-bold hover:bg-blue-600&quot;</span> to<span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;/&quot;</span>&gt;</span>My App<span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span>router-link&gt;</span>
		<span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span><span style="color: #000000; font-weight: bold;">div</span>&gt;</span>
		<span style="color: #009900;">&lt;<span style="color: #000000; font-weight: bold;">div</span> <span style="color: #000066;">class</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;w-1/2 flex justify-end&quot;</span>&gt;</span>
			<span style="color: #009900;">&lt;router-<span style="color: #000066;">link</span> <span style="color: #000066;">class</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;p-4 font-bold hover:bg-blue-600&quot;</span> to<span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;/&quot;</span>&gt;</span>
				<span style="color: #009900;">&lt;svg xmlns<span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;http://www.w3.org/2000/svg&quot;</span> <span style="color: #000066;">class</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;h-6 w-6&quot;</span> fill<span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;none&quot;</span> viewBox<span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;0 0 24 24&quot;</span> stroke<span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;currentColor&quot;</span>&gt;</span>
					<span style="color: #009900;">&lt;path stroke-linecap<span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;round&quot;</span> stroke-linejoin<span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;round&quot;</span> stroke-<span style="color: #000066;">width</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;2&quot;</span> d<span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;M4 6h16M4 12h16M4 18h16&quot;</span> <span style="color: #66cc66;">/</span>&gt;</span>
				<span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span>svg&gt;</span>
			<span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span>router-link&gt;</span>
		<span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span><span style="color: #000000; font-weight: bold;">div</span>&gt;</span>
	<span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span>template&gt;</span>
<span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span>Navbar&gt;</span></pre>`
			},
			nav: [
				{name: 'primary', cls: 'p-4 font-bold hover:bg-blue-600'},
				{name: 'danger', cls: 'p-4 font-bold hover:bg-red-600'},
				{name: 'success', cls: 'p-4 font-bold hover:bg-green-600'},
				{name: 'warning', cls: 'p-4 font-bold hover:bg-yellow-600'},
				{name: 'dark', cls: 'p-4 font-bold hover:bg-gray-600'},
				{name: 'light', cls: 'p-4 font-bold hover:bg-gray-200'},
				{name: 'secondary', cls: 'p-4 font-bold hover:bg-gray-600'},
			]
		}
	},
	created(){
		document.title = 'Nav Component | UI Component Docs'
	}
}
</script>