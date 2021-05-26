<template>
	<div class="w-full bg-white border p-3 mt-2">
		<h5 class="mb-5 font-bold"># Form Component</h5>
		<div class="w-full sm:w-1/4 mt-2 sm:mt-0">
			<p class="w-full mb-2 mt-2 text-sm sm:text-base">Text Type</p>
				<Text type="text" place="My input..." v-model:txt="example.text"></Text>
			<p class="w-full mb-2 mt-2 text-sm sm:text-base">Textarea Type</p>
			<div class="flex w-full">
				<Area place="My textarea..." v-model:txt="example.area"></Area>
			</div>
			<p class="w-full mb-2 mt-2 text-sm sm:text-base">Select Type</p>
			<div class="flex w-full">
				<Select
					v-model:txt="example.select"
					:defaultValue="example.select"
					:option="['Select 1', 'Select 2']"
				></Select>
			</div>
			<p class="w-full mb-2 mt-2 text-sm sm:text-base">File Type</p>
			<div class="flex w-full">
				<File
					v-model:file="example.file"
					:multiple="false"
					accept="image/*"
				></File>
			</div>
		</div>
	</div>
</template>
<script>
export default{
	created(){
		document.title = 'Form Component | UI Component Docs'
	},
	data(){
		return{
			valueExam: 'Test Value',
			example: {
				text: '',
				area: '',
				select: 'Default Value',
				file: '',
			}
		}
	},
}
</script>