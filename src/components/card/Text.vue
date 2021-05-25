<template>
	<div v-if="type == 'default'" class="bg-white border flex flex-wrap">
		<img v-if="img && img.position == 'top'" :src="img.url" alt="image" class="max-w-full p-3">
		<router-link :to="{path: link}" class="font-medium mb-2 w-full p-3 pb-0">{{title}}</router-link>
		<img v-if="img && img.position == 'afterTitle'" :src="img.url" alt="image" class="max-w-full p-3">
		<p class="text-xs sm:text-sm w-full p-3 pt-0">{{content}}</p>
		<img v-if="img && img.position == 'afterContent'" :src="img.url" alt="image" class="max-w-full p-3">
		<div v-if="footer" class="w-full flex text-center mt-2 space-x-2 text-sm sm:text-base p-1">
			<router-link v-for="(data, key) in footer" v-bind:key="key" :to="{path: data.link}" :class="data.class + ' p-3 shadow'">{{data.name}}</router-link>
		</div>
	</div>
</template>
<script>
export default{
	name: 'TextCard',
	props: {
		title: {
			type: String,
			required: true
		},
		content: {
			type: String,
			required: true
		},
		link: {
			type: String,
			required: true
		},
		type: {
			type: String,
			required: true
		},
		footer: {
			type: Array,
			required: false
		},
		img: {
			type: Object,
			required: false
		},
	}
}
</script>