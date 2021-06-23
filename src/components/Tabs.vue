<template>
	<div v-if="post == 'x'" :id="id">
		<div class="grid grid-flow-col">
			<Button @click="toggle" v-for="(data, key) in title" v-bind:key="key" :type="type" :data-name="data.name">{{data.title}}</Button>
		</div>
		<div class="body">
			<div v-for="(data, key) in title" v-bind:key="key">
				<div v-if="data.name == this.open" :class="noPadding ? 'w-full block border': 'w-full block p-3 border'">
					<slot :name="data.name"></slot>
				</div>
				<div v-else class="w-full hidden">
					<slot :name="data.name"></slot>
				</div>
			</div>
		</div>
	</div>
	<div v-if="post == 'y'" :id="id" class="flex">
		<div class="grid grid-flow-row w-1/5">
			<Button @click="toggle" v-for="(data, key) in title" v-bind:key="key" :type="type" :data-name="data.name">{{data.title}}</Button>
		</div>
		<div class="body w-4/5">
			<div v-for="(data, key) in title" v-bind:key="key">
				<div v-if="data.name == this.open" :class="noPadding ? 'w-full block border': 'w-full block p-3 border'">
					<slot :name="data.name"></slot>
				</div>
				<div v-else class="w-full hidden">
					<slot :name="data.name"></slot>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default{
	name: 'Tabs UI',
	props: {
		type: {
			type: String,
			required: true
		},
		title: {
			type: Array,
			required: true
		},
		default: {
			type: String,
			required: true
		},
		post: {
			type: String,
			required: true
		},
		noPadding: {
			type: Boolean,
			required: false
		},
	},
	data(){
		return{
			id: 'tabs-' + Math.floor(Math.random() * 100000),
			defaultOpen: '',
			open: ''
		}
	},
	beforeMount(){
		this.open = this.default
	},
	methods: {
		toggle(e){
			e.preventDefault()
			if(e.target.dataset.name !== this.open){
				this.open = e.target.dataset.name
			}
		}
	}
}
</script>