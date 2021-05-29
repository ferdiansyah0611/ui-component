<template>
	<div class="w-full bg-white border p-3">
		<h5 class="mb-3 font-bold text-2xl"># Dropdown Component</h5>
		<p class="text-xl tracking-wide">Toggle contextual overlays for displaying lists of links and more with the UI Component dropdown plugin.</p>
		<div class="flex w-full flex-wrap border mt-2">
			<div class="p-2 w-full md:w-1/4">
				<Dropdown animate="scale" txt="Dropdown" type="primary">
					<router-link to="/" class="p-2 w-full hover:bg-gray-100 transition-all duration-200 z-10 bg-white">
						Link 1
					</router-link>
					<router-link to="/" class="p-2 w-full hover:bg-gray-100 transition-all duration-200 z-10 bg-white">
						Link 2
					</router-link>
					<router-link to="/" class="p-2 w-full hover:bg-gray-100 transition-all duration-200 z-10 bg-white">
						Link 3
					</router-link>
				</Dropdown>
			</div>
			<div class="p-2 w-full md:w-1/4">
				<Dropdown txt="Dropdown" type="danger">
					<router-link to="/" class="p-2 w-full hover:bg-gray-100 transition-all duration-200 z-10 bg-white">
						Link 1
					</router-link>
					<router-link to="/" class="p-2 w-full hover:bg-gray-100 transition-all duration-200 z-10 bg-white">
						Link 2
					</router-link>
					<router-link to="/" class="p-2 w-full hover:bg-gray-100 transition-all duration-200 z-10 bg-white">
						Link 3
					</router-link>
				</Dropdown>
			</div>
			<div class="p-2 w-full md:w-1/4">
				<Dropdown txt="Dropdown" type="success">
					<router-link to="/" class="p-2 w-full hover:bg-gray-100 transition-all duration-200 z-10 bg-white">
						Link 1
					</router-link>
					<router-link to="/" class="p-2 w-full hover:bg-gray-100 transition-all duration-200 z-10 bg-white">
						Link 2
					</router-link>
					<router-link to="/" class="p-2 w-full hover:bg-gray-100 transition-all duration-200 z-10 bg-white">
						Link 3
					</router-link>
				</Dropdown>
			</div>
			<div class="p-2 w-full md:w-1/4">
				<Dropdown txt="Dropdown" type="warning">
					<router-link to="/" class="p-2 w-full hover:bg-gray-100 transition-all duration-200 z-10 bg-white">
						Link 1
					</router-link>
					<router-link to="/" class="p-2 w-full hover:bg-gray-100 transition-all duration-200 z-10 bg-white">
						Link 2
					</router-link>
					<router-link to="/" class="p-2 w-full hover:bg-gray-100 transition-all duration-200 z-10 bg-white">
						Link 3
					</router-link>
				</Dropdown>
			</div>
			<div class="p-2 w-full md:w-1/4">
				<Dropdown txt="Dropdown" type="dark">
					<router-link to="/" class="p-2 w-full hover:bg-gray-100 transition-all duration-200 z-10 bg-white">
						Link 1
					</router-link>
					<router-link to="/" class="p-2 w-full hover:bg-gray-100 transition-all duration-200 z-10 bg-white">
						Link 2
					</router-link>
					<router-link to="/" class="p-2 w-full hover:bg-gray-100 transition-all duration-200 z-10 bg-white">
						Link 3
					</router-link>
				</Dropdown>
			</div>
			<div class="p-2 w-full md:w-1/4">
				<Dropdown txt="Dropdown" type="light">
					<router-link to="/" class="p-2 w-full hover:bg-gray-100 transition-all duration-200 z-10 bg-white">
						Link 1
					</router-link>
					<router-link to="/" class="p-2 w-full hover:bg-gray-100 transition-all duration-200 z-10 bg-white">
						Link 2
					</router-link>
					<router-link to="/" class="p-2 w-full hover:bg-gray-100 transition-all duration-200 z-10 bg-white">
						Link 3
					</router-link>
				</Dropdown>
			</div>
			<div class="p-2 w-full md:w-1/4">
				<Dropdown txt="Dropdown" type="secondary">
					<router-link to="/" class="p-2 w-full hover:bg-gray-100 transition-all duration-200 z-10 bg-white">
						Link 1
					</router-link>
					<router-link to="/" class="p-2 w-full hover:bg-gray-100 transition-all duration-200 z-10 bg-white">
						Link 2
					</router-link>
					<router-link to="/" class="p-2 w-full hover:bg-gray-100 transition-all duration-200 z-10 bg-white">
						Link 3
					</router-link>
				</Dropdown>
			</div>
			<div class="p-2 w-full md:w-1/4">
				<Dropdown
					txt="Custom" type="custom"
					bg="blue-600"
					p="3"
					color="white">
					<router-link to="/" class="p-2 w-full hover:bg-gray-100 transition-all duration-200 z-10 bg-white">
						Link 1
					</router-link>
					<router-link to="/" class="p-2 w-full hover:bg-gray-100 transition-all duration-200 z-10 bg-white">
						Link 2
					</router-link>
					<router-link to="/" class="p-2 w-full hover:bg-gray-100 transition-all duration-200 z-10 bg-white">
						Link 3
					</router-link>
				</Dropdown>
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
			<h5 class="font-medium mb-1 text-sm md:text-base"><code>animate (String)</code></h5>
			<p class="text-sm">Animation of dropdown. List animation: scale.</p>
		</div>
		<div class="w-full border-b py-2">
			<h5 class="font-medium mb-1 text-sm md:text-base"><code>link (Array)</code></h5>
			<p class="text-sm">A list link of dropdown. Must be object and have property name & link.</p>
		</div>
		<div class="w-full border-b py-2">
			<h5 class="font-medium mb-1 text-sm md:text-base"><code>type (String)</code></h5>
			<p class="text-sm">A type of dropdown. List type: error, success, warning, dark, light, secondary, and custom.</p>
		</div>
		<div class="w-full border-b py-2">
			<h5 class="font-medium mb-1 text-sm md:text-base"><code>txt (String)</code></h5>
			<p class="text-sm">Text show in dropdown component.</p>
		</div>
		<div class="w-full border-b py-2">
			<h5 class="font-medium mb-1 text-sm md:text-base"><code>bg (String)</code></h5>
			<p class="text-sm">Class bacground-color if type is custom.</p>
		</div>
		<div class="w-full border-b py-2">
			<h5 class="font-medium mb-1 text-sm md:text-base"><code>role (String)</code></h5>
			<p class="text-sm">Type of button, type is submit or button.</p>
		</div>
		<div class="w-full border-b py-2">
			<h5 class="font-medium mb-1 text-sm md:text-base"><code>color (String)</code></h5>
			<p class="text-sm">Class color on text if type is custom.</p>
		</div>
		<div class="w-full border-b py-2">
			<h5 class="font-medium mb-1 text-sm md:text-base"><code>p (String)</code></h5>
			<p class="text-sm">Class padding if type is custom.</p>
		</div>
		<div class="w-full border-b py-2">
			<h5 class="font-medium mb-1 text-sm md:text-base"><code>ring (String)</code></h5>
			<p class="text-sm">Class ring color if type is custom.</p>
		</div>
		<div class="w-full border-b py-2">
			<h5 class="font-medium mb-1 text-sm md:text-base"><code>size-ring (String)</code></h5>
			<p class="text-sm">Class size of ring if type is custom.</p>
		</div>
		<div class="w-full border-b py-2">
			<h5 class="font-medium mb-1 text-sm md:text-base"><code>size (String)</code></h5>
			<p class="text-sm">Size of button if type is not equal custom.</p>
		</div>
	</div>
