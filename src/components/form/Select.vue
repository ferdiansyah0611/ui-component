<template>
	<select data-ui="select" @change="handle" class="border p-3 focus:outline-none w-full focus:ring focus:ring-gray-100 cursor-pointer bg-white">
		<option :value="defaultValue" selected>{{defaultValue}}</option>
		<option v-for="(data, key) in option" v-bind:key="key" :value="data">{{data}}</option>
	</select>
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
		}
	},
	methods: {
		handle(e){
			this.$emit('update:txt', e.target.value)
		}
	},
}
</script>