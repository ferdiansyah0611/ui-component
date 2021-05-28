<template>
	<div class="w-full bg-white">
		<h5 class="mb-5 font-bold text-2xl p-2"># Card Component</h5>
		<p class="md:text-xl tracking-wide p-2">A card is a flexible and extensible content 
			container. It includes options for headers and footers, a wide variety of 
			content, contextual background colors, and powerful display options.
			If you’re familiar with Bootstrap 3, cards replace our old panels, wells, 
			and thumbnails. Similar functionality to those components is available as modifier 
			classes for cards.
		</p>
		<div class="flex flex-wrap">
			<div class="w-1/2 sm:w-1/2 md:w-1/3 mt-1 md:mt-0 p-1">
				<Cards type="primary">
					<template v-slot:head>
						<h5>Primary</h5>
					</template>
					<template v-slot:content>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</template>
				</Cards>
			</div>
			<div class="w-1/2 sm:w-1/2 md:w-1/3 mt-1 md:mt-0 p-1">
				<Cards type="danger">
					<template v-slot:head>
						<h5>Danger</h5>
					</template>
					<template v-slot:content>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</template>
				</Cards>
			</div>
			<div class="w-1/2 sm:w-1/2 md:w-1/3 mt-1 md:mt-0 p-1">
				<Cards type="light">
					<template v-slot:head>
						<h5>Light</h5>
					</template>
					<template v-slot:content>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</template>
				</Cards>
			</div>
			<div class="w-1/2 sm:w-1/2 md:w-1/3 mt-1 md:mt-0 p-1">
				<Cards type="secondary">
					<template v-slot:head>
						<h5>Secondary</h5>
					</template>
					<template v-slot:content>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</template>
				</Cards>
			</div>
			<div class="w-1/2 sm:w-1/2 md:w-1/3 mt-1 md:mt-0 p-1">
				<Cards type="success">
					<template v-slot:head>
						<h5>Success</h5>
					</template>
					<template v-slot:content>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</template>
				</Cards>
			</div>
			<div class="w-1/2 sm:w-1/2 md:w-1/3 mt-1 md:mt-0 p-1">
				<Cards type="danger">
					<template v-slot:head>
						<h5>Danger</h5>
					</template>
					<template v-slot:content>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</template>
				</Cards>
			</div>
			<div class="w-1/2 sm:w-1/2 md:w-1/3 mt-1 md:mt-0 p-1">
				<Cards type="warning">
					<template v-slot:head>
						<h5>Warning</h5>
					</template>
					<template v-slot:content>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</template>
				</Cards>
			</div>
			<div class="w-1/2 sm:w-1/2 md:w-1/3 mt-1 md:mt-0 p-1">
				<Cards type="dark">
					<template v-slot:head>
						<h5>Dark</h5>
					</template>
					<template v-slot:content>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</template>
				</Cards>
			</div>
		</div>
		<!--  -->
		<div class="flex lg:space-x-1 flex-wrap lg:flex-nowrap">
			<div class="w-full md:w-1/2 mt-1 md:mt-0 p-1">
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
			<div class="w-full md:w-1/2 mt-1 md:mt-0 p-1">
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
			<div class="w-full md:w-1/2 mt-1 md:mt-0 p-1">
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
			<div class="w-full md:w-1/2 mt-1 md:mt-0 p-1">
				<Cards type="success">
					<template v-slot:head>
						<h5>Success</h5>
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
		<div class="flex lg:space-x-1 flex-wrap lg:flex-nowrap">
			<div class="w-1/2 sm:w-1/2 md:w-1/2 mt-1 md:mt-0 p-1">
				<Cards type="primary">
					<template v-slot:head>
						<img src="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="">
						<h5 class="mt-2">Primary</h5>
					</template>
					<template v-slot:content>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</template>
				</Cards>
			</div>
			<div class="w-1/2 sm:w-1/2 md:w-1/2 mt-1 md:mt-0 p-1">
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
			<div class="w-1/2 sm:w-1/2 md:w-1/2 mt-1 md:mt-0 p-1">
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
			<div class="w-1/2 sm:w-1/2 md:w-1/2 mt-1 md:mt-0 p-1">
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
	created(){
		document.title = 'Card Component | UI Component Docs'
	}
}
</script>