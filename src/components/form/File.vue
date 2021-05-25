<template>
	<div data-ui="file" class="w-full">
		<input class="hidden" :accept="accept" :name="'file-' + id" :value="file" @input="handle" type="file">
		<button class="p-3 w-full border focus:outline-none focus:ring focus:ring-gray-100" @click="click">{{title ? title : 'Attachment File'}}</button>
	</div>
</template>
<script>
export default{
	name: 'File',
	emits: ['update:file'],
	props: {
		file: {
			type: String,
			required: false
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