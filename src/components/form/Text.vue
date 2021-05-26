<template>
	<input :disabled="disabled ? true: false" :placeholder="place" :value="txt" @input="handle" :type="type" class="border p-3 focus:outline-none w-full focus:ring focus:ring-gray-100">
	<p v-if="help" class="text-sm p-1 text-gray-500">{{help}}</p>
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
		},
		disabled: {
			type: Boolean,
			required: false
		},
		help: {
			type: String,
			required: false
		},
	},
	methods: {
		handle(e){
			this.$emit('update:txt', e.target.value)
		}
	}
}
</script>