<template>
	<div>
		<div class="bg-white w-full border p-3">
			<h5 class="mb-3 font-bold text-2xl"># Sidebar Component</h5>
			<p class="text-xl tracking-wide">Use UI Components custom sidebar styles for actions in navigations.</p>
			<div class="flex flex-wrap">
				<Sidebar w="60" post="left" p="4">
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
		</div>
		<div class="w-full bg-white border p-3 mt-2">
			<h5 class="mb-5 font-bold text-2xl">Example Code</h5>
			<pre class="flex w-full border p-3 focus:outline-none mb-2" contenteditable="">
				<code class="w-full overflow-auto text-sm" v-html="example.one"></code>
			</pre>
		</div>
	</div>
</template>
<script>
export default{
	data(){
		return{
			example: {
				one:
`<pre class="html5" style="font-family:monospace;"><span style="color: #009900;">&lt;Sidebar post<span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;right&quot;</span> p<span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;4&quot;</span>&gt;</span>
	<span style="color: #009900;">&lt;template v-slot:head&gt;</span>
		<span style="color: #009900;">&lt;<span style="color: #000000; font-weight: bold;">h5</span>&gt;</span>My App<span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span><span style="color: #000000; font-weight: bold;">h5</span>&gt;</span>
	<span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span>template&gt;</span>
	<span style="color: #009900;">&lt;template v-slot:link&gt;</span>
		<span style="color: #009900;">&lt;router-<span style="color: #000066;">link</span> <span style="color: #000066;">class</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;p-3 font-medium text-black hover:bg-gray-200 w-full&quot;</span> to<span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;/&quot;</span>&gt;</span>Home<span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span>router-link&gt;</span>
		<span style="color: #009900;">&lt;router-<span style="color: #000066;">link</span> <span style="color: #000066;">class</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;p-3 font-medium text-black hover:bg-gray-200 w-full&quot;</span> to<span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;/&quot;</span>&gt;</span>About<span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span>router-link&gt;</span>
		<span style="color: #009900;">&lt;router-<span style="color: #000066;">link</span> <span style="color: #000066;">class</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;p-3 font-medium text-black hover:bg-gray-200 w-full&quot;</span> to<span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;/&quot;</span>&gt;</span>Github<span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span>router-link&gt;</span>
	<span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span>template&gt;</span>
	<span style="color: #009900;">&lt;template v-slot:icon&gt;</span>
		<span style="color: #009900;">&lt;svg xmlns<span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;http://www.w3.org/2000/svg&quot;</span> <span style="color: #000066;">class</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;h-6 w-6&quot;</span> fill<span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;none&quot;</span> viewBox<span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;0 0 24 24&quot;</span> stroke<span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;currentColor&quot;</span>&gt;</span>
			<span style="color: #009900;">&lt;path stroke-linecap<span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;round&quot;</span> stroke-linejoin<span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;round&quot;</span> stroke-<span style="color: #000066;">width</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;2&quot;</span> d<span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;M4 6h16M4 12h16M4 18h16&quot;</span> <span style="color: #66cc66;">/</span>&gt;</span>
		<span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span>svg&gt;</span>
	<span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span>template&gt;</span>
<span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span>Sidebar&gt;</span></pre>`
			}
		}
	},
	created(){
		document.title = 'Sidebar Component | UI Component Docs'
	}
}
</script>