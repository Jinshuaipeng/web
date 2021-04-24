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

    // $('.rep').submit(function(e) {
    //     e.preventDefault()
    //     $.ajax({
    //         type: 'post',
    //         url: 'http://ajax.frontend.itheima.net/api/reguser',
    //         data: {
    //             username: $('.rep2').val(),
    //             password: $('.rep1').val(),

    //         },
    //         success: function(res) {
    //             console.log(res);

    //         }



    //     })

    //     })

    $('.login').on('submit', function(e) {
        e.preventDefault()
        $.ajax({
            method: "POST",
            url: "http://ajax.frontend.itheima.net/api/login",
            data: $(this).serialize(),
            success: function(res) {
                console.log(res);

            }
        })

    })












})