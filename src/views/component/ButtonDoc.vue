<template>
	<div class="w-full bg-white border p-3">
		<h5 class="mb-3 font-bold text-2xl"># Button Component</h5>
		<p class="text-xl tracking-wide">Use UI Components custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.</p>
	</div>
	<div class="w-full bg-white border p-3 mt-2">
		<h5 class="mb-5 font-bold text-2xl"># Display</h5>
		<div class="flex w-full flex-wrap mt-2">
			<div class="p-2 w-full md:w-1/4">
				<Button class="w-full" type="primary">Primary</Button>
			</div>
			<div class="p-2 w-full md:w-1/4">
				<Button class="w-full" type="danger">Danger</Button>
			</div>
			<div class="p-2 w-full md:w-1/4">
				<Button class="w-full" type="success">Success</Button>
			</div>
			<div class="p-2 w-full md:w-1/4">
				<Button class="w-full" type="warning">Warning</Button>
			</div>
			<div class="p-2 w-full md:w-1/4">
				<Button class="w-full" type="dark">Dark</Button>
			</div>
			<div class="p-2 w-full md:w-1/4">
				<Button class="w-full" type="light">Light</Button>
			</div>
			<div class="p-2 w-full md:w-1/4">
				<Button class="w-full" type="secondary">Secondary</Button>
			</div>
			<div class="p-2 w-full md:w-1/4">
				<Button class="w-full bg-blue-800" type="custom" p="3" ring="blue-600" color="white" size-ring="4">
					Custom
				</Button>
			</div>
			<div class="p-2 w-full md:w-1/4">
				<ButtonIcon size="md" class="w-full" type="primary">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
					</svg>
					<span class="font-medium">Icon</span>
				</ButtonIcon>
			</div>
			<div class="p-2 w-full md:w-1/4">
				<ButtonIcon size="md" class="w-full" type="danger">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
					</svg>
					<span class="font-medium">Icon</span>
				</ButtonIcon>
			</div>
			<div class="p-2 w-full md:w-1/4">
				<ButtonIcon size="md" class="w-full" type="success">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
					</svg>
					<span class="font-medium">Icon</span>
				</ButtonIcon>
			</div>
			<div class="p-2 w-full md:w-1/4">
				<ButtonIcon size="md" class="w-full" type="warning">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
					</svg>
					<span class="font-medium">Icon</span>
				</ButtonIcon>
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
			<h5 class="font-medium mb-1 text-sm md:text-base"><code>type (String)</code></h5>
			<p class="text-sm">A type of button. List type: error, success, warning, dark, light, secondary, and custom.</p>
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
		document.title = 'Button Component | UI Component Docs'
	},
	data(){
		return{
			example: {
				one: `<<span class="text-red-500">Button</span>
	<span class="text-green-500">size</span>="sm"
	<span class="text-green-500">type</span>="success"
	<span class="text-green-500">txt</span>="Uploading successfuly"
>Uploading successfuly<<span class="text-red-500">/Button</span>>
<<span class="text-red-500">Button</span>
	<span class="text-green-500">bg</span>="blue-800"
	<span class="text-green-500">type</span>="custom"
	<span class="text-green-500">color</span>="white"
	<span class="text-green-500">p</span>="4"
	<span class="text-green-500">ring</span>="blue-400"
	<span class="text-green-500">size-ring</span>="2"
>Uploading successfuly<<span class="text-red-500">/Button</span>>`
			}
		}
	}
}
</script>