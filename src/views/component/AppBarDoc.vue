<template>
	<Cards type="light">
		<template v-slot:head>
			<h5 class="font-bold text-2xl"># App Bar Component</h5>
		</template>
		<template v-slot:content>
			<p class="text-xl tracking-wide">Example of app bar using a component.</p>
		</template>
	</Cards>
	<Cards class="mt-2" type="light">
		<template v-slot:head>
			<h5 class="text-2xl"># Navbar & Tabs</h5>
		</template>
		<template v-slot:content>
			<Tabs :no-padding="true" post="x" type="secondary" default="display" :title="[{name: 'display', title: 'Display'}, {name: 'code', title: 'Source Code'}]">
				<template v-slot:display>
					<div class="w-full">
						<Navbar type="light">
							<template v-slot:navs>
								<div class="w-1/2 flex justify-start">
									<span class="p-6 font-bold">Blog</span>
									<router-link class="p-6 font-bold hover:bg-gray-200 transition-all duration-500" to="/">Home</router-link>
									<router-link class="p-6 font-bold hover:bg-gray-200 transition-all duration-500" to="/">Popular</router-link>
								</div>
								<div class="w-1/2 flex justify-end">
									<router-link class="p-6 font-bold hover:bg-gray-200 transition-all duration-500" to="/">Login</router-link>
								</div>
							</template>
							<template v-slot:mobile>
								<div class="w-1/2 flex justify-start">
									<router-link class="p-6 font-bold hover:bg-gray-200 transition-all duration-500" to="/">Blog</router-link>
								</div>
								<div class="w-1/2 flex justify-end">
									<router-link class="p-6 font-bold hover:bg-gray-200 transition-all duration-500" to="/">
										<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
										</svg>
									</router-link>
								</div>
							</template>
						</Navbar>
						<div class="w-full pt-10 px-2">
							<Tabs :no-padding="true" post="x" type="light" default="tab-1" :title="[{name: 'tab-1', title: 'Title 1'}, {name: 'tab-2', title: 'Title 2'}]">
								<template v-slot:tab-1>
									<div class="h-48 overflow-auto p-4">
										<p v-for="d in 10" v-bind:key="d">
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Esse eos recusandae aut voluptates, sunt molestiae id quam
											nesciunt numquam nulla quod eveniet aperiam, voluptate ea illo provident, 
											molestias magnam aliquam!
										</p>
									</div>
								</template>
								<template v-slot:tab-2>
									<div class="h-48 overflow-auto p-4">
										<p v-for="d in 10" v-bind:key="d">
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Qui explicabo nesciunt nisi dicta nihil maiores nemo consectetur eum.
											Recusandae autem numquam odio quis modi dignissimos. Corporis cumque 
											possimus eum tempore?
										</p>
									</div>
								</template>
							</Tabs>
						</div>
					</div>
				</template>
				<template v-slot:code>
					<pre class="flex w-full p-3 focus:outline-none mb-2" contenteditable="">
						<code class="w-full overflow-auto text-sm" v-html="example.one"></code>
					</pre>
				</template>
			</Tabs>
		</template>
	</Cards>
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