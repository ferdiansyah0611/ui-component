<template>
	<div v-if="pos === 'default'" :class="'w-full flex text-white ' + color">
		<div class="w-full md:w-1/2 flex flex-wrap">
			<slot name="left"></slot>
		</div>
		<div class="w-full md:w-1/2 flex flex-wrap justify-end">
			<slot name="right"></slot>
		</div>
	</div>
	<div v-if="pos === 'center'" :class="'w-full flex justify-center text-white ' + color">
		<slot></slot>
	</div>
</template>
<script>
export default{
	name: 'Footer UI',
	props: {
		pos: {
			type: String,
			required: true
		},
		color: {
			type: String,
			required: true
		},
	}
}
</script>