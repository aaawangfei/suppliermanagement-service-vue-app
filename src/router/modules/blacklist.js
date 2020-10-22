export default [
  // 加入黑名单-供应商审核流程
  {
    path: '/main/blacklist/adddetail',
    name: 'BlacklistAddDetail',
    hidden: true,
    component: () =>
        import('@/views/blacklist/adddetail'),
    meta: {
      title: '加入黑名单审批详情',
      noCache: true
    }
  },
  {
    path: '/main/blacklist/add',
    name: 'BlacklistAdd',
    hidden: true,
    component: () =>
        import('@/views/blacklist/add'),
    meta: {
      title: '加入黑名单',
      noCache: true
    }
  },
	//移出黑名单-供应商审核流程
	{
	  path: '/main/blacklist/removedetail',
	  name: 'BlacklistRemoveDetail',
	  hidden: true,
	  component: () =>
	      import('@/views/blacklist/removedetail'),
	  meta: {
	    title: '移除黑名单详情',
	    noCache: true
	  }
	},
	{
	  path: '/main/blacklist/remove',
	  name: 'BlacklistRemove',
	  hidden: true,
	  component: () =>
	      import('@/views/blacklist/remove'),
	  meta: {
	    title: '移除黑名单',
	    noCache: true
	  }
	},
	//变更-供应商信息审核流程
	{
	  path: '/main/changesupplier/add',
	  name: 'ChangeSupplierAdd',
	  hidden: true,
	  component: () =>
	      import('@/views/changesupplier/add'),
	  meta: {
	    title: '变更供应商',
	    icon: 'tree'
	  }
	},
	{
	  path: '/main/changesupplier/detail',
	  name: 'ChangesupplierDetail',
	  hidden: true,
	  component: () =>
	      import('@/views/changesupplier/detail'),
	  meta: {
	    title: '变更明细管理',
	    icon: 'tree'
	  }
	},
	//新增-供应商信息审核流程
	{
	  path: '/main/supplier/add',
	  name: 'SupplierAdd',
	  hidden: true,
	  component: () =>
			import('@/views/supplier/add'),
	  meta: {
	    title: '新增供应商',
	    icon: 'tree'
	  }
	},
	{
	  path: '/main/supplier/listdetial',
	  name: 'SupplierListDetail',
	  hidden: true,
	  component: () =>
	      import('@/views/supplier/listdetial'),
	  meta: {
	    title: '信息管理审批查看',
	    icon: 'tree'
	  }
	},
	{
	  path: '/main/supplier/list',
	  name: 'Supplier',
	  component: () =>
	      import('@/views/supplier/list'),
	  meta: {
	    title: '信息管理',
	    icon: 'tree',
	  }
	}
]
