/**
 * 常用工具方法类
**/
import base from './sju.base.js'

let tools = {
	/*
	 * @description 检测小程序更新
	*/
	VersionUpdate() {
	    // 获取小程序更新机制兼容 
	    if (uni.canIUse('getUpdateManager')) {
	        const updateManager = uni.getUpdateManager()
	        // 检查是否有新版本发布
	        updateManager.onCheckForUpdate(function(res) {
	            if (res.hasUpdate) {
	                //小程序有新版本，则静默下载新版本，做好更新准备
	                updateManager.onUpdateReady(function() {
	                    uni.showModal({
	                        title: '更新提示',
	                        content: '新版本已经准备好，是否重启应用？',
	                        success: function(res) {
	                            if (res.confirm) {
	                                //新的版本已经下载好，调用 applyUpdate 应用新版本并重启
	                                updateManager.applyUpdate()
	                            } else if (res.cancel) {
	                                //如果需要强制更新，则给出二次弹窗，如果不需要，则这里的代码都可以删掉了
	                                uni.showModal({
	                                    title: '温馨提示',
	                                    content: '我们已经做了新的优化，请及时更新哦~',
	                                    showCancel: false, //隐藏取消按钮，也可显示，取消会走res.cancel，然后从新开始提示
	                                    success: function(res) {
	                                        //第二次提示后，强制更新           
	                                        if (res.confirm) {
	                                            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
	                                            updateManager.applyUpdate()
	                                        } 
											// else if (res.cancel) {
	                                            // 重新回到版本更新提示
	                                            // autoUpdate()
	                                        // }
	                                    }
	                                })
	                            }
	                        }
	                    })
	                })
	                  // 新的版本下载失败
	                updateManager.onUpdateFailed(function() {
	                    uni.showModal({
	                        title: '温馨提示',
	                        content: '新版本已经上线，请您删除当前小程序，重新搜索打开',
	                    })
	                })
	            }
	        })
	    } else {
	        // 提示用户在最新版本的客户端上体验
	        uni.showModal({
	            title: '温馨提示',
	            content: '当前微信版本过低，可能无法使用该功能，请升级到最新版本后重试。'
	        })
	    }
	},
	
	/**
	* @description px转upx
	* @param {string} val 要处理的数据
	**/
	px2upx(val){
		return val/(uni.upx2px(val)/val);
	},
	
	/**
	* @description upx转px
	* @param {string} val 要处理的数据
	*/
	upx2px(val){
		return uni.upx2px(val);
	},
	/**
	* @description 字符掩码
	* @param {string} val 要处理的数据
	* @param {int} start 掩码开始位置
	* @param {int} end	掩码结束位置
	*/
	strFilter(val,start,end){
		var str=val.trim()	//去除空格
		var maskCode=str.replace(str.substring(start, end), "****")
		return maskCode;
	},
	/**
	* @description 获取链接参数
	* @param {string} path 网址链接Url路径
	* @param {string} name 参数名
	*/
	getUrlParam(path,name) {
		if(base.isNull(path))
		{
			path=window.location.search
		}
	    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	    var r = path.substr(1).match(reg);
	    if (r != null) return unescape(r[2]);
	    return null;
	},
	/**
	* @description 判断是否在微信内置浏览器
	*/
	isWechat(){
		let ua = navigator.userAgent.toLowerCase();
		if (ua.match(/MicroMessenger/i) == "micromessenger") {
			return true;  
		}else{
		    return false;  
		}
	},
	/**
	* @description 小程序的原生菜单中显示分享按钮
	*/
	showShareMenu(){
		// 小程序分享功能
		uni.showShareMenu({
			withShareTicket:true,
			//设置下方的Menus菜单，才能够让发送给朋友与分享到朋友圈两个按钮可以点击
			menus:["shareAppMessage","shareTimeline"]//不设置默认只能发送给朋友
		})
	}
	
	
}

export default tools;