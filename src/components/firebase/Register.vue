<template>
	<div class="flex justify-center w-full">
		<div class="w-4/5 sm:w-1/2 md:w-2/5 bg-white p-4 shadow-md border">
			<h5 class="text-center font-medium text-xl">Register App</h5>
			<Alert
				:open="alert.open"
				:type="alert.type"
			>{{alert.msg}}</Alert>
			<form @submit="submit">
				<div class="mt-2">
					<img v-if="avatarDisplay" :src="avatarDisplay" alt="avatar" class="w-full">
					<div v-else class="bg-gray-200 p-10">
						<p class="text-center">Profile Show In Here</p>
					</div>
				</div>
				<div class="mt-2">
					<p class="text-gray-500">Username</p>
					<Text
						type="text"
						place="Username"
						v-model:txt="username"
						:required="true"
					/>
				</div>
				<div class="mt-2">
					<p class="text-gray-500">Email Account</p>
					<Text
						type="email"
						place="Email"
						v-model:txt="email"
						:required="true"
					/>
				</div>
				<div class="mt-2">
					<p class="text-gray-500">Password Account</p>
					<Text
						type="password"
						place="Password"
						v-model:txt="password"
						:required="true"
						:auto-complete="true"
					/>
				</div>
				<div class="mt-2">
					<div class="flex w-full">
						<File
							:multiple="false"
							accept="image/*"
							@changes="handle"
						/>
					</div>
				</div>
				<div class="mt-2">
					<input class="bg-white" type="checkbox" required="">
					<span class="ml-2">{{aggre}}</span>
				</div>
				<Button
					class="mt-2 w-full"
					size="sm"
					type="primary"
					role="submit"
				>Submit</Button>
			</form>
		</div>
	</div>
</template>
<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/firestore'
export default{
	name: 'Register UI Firebase',
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
		redirect: {
			type: String,
			required: true
		},
		db: {
			type: String,
			required: false
		},
	},
	created(){
		firebase.initializeApp(this.config)
	},
	data(){
		return{
			username: '',
			email: '',
			password: '',
			avatar: null,
			avatarDisplay: null,
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
				firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(() => {
					firebase.storage().ref(`/images/${this.img.name}`).put(this.img).then(snapshot => {
						snapshot.ref.getDownloadURL().then(url => {
							firebase.auth().currentUser.updateProfile({
								displayName: this.name,
								photoURL: url
							}).then(() => {
								if(this.db){
									firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).set({
										id: firebase.auth().currentUser.uid,
										name: firebase.auth().currentUser.displayName,
										email: firebase.auth().currentUser.email,
										photo: firebase.auth().currentUser.photoURL,
									}).then(() => {
										window.location.reload(false);
									})
								}else{
									window.location.reload(false);
								}
							})
						})
					})
				})
			} catch(e) {
				this.alert.type = 'danger'
				this.alert.msg = e.message
				this.alert.open = new Date()
			}
		},
		handle(e){
			this.avatar = e[0]
			this.avatarDisplay = URL.createObjectURL(e[0])
		}
	}
}
</script>