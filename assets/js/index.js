$(function() {

    $('.loginbox_rep').on('click', function() {
        $('.login').hide();
        $('.rep').show();
    })

    $('.loginbox_login').on('click', function() {
        $('.login').show();
        $('.rep').hide();
    })
    var form = layui.form

    var layer = layui.layer
    form.verify({
        pass: [
            /^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'
        ],
        repwd: function(vaule) {
            var pwd = $('.rep1').val();
            if (vaule !== pwd) {
                return '密码不一致';
            }
        }
    })

    $('.rep').submit(function(e) {
        e.preventDefault()
        $.ajax({
            type: 'post',
            url: 'http://api-breakingnews-web.itheima.net/api/reguser',
            data: {
                username: $('.rep2').val(),
                password: $('.rep1').val(),

            },
            success: function(res) {
                if (res.status !== 0) {
                    return layer.msg('失败');
                } else {
                    layer.msg('登陆成功');
                    console.log(res);
                    $('.loginbox_login').click();


                }


            }



        })

    })

    $('.login').on('submit', function(e) {
        e.preventDefault()
        $.ajax({
            method: "post",
            url: "http://api-breakingnews-web.itheima.net/api/login",
            data: {
                username: $('.login1').val(),
                password: $('.login2').val(),
            },
            success: function(res) {
                console.log(res);
                if (res.status !== 0) {
                    layer.msg('登陆失败');
                    location.href = "index.html"


                } else {
                    layer.msg('成功');

                }


            }
        })

    })












})