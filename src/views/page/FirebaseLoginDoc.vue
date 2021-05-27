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
				:protect="true"
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
	}
}
</script>