<template>
	<div :class="cls">
		<div class="flex w-full sm:hidden">
			<slot name="mobile"></slot>
		</div>
		<div class="sm:flex w-full hidden">
			<slot name="navs"></slot>
		</div>
	</div>
</template>
<script>
const list = [
	{post: 'top-primary', cls: 'fixed top-0 left-0 z-20 flex w-full bg-blue-500 text-white shadow-md'},
	{post: 'top-danger', cls: 'fixed top-0 left-0 z-20 flex w-full bg-red-500 text-white shadow-md'},
	{post: 'top-success', cls: 'fixed top-0 left-0 z-20 flex w-full bg-green-500 text-white shadow-md'},
	{post: 'top-warning', cls: 'fixed top-0 left-0 z-20 flex w-full bg-yellow-500 text-white shadow-md'},
	{post: 'top-dark', cls: 'fixed top-0 left-0 z-20 flex w-full bg-black text-white shadow-md'},
	{post: 'top-light', cls: 'fixed top-0 left-0 z-20 flex w-full bg-white text-black shadow-md'},
	{post: 'top-secondary', cls: 'fixed top-0 left-0 z-20 flex w-full bg-gray-200 text-white shadow-md'},
	{post: 'bottom-primary', cls: 'fixed bottom-0 left-0 z-20 flex w-full bg-blue-500 text-white shadow-md'},
	{post: 'bottom-danger', cls: 'fixed bottom-0 left-0 z-20 flex w-full bg-red-500 text-white shadow-md'},
	{post: 'bottom-success', cls: 'fixed bottom-0 left-0 z-20 flex w-full bg-green-500 text-white shadow-md'},
	{post: 'bottom-warning', cls: 'fixed bottom-0 left-0 z-20 flex w-full bg-yellow-500 text-white shadow-md'},
	{post: 'bottom-dark', cls: 'fixed bottom-0 left-0 z-20 flex w-full bg-black text-white shadow-md'},
	{post: 'bottom-light', cls: 'fixed bottom-0 left-0 z-20 flex w-full bg-white text-black shadow-md'},
	{post: 'bottom-secondary', cls: 'fixed bottom-0 left-0 z-20 flex w-full bg-gray-200 text-white shadow-md'},
]
export default{
	name: 'Navbars UI',
	data(){
		return{
			cls: ''
		}
	},
	props: {
		type: {
			type: String,
			required: true
		}
	},
	beforeMount(){
		for (var i = 0; i < list.length; i++) {
			if(list[i].post == this.type){
				this.cls = list[i].cls
				break;
			}
		}
	}
}
</script>