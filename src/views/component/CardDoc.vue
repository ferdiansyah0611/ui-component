<template>
	<div class="w-full bg-white p-3 mt-2">
		<h5 class="mb-5 font-bold"># Card Component</h5>
		<div class="flex space-x-1 flex-wrap sm:flex-nowrap">
			<div class="w-full sm:w-1/4 mt-2 sm:mt-0">
				<TextCard link="/" type="default" title="Card Type Text" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum."></TextCard>
			</div>
			<div class="w-full sm:w-1/4 mt-2 sm:mt-0">
				<TextCard
					type="default"
					title="Card Type Text With Footer"
					link="/"
					:footer="[
						{name: 'Show', link: '/', class: 'bg-blue-400 text-white w-full focus:ring-4 focus:ring-blue-200'},
						{name: 'Delete', link: '/', class: 'bg-red-400 text-white w-full focus:ring-4 focus:ring-red-200'},
					]"
					content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
						proident, sunt in culpa qui officia deserunt mollit anim id est laborum.">
				</TextCard>
			</div>
			<div class="w-full sm:w-1/4 mt-2 sm:mt-0">
				<TextCard
					type="default"
					title="Card Type Text With Footer & Img"
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
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
						proident, sunt in culpa qui officia deserunt mollit anim id est laborum.">
				</TextCard>
			</div>
			<div class="w-full sm:w-1/4 mt-2 sm:mt-0">
				<TextCard
					type="primary"
					title="Card Type Text Primary"
					link="/"
					:footer="[
						{name: 'Show', link: '/', class: 'bg-blue-400 text-white w-full '},
						{name: 'Delete', link: '/', class: 'bg-red-400 text-white w-full'},
					]"
					:img="{
						position: 'afterTitle',
						url: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
					}"
					content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
						proident, sunt in culpa qui officia deserunt mollit anim id est laborum.">
				</TextCard>
			</div>
		</div>
	</div>
</template>