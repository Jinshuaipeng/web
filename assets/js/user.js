$(function() {
    var form = layui.form;
    var layer = layui.layer;

    $('.from2').on('submit', function(e) {
        e.preventDefault()
        $.ajax({
            method: 'post',
            url: '/my/userinfo',
            data: $(this).serialize(),

            success: function() {
                window.parent.getUserInfo()
                    // console.log(window.parent);
                window.parent.getUserInfo()



            }

        })
    })

    $('.btnReset').on('click', function(e) {
        e.preventDefault()
        user()
    })

    form.verify({
        nikename: function(vaule) {
            if (vaule.lenght > 6) {
                return layer.msg('出错');
            }


        }

    })


    user()

    function user() {
        $.ajax({
            method: 'GET',
            url: '/my/userinfo',
            success: function(res) {
                console.log(res);
                if (res.status !== 0) {
                    return layer.msg('失败');

                } else {

                    form.val('formuser', res.data)


                }

            }
        })
    }

})