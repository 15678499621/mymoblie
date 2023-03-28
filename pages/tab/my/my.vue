<template>
	<view :style="Theme">
		<uni-nav-bar :statusBar="true" fixed="true"  title="个人中心" />
		<view class="content">
			<view class="themeBox flexBox ">
				<view v-for="(item,index) in themes" :key="index" @click="themeChange(index)" class="theme" :style="{'background-color':item.value[0].value}">
					<uni-icons v-if="current == index" type="checkmarkempty" color="#fff" size="48" ></uni-icons>
				</view>
			</view>
		</view>
		<view class="bgColor"></view>
		
	</view>
</template>

<script>
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
	import * as theme from '@/common/theme.js'
	export default {
		data() {
			return {
			themes:[],
			}
		},
		components: {
			uniNavBar
		},
		computed: {
			Theme() {
				return this.$store.state.Theme;
			},
			current(){
				return this.themes.findIndex(item => item.name == this.$store.state.themeName) || 0
			}
		},
		onLoad() {
			
		},
		onShow() {
			this.themes=theme.themeList
		},
		methods: {
			// 主题切换
			themeChange(index) {
				let item = this.themes[index]
				this.$store.commit('setTheme',item);
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #fff;
		font-size: 28rpx;
	}
	
	.content {
		.flexBox{
			display: flex;
		}
		.themeBox {
			background-color: #fff;
			flex-wrap: wrap;
			padding: 20rpx 15rpx;
	
			.theme {
				width: 30%;
				height: 100rpx !important;
				margin-bottom: 20rpx;
				font-size: 30rpx;
				line-height: 100rpx;
				text-align: center;
				color: #fff;
				position: relative;
				box-shadow: 3px 3px 5px #D0D0D3;
				margin: 0 10rpx 15rpx 10rpx;
	
				.dian {
					width: 20rpx;
					height: 20rpx;
					position: absolute;
					background-color: #fff;
					border-radius: 50%;
					top: 3px;
					right: 3px;
					border: 1px solid #000000;
					z-index: 99 !important;
				}
			}
	
			.theme:last-child {
				margin-right: 0;
			}
		}
	}
	
	.bgColor {
		width: 80%;
		height: 300rpx;
		margin: 0 auto;
		background-color: var(--primary-color);
	}
	
	
</style>
