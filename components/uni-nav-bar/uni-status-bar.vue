<template>
	<view :style="{ height: statusBarHeight }" class="uni-status-bar" :class="{'uni-status--fixed':fixed}">
		<slot />
	</view>
</template>

<script>
	var statusBarHeight = uni.getSystemInfoSync().statusBarHeight + 'px'
	export default {
		name: 'UniStatusBar',
		data() {
			return {
				statusBarHeight: statusBarHeight
			}
		},
		props:{
			fixed: {
				type: [Boolean, String],
				default: false
			}
		}
	}
</script>

<style lang="scss" scoped>
	.uni-status-bar {
		width: 750rpx;
		height: 20px;
		background-color: #FFFFFF;
		// height: var(--status-bar-height);
	}
	.uni-status--fixed {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 998;
	}
</style>
