<template>
	<div class="flex flex-wrap bg-white border p-4 shadow-md w-full sm:w-1/2 lg:w-1/3">
		<form @submit="submit" class="w-full">
			<h5 class="font-bold text-center text-xl md:text-2xl mb-4">{{title}}</h5>
			<Alert
				:open="alert.open"
				:type="alert.type"
			>{{alert.msg}}</Alert>
			<div class="mt-2">
				<p class="text-gray-500 w-full mb-2 mt-2 text-sm sm:text-base">Email Account</p>
				<Text
					type="email"
					place="Email"
					v-model:txt="email"
					:required="true"
				/>
			</div>
			<div class="mt-2">
				<p class="text-gray-500 w-full mb-2 mt-2 text-sm sm:text-base">Password Account</p>
				<Text
					type="password"
					place="Password"
					v-model:txt="password"
					:required="true"
					:auto-complete="true"
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
					@click="facebook"
				>Facebook</Button>
				<Button
					v-if="data == 'google'"
					class="mt-2 w-full font-medium"
					size="sm"
					type="secondary"
					role="button"
					@click="google"
				>Google</Button>
			</div>
		</form>
		<p class="mt-2">Don't have a account ? <router-link class="hover:underline" to="/register">Register</router-link></p>
	</div>
</template>
<script>
import firebase from 'firebase/app'
import 'firebase/auth'
export default{
	name: 'Login UI Firebase',
	props: {
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
	},
	data(){
		return{
			email: '',
			password: '',
			alert: {
				type: 'danger',
				msg: '',
				open: "false"
			}
		}
	},
	methods: {
		submit(e){
			e.preventDefault()
			try {
				firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(() => {
					this.$router.push(this.redirect)
					window.location.reload(false)
				})
			} catch(e) {
				this.alert.type = 'danger'
				this.alert.msg = e.message
				this.alert.open = new Date()
			}
		},
		facebook(e){
			e.preventDefault()
			let provider = new firebase.auth.FacebookAuthProvider()
			firebase.auth().signInWithPopup(provider).then(() => {
				this.$router.push(this.redirect)
				window.location.reload(false)
			})
		},
		google(e){
			e.preventDefault()
			let provider = new firebase.auth.GoogleAuthProvider()
			firebase.auth().signInWithPopup(provider).then(() => {
				this.$router.push(this.redirect)
				window.location.reload(false)
			})
		},
	}
}
</script>