<template>
  <el-card class="box-card">
    <el-button size="mini" type="primary" @click="InsertUser=true">新增</el-button>
    <el-button size="mini" type="danger" @click="DeleteUserAllId()">批量删除</el-button>
    <!-- 新增用户框 -->
    <span></span>
    <el-dialog title="新增用户" :visible.sync="InsertUser" width="600px">
      <el-form :model="insertUserForm">
        <el-form-item label="账号" :label-width="formLabelWidth">
          <el-input v-model="insertUserForm.user_name" placeholder="请输入账号" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input v-model="insertUserForm.password" type="password" placeholder="请输入密码" autocomplete="off"
                    show-password></el-input>
        </el-form-item>
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="insertUserForm.loginName" placeholder="请输入姓名" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" :label-width="formLabelWidth">
          <el-input v-model="insertUserForm.email" placeholder="请输入邮箱" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机号" :label-width="formLabelWidth">
          <el-input v-model="insertUserForm.mobileNumber" placeholder="请输入手机号" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="权限" :label-width="formLabelWidth">
          <el-radio v-model="insertUserForm.user_power" label="1" border>管理员</el-radio>
          <el-radio v-model="insertUserForm.user_power" label="2" border>商家</el-radio>
          <el-radio v-model="insertUserForm.user_power" label="3" border>用户</el-radio>
        </el-form-item>
        <!-- <el-form-item label="头像" :label-width="formLabelWidth"> -->
        <!-- <el-input v-model="insertUserForm.headPath" placeholder="请输入头像" autocomplete="off"></el-input> -->
        <!-- <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload> -->
        <!-- </el-form-item> -->
        <span slot="footer" class="dialog-footer">
          <el-button @click="InsertUser= false">取 消</el-button>
          <el-button type="primary" @click="insertUser()">确 定</el-button>
        </span>
      </el-form>
    </el-dialog>
    <!-- 修改用户框 -->
    <!--    <el-dialog title="修改用户" :visible.sync="UpdateUser" width="600px">-->
    <!--      <el-form :model="UpdateUserForm">-->
    <!--        <el-form-item label="账号" :label-width="formLabelWidth">-->
    <!--          <el-input v-model="UpdateUserForm.user_name" placeholder="请输入账号" autocomplete="off"></el-input>-->
    <!--        </el-form-item>-->
    <!--        <el-form-item label="密码" :label-width="formLabelWidth">-->
    <!--          <el-input v-model="UpdateUserForm.password" type="password" placeholder="请输入密码" show-password>2</el-input>-->
    <!--        </el-form-item>-->
    <!--        <el-form-item label="姓名" :label-width="formLabelWidth">-->
    <!--          <el-input v-model="UpdateUserForm.loginName" placeholder="请输入姓名" autocomplete="off"></el-input>-->
    <!--        </el-form-item>-->
    <!--        <el-form-item label="邮箱" :label-width="formLabelWidth">-->
    <!--          <el-input v-model="UpdateUserForm.email" placeholder="请输入邮箱" autocomplete="off"></el-input>-->
    <!--        </el-form-item>-->
    <!--        <el-form-item label="手机号" :label-width="formLabelWidth">-->
    <!--          <el-input v-model="UpdateUserForm.mobileNumber" placeholder="请输入手机号" autocomplete="off"></el-input>-->
    <!--        </el-form-item>-->
    <!--        <el-form-item label="权限" :label-width="formLabelWidth">-->
    <!--          <el-radio v-model="UpdateUserForm.user_power" label="1" border>管理员</el-radio>-->
    <!--          <el-radio v-model="UpdateUserForm.user_power" label="2" border>商家</el-radio>-->
    <!--          <el-radio v-model="UpdateUserForm.user_power" label="3" border>用户</el-radio>-->
    <!--        </el-form-item>-->
    <!-- <el-form-item label="头像" :label-width="formLabelWidth"> -->
    <!-- <el-input v-model="UpdateUserForm.headPath" placeholder="请输入头像" autocomplete="off"></el-input> -->
    <!-- <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload> -->
    <!-- </el-form-item> -->
    <!--        <el-button @click="UpdateUser= false">取 消</el-button>-->
    <!--        <el-button type="primary" @click="UpdateUserFrom()">确 定</el-button>-->
    <!--      </el-form>-->
    <!--    </el-dialog>-->
    <!-- 用户列表 -->
    <el-table :data="userData" border stripe style="width: 100% " @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center"></el-table-column>
      <el-table-column prop="user_id" label="用户ID" align="center"></el-table-column>
      <el-table-column prop="loginName" label="姓名" align="center"></el-table-column>
      <el-table-column prop="email" label="邮箱" align="center"></el-table-column>
      <el-table-column prop="mobileNumber" label="电话号" align="center"></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="UpdateUser=true">修改</el-button>
          <el-button size="mini" type="danger" @click="DeleteUserById(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="display: flex;justify-content: center;margin-top: 10px">
      <el-pagination background @size-change="sizeChange" @current-change="currentChange" :current-page="currentPage"
                     :page-size="pageSize" layout="sizes, prev, pager, next, jumper, ->, total, slot" :total="total">
      </el-pagination>
    </div>
  </el-card>
