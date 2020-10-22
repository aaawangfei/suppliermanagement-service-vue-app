<template>
	<div class="app-container">
		<van-nav-bar title="任务" class="vanNavBars" />
		<div class="tab-content">
			<van-tabs @click="onClick" v-model="active" swipeable>
				<van-tab title="我的待办" class="vanContent">
					<van-pull-refresh v-model="isRefresh1" @refresh="onRefresh1">
						<van-list v-model="loading" :finished="finished1" finished-text="没有更多了" @load="onLoadList1">
							<van-cell v-if="list.length>0" v-for="item in list" :key="item.taskId" class="first" style="padding:10px 5px;">
								<div class="firstone" style="overflow: hidden;">
									<span class="colo title">{{item.name}}</span>
								</div>
								<span class="dealwith" style="margin-top:20px;" @click="handleCreate(item)">去办理</span>
							</van-cell>
							<van-cell v-if="list.length==0" style="height:200px;line-height:200px;text-align: center;">

							</van-cell>
						</van-list>
					</van-pull-refresh>
				</van-tab>
				<van-tab title="我的创建" class="vanContent">
					<van-pull-refresh v-model="isRefresh2" @refresh="onRefresh2">
						<van-list v-model="loading" :finished="finished2" finished-text="没有更多了">
							<van-cell v-for="(item,key) in listfinish" :key="item.taskId" class="first" style="padding:10px 5px;width: 90%;margin: 3% auto;">
								<div @click="vhandleCreate(item)">
									<div class="firstone" style="overflow: hidden;">
										<span class="colo title">{{item.title}}</span>
									</div>
									<span class="dealwith" style="margin-top:20px;" @click="handleCreate(item)">去查看</span>
								</div>
							</van-cell>
						</van-list>
					</van-pull-refresh>
				</van-tab>
				<van-tab title="我的参与" class="vanContent" style="background:rgb(242, 242, 242);">
					<van-pull-refresh v-model="isRefresh3" @refresh="onRefresh3">
						<van-list v-model="loading" :finished="finished3" finished-text="没有更多了">
							<van-cell></van-cell>
							<van-cell @click="vhandleCreate(item)" v-for="(item,key) in listmyappl" :key="item.taskId" class="first" style="width: 90%;margin: 3% auto;">
								<div @click="vhandleCreate(item)">
									<div class="firstone" style="overflow: hidden;">
										<span class="colo title">{{item.name}}</span>
									</div>
									<span class="dealwith" style="margin-top:20px;" @click="handleCreate(item)">去查看</span>
								</div>

							</van-cell>
						</van-list>
					</van-pull-refresh>
				</van-tab>
			</van-tabs>
		</div>
	</div>
