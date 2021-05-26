<template>
	<select :disabled="disabled ? true: false" @change="handle" class="border p-3 focus:outline-none w-full focus:ring focus:ring-gray-100 bg-white">
		<option :value="defaultValue" selected>{{defaultValue}}</option>
		<option v-for="(data, key) in option" v-bind:key="key" :value="data">{{data}}</option>
	</select>
	<p v-if="help" class="text-sm p-1 text-gray-500">{{help}}</p>
</template>
<script>
export default{
	name: 'Area',
	emits: ['update:txt'],
	props: {
		option: {
			type: Array,
			required: true
		},
		defaultValue: {
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
	},
}
</script>