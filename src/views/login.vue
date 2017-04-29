<style scoped lang="less">
    .login-box {
        width: 100%;
        height: 100%;
        background: url(../images/bg.jpg);
        background-size: 100%;
        padding-top: 200px;
    }
    .formbox {
        width: 400px;
        margin: 0 auto;
        padding: 30px 30px 10px 0;
        background: #fff;
        border: 3px solid #000;
    }
</style>
<template>
<div class="login-box">
        <div class="formbox">
            <Form :model="login" :rules="ruleValidate" ref="login" :label-position="left" :label-width="70">
                <Form-item label="用户名" prop="username">
                    <Input v-model="login.username" placeholder="请输入用户名"></Input>
                </Form-item>

                <Form-item label="密码" prop="password">
                    <Input v-model="login.password" placeholder="请输入密码"></Input>
                </Form-item>

                <Form-item>
                    <Button type="primary" @click="handleSubmit('login')">登录</Button>
                    <Button type="ghost" @click="handleReset('login')" style="margin-left: 8px;">重置</Button>
                </Form-item>
            </Form>
        </div>
</div>
</template>

<script>
    export default {
        data() {
            return {
                login: {
                    username: '',
                    password: ''
                },
                ruleValidate: {
                    username: [
                    { required: true, message: '姓名不能为空', trigger: 'blur' },
                    {type: 'string', min: 8, message: '不能少于8个字符', trigger: 'blur'},
                    {max: 20, message: '不能多于20个字符', trigger: 'blur'}
                    ],
                    password: [
                    {required: true, message: '密码不能为空', trigger: 'blur'},
                    {type: 'string', len: 8, message: '长度为8',trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('登录成功');
                    } else {
                        this.$Message.error('表单验证失败');
                    }
                });
            },
            handleReset: function(name) {
                this.$refs[name].resetFields();
            }
        }
    }
</script>