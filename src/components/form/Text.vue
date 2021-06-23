<template>
	<input
		v-if="ui"
		:disabled="disabled ? true: false"
		:placeholder="place" :value="txt"
		@input="handle"
		:type="type"
		:required="required ? true: false"
		:autocomplete="autoComplete ? 'on': 'off'"
		:class="color ? 'focus:border-' + color + ' w-full border-b transition-all duration-500 p-3 outline-none': 'w-full border-b focus:border-blue-400 transition-all duration-500 p-3 outline-none'"
	>
	<input
		v-else
		:disabled="disabled ? true: false"
		:placeholder="place" :value="txt"
		@input="handle"
		:type="type"
		:required="required ? true: false"
		:autocomplete="autoComplete ? 'on': 'off'"
		class="border p-3 focus:outline-none w-full focus:ring focus:ring-gray-100">
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
		required: {
			type: Boolean,
			required: false
		},
		autoComplete: {
			type: Boolean,
			required: false
		},
		ui: {
			required: false
		},
		color: {
			required: false
		}
	},
	methods: {
		handle(e){
			this.$emit('update:txt', e.target.value)
		}
	}
}
</script>