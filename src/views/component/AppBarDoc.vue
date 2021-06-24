<template>
	<Cards type="light">
		<template v-slot:head>
			<h5 class="font-bold text-2xl"># App Bar Component</h5>
		</template>
		<template v-slot:content>
			<p class="text-xl tracking-wide">Example of app bar using a component.</p>
		</template>
	</Cards>
	<Cards class="mt-2" type="light">
		<template v-slot:head>
			<h5 class="text-2xl"># Example 1</h5>
		</template>
		<template v-slot:content>
			<Tabs :no-padding="true" post="x" type="secondary" default="display" :title="[{name: 'display', title: 'Display'}, {name: 'code', title: 'Source Code'}]">
				<template v-slot:display>
					<div class="w-full">
						<Navbar type="light">
							<template v-slot:navs>
								<div class="w-1/2 flex justify-start">
									<span class="p-6 font-bold">Blog</span>
									<router-link class="p-6 font-bold hover:bg-gray-200 transition-all duration-500" to="/">Home</router-link>
									<router-link class="p-6 font-bold hover:bg-gray-200 transition-all duration-500" to="/">Popular</router-link>
								</div>
								<div class="w-1/2 flex justify-end">
									<router-link class="p-6 font-bold hover:bg-gray-200 transition-all duration-500" to="/">Login</router-link>
								</div>
							</template>
							<template v-slot:mobile>
								<div class="w-1/2 flex justify-start">
									<router-link class="p-6 font-bold hover:bg-gray-200 transition-all duration-500" to="/">Blog</router-link>
								</div>
								<div class="w-1/2 flex justify-end">
									<router-link class="p-6 font-bold hover:bg-gray-200 transition-all duration-500" to="/">
										<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
										</svg>
									</router-link>
								</div>
							</template>
						</Navbar>
						<div class="w-full py-10 px-2 flex flex-wrap">
							<div class="w-full sm:w-1/2 lg:w-1/4 p-1" v-for="d in 8" v-bind:key="d">
								<Cards class="border" type="light">
									<template v-slot:head>
										<h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h5>
									</template>
									<template v-slot:content>
										<p>
											Lorem ipsum dolor sit amet, consectetur, adipisicing elit. Ea saepe quasi obcaecati, 
											repellat nisi iure, inventore cupiditate quibusdam ratione esse laborum iste exercitationem 
											autem modi. Totam sit, adipisci veritatis repellat!
										</p>
									</template>
									<template v-slot:footer>
										<Button type="primary">Like</Button>
										<Button type="danger">Comment</Button>
									</template>
								</Cards>
							</div>
						</div>
						<Footer pos="default" color="bg-gray-100">
							<template v-slot:left>
								<p class="p-4 text-black">&copy; {{new Date().getFullYear()}} Company</p>
							</template>
							<template v-slot:right>
								<a href="/" class="p-4 text-black hover:bg-gray-200">Privacy & Policy</a>
							</template>
						</Footer>
					</div>
				</template>
				<template v-slot:code>
					<pre class="flex w-full p-3 focus:outline-none mb-2" contenteditable="">
						<code class="w-full overflow-auto text-sm" v-html="example.one"></code>
					</pre>
				</template>
			</Tabs>
		</template>
	</Cards>
