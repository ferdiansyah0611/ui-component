<template>
	<div>
		<div class="flex justify-center">
			<FirebaseRegister
				title="Register Firebase"
				aggre="Accepted to aggrement"
				redirect="/"
				:config="{}"
			/>
		</div>
	</div>
</template>
<script>
import FirebaseRegister from '@/components/firebase/Register'
export default{
	name: 'FirebaseRegisterDoc',
	components: {
		FirebaseRegister
	},
	created(){
		document.title = 'Page Firebase Register | UI Component Docs'
	}
}
</script>