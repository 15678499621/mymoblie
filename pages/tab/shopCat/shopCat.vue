<template>
    <view :style="Theme">
		<uni-nav-bar :statusBar="true" fixed="true"  title="购物" />
	  <!--  <view><input class="uni-input" focus placeholder="自动获得焦点" /></view> -->
	  
	  <view class="uni-input-wrapper">
	  		<input class="uni-input" placeholder="请输入密码" :password="showPassword" />
			<uni-icons type="search" class="progress-cancel" color="#dd524d"></uni-icons>
			
	 </view>
		
		
	</view>
</template>

<script>
	import * as theme from '@/common/theme.js';
	
	export default {
		data() {
			 return {
			    themes:[],
				showPassword:true,
				arr: ['前端','java','ui','大数据']
			 }
		},
		
		computed: {
			Theme() {
				   return this.$store.state.Theme;
			},
		},
		
		methods: {},	
				
			
		}	
</script>

<style>
	/* .uni-input{
		width: 100%;
		height: 96rpx;
		border: 1px solid sandybrown;
	} */
</style>