<template style="">
  <n-config-provider :theme-overrides="themeOverrides">
    <div class="bcg" style="background: #ededed; height: 100vh">
      <div :class="contentClasses">
        <div class="form sign-in">
          <h2>欢迎回来</h2>
          <label>
            <span>手机号</span>
            <n-input v-model:value="state.phone" :maxlength="11" placeholder="" type="text" />
          </label>
          <label>
            <span>密码</span>
            <n-input v-model:value="state.password" placeholder="" type="password" />
          </label>
          <button class="submit" type="button" @click="login">登 录</button>
        </div>
        <div class="sub-cont">
          <div class="img">
            <div class="img__text m--up">
              <h2>还未注册？</h2>
              <p>立即注册，进入华谊云库！</p>
            </div>
            <div class="img__text m--in">
              <h2>已有帐号？</h2>
              <p>有帐号就登录吧，好久不见了！</p>
            </div>
            <div class="img__btn" @click="removeSignupClass">
              <span class="m--up">注 册</span>
              <span class="m--in">登 录</span>
            </div>
          </div>
          <div class="form sign-up">
            <h2>立即注册</h2>
            <label>
              <span>用户名</span>
              <n-input v-model:value="state.reg_user" placeholder="" type="text" />
            </label>
            <label>
              <span>手机号</span>
              <n-input v-model:value="state.reg_phone" placeholder="" type="text" />
            </label>
            <label>
              <span>密码</span>
              <n-input v-model:value="state.reg_password" placeholder="" type="password" />
            </label>
            <button id="reg" class="submit" type="button" @click="Signin">注 册</button>
          </div>
        </div>
      </div>
    </div>
  </n-config-provider>
</template>
<script lang="ts" setup>
import { reactive, computed } from 'vue'
import { NInput, NConfigProvider, createDiscreteApi } from 'naive-ui'
import router from '@/router'
import { registerApi } from '@/service/api/login/login'

const { message } = createDiscreteApi(['message'])

// 修改组件的主题色
const themeOverrides = {
  common: {
    primaryColor: '#999999',
    primaryColorHover: '#999999',
  },
}

interface State {
  isSignup: boolean
  phone: string //登录电话
  password: string //登录密码
  reg_user: string //注册用户名
  reg_phone: string //注册手机号
  reg_password: string //注册密码
}

const state: State = reactive({
  isSignup: false, // 控制是否添加 s--signup 类名
  phone: '', //登录电话
  password: '', //登录密码
  reg_user: '', //注册用户名
  reg_phone: '', //注册手机号
  reg_password: '', //注册密码
})

//点击切换动画效果
const removeSignupClass = () => {
  state.isSignup = !state.isSignup
}
//点击切换动画效果动态计算
const contentClasses = computed(() => {
  return {
    content: true,
    's--signup': state.isSignup,
  }
})
//注册
const Signin = () => {
  console.log('点击了注册')
  registerApi
    .register({
      password: state.reg_password,
      phone: state.reg_phone,
      type: 0,
      username: state.reg_user,
    })
    .then((res) => {
      if (res.code === 200) {
        message.success('注册成功！')
      }
      console.log(res, '这是什么玩意+++++++')
    })
}

//登录 成功后跳转首页
const login = () => {
  console.log('点击了登录')
  router.push({ name: 'Home' })
}
</script>

<style lang="scss" scoped>
:deep(.n-input .n-input__border, .n-input .n-input__state-border) {
  border: none;
  border-bottom: 1px solid #999999;
}

button {
  border: none;
  outline: none;
  background: none;
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
}

.tip {
  font-size: 20px;
  margin: 40px auto 50px;
  text-align: center;
}

.content {
  overflow: hidden;
  position: absolute;
  left: 50%;
  top: 50%;
  width: 900px;
  height: 550px;
  margin: -300px 0 0 -450px;
  background: #fff;
}

