<template>
	<Navbar
		bg="blue-500"
		position="fixed-top"
		:link-left="[
			{name: 'UI Component', link: '/'},
			{name: 'Home', link: '/'}
		]"
		:link-right="[
			{name: 'Login', link: '/'},
			{name: 'Register', link: '/'}
		]"
		p="4"
		font-type="medium"
		hover-bg="blue-500"
		color="white"
		:sidebar-config="{
			title: 'UI Component',
			position: 'rtl'
		}"
	/>
	<div class="mt-20 p-3 sm:p-10">
		<div class="flex flex-wrap">
			<div class="w-full bg-white border p-3">
				<h5 class="mb-5 font-bold"># Dropdown Component</h5>
				<div class="flex flex-wrap">
					<p class="w-full mb-2">Example Default</p>
					<div class="flex w-full sm:w-1/3">
						<Dropdown
							title="Dropdown"
							:link="[
								{name: 'Link 1', link: '/'},
								{name: 'Link 2', link: '/'},
								{name: 'Link 3', link: '/'}
							]"
							classNames="p-3 border bg-white"
						/>
					</div>
				</div>
				<div class="flex flex-wrap">
					<p class="w-full mb-2 mt-2 text-sm sm:text-base">Example Coloring</p>
					<div class="flex w-full sm:w-1/3 space-x-2">
						<Dropdown
							title="Dropdown"
							:link="[
								{name: 'Link 1', link: '/'},
								{name: 'Link 2', link: '/'},
								{name: 'Link 3', link: '/'}
							]"
							classNames="p-3 bg-blue-400 text-white"
						/>
						<Dropdown
							title="Dropdown"
							:link="[
								{name: 'Link 1', link: '/'},
								{name: 'Link 2', link: '/'},
								{name: 'Link 3', link: '/'}
							]"
							classNames="p-3 bg-red-400 text-white"
						/>
						<Dropdown
							title="Dropdown"
							:link="[
								{name: 'Link 1', link: '/'},
								{name: 'Link 2', link: '/'},
								{name: 'Link 3', link: '/'}
							]"
							classNames="p-3 bg-yellow-400 text-white"
						/>
					</div>
				</div>
			</div>
			<div class="w-full bg-white border p-3 mt-2">
				<h5 class="mb-5 font-bold"># Button Component</h5>
				<div class="w-full sm:w-1/4 mt-2 sm:mt-0">
					<p class="w-full mb-2 mt-2 text-sm sm:text-base">Example Default</p>
					<div class="flex w-full sm:w-1/3">
						<Button ring="gray-200" p="3" color="black" bg="white" classNames="w-full border" title="Button"></Button>
					</div>
					<p class="w-full mb-2 mt-2 text-sm sm:text-base">Example Coloring</p>
					<div class="flex w-full sm:w-1/3 space-x-2">
						<Button ring="blue-200" p="3" color="white" bg="blue-400" classNames="w-full focus:ring-2" title="Button"></Button>
						<Button ring="red-200" p="3" color="white" bg="red-400" classNames="w-full focus:ring-2" title="Button"></Button>
						<Button ring="yellow-200" p="3" color="white" bg="yellow-400" classNames="w-full focus:ring-2" title="Button"></Button>
					</div>
				</div>
			</div>
			<div class="w-full bg-white border p-3 mt-2">
				<h5 class="mb-5 font-bold"># Form Component</h5>
				<div class="w-full sm:w-1/4 mt-2 sm:mt-0">
					<p class="w-full mb-2 mt-2 text-sm sm:text-base">Text Type</p>
						<Text type="text" place="My input..." v-model:txt="example.text"></Text>
					<p class="w-full mb-2 mt-2 text-sm sm:text-base">Textarea Type</p>
					<div class="flex w-full">
						<Area place="My textarea..." v-model:txt="example.area"></Area>
					</div>
					<p class="w-full mb-2 mt-2 text-sm sm:text-base">Select Type</p>
					<div class="flex w-full">
						<Select
							v-model:txt="example.select"
							:defaultValue="example.select"
							:option="['Select 1', 'Select 2']"
						></Select>
					</div>
					<p class="w-full mb-2 mt-2 text-sm sm:text-base">File Type</p>
					<div class="flex w-full">
						<File
							v-model:file="example.file"
							:multiple="false"
							accept="image/*"
						></File>
					</div>
				</div>
			</div>
			<div class="w-full bg-white border p-3 mt-2">
				<h5 class="mb-5 font-bold"># Alert Component</h5>
				<div class="w-full sm:w-1/4 mt-2 sm:mt-0">
					<p class="w-full mb-2 mt-2 text-sm sm:text-base">Error Type</p>
					<Alert :open="true" type="error" txt="Unexpected token , in line 10."></Alert>
					<p class="w-full mb-2 mt-2 text-sm sm:text-base">Success Type</p>
					<Alert :open="true" type="success" txt="Uploading file successfuly."></Alert>
					<p class="w-full mb-2 mt-2 text-sm sm:text-base">Warning Type</p>
					<Alert :open="true" type="warning" txt="[Warn]: Unhandled error during execution of native event handler"></Alert>
					<p class="w-full mb-2 mt-2 text-sm sm:text-base">Dark Type</p>
					<Alert :open="true" type="dark" txt="Uploading file successfuly."></Alert>
					<p class="w-full mb-2 mt-2 text-sm sm:text-base">Light Type</p>
					<Alert :open="true" type="light" txt="Uploading file successfuly."></Alert>
					<p class="w-full mb-2 mt-2 text-sm sm:text-base">Secondary Type</p>
					<Alert :open="true" type="secondary" txt="Uploading file successfuly."></Alert>
				</div>
			</div>
			<div class="w-full bg-white p-3 mt-2">
				<h5 class="mb-5 font-bold"># Card Component</h5>
				<div class="flex space-x-1 flex-wrap sm:flex-nowrap">
					<div class="w-full sm:w-1/4 mt-2 sm:mt-0">
						<TextCard link="/" type="default" title="Card Type Text" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
						proident, sunt in culpa qui officia deserunt mollit anim id est laborum."></TextCard>
					</div>
					<div class="w-full sm:w-1/4 mt-2 sm:mt-0">
						<TextCard
							type="default"
							title="Card Type Text With Footer"
							link="/"
							:footer="[
								{name: 'Show', link: '/', class: 'bg-blue-400 text-white w-full focus:ring-4 focus:ring-blue-200'},
								{name: 'Delete', link: '/', class: 'bg-red-400 text-white w-full focus:ring-4 focus:ring-red-200'},
							]"
							content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
								quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
								consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
								cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
								proident, sunt in culpa qui officia deserunt mollit anim id est laborum.">
						</TextCard>
					</div>
					<div class="w-full sm:w-1/4 mt-2 sm:mt-0">
						<TextCard
							type="default"
							title="Card Type Text With Footer & Img"
							link="/"
							:footer="[
								{name: 'Show', link: '/', class: 'bg-blue-400 text-white w-full focus:ring-4 focus:ring-blue-200'},
								{name: 'Delete', link: '/', class: 'bg-red-400 text-white w-full focus:ring-4 focus:ring-red-200'},
							]"
							:img="{
								position: 'afterTitle',
								url: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
							}"
							content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
								quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
								consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
								cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
								proident, sunt in culpa qui officia deserunt mollit anim id est laborum.">
						</TextCard>
					</div>
				</div>
			</div>
			<div class="w-full bg-white p-3 mt-2">
				<h5 class="mb-5 font-bold"># Login Page Component</h5>
			</div>
		</div>
	</div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Dropdown from '@/components/Dropdown'
import Button from '@/components/Button'
import Text from '@/components/form/Text'
import Area from '@/components/form/Area'
import Select from '@/components/form/Select'
import File from '@/components/form/File'
import Alert from '@/components/form/Alert'
import TextCard from '@/components/card/Text'

export default {
	name: 'Home',
	components: {
		Navbar,
		Dropdown,
		Button,
		Text,
		Area,
		Select,
		File,
		Alert,
		TextCard
	},
	data(){
		return{
			valueExam: 'Test Value',
			example: {
				text: '',
				area: '',
				select: 'Default Value',
				file: '',
			}
		}
	},
}
</script>