</template>
<script>
export default {
  data () {
    return {
      userData: [],
      rows: [], // 被选中的记录数据
      user_id: '', // 批量删除id
      currentPage: 1,
      pageSize: 10,
      total: 0,
      InsertUser: false,
      UpdateUser: false,
      insertUserForm: {
        user_name: '',
        password: '',
        loginName: '',
        email: '',
        mobileNumber: '',
        headPath: '',
        user_power: ''
      },
      // UpdateUserForm: {
      //   user_name: '',
      //   password: '',
      //   loginName: '',
      //   email: '',
      //   mobileNumber: '',
      //   headPath: '',
      //   user_power: ''
      // },
      formLabelWidth: '120px',
      imageUrl: ''
    }
  },
  // 页面加载时就获取用户的所有信息
  mounted () {
    this.getUserList()
    this.getUserListCount()
  },
  methods: {
    // 分页
    sizeChange (pageSize) {
      this.pageSize = pageSize
      this.getUserList()
    },
    currentChange (currentPage) {
      this.currentPage = currentPage
      this.getUserList()
    },
    // 获取用户列表
    getUserList () {
      var params = new URLSearchParams()
      params.append('currentPage', this.currentPage)
      params.append('pageSize', this.pageSize)
      this.$axios({
        method: 'post',
        url: '/getAllUserList',
        params
      }).then(
        resp => {
          this.userData = resp.data.data
        })
    },
    // 获取用户总数
    getUserListCount () {
      this.$axios.post('/getUserListCount').then(
        resp => {
          this.total = resp.data.data
        })
    },
    // 全选
    handleSelectionChange (rows) {
      this.rows = rows
      console.log(this.rows)
    },
    // 添加新用户
    insertUser () {
      this.$axios({
        method: 'post',
        url: '/insertUser',
        data: this.$qs.stringify({
          user_name: this.insertUserForm.user_name,
          password: this.insertUserForm.password,
          loginName: this.insertUserForm.loginName,
          email: this.insertUserForm.email,
          mobileNumber: this.insertUserForm.mobileNumber,
          headPath: this.insertUserForm.headPath,
          user_power: this.insertUserForm.user_power
        })
      })
        .then(res => { // 请求成功后执行函数
          if (res.data.message === '添加成功') {
            this.$message({
              message: '添加成功',
              type: 'success'
            })
          } else { // 请求失败后执行函数
            this.$message({
              message: '添加失败',
              type: 'warning'
            })
          }
          this.getUserList()
          this.getUserListCount()
        })
        .catch(err => { // 请求错误后执行函数
          this.$message.error('网络异常，请稍后')
          console.log(err)
        })
      this.InsertUser = false // 关闭新增窗口
    },
    // 更新用户
    UpdateUserFrom () {
    },
    // 批量删除
    DeleteUserAllId () {
    },
    // 按ID删除
    DeleteUserById (rowData) {
      console.log(rowData.user_id)
      this.$confirm('是否删除这条记录', '信息删除', {
        type: 'warning'
      }).then(() => {
        var params = new URLSearchParams()
        params.append('id', rowData.user_id)
        this.$axios({
          method: 'post',
          url: '/deleteUserById',
          params
        })
          .then(res => { // 请求成功后执行函数
            if (res.data.message === '删除成功') {
              this.$message({
                message: '删除成功',
                type: 'success'
              })
            } else { // 请求失败后执行函数
              this.$message({
                message: '删除失败',
                type: 'warning'
              })
            }
            this.getUserList()
            this.getUserListCount()
          })
          .catch(err => { // 请求错误后执行函数
            this.$message.error('网络异常，请稍后')
            console.log(err)
          })
      })
    }
  }
}
</script>