</template>
<script>
	//	window.transferPrama = function(str, applyOrgName) {
	//		sessionStorage.carUserId = str;
	//		alert(str);
	//	}

	import { getAjax } from "../utils/request.js"
	import { Toast } from 'vant';
	export default {
		data() {
			return {
				isRefresh1: false,
				loading1: false,
				isRefresh2: false,
				loading2: false,
				isRefresh3: false,
				loading3: false,
				list: [],
				listfinish: [],
				listmyappl: [],
				isRefresh: false,
				loading: false,
				finished1: false,
				finished2: false,
				finished3: false,
				active: 0,
				page: {
					pageSize: 10,
					pageNumber: 0
				},
				page2: {
					pageSize: 10,
					pageNumber: 0
				},
				page3: {
					pageSize: 10,
					pageNumber: 0
				},
				activeName: 0,
				refreshBool: false,
			};
		},
		mounted() {
			this.getList();
		},
		methods: {
			onRefresh1() {
				this.isRefresh1 = false;
				this.loading1 = true;
				this.page.pageNumber = 0;
				this.getList();
			},
			onRefresh2() {
				this.isRefresh2 = false;
				this.loading2 = true;
				this.page2.pageNumber = 0;
				this.getListFinish();
			},
			onRefresh3() {
				this.isRefresh3 = false;
				this.loading3 = true;
				this.page3.pageNumber = 0;
				this.getListmyappl();
			},
			initList(str, applyOrgName) {
				sessionStorage.carUserId = str;
				this.onLoad();
			},

			onClick(name, title) {
				this.activeName = name;
				if(name == 0) {
					this.page.pageNumber = 0;
					this.list = [];
					this.getList();
				} else if(name == 1) {
					this.page2.pageNumber = 0;
					this.listfinish = [];
					this.getListFinish();

				} else {
					this.page3.pageNumber = 0;
					this.listmyappl = [];
					this.getListmyappl();

				}
			},
			onLoadList1() {
				this.page.pageNumber ++;
				this.getList();
			},
			getList() {
				var params = {
					serverId: 13,
					pageSize: this.page.pageSize,
					pageNumber: this.page.pageNumber,
				}

				getAjax("http://61.134.63.231:9090/processService/userTask/taskListByCategory", params)
					.then(data => {
//						this.isRefresh1 = false;
//						this.loading1 = false;
						if(data.code == "0") {
							if(this.page.pageNumber == 0) {
								this.list = [];
							}
							this.list = this.list.concat(data.data.content);

							if(data.data.content == null || data.data.content.length === 0) {
								// 加载结束
								this.finished1 = true;
								return;
							}
							if(this.list.length >= data.data.totalElements) {
								console.log(111);
								this.finished1 = true;
							}
						} else {
							this.finished1 = true;
						}

					}).catch(err => {
						this.isRefresh = false;
						this.loading = false;
						this.finished1 = true;
					})
			},
			getListFinish() {
				var params = {
					//					assignee: sessionStorage.userId,
					pageSize: this.page2.pageSize,
					pageNumber: this.page2.pageNumber,
				}
				getAjax("http://61.134.63.231:9090/planmanagementService/PersonalInterface/findMyCreatelist", params)
					.then(data => {
						this.isRefresh = false;
						this.loading = false;
						if(data.code == "0") {
							if(this.page2.pageNumber == 0) {
								this.listfinish = [];
							}

							this.listfinish = this.listfinish.concat(data.data.content);
							this.page2.pageNumber = data.data.number + 1;
							if(this.listfinish.length == data.data.totalElements) {
								this.finished2 = true;
							}

						} else {
							this.finished2 = true;
						}
					}).catch(err => {
						this.isRefresh = false;
						this.loading = false;
						this.finished2 = true;
					})
			},
			getListmyappl() {
				var params = {
					//					assignee: sessionStorage.userId,
					serverId: 13,
					pageSize: this.page3.pageSize,
					pageNumber: this.page3.pageNumber,
				}
				getAjax("http://61.134.63.231:9090/processService/userTask/myTaskDoneByCategory", params)
					.then(data => {
						this.isRefresh = false;
						this.loading = false;
						if(data.code == "0") {
							if(this.page3.pageNumber == 0) {
								this.listmyappl = [];
							}
							//							this.listmyappl = data.data;
							this.listmyappl = this.listmyappl.concat(data.data.content);
							this.listmyappl = _.uniq(this.listmyappl, "businessForm");
							this.page3.pageNumber = data.data.number + 1;
							if(this.listmyappl.length == data.data.totalElements) {
								this.finished3 = true;
							}
						} else {
							this.finished3 = true;
						}
					}).catch(err => {
						this.isRefresh = false;
						this.loading = false;
						this.finished3 = true;
					})
			},
			//去办理
			handleCreate(row) {
				//				sessionStorage.carapplId = row.taskId;
				//				var u = navigator.userAgent,
				//					app = navigator.appVersion;
				//				var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
				//				var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
				//				if(isAndroid) {
				//					window.NativePlugin.GoneTab(row.businessForm);
				//				}
				//				if(isIOS) {
				//					window.webkit.messageHandlers.hiddeBottomBar.postMessage(null)
				//				}
				this.$router.push({
					path: row.businessForm
				})

			},
			//去查看
			vhandleCreate(row) {
				//				sessionStorage.carapplId = row.taskId;
				//				var u = navigator.userAgent,
				//					app = navigator.appVersion;
				//				var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
				//				var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
				//				if(isAndroid) {
				//					window.NativePlugin.GoneTab(row.businessForm);
				//				}
				this.$router.push({
					path: row.businessForm
				})
			},
			onClickLeft() {
				this.$router.go(-1);
			},

		},
	}
</script>
<style scoped>
	.vanContent {
		height: calc(100% - 90px);
		overflow: auto;
		position: fixed;
		width: 100%;
		top: 90px;
	}
	
	.app-container {
		/* max-width: 768px; */
		margin: 0 auto;
		position: relative;
		font-size: 12px;
	}
	
	.tab-content {
		width: 100%;
		height: auto;
		overflow: hidden;
		background-color: #F2F2F2;
	}
	
	.tab-content .first {
		height: auto;
		width: 90%;
		margin: 3% auto;
		background-color: white;
		border-radius: 5px;
	}
	
	.tab-content .first .firstone {
		height: 30px;
		line-height: 30px;
		margin-left: 3%;
	}
	
	.tab-content .first .firstone .title {
		font-size: 14px;
		font-family: PingFangSC;
		font-weight: 400;
		color: rgba(34, 34, 34, 1);
		line-height: 35px;
	}
	
	.col {
		color: #666666;
	}
	
	.colo {
		color: #222222;
	}
	
	.around {
		width: 20px;
		height: 20px;
		background-color: #E60012;
		border-radius: 50%;
		display: inline-block;
		color: #FFFFFF;
	}
	
	ul li {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	
	.tab-tilte {
		width: 100%;
		overflow: hidden;
		background-color: #FFFFFF;
	}
	
	.tab-tilte li {
		float: left;
		width: 33.33%;
		text-align: center;
		cursor: pointer;
		color: #7d7e80;
	}
	
	.tab-tilte li .task {
		width: 60%;
		padding: 10px 0;
		cursor: pointer;
		height: auto;
		display: inline-block;
	}
	/* 点击对应的标题添加对应的背景颜色 */
	
	.tab-tilte .active {
		border-bottom: 3px solid #E60012;
		color: #323233;
		font-weight: 500;
	}
	
	.van-cell {
		padding: 0px 0px;
	}
	
	.dealwith {
		float: right;
		margin-right: 3%;
		width: 80px;
		height: 30px;
		background-color: #E60012;
		line-height: 30px;
		text-align: center;
		margin-top: -5px;
		border-radius: 3px;
		color: white;
	}
</style>