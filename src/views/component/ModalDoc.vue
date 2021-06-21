<template>
	<div class="w-full bg-white border p-3">
		<h5 class="mb-3 font-bold text-2xl"># Modal Component</h5>
		<p class="text-xl tracking-wide">Use modal component to add dialogs to your site for lightboxes, user notifications, or completely custom content.</p>
	</div>
	<div class="w-full bg-white border p-3 mt-2">
		<h5 class="mb-5 font-bold text-2xl"># Display</h5>
		<div class="w-full flex-wrap flex justify-center mt-2 sm:mt-0">
			<div class="w-full md:w-2/4 xl:w-1/4 p-1">
				<Modal class="w-full" type="primary" title="Modal Primary">
					<h5>My Content</h5>
				</Modal>
			</div>
			<div class="w-full md:w-2/4 xl:w-1/4 p-1">
				<Modal class="w-full" type="primary" title="Modal Template" template="full">
					<template v-slot:header>
						Header
					</template>
					<template v-slot:default>
						<p v-for="d in 120" v-bind:key="d">Hello World</p>
					</template>
				</Modal>
			</div>
		</div>
	</div>
	<div class="w-full bg-white border p-3 mt-2">
		<h5 class="mb-5 font-bold text-2xl">Example Code</h5>
		<pre class="flex w-full border p-3 focus:outline-none mb-2" contenteditable="">
			<code class="w-full overflow-auto text-sm" v-html="example.one"></code>
		</pre>
	</div>
</template>
<script>
export default{
	created(){
		document.title = 'Modal Component | UI Component Docs'
	},
	data(){
		return{
			example: {
				one:
`<pre class="html5" style="font-family:monospace;"><span style="color: #009900;">&lt;<span style="color: #000000; font-weight: bold;">div</span> <span style="color: #000066;">class</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;w-full md:w-2/4 xl:w-1/4 p-1&quot;</span>&gt;</span>
	<span style="color: #009900;">&lt;Modal <span style="color: #000066;">class</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;w-full&quot;</span> <span style="color: #000066;">type</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;primary&quot;</span> <span style="color: #000066;">title</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;Modal Primary&quot;</span>&gt;</span>
		<span style="color: #009900;">&lt;<span style="color: #000000; font-weight: bold;">h5</span>&gt;</span>Fill Content<span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span><span style="color: #000000; font-weight: bold;">h5</span>&gt;</span>
	<span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span>Modal&gt;</span>
<span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span><span style="color: #000000; font-weight: bold;">div</span>&gt;</span>
<span style="color: #009900;">&lt;<span style="color: #000000; font-weight: bold;">div</span> <span style="color: #000066;">class</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;w-full md:w-2/4 xl:w-1/4 p-1&quot;</span>&gt;</span>
	<span style="color: #009900;">&lt;Modal <span style="color: #000066;">class</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;w-full&quot;</span> <span style="color: #000066;">type</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;danger&quot;</span> <span style="color: #000066;">title</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;Modal Danger&quot;</span>&gt;</span>
		<span style="color: #009900;">&lt;<span style="color: #000000; font-weight: bold;">h5</span>&gt;</span>Fill Content<span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span><span style="color: #000000; font-weight: bold;">h5</span>&gt;</span>
	<span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span>Modal&gt;</span>
<span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span><span style="color: #000000; font-weight: bold;">div</span>&gt;</span>
<span style="color: #009900;">&lt;<span style="color: #000000; font-weight: bold;">div</span> <span style="color: #000066;">class</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;w-full md:w-2/4 xl:w-1/4 p-1&quot;</span>&gt;</span>
	<span style="color: #009900;">&lt;Modal <span style="color: #000066;">class</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;w-full&quot;</span> <span style="color: #000066;">type</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;primary&quot;</span> <span style="color: #000066;">title</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;Modal Template&quot;</span> template<span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;full&quot;</span>&gt;</span>
		<span style="color: #009900;">&lt;template v-slot:header&gt;</span>
			Header
		<span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span>template&gt;</span>
	<span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span>Modal&gt;</span>
<span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span><span style="color: #000000; font-weight: bold;">div</span>&gt;</span></pre>`
			}
		}
	},
}
</script>