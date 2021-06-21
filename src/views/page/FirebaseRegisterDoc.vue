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
		<div class="w-full bg-white border p-3 mt-2">
			<h5 class="mb-5 font-bold text-2xl">Example Code</h5>
			<pre class="flex w-full border p-3 focus:outline-none mb-2" contenteditable="">
				<code class="w-full overflow-auto text-sm" v-html="example"></code>
			</pre>
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
	data(){
		return{
			example: 
`<pre class="html5" style="font-family:monospace;"><span style="color: #009900;">&lt;FirebaseRegister</span>
<span style="color: #009900;">	<span style="color: #000066;">title</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;Register Firebase&quot;</span></span>
<span style="color: #009900;">	aggre<span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;Accepted to aggrement&quot;</span></span>
<span style="color: #009900;">	redirect<span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;/&quot;</span></span>
<span style="color: #009900;">	:config<span style="color: #66cc66;">=</span><span style="color: #ff0000;">&quot;{}&quot;</span></span>
<span style="color: #009900;"><span style="color: #66cc66;">/</span>&gt;</span></pre>`
		}
	},
	created(){
		document.title = 'Page Firebase Register | UI Component Docs'
	}
}
</script>