<template>
	<div class="flex flex-wrap bg-white border p-4 shadow-md w-full sm:w-1/2 lg:w-1/3">
		<form @submit="submit" class="w-full">
			<h5 class="font-bold text-center text-xl md:text-2xl mb-4">{{title}}</h5>
			<div class="mt-2">
				<p class="text-gray-500">Email Account</p>
				<Text
					type="email"
					place="Email"
					v-model:txt="email"
					required=""
				/>
			</div>
			<div class="mt-2">
				<p class="text-gray-500">Password Account</p>
				<Text
					type="password"
					place="Password"
					v-model:txt="password"
					required=""
				/>
			</div>
			<div class="mt-2">
				<input type="checkbox" required="">
				<span class="ml-2">{{aggre}}</span>
			</div>
			<Button
				class="mt-2 w-full"
				size="sm"
				type="light"
				role="submit"
			>Submit</Button>
			<div class="flex justify-center space-x-3 mt-4">
				<div class="border-b mb-2 w-full"></div>
				<span class="font-medium">OR</span>
				<div class="border-b mb-2 w-full"></div>
			</div>
			<div v-for="(data, key) in provider" v-bind:key="key">
				<Button
					v-if="data == 'facebook'"
					class="mt-2 w-full font-medium"
					size="sm"
					type="primary"
					role="button"
				>Facebook</Button>
				<Button
					v-if="data == 'google'"
					class="mt-2 w-full font-medium"
					size="sm"
					type="secondary"
					role="button"
				>Google</Button>
				<Button
					v-if="data == 'github'"
					class="mt-2 w-full font-medium"
					size="sm"
					type="dark"
					role="button"
				>Github</Button>
			</div>
		</form>
	</div>
</template>
<script>
export default{
	name: 'Login UI Firebase',
	props: {
		config: {
			type: Object,
			required: true
		},
		title: {
			type: String,
			required: true
		},
		aggre: {
			type: String,
			required: true
		},
		provider: {
			type: Array,
			required: true
		},
		redirect: {
			type: String,
			required: true
		},
		protect: {
			type: Boolean,
			required: true
		},
	},
	data(){
		return{
			email: '',
			password: ''
		}
	},
	methods: {
		submit(e){
			e.preventDefault()
		}
	}
}
</script>