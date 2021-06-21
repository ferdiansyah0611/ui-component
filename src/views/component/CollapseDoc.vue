<template>
	<div class="w-full bg-white border p-3">
		<h5 class="mb-3 font-bold text-2xl"># Collapse Component</h5>
		<p class="text-xl tracking-wide">Toggle the visibility of content across your project with a few classes.</p>
	</div>
	<div class="w-full bg-white border p-3 mt-2">
		<h5 class="mb-5 font-bold text-2xl"># Display</h5>
		<div class="w-full flex-wrap flex mt-2 sm:mt-0">
			<div class="w-full md:w-2/4 xl:w-1/4">
				<Collapse type="primary" title="Collapse">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis modi itaque vitae aspernatur voluptate sint a excepturi, numquam eos provident dolore mollitia impedit deserunt iste, labore facilis harum aperiam voluptatibus.
				</Collapse>
			</div>
			<div class="w-full md:w-2/4 xl:w-1/4">
				<Collapse type="danger" title="Collapse">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis modi itaque vitae aspernatur voluptate sint a excepturi, numquam eos provident dolore mollitia impedit deserunt iste, labore facilis harum aperiam voluptatibus.
				</Collapse>
			</div>
			<div class="w-full md:w-2/4 xl:w-1/4">
				<Collapse type="light" title="Collapse">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis modi itaque vitae aspernatur voluptate sint a excepturi, numquam eos provident dolore mollitia impedit deserunt iste, labore facilis harum aperiam voluptatibus.
				</Collapse>
			</div>
			<div class="w-full md:w-2/4 xl:w-1/4">
				<Collapse type="dark" title="Collapse">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis modi itaque vitae aspernatur voluptate sint a excepturi, numquam eos provident dolore mollitia impedit deserunt iste, labore facilis harum aperiam voluptatibus.
				</Collapse>
			</div>
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
			<h5 class="font-medium mb-1"><code>title (String)</code></h5>
			<p class="text-sm">Text in button collapse.</p>
		</div>
		<div class="w-full border-b py-2">
			<h5 class="font-medium mb-1"><code>type (String)</code></h5>
			<p class="text-sm">A type of alert. List type: error, success, warning, dark, light, secondary, and custom.</p>
		</div>
	</div>
</template>
<script>
export default{
	data(){
		return{
			example: {
				one:
`<pre class="html5" style="font-family:monospace;"><span style="color: #009900;">&lt;Collapse <span style="color: #000066;">type</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;dark&quot;</span> <span style="color: #000066;">title</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;Collapse&quot;</span>&gt;</span>
	Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis modi itaque vitae aspernatur
	voluptate sint a excepturi, numquam eos provident dolore mollitia impedit 
	deserunt iste, labore facilis harum aperiam voluptatibus.
<span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span>Collapse&gt;</span>
<span style="color: #009900;">&lt;Collapse <span style="color: #000066;">type</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;primary&quot;</span> <span style="color: #000066;">title</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;Collapse&quot;</span>&gt;</span>
	Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis modi itaque vitae aspernatur
	voluptate sint a excepturi
<span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span>Collapse&gt;</span></pre>`
			}
		}
	},
	created(){
		document.title = 'Collapse Component | UI Component Docs'
	}
}
</script>