import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import components from "@/components/UI";

const app = createApp(App);

for(let componentName in components) {
	let component = components[componentName];
	app.component(component.name, component);
}

app.use(router).mount('#app');