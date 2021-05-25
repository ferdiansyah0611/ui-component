<template>
	<textarea data-ui="area" :placeholder="place" @input="handle" class="border p-3 focus:outline-none w-full focus:ring focus:ring-gray-100" :style="{minHeight: min ? min: 40 + 'px', maxHeight: max ? max: 100 + 'px'}"></textarea>
</template>
<script>
export default{
	name: 'Area',
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
		min: {
			type: String,
			required: false
		},
		max: {
			type: String,
			required: false
		},
	},
	data(){
		return{
			value: ''
		}
	},
	created(){
		this.value = this.txt
	},
	watch: {
		txt(value){
			this.value = value
			this.$emit('update:txt', value)
		}
	},
	methods: {
		handle(e){
			this.value = e.target.value
			this.$emit('update:txt', e.target.value)
		}
	}
}
</script>