<template>
	<textarea
		v-if="ui"
		:disabled="disabled ? true: false"
		:placeholder="place"
		@input="handle"
		:class="color ? 'focus:border-' + color + ' border-b p-3 outline-none w-full transition-all duration-500' : 'border-b focus:border-blue-400 p-3 outline-none w-full transition-all duration-500'"
		:style="{minHeight: min ? min: 40 + 'px', maxHeight: max ? max: 100 + 'px'}"
	></textarea>
	<textarea
		v-else
		:disabled="disabled ? true: false"
		:placeholder="place"
		@input="handle"
		class="border p-3 focus:outline-none w-full focus:ring focus:ring-gray-100"
		:style="{minHeight: min ? min: 40 + 'px', maxHeight: max ? max: 100 + 'px'}"
	></textarea>
	<p v-if="help" class="text-sm p-1 text-gray-500">{{help}}</p>
</template>
<script>
export default{
	name: 'Area UI',
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
		disabled: {
			type: Boolean,
			required: false
		},
		help: {
			type: String,
			required: false
		},
		ui: {
			required: false
		},
		color: {
			required: false
		}
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