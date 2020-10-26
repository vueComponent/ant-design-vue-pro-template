<template>
  <page-container
    size="small"
    :tab-props="{ size: 'small' }"
    :tab-list="tabList"
    :tab-active-key="tabActiveKey"
    :title="false"
    :tab-change="(key) => {
      this.tabActiveKey = key
      console.log('PageHeader::tabChange', key)
    }"
    @back="() => {
      console.log('PageHeader::@back')
    }"
    :back="() => {
      // 自定义 back，不会覆盖 onBack 事件
      console.log('PageHeader::.back')
    }"
  >
    <template v-slot:content>
      <span>{{ $t('pages.form.basicform.content') }}</span>
    </template>
    <!-- 自定义 content 扩展信息 -->
    <template v-slot:extraContent>
      <div><a-button>{{ $t('pages.form.basicform.headers.btn1') }}</a-button></div>
    </template>
    <div>
      <h3>Advanced Form</h3>
      <p>隐藏页头标题例子</p>
    </div>
    <div class="custom-table">
      <a-table
        :components="tableComponents"
        :columns="columns"
        :data-source="dataSource"
      />
    </div>
  </page-container>
</template>

<script>
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    width: '20%',
    summary: (data, h) => {
      return <span>总计</span>
    },
    // scopedSlots: { customRender: 'name' },
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    filters: [
      { text: 'Male', value: 'male' },
      { text: 'Female', value: 'female' },
    ],
    width: '20%',
    summary: (data, h) => {
      let male = 0
      let female = 0
      data.forEach(it => {
        it.gender === 'male' ? (male++) : (female++)
      })
      return <div>Male: {male}, Female: {female}</div>
    },
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'age',
    dataIndex: 'age',
    summary: true,
  },
]

const TableTotalRow = {
  name: 'TableRow',
  render (h) {
    const {
     table: {
        data,
        columns,
     },
     renderRows,
    } = this.$parent
    const totalRow = {
      key: '-9999999',
    }
    if (data === null || data.length < 1) {
      columns.forEach(it => {
        const dataIndex = it.dataIndex || it.title
        totalRow[dataIndex] = dataIndex
      })
    }
    columns.forEach(column => {
      const isFunSummary = typeof column.summary === 'function'
      if (isFunSummary) {
        totalRow[column.dataIndex] = column.summary(data, h)
        return
      }
      totalRow[column.dataIndex] = column.summary &&
        (data.map(it => {
              return column.summary && it[column.dataIndex] || null
            }).reduce((prev, cur) => {
              return prev + cur
            })) || ''
    })
    return (
      <tbody class="a-table-total-row">
        {this.$slots.default}
        {renderRows([totalRow], 0)}
      </tbody>
    )
  },
}
export default {
  name: 'AdvancedForm',
  data () {
    this.columns = columns
    return {
      console: window.console,
      tabList: [
        { tab: 'pages.form.basicform.tabs.tab1', key: 'tab1' },
        { tab: 'pages.form.basicform.tabs.tab2', key: 'tab2' },
        { tab: 'pages.form.basicform.tabs.tab3', key: 'tab3' },
      ],
      tabActiveKey: 'tab1',
      dataSource: [
        { key: 1, name: 'Name1', gender: 'male', email: 'name1@domain.com', age: 10 },
        { key: 2, name: 'Name2', gender: 'male', email: 'name2@domain.com', age: 20 },
        { key: 3, name: 'Name3', gender: 'male', email: 'name3@domain.com', age: 22 },
        { key: 4, name: 'Name4', gender: 'female', email: 'name4@domain.com', age: 25 },
      ],
      tableComponents: {
        body: {
          wrapper: TableTotalRow,
        },
      },
    }
  },
  methods: {
    handleTabChange (key) {
      this.tabActiveKey = key
      console.log('PageHeader::tabChange', key)
    },
  },
}
</script>
