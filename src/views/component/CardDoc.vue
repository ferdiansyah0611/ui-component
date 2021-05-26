<template>
	<div class="w-full bg-white mt-2">
		<h5 class="mb-5 font-bold text-3xl"># Card Component</h5>
		<p class="text-xl tracking-wide">A card is a flexible and extensible content 
			container. It includes options for headers and footers, a wide variety of 
			content, contextual background colors, and powerful display options.
			If you’re familiar with Bootstrap 3, cards replace our old panels, wells, 
			and thumbnails. Similar functionality to those components is available as modifier 
			classes for cards.
		</p>
		<div class="flex flex-wrap">
			<div class="w-1/2 sm:w-1/2 md:w-1/4 mt-1 md:mt-0 p-1">
				<TextCard type="light" link="/" title="Card Text Light" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua."></TextCard>
			</div>
			<div class="w-1/2 sm:w-1/2 md:w-1/4 mt-1 md:mt-0 p-1">
				<TextCard type="primary" link="/" title="Card Text Primary" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua."></TextCard>
			</div>
			<div class="w-1/2 sm:w-1/2 md:w-1/4 mt-1 md:mt-0 p-1">
				<TextCard type="danger" link="/" title="Card Text Danger" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua."></TextCard>
			</div>
			<div class="w-1/2 sm:w-1/2 md:w-1/4 mt-1 md:mt-0 p-1">
				<TextCard type="secondary" link="/" title="Card Text Secondary" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua."></TextCard>
			</div>
			<div class="w-1/2 sm:w-1/2 md:w-1/4 mt-1 md:mt-0 p-1">
				<TextCard type="success" link="/" title="Card Text Success" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua."></TextCard>
			</div>
			<div class="w-1/2 sm:w-1/2 md:w-1/4 mt-1 md:mt-0 p-1">
				<TextCard type="warning" link="/" title="Card Text Warning" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua."></TextCard>
			</div>
			<div class="w-1/2 sm:w-1/2 md:w-1/4 mt-1 md:mt-0 p-1">
				<TextCard type="dark" link="/" title="Card Text Dark" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua."></TextCard>
			</div>
			<div class="w-1/2 sm:w-1/2 md:w-1/4 mt-1 md:mt-0 p-1">
				<TextCard type="custom" bg="blue-800" link="/" title="Card Text Custom" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua."></TextCard>
			</div>
		</div>
		<!--  -->
		<div class="flex md:space-x-1 flex-wrap md:flex-nowrap">
			<div class="w-full sm:w-1/2 md:w-1/4 mt-1 md:mt-0 p-1">
				<TextCard
					type="light"
					title="Card Text Footer Light"
					link="/"
					:footer="[
						{name: 'Show', link: '/', class: 'bg-blue-400 text-white w-full focus:ring-4 focus:ring-blue-200'},
						{name: 'Delete', link: '/', class: 'bg-red-400 text-white w-full focus:ring-4 focus:ring-red-200'},
					]"
					content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.">
				</TextCard>
			</div>
			<div class="w-full sm:w-1/2 md:w-1/4 mt-1 md:mt-0 p-1">
				<TextCard
					type="primary"
					title="Card Text Footer Primary"
					link="/"
					:footer="[
						{name: 'Show', link: '/', class: 'bg-blue-400 text-white w-full focus:ring-4 focus:ring-blue-200'},
						{name: 'Delete', link: '/', class: 'bg-red-400 text-white w-full focus:ring-4 focus:ring-red-200'},
					]"
					content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.">
				</TextCard>
			</div>
			<div class="w-full sm:w-1/2 md:w-1/4 mt-1 md:mt-0 p-1">
				<TextCard
					type="danger"
					title="Card Text Footer Primary"
					link="/"
					:footer="[
						{name: 'Show', link: '/', class: 'bg-blue-400 text-white w-full focus:ring-4 focus:ring-blue-200'},
						{name: 'Delete', link: '/', class: 'bg-red-400 text-white w-full focus:ring-4 focus:ring-red-200'},
					]"
					content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.">
				</TextCard>
			</div>
			<div class="w-full sm:w-1/2 md:w-1/4 mt-1 md:mt-0 p-1">
				<TextCard
					type="secondary"
					title="Card Text Footer Second"
					link="/"
					:footer="[
						{name: 'Show', link: '/', class: 'bg-blue-400 text-white w-full focus:ring-4 focus:ring-blue-200'},
						{name: 'Delete', link: '/', class: 'bg-red-400 text-white w-full focus:ring-4 focus:ring-red-200'},
					]"
					content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.">
				</TextCard>
			</div>
		</div>
		<!--  -->
		<div class="flex md:space-x-1 flex-wrap md:flex-nowrap">
			<div class="w-full sm:w-1/2 md:w-1/4 mt-1 md:mt-0 p-1">
				<TextCard
					type="light"
					title="Card Type Text Footer Img Light"
					link="/"
					:footer="[
						{name: 'Show', link: '/', class: 'bg-blue-400 text-white w-full focus:ring-4 focus:ring-blue-200'},
						{name: 'Delete', link: '/', class: 'bg-red-400 text-white w-full focus:ring-4 focus:ring-red-200'},
					]"
					:img="{
						position: 'afterTitle',
						url: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
					}"
					content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.">
				</TextCard>
			</div>
			<div class="w-full sm:w-1/2 md:w-1/4 mt-1 md:mt-0 p-1">
				<TextCard
					type="primary"
					title="Card Type Text Footer Img Primary"
					link="/"
					:footer="[
						{name: 'Show', link: '/', class: 'bg-blue-400 text-white w-full focus:ring-4 focus:ring-blue-200'},
						{name: 'Delete', link: '/', class: 'bg-red-400 text-white w-full focus:ring-4 focus:ring-red-200'},
					]"
					:img="{
						position: 'afterTitle',
						url: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
					}"
					content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.">
				</TextCard>
			</div>
			<div class="w-full sm:w-1/2 md:w-1/4 mt-1 md:mt-0 p-1">
				<TextCard
					type="danger"
					title="Card Type Text Footer Img Danger"
					link="/"
					:footer="[
						{name: 'Show', link: '/', class: 'bg-blue-400 text-white w-full focus:ring-4 focus:ring-blue-200'},
						{name: 'Delete', link: '/', class: 'bg-red-400 text-white w-full focus:ring-4 focus:ring-red-200'},
					]"
					:img="{
						position: 'afterTitle',
						url: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
					}"
					content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.">
				</TextCard>
			</div>
			<div class="w-full sm:w-1/2 md:w-1/4 mt-1 md:mt-0 p-1">
				<TextCard
					type="secondary"
					title="Card Type Text Footer Img Secondary"
					link="/"
					:footer="[
						{name: 'Show', link: '/', class: 'bg-blue-400 text-white w-full focus:ring-4 focus:ring-blue-200'},
						{name: 'Delete', link: '/', class: 'bg-red-400 text-white w-full focus:ring-4 focus:ring-red-200'},
					]"
					:img="{
						position: 'afterTitle',
						url: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
					}"
					content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.">
				</TextCard>
			</div>
		</div>
	</div>
	<div class="w-full bg-white border p-3 mt-2">
		<h5 class="font-bold text-2xl">Refference</h5>
		<div class="w-full border-b py-2">
			<h5 class="font-medium mb-1"><code>type (String)</code></h5>
			<p class="text-sm">A type of card. List type: error, success, warning, dark, light, secondary, and custom.</p>
		</div>
		<div class="w-full border-b py-2">
			<h5 class="font-medium mb-1"><code>title (String)</code></h5>
			<p class="text-sm">Text title in card component.</p>
		</div>
		<div class="w-full border-b py-2">
			<h5 class="font-medium mb-1"><code>link (String)</code></h5>
			<p class="text-sm">A url on click at title card component.</p>
		</div>
		<div class="w-full border-b py-2">
			<h5 class="font-medium mb-1"><code>content (String)</code></h5>
			<p class="text-sm">Text content in card component.</p>
		</div>
		<div class="w-full border-b py-2">
			<h5 class="font-medium mb-1"><code>img (Object)</code></h5>
			<p class="text-sm">Property url is img url in card component & property position is position of image. Position: top, afterTitle, afterContent.</p>
		</div>
		<div class="w-full border-b py-2">
			<h5 class="font-medium mb-1"><code>footer (Array)</code></h5>
			<p class="text-sm">Property name is text show in button component, property link is url on click at button & property class is class for button.</p>
		</div>
	</div>
</template>