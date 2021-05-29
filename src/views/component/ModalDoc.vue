<template>
	<div class="w-full bg-white border p-3">
		<h5 class="mb-3 font-bold text-2xl"># Modal Component</h5>
		<p class="text-xl tracking-wide">Use modal component to add dialogs to your site for lightboxes, user notifications, or completely custom content.</p>
	</div>
	<div class="w-full bg-white border p-3 mt-2">
		<h5 class="mb-5 font-bold text-2xl"># Display</h5>
		<div class="w-full flex-wrap flex justify-center mt-2 sm:mt-0">
			<div class="w-full md:w-2/4 xl:w-1/4 p-1">
				<Modal class="w-full" type="primary" title="Modal Primary">
					<h5>My Content</h5>
				</Modal>
			</div>
			<div class="w-full md:w-2/4 xl:w-1/4 p-1">
				<Modal class="w-full" type="primary" title="Modal Template" template="full">
					<template v-slot:header>
						Header
					</template>
				</Modal>
			</div>
		</div>
	</div>
	<div class="mt-2 p-2 border bg-white">
		<h5 class="font-bold text-xl md:text-2xl p-2">Example Code</h5>
		<textarea class="w-full min-h-screen overflow-auto focus:outline-none text-sm">
<div class="w-full md:w-2/4 xl:w-1/4 p-1">
	<Modal class="w-full" type="primary" title="Modal Primary">
		<h5>Fill Content</h5>
	</Modal>
</div>
<div class="w-full md:w-2/4 xl:w-1/4 p-1">
	<Modal class="w-full" type="danger" title="Modal Danger">
		<h5>Fill Content</h5>
	</Modal>
</div>
<div class="w-full md:w-2/4 xl:w-1/4 p-1">
	<Modal class="w-full" type="primary" title="Modal Template" template="full">
		<template v-slot:header>
			Header
		</template>
	</Modal>
</div>
		</textarea>
	</div>
</template>
<script>
export default{

}
</script>