</template>
<script>
export default{
	created(){
		document.title = 'Dropdown Component | UI Component Docs'
	},
	data(){
		return{
			example: {
				one: `<<span class="text-red-500">Dropdown</span>
	<span class="text-green-500">size</span>="sm"
	<span class="text-green-500">type</span>="success"
	:<span class="text-green-500">link</span>="[
		{name: 'Link 1', link: '/'},
		{name: 'Link 2', link: '/'},
		{name: 'Link 3', link: '/'}
	]"
	<span class="text-green-500">txt</span>="My Dropdown"
/>
<<span class="text-red-500">Dropdown</span>
	<span class="text-green-500">bg</span>="blue-800"
	<span class="text-green-500">type</span>="custom"
	:<span class="text-green-500">link</span>="[
		{name: 'Link 1', link: '/'},
		{name: 'Link 2', link: '/'},
		{name: 'Link 3', link: '/'}
	]"
	<span class="text-green-500">color</span>="white"
	<span class="text-green-500">p</span>="4"
	<span class="text-green-500">ring</span>="blue-400"
	<span class="text-green-500">size-ring</span>="2"
	<span class="text-green-500">txt</span>="My Dropdown"
/>
<<span class="text-red-500">Dropdown</span>
	<span class="text-green-500">size</span>="sm"
	<span class="text-green-500">type</span>="success"
	<span class="text-green-500">txt</span>="My Dropdown"
>Your router-link or a href in here
<<span class="text-red-500">/Dropdown</span>`
			}
		}
	}
}
</script>