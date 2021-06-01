const listAll: any = {
	get alert(){
		return [
			{type: 'primary', cls: 'bg-blue-500 text-white shadow'},
			{type: 'danger', cls: 'bg-red-500 text-white shadow'},
			{type: 'success', cls: 'bg-green-500 text-white shadow'},
			{type: 'warning', cls: 'bg-yellow-500 text-white shadow'},
			{type: 'dark', cls: 'bg-black text-white shadow'},
			{type: 'light', cls: 'bg-white text-black border border-gray-200'},
			{type: 'secondary', cls: 'bg-gray-200 text-black border border-gray-300'},
		]
	}
}

export default listAll