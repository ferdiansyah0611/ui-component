<template>
	<button :disabled="disabled ? true: false" :class="disabled ? 'p-3 w-full border bg-gray-200 cursor-default' : 'p-3 w-full border focus:outline-none focus:ring focus:ring-gray-100'" @click="click">{{title ? title : 'Attachment File'}}</button>
	<input class="hidden" :accept="accept" :name="'file-' + id" :value="file" @input="handle" type="file">
	<p v-if="help" class="text-sm p-1 text-gray-500">{{help}}</p>
</template>
<script>
export default{
	name: 'File UI',
	emits: ['update:file'],
	props: {
		file: {
			type: String,
			required: true
		},
		title: {
			type: String,
			required: false
		},
		multiple: {
			type: Boolean,
			required: true
		},
		accept: {
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
	data(){
		return{
			id: ''
		}
	},
	mounted(){
		this.id = Math.floor(Math.random() * 10000)
	},
	methods: {
		handle(e){
			this.$emit('update:file', this.$props.multiple ? e.target.files: e.target.files[0])
		},
		click(){
			document.querySelector(`input[name=file-${this.$data.id}`).click()
		}
	}
}
</script>