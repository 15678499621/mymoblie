<template>
	<view :style="Theme">
		<uni-nav-bar :statusBar="true" fixed="true" title="移动开发框架" />
		<!-- banner图 -->
		<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
			:duration="duration" :circular="circular" indicator-active-color="#fff">
			<swiper-item v-for="(item,index) in 4" :key="index">
				<!-- 若要使用图片，把以下下改用image标签 -->
				<view :class="'swiper-item' + index">
					<text style="color: #fff; font-size: 32px;">{{index+1}}</text>
				</view>
				<!-- banner图数组格式：[{imgUrl:'url'},{imgUrl:'url'}] -->
				<!-- <image :src="item.imgUrl""></image> -->
				<!-- 若要使用图片，把以上改用image标签 -->
			</swiper-item>
		</swiper>
		<!-- banner图 -->

		<!-- 导航栏 -->
		<view class="tool">
			<view class="toolView">
				<image src="/static/tool/A5.png"></image>
				<text>会员中心</text>
			</view>
			<view class="toolView">
				<image src="/static/tool/CertificatePrinting.png"></image>
				<text>兑换中心</text>
			</view>
			<view class="toolView">
				<image src="/static/tool/NameSticker.png"></image>
				<text>游戏抽奖</text>
			</view>
			<view class="toolView">
				<image src="/static/tool/NationalVisa.png"></image>
				<text>宠物助养</text>
			</view>
			<view class="toolView">
				<image src="/static/tool/Purikura.png"></image>
				<text>商品分类</text>
			</view>
			<view class="toolView">
				<image src="/static/tool/Textquick.png"></image>
				<text>每日签到</text>
			</view>
			<view class="toolView">
				<image src="/static/tool/photoCard.png"></image>
				<text>每日签到</text>
			</view>
			<view class="toolView">
				<image src="/static/tool/sixInches.png"></image>
				<text>每日签到</text>
			</view>
		</view>
		<!-- 导航栏 -->
		
	</view>
</template>

<script>
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
	export default {
		data() {
			return {
				Theme:'',
				// banner图设置参数
				indicatorDots: true,
				circular: true,
				autoplay: true,
				interval: 1500,
				duration: 500,
				
			}
		},
		components: {
			uniNavBar
		},
		onLoad() {
			
		},
		onShow() {
			this.Theme = this.$store.state.Theme
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	/* 轮播图 */
	.swiper {
		$swiper-width: 100%;
		$swiper-height: 320upx;
		$text-align: center;
		width: $swiper-width;
		height: $swiper-height;

		swiper-item {
			width: $swiper-width;
			height: $swiper-height;

			.swiper-item0 {
				text-align: $text-align;
				line-height: $swiper-height;
				background-color: #cee1fd;
			}

			.swiper-item1 {
				text-align: $text-align;
				line-height: $swiper-height;
				background-color: #b2cef7;
			}

			.swiper-item2 {
				text-align: $text-align;
				line-height: $swiper-height;
				background-color: #42b983;
			}

			.swiper-item3 {
				text-align: $text-align;
				line-height: $swiper-height;
				background-color: #ffe417;
			}
		}
	}


	/* 导航栏 */
	.tool {
		width: 100%;
		margin-top: 10upx;
		height: 300upx;
		background-color: var(--accent-bg-color);

		.toolView {
			width: 25%;
			height: 120upx;
			margin-top: 20upx;
			float: left;
			text-align: center;

			image {
				width: 80upx;
				height: 80upx;
			}

			text {
				display: block;
				color: $text-color;

				:active {
					transition: all 0.2s;
					opacity: $opacity-active;
				}
			}

			:active {
				transition: all 0.2s;
				opacity: $opacity-active;

				&+text {
					transition: all 0.2s;
					opacity: $opacity-active;
				}
			}
		}
	}
</style>
