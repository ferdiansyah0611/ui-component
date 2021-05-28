<template>
	<div class="w-full bg-white border p-3">
		<h5 class="mb-5 font-bold text-3xl"># Tabs Component</h5>
		<p class="text-xl tracking-wide">Documentation and examples for how to use UI Component included navigation components.</p>
	</div>
	<div class="w-full bg-white border p-3 mt-2">
		<h5 class="mb-5 font-bold text-2xl"># Display</h5>
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
	</div>
	<div class="w-full bg-white border p-3 mt-2">
		<h5 class="mb-5 font-bold text-2xl">Example Code</h5>
		<textarea class="w-full max-h-screen overflow-auto focus:outline-none text-sm" style="min-height: 200px;">
<Tabs post="y" type="danger" default="tab-1" :title="[{name: 'tab-1', title: 'Title 1'}, {name: 'tab-2', title: 'Title 2'}]">
	<template v-slot:tab-1>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eos recusandae aut voluptates, sunt molestiae id quam nesciunt numquam nulla quod eveniet aperiam, voluptate ea illo provident, molestias magnam aliquam!
	</template>
	<template v-slot:tab-2>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui explicabo nesciunt nisi dicta nihil maiores nemo consectetur eum. Recusandae autem numquam odio quis modi dignissimos. Corporis cumque possimus eum tempore?
	</template>
</Tabs>
		</textarea>
	</div>
	<div class="w-full bg-white border p-3 mt-2">
		<h5 class="font-bold text-2xl">Refference</h5>
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
	</div>
</template>
<script>
export default{
	created(){
		document.title = 'Tabs Component | UI Component Docs'
	}
}
</script>