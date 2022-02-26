<template>
  <div>
    <div style="display: flex;justify-content: center;margin-top: 200px">
      <el-card style="width: 250">
        <h3 class="title">系统登录</h3>
        <el-form :model="LoginForm" :rules="rules" ref="LoginForm" label-width="60px" class="demo-ruleForm">
          <el-form-item label="账号" prop="user_name">
            <el-input placeholder="请输入账户名" v-model="LoginForm.user_name">
            </el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" placeholder="请输入密码" v-model="LoginForm.password">
            </el-input>
          </el-form-item>
          <el-button type="primary" @click="doLogin('LoginForm')" style="float: right ; width: auto;">登录</el-button>
          <div>
            <el-button type="text" @click="addUser">
              注册新用户
            </el-button>
            <el-button type="text" @click="forgotPassword">
              忘记密码
            </el-button>
          </div>
        </el-form>
      </el-card>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      LoginForm: {
        user_name: '',
        password: '',
      },
      //校验规则
      rules: {
        user_name: [{
          required: true,
          message: '用户名不能为空',
          trigger: 'blur'
        }],
        password: [{
          required: true,
          message: '密码不能为空',
          trigger: 'blur'
        }],
      },
    }
  },
  methods: {
    doLogin (LoginForm) {
      this.$refs.LoginForm.validate((valid) => {
        if (valid) {
          this.logining = true
          this.$axios({
            method: 'post',
            url: '/login',
            data: this.$qs.stringify({ //axios的post方法访问后端this.qs.stringify
              user_name: this.LoginForm.user_name,
              password: this.LoginForm.password
            })
          })
            .then(res => { //请求成功后执行函数
              if (res.data.message === '登陆成功') {
                this.$router.push('/Home') //登录验证成功路由实现跳转
                this.$message({
                  message: '登录成功',
                  type: 'success'
                })
              } else { //请求失败后执行函数
                this.$message({
                  message: '用户名或密码错误',
                  type: 'warning'
                })
              }
            })
            .catch(err => { //请求错误后执行函数
              this.$message.error('网络异常，请稍后')
              console.log(err)
            })
        } else {
          console.log('error submit')
          return false
        }
      })
    },
    addUser () {
    },
    forgotPassword () {
    }
  }
}
</script>
