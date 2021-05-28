<template>
	<div class="w-full bg-white border p-3 mt-2">
		<h5 class="mb-5 font-bold text-3xl"># Collapse Component</h5>
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
</template>
<script>
export default{
	created(){
		document.title = 'Collapse Component | UI Component Docs'
	}
}
</script>