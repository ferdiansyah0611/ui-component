<template>
	<input data-ui="text" :placeholder="place" :value="txt" @input="handle" :type="type" class="border p-3 focus:outline-none w-full focus:ring focus:ring-gray-100">
</template>
<script>
export default{
	name: 'Text',
	emits: ['update:txt'],
	props: {
		txt: {
			type: String,
			required: false
		},
		place: {
			type: String,
			required: false
		},
		type: {
			type: String,
			required: true
		}
	},
	methods: {
		handle(e){
			this.$emit('update:txt', e.target.value)
		}
	}
}
</script>