.form {
  position: relative;
  width: 640px;
  height: 100%;
  transition: -webkit-transform 0.6s ease-in-out;
  padding: 50px 30px 0;
}

.sub-cont {
  overflow: hidden;
  position: absolute;
  left: 640px;
  top: 0;
  width: 900px;
  height: 100%;
  padding-left: 260px;
  background: #fff;
  transition: -webkit-transform 0.6s ease-in-out;
}

.content.s--signup .sub-cont {
  transform: translate3d(-640px, 0, 0);
}

button {
  display: block;
  margin: 0 auto;
  width: 260px;
  height: 36px;
  border-radius: 30px;
  color: #fff;
  font-size: 15px;
  cursor: pointer;
}

.img {
  overflow: hidden;
  z-index: 2;
  position: absolute;
  left: 0;
  top: 0;
  width: 260px;
  height: 100%;
  padding-top: 360px;
}

.img:before {
  content: '';
  position: absolute;
  right: 0;
  top: 0;
  width: 900px;
  height: 100%;
  background: url('../../assets/bg.jpg');
  background-size: cover;
  transition: -webkit-transform 0.6s ease-in-out;
}

.img:after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
}

.content.s--signup .img:before {
  transform: translate3d(640px, 0, 0);
}

.img__text {
  z-index: 2;
  position: absolute;
  left: 0;
  top: 50px;
  width: 100%;
  padding: 0 20px;
  text-align: center;
  color: #fff;
  transition: -webkit-transform 0.6s ease-in-out;
}

.img__text h2 {
  margin-bottom: 10px;
  font-weight: normal;
}

.img__text p {
  font-size: 14px;
  line-height: 1.5;
}

.content.s--signup .img__text.m--up {
  transform: translateX(520px);
}

.img__text.m--in {
  transform: translateX(-520px);
}

.content.s--signup .img__text.m--in {
  transform: translateX(0);
}

.img__btn {
  overflow: hidden;
  z-index: 2;
  position: relative;
  width: 100px;
  height: 36px;
  margin: 0 auto;
  background: transparent;
  color: #fff;
  text-transform: uppercase;
  font-size: 15px;
  cursor: pointer;
}

.img__btn:after {
  content: '';
  z-index: 2;
  position: absolute;
  left: 0;
  top: 0;
  width: 98%;
  height: 94%;
  border: 2px solid #fff;
  border-radius: 30px;
}

.img__btn span {
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  transition: -webkit-transform 0.6s;
}

.img__btn span.m--in {
  transform: translateY(-72px);
}

.content.s--signup .img__btn span.m--in {
  transform: translateY(0);
}

.content.s--signup .img__btn span.m--up {
  transform: translateY(72px);
}

h2 {
  width: 100%;
  font-size: 26px;
  text-align: center;
}

label {
  display: block;
  width: 260px;
  margin: 25px auto 0;
  text-align: center;
}

label span {
  font-size: 12px;
  color: #909399;
  text-transform: uppercase;
}

input {
  display: block;
  width: 100%;
  margin-top: 5px;
  padding-bottom: 5px;
  font-size: 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  text-align: center;
}

.forgot-pass {
  margin-top: 15px;
  text-align: center;
  font-size: 12px;
  color: #cfcfcf;
}

.forgot-pass a {
  color: #cfcfcf;
}

.submit {
  margin-top: 40px;
  margin-bottom: 20px;
  background: #d4af7a;
  text-transform: uppercase;
}

.fb-btn {
  border: 2px solid #d3dae9;
  color: #8fa1c7;
}

.fb-btn span {
  font-weight: bold;
  color: #455a81;
}

.sign-in {
  transition-timing-function: ease-out;
}

.content.s--signup .sign-in {
  transition-timing-function: ease-in-out;
  transition-duration: 0.6s;
  transform: translate3d(640px, 0, 0);
}

.sign-up {
  transform: translate3d(-900px, 0, 0);
}

.content.s--signup .sign-up {
  transform: translate3d(0, 0, 0);
}
</style>
