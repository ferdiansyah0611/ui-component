<template>
	<div class="w-full bg-white border p-3">
		<h5 class="mb-5 font-bold text-3xl"># Form Component</h5>
		<p class="text-xl tracking-wide">Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.</p>
		<div class="flex w-full flex-wrap border mt-2 p-2">
			<div class="p-2 w-full">
				<div class="flex space-x-1 w-full flex-wrap md:flex-nowrap">
					<div class="w-full">
						<p class="w-full mb-2 mt-2 text-sm sm:text-base">Text Type</p>
						<Text type="text" place="My input..." v-model:txt="example.text"></Text>	
					</div>
					<div class="w-full">
						<p class="w-full mb-2 mt-2 text-sm sm:text-base">Text Type Disabled</p>
						<Text :disabled="true" type="text" place="My input..." v-model:txt="example.text"></Text>
					</div>
				</div>
				<div class="flex space-x-1 w-full flex-wrap md:flex-nowrap">
					<div class="w-full">
						<p class="w-full mb-2 mt-2 text-sm sm:text-base">Text Type Help</p>
						<Text help="We'll never share your email with anyone else." type="text" place="My input..." v-model:txt="example.text"></Text>	
					</div>
					<div class="w-full">
						<p class="w-full mb-2 mt-2 text-sm sm:text-base">Text Type Help Disabled</p>
						<Text :disabled="true" help="We'll never share your email with anyone else." type="text" place="My input..." v-model:txt="example.text"></Text>
					</div>
				</div>
			</div>
			<div class="p-2 w-full">
				<div class="flex space-x-1 w-full flex-wrap md:flex-nowrap">
					<div class="w-full">	
						<p class="w-full mb-2 mt-2 text-sm sm:text-base">Textarea Type</p>
						<div class="flex w-full">
							<Area place="My textarea..." v-model:txt="example.area"></Area>
						</div>
					</div>
					<div class="w-full">
						<p class="w-full mb-2 mt-2 text-sm sm:text-base">Textarea Type Disabled</p>
						<div class="flex w-full">
							<Area :disabled="true" place="My textarea..." v-model:txt="example.area"></Area>
						</div>
					</div>
				</div>
			</div>
			<div class="p-2 w-full">
				<div class="flex space-x-1 w-full flex-wrap md:flex-nowrap">
					<div class="w-full">
						<p class="w-full mb-2 mt-2 text-sm sm:text-base">Select Type</p>
						<div class="flex w-full">
							<Select
								v-model:txt="example.select"
								:defaultValue="example.select"
								:option="['Select 1', 'Select 2']"
							></Select>
						</div>
					</div>
					<div class="w-full">
						<p class="w-full mb-2 mt-2 text-sm sm:text-base">Select Type Disabled</p>
						<div class="flex w-full">
							<Select
								:disabled="true"
								v-model:txt="example.select"
								:defaultValue="example.select"
								:option="['Select 1', 'Select 2']"
							></Select>
						</div>
					</div>
				</div>
			</div>
			<div class="p-2 w-full">
				<div class="flex space-x-1 w-full flex-wrap md:flex-nowrap">
					<div class="w-full">	
						<p class="w-full mb-2 mt-2 text-sm sm:text-base">File Type</p>
						<div class="flex w-full">
							<File
								v-model:file="example.file"
								:multiple="false"
								accept="image/*"
							></File>
						</div>
					</div>
					<div class="w-full">
						<p class="w-full mb-2 mt-2 text-sm sm:text-base">File Type Disabled</p>
						<div class="flex w-full">
							<File
								disabled="true"
								v-model:file="example.file"
								:multiple="false"
								accept="image/*"
							></File>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="w-full bg-white border p-3 mt-2">
		<h5 class="mb-5 font-bold text-2xl">Example Code</h5>
		<pre class="flex w-full border p-3 focus:outline-none mb-2" contenteditable="">
			<code class="w-full overflow-auto text-sm" v-html="example.one"></code>
		</pre>
	</div>
	<div class="w-full bg-white border p-3 mt-2">
		<h5 class="font-bold text-2xl">Refference</h5>
		<div class="w-full border-b py-2">
			<h5 class="font-medium mb-1 text-sm md:text-base"><code>type (String)</code></h5>
			<p class="text-sm">A type of input.</p>
		</div>
		<div class="w-full border-b py-2">
			<h5 class="font-medium mb-1 text-sm md:text-base"><code>place (String)</code></h5>
			<p class="text-sm">Placeholder of form component.</p>
		</div>
		<div class="w-full border-b py-2">
			<h5 class="font-medium mb-1 text-sm md:text-base"><code>v-model:txt (Any *Adjust Model)</code></h5>
			<p class="text-sm">Class bacground-color if type is custom.</p>
		</div>
		<div class="w-full border-b py-2">
			<h5 class="font-medium mb-1 text-sm md:text-base"><code>:disabled (Boolean)</code></h5>
			<p class="text-sm">Status disable form component.</p>
		</div>
		<div class="w-full border-b py-2">
			<h5 class="font-medium mb-1 text-sm md:text-base"><code>help (String)</code></h5>
			<p class="text-sm">Text help for helping the form component.</p>
		</div>
		<div class="w-full border-b py-2">
			<h5 class="font-medium mb-1 text-sm md:text-base"><code>accept (String)</code></h5>
			<p class="text-sm">Accepting type file on File component.</p>
		</div>
		<div class="w-full border-b py-2">
			<h5 class="font-medium mb-1 text-sm md:text-base"><code>:multiple (String)</code></h5>
			<p class="text-sm">Status multiple File component.</p>
		</div>
		<div class="w-full border-b py-2">
			<h5 class="font-medium mb-1 text-sm md:text-base"><code>size-ring (String)</code></h5>
			<p class="text-sm">Class size of ring if type is custom.</p>
		</div>
		<div class="w-full border-b py-2">
			<h5 class="font-medium mb-1 text-sm md:text-base"><code>:defaultValue (String)</code></h5>
			<p class="text-sm">Default value of select component.</p>
		</div>
	</div>
</template>
<script>
export default{
	created(){
		document.title = 'Form Component | UI Component Docs'
	},
	data(){
		return{
			valueExam: 'Test Value',
			example: {
				text: '',
				area: '',
				select: 'Default Value',
				file: '',
				one: `<<span class="text-red-500">Text</span>
	<span class="text-green-500">type</span>="text"
	<span class="text-green-500">place</span>="My placeholder"
	<span class="text-green-500">v-model:txt</span>="email"
/>
<<span class="text-red-500">Text</span>
	<span class="text-green-500">type</span>="text"
	<span class="text-green-500">place</span>="My placeholder"
	<span class="text-green-500">v-model:txt</span>="email"
	<span class="text-green-500">help</span>="My help"
	<span class="text-green-500">:disabled</span>="true"
/>
<<span class="text-red-500">Area</span>
	<span class="text-green-500">place</span>="My placeholder"
	<span class="text-green-500">v-model:txt</span>="content"
/>
<<span class="text-red-500">Select</span>
	<span class="text-green-500">:defaultValue</span>="Technology"
	<span class="text-green-500">v-model:txt</span>="category"
	<span class="text-green-500">:option</span>="['Select 1', 'Select 2']"
/>
<<span class="text-red-500">File</span>
	<span class="text-green-500">accept</span>="image/*"
	<span class="text-green-500">v-model:file</span>="files"
	<span class="text-green-500">:multiple</span>="true"
/>
`
			}
		}
	},
}
</script>