<template>
	<div class="w-full">
		<div class="border p-3 bg-white">
			<h5 class="font-bold text-2xl"># Card Component</h5>
			<p class="md:text-xl tracking-wide pt-2">A card is a flexible and extensible content 
				container.
			</p>
			
		</div>
		<div class="my-2">
			<div class="flex flex-wrap">
				<div class="w-full sm:w-1/2 md:w-1/3 mt-1 md:mt-0">
					<Cards type="primary">
						<template v-slot:head>
							<h5>Primary</h5>
						</template>
						<template v-slot:content>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						</template>
					</Cards>
				</div>
				<div class="w-full sm:w-1/2 md:w-1/3 mt-1 md:mt-0">
					<Cards type="danger">
						<template v-slot:head>
							<h5>Danger</h5>
						</template>
						<template v-slot:content>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						</template>
					</Cards>
				</div>
				<div class="w-full sm:w-1/2 md:w-1/3 mt-1 md:mt-0">
					<Cards type="light">
						<template v-slot:head>
							<h5>Light</h5>
						</template>
						<template v-slot:content>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						</template>
					</Cards>
				</div>
			</div>
			<!--  -->
			<div class="flex flex-wrap lg:flex-nowrap">
				<div class="w-full md:w-1/2 mt-1 md:mt-0">
					<Cards type="primary">
						<template v-slot:head>
							<h5>Primary</h5>
						</template>
						<template v-slot:content>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						</template>
						<template v-slot:footer>
							<Button type="light">Save</Button>
							<Button type="danger">Delete</Button>
						</template>
					</Cards>
				</div>
				<div class="w-full md:w-1/2 mt-1 md:mt-0">
					<Cards type="danger">
						<template v-slot:head>
							<h5>Danger</h5>
						</template>
						<template v-slot:content>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						</template>
						<template v-slot:footer>
							<Button type="light">Save</Button>
							<Button type="danger">Delete</Button>
						</template>
					</Cards>
				</div>
				<div class="w-full md:w-1/2 mt-1 md:mt-0">
					<Cards type="light">
						<template v-slot:head>
							<h5>Light</h5>
						</template>
						<template v-slot:content>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						</template>
						<template v-slot:footer>
							<Button type="light">Save</Button>
							<Button type="danger">Delete</Button>
						</template>
					</Cards>
				</div>
			</div>
			<!--  -->
			<div class="flex flex-wrap lg:flex-nowrap">
				<div class="w-full sm:w-1/2 md:w-1/2 mt-1 md:mt-0">
					<Cards type="danger">
						<template v-slot:head>
							<img src="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="">
							<h5 class="mt-2">Danger</h5>
						</template>
						<template v-slot:content>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						</template>
					</Cards>
				</div>
				<div class="w-full sm:w-1/2 md:w-1/2 mt-1 md:mt-0">
					<Cards type="light">
						<template v-slot:head>
							<img src="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="">
							<h5 class="mt-2">Light</h5>
						</template>
						<template v-slot:content>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						</template>
					</Cards>
				</div>
				<div class="w-full sm:w-1/2 md:w-1/2 mt-1 md:mt-0">
					<Cards type="success">
						<template v-slot:head>
							<img src="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="">
							<h5 class="mt-2">Success</h5>
						</template>
						<template v-slot:content>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						</template>
					</Cards>
				</div>
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
			<h5 class="font-medium mb-1"><code>type (String)</code></h5>
			<p class="text-sm">A type of card. List type: error, success, warning, dark, light, secondary, and custom.</p>
		</div>
	</div>
</template>
<script>
export default{
	name: 'Card Doc',
	data(){
		return{
			example: {
				one:
`<pre class="html5" style="font-family:monospace;"><span style="color: #009900;">&lt;Cards <span style="color: #000066;">type</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;primary&quot;</span>&gt;</span>
	<span style="color: #009900;">&lt;template v-slot:head&gt;</span>
		<span style="color: #009900;">&lt;<span style="color: #000000; font-weight: bold;">h5</span>&gt;</span>Primary<span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span><span style="color: #000000; font-weight: bold;">h5</span>&gt;</span>
	<span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span>template&gt;</span>
	<span style="color: #009900;">&lt;template v-slot:content&gt;</span>
		<span style="color: #009900;">&lt;<span style="color: #000000; font-weight: bold;">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span><span style="color: #000000; font-weight: bold;">p</span>&gt;</span>
	<span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span>template&gt;</span>
<span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span>Cards&gt;</span>
<span style="color: #009900;">&lt;Cards <span style="color: #000066;">type</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;primary&quot;</span>&gt;</span>
	<span style="color: #009900;">&lt;template v-slot:head&gt;</span>
		<span style="color: #009900;">&lt;<span style="color: #000000; font-weight: bold;">h5</span>&gt;</span>Primary<span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span><span style="color: #000000; font-weight: bold;">h5</span>&gt;</span>
	<span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span>template&gt;</span>
	<span style="color: #009900;">&lt;template v-slot:content&gt;</span>
		<span style="color: #009900;">&lt;<span style="color: #000000; font-weight: bold;">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span><span style="color: #000000; font-weight: bold;">p</span>&gt;</span>
	<span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span>template&gt;</span>
	<span style="color: #009900;">&lt;template v-slot:footer&gt;</span>
		<span style="color: #009900;">&lt;<span style="color: #000000; font-weight: bold;">Button</span> <span style="color: #000066;">type</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;light&quot;</span>&gt;</span>Save<span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span><span style="color: #000000; font-weight: bold;">Button</span>&gt;</span>
		<span style="color: #009900;">&lt;<span style="color: #000000; font-weight: bold;">Button</span> <span style="color: #000066;">type</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;danger&quot;</span>&gt;</span>Delete<span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span><span style="color: #000000; font-weight: bold;">Button</span>&gt;</span>
	<span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span>template&gt;</span>
<span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span>Cards&gt;</span>
<span style="color: #009900;">&lt;Cards <span style="color: #000066;">type</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;success&quot;</span>&gt;</span>
	<span style="color: #009900;">&lt;template v-slot:head&gt;</span>
		<span style="color: #009900;">&lt;<span style="color: #000000; font-weight: bold;">img</span> <span style="color: #000066;">src</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60&quot;</span> <span style="color: #000066;">alt</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;&quot;</span>&gt;</span>
		<span style="color: #009900;">&lt;<span style="color: #000000; font-weight: bold;">h5</span> <span style="color: #000066;">class</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;mt-2&quot;</span>&gt;</span>Success<span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span><span style="color: #000000; font-weight: bold;">h5</span>&gt;</span>
	<span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span>template&gt;</span>
	<span style="color: #009900;">&lt;template v-slot:content&gt;</span>
		<span style="color: #009900;">&lt;<span style="color: #000000; font-weight: bold;">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span><span style="color: #000000; font-weight: bold;">p</span>&gt;</span>
	<span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span>template&gt;</span>
<span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span>Cards&gt;</span></pre>`
			}
		}
	},
	created(){
		document.title = 'Card Component | UI Component Docs'
	}
}
</script>