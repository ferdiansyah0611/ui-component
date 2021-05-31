import { h } from "https://x.lcas.dev/preact@10.5.12/mod.js";
import { renderToString } from "https://x.lcas.dev/preact@10.5.12/ssr.js";
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}
let docs = document as any

const $data: any = {}
$data.alert = []

const prints: any = (...value: string[]) => console.log(...value)
const Alert: Function = (el: string, type: string) => {
	interface queryType{
		classList: {
			add: Function,
            contains: Function
		},
		innerHTML: string,
		getAttribute: any,
		setAttribute: any,
		querySelector: any
	}
	const list: {type: string, cls: string}[] = [
		{type: 'primary', cls: 'bg-blue-500 text-white shadow'},
		{type: 'danger', cls: 'bg-red-500 text-white shadow'},
		{type: 'success', cls: 'bg-green-500 text-white shadow'},
		{type: 'warning', cls: 'bg-yellow-500 text-white shadow'},
		{type: 'dark', cls: 'bg-black text-white shadow'},
		{type: 'light', cls: 'bg-white text-black border border-gray-200'},
		{type: 'secondary', cls: 'bg-gray-200 text-black border border-gray-300'},
	]
	const query = document.querySelectorAll(el)
	if(query.length >= 1){
		query.forEach((querys: queryType) => {
			const id: any = 'alert-' + Math.floor(Math.random() * 100000)
			list.forEach((lists: {
				type: string,
				cls: string
			}) => {
				if(lists.type == type){
					let status = false
					lists.cls.split(' ').forEach((cls: string) => querys.classList.add(cls))
					querys.innerHTML = renderToString(
						<div className="w-full flex">
							<p className="w-full">{querys.getAttribute('msg')}</p>
							<span className="cursor-pointer">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
								</svg>
							</span>
						</div>
					)
					querys.setAttribute('id', id)
					$data.alert.find((d: any) => d.id !== id ? $data.alert.push({get id(){return id},get el(){return querys},get open(){return status},set open(value: boolean){status = value}}): false)
					const event: any = function(){
						function open(){
							if(querys.getAttribute('open') == "true"){
								status = true
								querys.classList.add('flex')
							}else{
								status = false
								querys.classList.add('hidden')
							}
						}
						querys.querySelector('span').addEventListener('click', (e:any) => {
							e.preventDefault()
							if(status = false){
								status = true
								querys.classList.add('flex')
							}else{
								status = false
								querys.classList.add('hidden')
							}
						})
						open()
					}
					event()
					if(querys.getAttribute('config')){
                        const config = querys.getAttribute('config')
                        function check(attr: string){
                            if(config.hasOwnProperty(attr)){
                                return config[attr]
                            }
                            return false
                        }
                        function p(){
                            if(check('p') == true){
                                   querys.classList.add('p-' + check('p'))
                            }
                        }
                        p()
                    }else{
                    	querys.classList.add('p-3')
                    }
                    return true
				}
			})
		})
		return{
			$data
		}
	}
}

const App = function(conf = {}){
	let data: any[] = []
	return{
		config: conf,
		data: data,
		set alert(value: any[]){
			try{
				value.forEach(data => Alert(data.el, data.type))
			}catch(e){
				console.log(e.message)
			}
		},
		get alert(){
			return $data.alert
		}
	}
}
let myWindow = window as any;

myWindow.ui = App