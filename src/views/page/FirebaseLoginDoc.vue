<template>
	<div>
		<div class="flex justify-center">
			<FirebaseLogin
				title="Login Firebase"
				aggre="Accepted to aggrement"
				:provider="[
					'google', 'facebook'
				]"
				redirect="/"
				:config="{}"
			/>
		</div>
	</div>
</template>
<script>
import FirebaseLogin from '@/components/firebase/Login'
export default{
	name: 'FirebaseLoginDoc',
	components: {
		FirebaseLogin
	},
	created(){
		document.title = 'Page Firebase Login | UI Component Docs'
	}
}
</script>