</template>
<script>
export default{
	data(){
		return{
			example: {
				one: 
`<pre class="javascript" style="font-family:monospace;"><span style="color: #339933;">&lt;</span>div <span style="color: #FF0000;">class</span><span style="color: #339933;">=</span><span style="color: #3366CC;">&quot;w-full&quot;</span><span style="color: #339933;">&gt;</span>
	<span style="color: #339933;">&lt;</span>Navbar type<span style="color: #339933;">=</span><span style="color: #3366CC;">&quot;light&quot;</span><span style="color: #339933;">&gt;</span>
		<span style="color: #339933;">&lt;</span>template v<span style="color: #339933;">-</span>slot<span style="color: #339933;">:</span>navs<span style="color: #339933;">&gt;</span>
			<span style="color: #339933;">&lt;</span>div <span style="color: #FF0000;">class</span><span style="color: #339933;">=</span><span style="color: #3366CC;">&quot;w-1/2 flex justify-start&quot;</span><span style="color: #339933;">&gt;</span>
				<span style="color: #339933;">&lt;</span>span <span style="color: #FF0000;">class</span><span style="color: #339933;">=</span><span style="color: #3366CC;">&quot;p-6 font-bold&quot;</span><span style="color: #339933;">&gt;</span>Blog<span style="color: #339933;">&lt;/</span>span<span style="color: #339933;">&gt;</span>
				<span style="color: #339933;">&lt;</span>router<span style="color: #339933;">-</span>link <span style="color: #FF0000;">class</span><span style="color: #339933;">=</span><span style="color: #3366CC;">&quot;p-6 font-bold hover:bg-gray-200 transition-all duration-500&quot;</span> to<span style="color: #339933;">=</span><span style="color: #3366CC;">&quot;/&quot;</span><span style="color: #339933;">&gt;</span>Home<span style="color: #339933;">&lt;/</span>router<span style="color: #339933;">-</span>link<span style="color: #339933;">&gt;</span>
				<span style="color: #339933;">&lt;</span>router<span style="color: #339933;">-</span>link <span style="color: #FF0000;">class</span><span style="color: #339933;">=</span><span style="color: #3366CC;">&quot;p-6 font-bold hover:bg-gray-200 transition-all duration-500&quot;</span> to<span style="color: #339933;">=</span><span style="color: #3366CC;">&quot;/&quot;</span><span style="color: #339933;">&gt;</span>Popular<span style="color: #339933;">&lt;/</span>router<span style="color: #339933;">-</span>link<span style="color: #339933;">&gt;</span>
			<span style="color: #339933;">&lt;/</span>div<span style="color: #339933;">&gt;</span>
			<span style="color: #339933;">&lt;</span>div <span style="color: #FF0000;">class</span><span style="color: #339933;">=</span><span style="color: #3366CC;">&quot;w-1/2 flex justify-end&quot;</span><span style="color: #339933;">&gt;</span>
				<span style="color: #339933;">&lt;</span>router<span style="color: #339933;">-</span>link <span style="color: #FF0000;">class</span><span style="color: #339933;">=</span><span style="color: #3366CC;">&quot;p-6 font-bold hover:bg-gray-200 transition-all duration-500&quot;</span> to<span style="color: #339933;">=</span><span style="color: #3366CC;">&quot;/&quot;</span><span style="color: #339933;">&gt;</span>Login<span style="color: #339933;">&lt;/</span>router<span style="color: #339933;">-</span>link<span style="color: #339933;">&gt;</span>
			<span style="color: #339933;">&lt;/</span>div<span style="color: #339933;">&gt;</span>
		<span style="color: #339933;">&lt;/</span>template<span style="color: #339933;">&gt;</span>
		<span style="color: #339933;">&lt;</span>template v<span style="color: #339933;">-</span>slot<span style="color: #339933;">:</span>mobile<span style="color: #339933;">&gt;</span>
			<span style="color: #339933;">&lt;</span>div <span style="color: #FF0000;">class</span><span style="color: #339933;">=</span><span style="color: #3366CC;">&quot;w-1/2 flex justify-start&quot;</span><span style="color: #339933;">&gt;</span>
				<span style="color: #339933;">&lt;</span>router<span style="color: #339933;">-</span>link <span style="color: #FF0000;">class</span><span style="color: #339933;">=</span><span style="color: #3366CC;">&quot;p-6 font-bold hover:bg-gray-200 transition-all duration-500&quot;</span> to<span style="color: #339933;">=</span><span style="color: #3366CC;">&quot;/&quot;</span><span style="color: #339933;">&gt;</span>Blog<span style="color: #339933;">&lt;/</span>router<span style="color: #339933;">-</span>link<span style="color: #339933;">&gt;</span>
			<span style="color: #339933;">&lt;/</span>div<span style="color: #339933;">&gt;</span>
			<span style="color: #339933;">&lt;</span>div <span style="color: #FF0000;">class</span><span style="color: #339933;">=</span><span style="color: #3366CC;">&quot;w-1/2 flex justify-end&quot;</span><span style="color: #339933;">&gt;</span>
				<span style="color: #339933;">&lt;</span>router<span style="color: #339933;">-</span>link <span style="color: #FF0000;">class</span><span style="color: #339933;">=</span><span style="color: #3366CC;">&quot;p-6 font-bold hover:bg-gray-200 transition-all duration-500&quot;</span> to<span style="color: #339933;">=</span><span style="color: #3366CC;">&quot;/&quot;</span><span style="color: #339933;">&gt;</span>
					<span style="color: #339933;">&lt;</span>svg xmlns<span style="color: #339933;">=</span><span style="color: #3366CC;">&quot;http://www.w3.org/2000/svg&quot;</span> <span style="color: #FF0000;">class</span><span style="color: #339933;">=</span><span style="color: #3366CC;">&quot;h-6 w-6&quot;</span> fill<span style="color: #339933;">=</span><span style="color: #3366CC;">&quot;none&quot;</span> viewBox<span style="color: #339933;">=</span><span style="color: #3366CC;">&quot;0 0 24 24&quot;</span> stroke<span style="color: #339933;">=</span><span style="color: #3366CC;">&quot;currentColor&quot;</span><span style="color: #339933;">&gt;</span>
						<span style="color: #339933;">&lt;</span>path stroke<span style="color: #339933;">-</span>linecap<span style="color: #339933;">=</span><span style="color: #3366CC;">&quot;round&quot;</span> stroke<span style="color: #339933;">-</span>linejoin<span style="color: #339933;">=</span><span style="color: #3366CC;">&quot;round&quot;</span> stroke<span style="color: #339933;">-</span>width<span style="color: #339933;">=</span><span style="color: #3366CC;">&quot;2&quot;</span> d<span style="color: #339933;">=</span><span style="color: #3366CC;">&quot;M4 6h16M4 12h16M4 18h16&quot;</span> <span style="color: #339933;">/&gt;</span>
					<span style="color: #339933;">&lt;/</span>svg<span style="color: #339933;">&gt;</span>
				<span style="color: #339933;">&lt;/</span>router<span style="color: #339933;">-</span>link<span style="color: #339933;">&gt;</span>
			<span style="color: #339933;">&lt;/</span>div<span style="color: #339933;">&gt;</span>
		<span style="color: #339933;">&lt;/</span>template<span style="color: #339933;">&gt;</span>
	<span style="color: #339933;">&lt;/</span>Navbar<span style="color: #339933;">&gt;</span>
	<span style="color: #339933;">&lt;</span>div <span style="color: #FF0000;">class</span><span style="color: #339933;">=</span><span style="color: #3366CC;">&quot;w-full py-10 px-2 flex flex-wrap&quot;</span><span style="color: #339933;">&gt;</span>
		<span style="color: #339933;">&lt;</span>div <span style="color: #FF0000;">class</span><span style="color: #339933;">=</span><span style="color: #3366CC;">&quot;w-full sm:w-1/2 lg:w-1/4 p-1&quot;</span> v<span style="color: #339933;">-</span><span style="color: #000066; font-weight: bold;">for</span><span style="color: #339933;">=</span><span style="color: #3366CC;">&quot;d in 8&quot;</span> v<span style="color: #339933;">-</span>bind<span style="color: #339933;">:</span>key<span style="color: #339933;">=</span><span style="color: #3366CC;">&quot;d&quot;</span><span style="color: #339933;">&gt;</span>
			<span style="color: #339933;">&lt;</span>Cards <span style="color: #FF0000;">class</span><span style="color: #339933;">=</span><span style="color: #3366CC;">&quot;border&quot;</span> type<span style="color: #339933;">=</span><span style="color: #3366CC;">&quot;light&quot;</span><span style="color: #339933;">&gt;</span>
				<span style="color: #339933;">&lt;</span>template v<span style="color: #339933;">-</span>slot<span style="color: #339933;">:</span>head<span style="color: #339933;">&gt;</span>
					<span style="color: #339933;">&lt;</span>h5<span style="color: #339933;">&gt;</span>Lorem ipsum<span style="color: #339933;">,</span> dolor sit amet consectetur adipisicing elit.<span style="color: #339933;">&lt;/</span>h5<span style="color: #339933;">&gt;</span>
				<span style="color: #339933;">&lt;/</span>template<span style="color: #339933;">&gt;</span>
				<span style="color: #339933;">&lt;</span>template v<span style="color: #339933;">-</span>slot<span style="color: #339933;">:</span>content<span style="color: #339933;">&gt;</span>
					<span style="color: #339933;">&lt;</span>p<span style="color: #339933;">&gt;</span>
						Lorem ipsum dolor sit amet<span style="color: #339933;">,</span> consectetur<span style="color: #339933;">,</span> adipisicing elit. <span style="color: #660066;">Ea</span> saepe quasi obcaecati<span style="color: #339933;">,</span> 
						repellat nisi iure<span style="color: #339933;">,</span> inventore cupiditate quibusdam ratione esse laborum iste exercitationem 
						autem modi. <span style="color: #660066;">Totam</span> sit<span style="color: #339933;">,</span> adipisci veritatis repellat<span style="color: #339933;">!</span>
					<span style="color: #339933;">&lt;/</span>p<span style="color: #339933;">&gt;</span>
				<span style="color: #339933;">&lt;/</span>template<span style="color: #339933;">&gt;</span>
				<span style="color: #339933;">&lt;</span>template v<span style="color: #339933;">-</span>slot<span style="color: #339933;">:</span>footer<span style="color: #339933;">&gt;</span>
					<span style="color: #339933;">&lt;</span>Button type<span style="color: #339933;">=</span><span style="color: #3366CC;">&quot;primary&quot;</span><span style="color: #339933;">&gt;</span>Like<span style="color: #339933;">&lt;/</span>Button<span style="color: #339933;">&gt;</span>
					<span style="color: #339933;">&lt;</span>Button type<span style="color: #339933;">=</span><span style="color: #3366CC;">&quot;danger&quot;</span><span style="color: #339933;">&gt;</span>Comment<span style="color: #339933;">&lt;/</span>Button<span style="color: #339933;">&gt;</span>
				<span style="color: #339933;">&lt;/</span>template<span style="color: #339933;">&gt;</span>
			<span style="color: #339933;">&lt;/</span>Cards<span style="color: #339933;">&gt;</span>
		<span style="color: #339933;">&lt;/</span>div<span style="color: #339933;">&gt;</span>
	<span style="color: #339933;">&lt;/</span>div<span style="color: #339933;">&gt;</span>
	<span style="color: #339933;">&lt;</span>Footer pos<span style="color: #339933;">=</span><span style="color: #3366CC;">&quot;default&quot;</span> color<span style="color: #339933;">=</span><span style="color: #3366CC;">&quot;bg-gray-100&quot;</span><span style="color: #339933;">&gt;</span>
		<span style="color: #339933;">&lt;</span>template v<span style="color: #339933;">-</span>slot<span style="color: #339933;">:</span>left<span style="color: #339933;">&gt;</span>
			<span style="color: #339933;">&lt;</span>p <span style="color: #FF0000;">class</span><span style="color: #339933;">=</span><span style="color: #3366CC;">&quot;p-4 text-black&quot;</span><span style="color: #339933;">&gt;&amp;</span>copy<span style="color: #339933;">;</span> <span style="color: #009900;">&#123;</span><span style="color: #009900;">&#123;</span><span style="color: #000066; font-weight: bold;">new</span> <span style="">Date</span><span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span>.<span style="color: #660066;">getFullYear</span><span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#125;</span><span style="color: #009900;">&#125;</span> Company<span style="color: #339933;">&lt;/</span>p<span style="color: #339933;">&gt;</span>
		<span style="color: #339933;">&lt;/</span>template<span style="color: #339933;">&gt;</span>
		<span style="color: #339933;">&lt;</span>template v<span style="color: #339933;">-</span>slot<span style="color: #339933;">:</span>right<span style="color: #339933;">&gt;</span>
			<span style="color: #339933;">&lt;</span>a href<span style="color: #339933;">=</span><span style="color: #3366CC;">&quot;/&quot;</span> <span style="color: #FF0000;">class</span><span style="color: #339933;">=</span><span style="color: #3366CC;">&quot;p-4 text-black hover:bg-gray-200&quot;</span><span style="color: #339933;">&gt;</span>Privacy <span style="color: #339933;">&amp;</span> Policy<span style="color: #339933;">&lt;/</span>a<span style="color: #339933;">&gt;</span>
		<span style="color: #339933;">&lt;/</span>template<span style="color: #339933;">&gt;</span>
	<span style="color: #339933;">&lt;/</span>Footer<span style="color: #339933;">&gt;</span>
<span style="color: #339933;">&lt;/</span>div<span style="color: #339933;">&gt;</span></pre>`
			},
			nav: [
				{name: 'primary', cls: 'p-4 font-bold hover:bg-blue-600'},
				{name: 'danger', cls: 'p-4 font-bold hover:bg-red-600'},
				{name: 'success', cls: 'p-4 font-bold hover:bg-green-600'},
				{name: 'warning', cls: 'p-4 font-bold hover:bg-yellow-600'},
				{name: 'dark', cls: 'p-4 font-bold hover:bg-gray-600'},
				{name: 'light', cls: 'p-4 font-bold hover:bg-gray-200'},
				{name: 'secondary', cls: 'p-4 font-bold hover:bg-gray-600'},
			]
		}
	},
	created(){
		document.title = 'Nav Component | UI Component Docs'
	}
}
</script>