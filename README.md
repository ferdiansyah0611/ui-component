# UI Component

A components framework based on UI Component.

[Check Documentation](https://ui-component-kappa.vercel.app/)
[Github](https://github.com/ferdiansyah0611/ui-component)
## Installation

#### For Vuejs v3 installation:
```bash
vue add tailwind
```

```bash
npm i ui-component-vue
```

## Usage
#### For Vuejs v3:
```javascript
import Navbar from 'ui-component-vue/Navbar'
import Dropdown from 'ui-component-vue/Dropdown'
import Button from 'ui-component-vue/Button'
import Text from 'ui-component-vue/form/Text'
import Area from 'ui-component-vue/form/Area'
import Select from 'ui-component-vue/form/Select'
import File from 'ui-component-vue/form/File'
import Alert from 'ui-component-vue/Alert'
import Cards from 'ui-component-vue/Card'
import Sidebar from 'ui-component-vue/Sidebar'
import ButtonIcon from 'ui-component-vue/ButtonIcon'
import Tabs from 'ui-component-vue/Tabs'
import Collapse from 'ui-component-vue/Collapse'

const app = createApp({})

app.component('Navbar', Navbar)
app.component('Dropdown', Dropdown)
app.component('Button', Button)
app.component('Text', Text)
app.component('Area', Area)
app.component('Select', Select)
app.component('File', File)
app.component('Alert', Alert)
app.component('Cards', Cards)
app.component('Sidebar', Sidebar)
app.component('ButtonIcon', ButtonIcon)
app.component('Tabs', Tabs)
app.component('Collapse', Collapse)
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)