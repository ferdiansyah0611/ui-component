<template>
	<Cards type="light">
		<template v-slot:head>
			<h5 class="font-bold text-2xl"># Tabs Component</h5>
		</template>
		<template v-slot:content>
			<p class="text-xl tracking-wide">Documentation and examples for how to use UI Component included navigation components.</p>
		</template>
	</Cards>
	<Cards class="mt-2" type="light">
		<template v-slot:head>
			<h5 class="text-2xl"># Display</h5>
		</template>
		<template v-slot:content>
			<div class="mb-2">
				<Tabs post="x" type="primary" default="tab-1" :title="[{name: 'tab-1', title: 'Title 1'}, {name: 'tab-2', title: 'Title 2'}]">
					<template v-slot:tab-1>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eos recusandae aut voluptates, sunt molestiae id quam nesciunt numquam nulla quod eveniet aperiam, voluptate ea illo provident, molestias magnam aliquam!
					</template>
					<template v-slot:tab-2>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui explicabo nesciunt nisi dicta nihil maiores nemo consectetur eum. Recusandae autem numquam odio quis modi dignissimos. Corporis cumque possimus eum tempore?
					</template>
				</Tabs>
			</div>
			<div class="mb-2">
				<Tabs post="x" type="danger" default="tab-1" :title="[{name: 'tab-1', title: 'Title 1'}, {name: 'tab-2', title: 'Title 2'}]">
					<template v-slot:tab-1>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eos recusandae aut voluptates, sunt molestiae id quam nesciunt numquam nulla quod eveniet aperiam, voluptate ea illo provident, molestias magnam aliquam!
					</template>
					<template v-slot:tab-2>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui explicabo nesciunt nisi dicta nihil maiores nemo consectetur eum. Recusandae autem numquam odio quis modi dignissimos. Corporis cumque possimus eum tempore?
					</template>
				</Tabs>
			</div>
			<div class="mb-2">
				<Tabs post="y" type="primary" default="tab-1" :title="[{name: 'tab-1', title: 'Title 1'}, {name: 'tab-2', title: 'Title 2'}]">
					<template v-slot:tab-1>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eos recusandae aut voluptates, sunt molestiae id quam nesciunt numquam nulla quod eveniet aperiam, voluptate ea illo provident, molestias magnam aliquam!
					</template>
					<template v-slot:tab-2>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui explicabo nesciunt nisi dicta nihil maiores nemo consectetur eum. Recusandae autem numquam odio quis modi dignissimos. Corporis cumque possimus eum tempore?
					</template>
				</Tabs>
			</div>
			<div class="mb-2">
				<Tabs post="y" type="danger" default="tab-1" :title="[{name: 'tab-1', title: 'Title 1'}, {name: 'tab-2', title: 'Title 2'}]">
					<template v-slot:tab-1>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eos recusandae aut voluptates, sunt molestiae id quam nesciunt numquam nulla quod eveniet aperiam, voluptate ea illo provident, molestias magnam aliquam!
					</template>
					<template v-slot:tab-2>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui explicabo nesciunt nisi dicta nihil maiores nemo consectetur eum. Recusandae autem numquam odio quis modi dignissimos. Corporis cumque possimus eum tempore?
					</template>
				</Tabs>
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
				<h5 class="font-medium mb-1"><code>default (String)</code></h5>
				<p class="text-sm">Name of tabs where is open first tabs.</p>
			</div>
			<div class="w-full border-b py-2">
				<h5 class="font-medium mb-1"><code>title (Array)</code></h5>
				<p class="text-sm">Property name is name of tab & property title is text in button.</p>
			</div>
			<div class="w-full border-b py-2">
				<h5 class="font-medium mb-1"><code>post (String)</code></h5>
				<p class="text-sm">Position of tabs. x is horizontal and y is vertical.</p>
			</div>
			<div class="w-full border-b py-2">
				<h5 class="font-medium mb-1"><code>type (String)</code></h5>
				<p class="text-sm">A type of alert. List type: error, success, warning, dark, light, secondary, and custom.</p>
			</div>
		</template>
	</Cards>
</template>
<script>
export default{
	data(){
		return{
			example: {
				one: 
`<pre class="html5" style="font-family:monospace;"><span style="color: #009900;">&lt;Tabs post<span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;y&quot;</span> <span style="color: #000066;">type</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;danger&quot;</span> default<span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;tab-1&quot;</span> :<span style="color: #000066;">title</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;[{name: 'tab-1', title: 'Title 1'}, {name: 'tab-2', title: 'Title 2'}]&quot;</span>&gt;</span>
	<span style="color: #009900;">&lt;template v-slot:tab-<span style="color: #cc66cc;">1</span>&gt;</span>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eos recusandae aut voluptates,
		sunt molestiae id quam nesciunt numquam nulla quod eveniet aperiam, voluptate ea illo provident
	<span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span>template&gt;</span>
	<span style="color: #009900;">&lt;template v-slot:tab-<span style="color: #cc66cc;">2</span>&gt;</span>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui explicabo nesciunt nisi dicta 
		nihil maiores nemo consectetur eum. Recusandae autem numquam odio quis modi dignissimos.
	<span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span>template&gt;</span>
<span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span>Tabs&gt;</span></pre>`
			}
		}
	},
	created(){
		document.title = 'Tabs Component | UI Component Docs'
	}
}
</script>