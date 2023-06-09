// #ifndef VUE3
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
// #endif

// #ifdef VUE3
import { createStore } from 'vuex'
const store = createStore({
// #endif
	state: {
		bgImage:'linear-gradient(45deg, #ec008c, #6739b6)',
		// --primary-color 主色 			--assist-color 辅助颜色  			--accent-color 搭配颜色
		// --primary-bg-color 主背景色 		--assist-bg-color 辅助背景色			--accent-bg-color 搭配背景色
		// --primary-text-color 字体主色 	--assist-text-color 字体辅助色		--inverse-text-color 字体反色
		// --btn-bg-color 按钮背景色 		--btn-text-color 按钮字体色			--border-color 边框颜色
		Theme:uni.getStorageSync('theme') || `
			--primary-color:#48b8d0;
			--assist-color:#2b85e4;
			--accent-color:#a0cfff;
			--primary-bg-color:#F9F9F9;
			--assist-bg-color:#F5F5F5;
			--accent-bg-color:#FFFFFF;
			--primary-text-color:#000000;
			--assist-text-color:#333333;
			--inverse-text-color:#ffffff;
			--btn-bg-color:#48b8d0;
			--btn-text-color:#ffffff;
			--border-color:#EEEEEE;
		`,
		themeName:uni.getStorageSync('themeName') ||'蓝色主题'
	},
	mutations: {
		setbgImage(state,bgImage){
			state.bgImage = bgImage
		},
		// 主题更换
		setTheme(state,Theme){
			// 将皮肤配置JSON转为以 ; 分割的字符串（style 值）
			let style = Theme.value.map((item,index)=>{
				return `${item.name}:${item.value}`
			}).join(";")
			uni.setStorageSync('theme',style)
			uni.setStorageSync('themeName',Theme.name)
			state.themeName= Theme.name
			state.Theme = style
		}
	},
	getters: {
		
	},
	actions: {
		
	}
})

export default store
