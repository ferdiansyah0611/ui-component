<template>
	<div class="bg-white border p-4">
		<form>
			<h5 class="font-bold text-center">{{title}}</h5>
		</form>
	</div>
</template>
<script>
export default{
	name: 'Login UI',
	props: {
		config: {,
			type: Object
			required: true
		},
		title: {,
			type: String
			required: true
		}
	},
	methods: {
		submit(e){
			e.preventDefault()
		}
	}
}
</script>