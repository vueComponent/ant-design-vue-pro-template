const usernames = ['ant.design', 'admin', 'superuser']
const passwords = ['ant.design', 'admin']

module.exports = {
  'GET /api/currentUser': (req, res) => {
    res.send({
      name: 'Serati Ma',
      avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
      userid: '00000001',
      email: 'antdesign@alipay.com',
      signature: '海纳百川，有容乃大',
      title: '交互专家',
      group: '蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED',
      tags: [
        {
          key: '0',
          label: '很有想法的',
        },
        {
          key: '1',
          label: '专注设计',
        },
        {
          key: '2',
          label: '辣~',
        },
        {
          key: '3',
          label: '大长腿',
        },
        {
          key: '4',
          label: '川妹子',
        },
        {
          key: '5',
          label: '海纳百川',
        },
      ],
      notifyCount: 12,
      unreadCount: 11,
      country: 'China',
      geographic: {
        province: {
          label: '浙江省',
          key: '330000',
        },
        city: {
          label: '杭州市',
          key: '330100',
        },
      },
      address: '西湖区工专路 77 号',
      phone: '0752-268888888',
      role: {
        id: 'admin',
        name: '管理员',
        describe: '拥有所有权限',
        status: 1,
        creatorId: 'system',
        createTime: 1497160610259,
        deleted: 0,
        permissions: [{
          roleId: 'admin',
          permissionId: 'dashboard',
          permissionName: '仪表盘',
          actionEntitySet: [{
            action: 'add',
            describe: '新增',
            defaultCheck: false,
          }, {
            action: 'query',
            describe: '查询',
            defaultCheck: false,
          }, {
            action: 'get',
            describe: '详情',
            defaultCheck: false,
          }, {
            action: 'update',
            describe: '修改',
            defaultCheck: false,
          }, {
            action: 'delete',
            describe: '删除',
            defaultCheck: false,
          }],
        }, {
          roleId: 'admin',
          permissionId: 'exception',
          permissionName: '异常页面权限',
          actionEntitySet: [{
            action: 'add',
            describe: '新增',
            defaultCheck: false,
          }, {
            action: 'query',
            describe: '查询',
            defaultCheck: false,
          }, {
            action: 'get',
            describe: '详情',
            defaultCheck: false,
          }, {
            action: 'update',
            describe: '修改',
            defaultCheck: false,
          }, {
            action: 'delete',
            describe: '删除',
            defaultCheck: false,
          }],
        }, {
          roleId: 'admin',
          permissionId: 'result',
          permissionName: '结果权限',
          actionEntitySet: [{
            action: 'add',
            describe: '新增',
            defaultCheck: false,
          }, {
            action: 'query',
            describe: '查询',
            defaultCheck: false,
          }, {
            action: 'get',
            describe: '详情',
            defaultCheck: false,
          }, {
            action: 'update',
            describe: '修改',
            defaultCheck: false,
          }, {
            action: 'delete',
            describe: '删除',
            defaultCheck: false,
          }],
        }, {
          roleId: 'admin',
          permissionId: 'profile',
          permissionName: '详细页权限',
          actionEntitySet: [{
            action: 'add',
            describe: '新增',
            defaultCheck: false,
          }, {
            action: 'query',
            describe: '查询',
            defaultCheck: false,
          }, {
            action: 'get',
            describe: '详情',
            defaultCheck: false,
          }, {
            action: 'update',
            describe: '修改',
            defaultCheck: false,
          }, {
            action: 'delete',
            describe: '删除',
            defaultCheck: false,
          }],
        }, {
          roleId: 'admin',
          permissionId: 'table',
          permissionName: '表格权限',
          actionEntitySet: [{
            action: 'add',
            describe: '新增',
            defaultCheck: false,
          }, {
            action: 'import',
            describe: '导入',
            defaultCheck: false,
          }, {
            action: 'get',
            describe: '详情',
            defaultCheck: false,
          }, {
            action: 'update',
            describe: '修改',
            defaultCheck: false,
          }],
        }, {
          roleId: 'admin',
          permissionId: 'form',
          permissionName: '表单权限',
          actionEntitySet: [{
            action: 'add',
            describe: '新增',
            defaultCheck: false,
          }, {
            action: 'get',
            describe: '详情',
            defaultCheck: false,
          }, {
            action: 'query',
            describe: '查询',
            defaultCheck: false,
          }, {
            action: 'update',
            describe: '修改',
            defaultCheck: false,
          }, {
            action: 'delete',
            describe: '删除',
            defaultCheck: false,
          }],
        }, {
          roleId: 'admin',
          permissionId: 'order',
          permissionName: '订单管理',
          actionEntitySet: [{
            action: 'add',
            describe: '新增',
            defaultCheck: false,
          }, {
            action: 'query',
            describe: '查询',
            defaultCheck: false,
          }, {
            action: 'get',
            describe: '详情',
            defaultCheck: false,
          }, {
            action: 'update',
            describe: '修改',
            defaultCheck: false,
          }, {
            action: 'delete',
            describe: '删除',
            defaultCheck: false,
          }],
        }, {
          roleId: 'admin',
          permissionId: 'permission',
          permissionName: '权限管理',
          actionEntitySet: [{
            action: 'add',
            describe: '新增',
            defaultCheck: false,
          }, {
            action: 'get',
            describe: '详情',
            defaultCheck: false,
          }, {
            action: 'update',
            describe: '修改',
            defaultCheck: false,
          }, {
            action: 'delete',
            describe: '删除',
            defaultCheck: false,
          }],
        }, {
          roleId: 'admin',
          permissionId: 'role',
          permissionName: '角色管理',
          actionEntitySet: [{
            action: 'add',
            describe: '新增',
            defaultCheck: false,
          }, {
            action: 'get',
            describe: '详情',
            defaultCheck: false,
          }, {
            action: 'update',
            describe: '修改',
            defaultCheck: false,
          }, {
            action: 'delete',
            describe: '删除',
            defaultCheck: false,
          }],
        }, {
          roleId: 'admin',
          permissionId: 'table',
          permissionName: '桌子管理',
          actionEntitySet: [{
            action: 'add',
            describe: '新增',
            defaultCheck: false,
          }, {
            action: 'get',
            describe: '详情',
            defaultCheck: false,
          }, {
            action: 'query',
            describe: '查询',
            defaultCheck: false,
          }, {
            action: 'update',
            describe: '修改',
            defaultCheck: false,
          }, {
            action: 'delete',
            describe: '删除',
            defaultCheck: false,
          }],
        }, {
          roleId: 'admin',
          permissionId: 'user',
          permissionName: '用户管理',
          actionEntitySet: [{
            action: 'add',
            describe: '新增',
            defaultCheck: false,
          }, {
            action: 'import',
            describe: '导入',
            defaultCheck: false,
          }, {
            action: 'get',
            describe: '详情',
            defaultCheck: false,
          }, {
            action: 'update',
            describe: '修改',
            defaultCheck: false,
          }, {
            action: 'delete',
            describe: '删除',
            defaultCheck: false,
          }, {
            action: 'export',
            describe: '导出',
            defaultCheck: false,
          }],
        }],
      },
    })
  },

  'POST /api/login/account': (req, res) => {
    const { password, username, type } = req.body

    if (!usernames.includes(username) || !passwords.includes(password)) {
      res.send({
        data: {
          isLogin: true,
        },
        message: '账户或密码错误',
        code: 401,
      })
      return
    }

    res.send({
      token: 'use-token',
      message: '登录成功',
      code: 200,
    })
  },

  'POST /api/logout': (req, res) => {

  },
}
