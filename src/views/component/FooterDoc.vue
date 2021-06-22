<template>
	<Cards type="light">
		<template v-slot:head>
			<h5 class="font-bold text-2xl"># Footer Component</h5>
		</template>
		<template v-slot:content>
			<p class="text-xl tracking-wide">Use UI Components custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.</p>
		</template>
	</Cards>
	<Cards class="mt-2" type="light">
		<template v-slot:head>
			<h5 class="text-2xl"># Display</h5>
		</template>
		<template v-slot:content>
			<div class="flex w-full flex-wrap mt-2 space-y-2">
				<Footer pos="default" color="bg-blue-800">
					<template v-slot:left>
						<p class="p-4">&copy; {{new Date().getFullYear()}}</p>
					</template>
					<template v-slot:right>
						<a href="/" class="p-4 hover:bg-blue-900">Privacy & Policy</a>
						<a href="." class="p-4 hover:bg-blue-900">MIT License</a>
					</template>
				</Footer>
				<Footer pos="center" color="bg-red-400">
					<p class="p-4">&copy; {{new Date().getFullYear()}} Ferdiansyah0611 Corporation</p>
				</Footer>
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
				<h5 class="font-medium mb-1 text-sm md:text-base"><code>pos (String)</code></h5>
				<p class="text-sm">A position of footer. List position: default, center.</p>
			</div>
			<div class="w-full border-b py-2">
				<h5 class="font-medium mb-1 text-sm md:text-base"><code>color (String)</code></h5>
				<p class="text-sm">Class bacground-color.</p>
			</div>
		</template>
	</Cards>
</template>
<script>
export default{
	created(){
		document.title = 'Footer Component | UI Component Docs'
	},
	data(){
		return{
			example: {
				one: `<pre class="javascript" style="font-family:monospace;"><span style="color: #339933;">&lt;</span>Footer pos<span style="color: #339933;">=</span><span style="color: #3366CC;">&quot;default&quot;</span> color<span style="color: #339933;">=</span><span style="color: #3366CC;">&quot;bg-blue-800&quot;</span><span style="color: #339933;">&gt;</span>
	<span style="color: #339933;">&lt;</span>template v<span style="color: #339933;">-</span>slot<span style="color: #339933;">:</span>left<span style="color: #339933;">&gt;</span>
		<span style="color: #339933;">&lt;</span>p <span style="color: #FF0000;">class</span><span style="color: #339933;">=</span><span style="color: #3366CC;">&quot;p-4&quot;</span><span style="color: #339933;">&gt;&amp;</span>copy<span style="color: #339933;">;</span> <span style="color: #CC0000;">2050</span><span style="color: #339933;">&lt;/</span>p<span style="color: #339933;">&gt;</span>
	<span style="color: #339933;">&lt;/</span>template<span style="color: #339933;">&gt;</span>
	<span style="color: #339933;">&lt;</span>template v<span style="color: #339933;">-</span>slot<span style="color: #339933;">:</span>right<span style="color: #339933;">&gt;</span>
		<span style="color: #339933;">&lt;</span>a href<span style="color: #339933;">=</span><span style="color: #3366CC;">&quot;/&quot;</span> <span style="color: #FF0000;">class</span><span style="color: #339933;">=</span><span style="color: #3366CC;">&quot;p-4 hover:bg-blue-900&quot;</span><span style="color: #339933;">&gt;</span>Privacy <span style="color: #339933;">&amp;</span> Policy<span style="color: #339933;">&lt;/</span>a<span style="color: #339933;">&gt;</span>
		<span style="color: #339933;">&lt;</span>a href<span style="color: #339933;">=</span><span style="color: #3366CC;">&quot;.&quot;</span> <span style="color: #FF0000;">class</span><span style="color: #339933;">=</span><span style="color: #3366CC;">&quot;p-4 hover:bg-blue-900&quot;</span><span style="color: #339933;">&gt;</span>MIT License<span style="color: #339933;">&lt;/</span>a<span style="color: #339933;">&gt;</span>
	<span style="color: #339933;">&lt;/</span>template<span style="color: #339933;">&gt;</span>
<span style="color: #339933;">&lt;/</span>Footer<span style="color: #339933;">&gt;</span>
<span style="color: #339933;">&lt;</span>Footer pos<span style="color: #339933;">=</span><span style="color: #3366CC;">&quot;center&quot;</span> color<span style="color: #339933;">=</span><span style="color: #3366CC;">&quot;bg-red-400&quot;</span><span style="color: #339933;">&gt;</span>
	<span style="color: #339933;">&lt;</span>p <span style="color: #FF0000;">class</span><span style="color: #339933;">=</span><span style="color: #3366CC;">&quot;p-4&quot;</span><span style="color: #339933;">&gt;&amp;</span>copy<span style="color: #339933;">;</span> <span style="color: #CC0000;">2050</span> Ferdiansyah0611 Corporation<span style="color: #339933;">&lt;/</span>p<span style="color: #339933;">&gt;</span>
<span style="color: #339933;">&lt;/</span>Footer<span style="color: #339933;">&gt;</span></pre>`
			}
		}
	}
}
</script>