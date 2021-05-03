$(function() {

    var form = layui.form;
    var layer = layui.layer;
    form.verify({
        pass: [
            /^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'
        ],
        nwe: function(vaule) {
            if (vaule == $('.pwd').val()) {

                return "与原密码不能相同"
            }



        },
        repwd: function(vaule) {
            if (vaule !== $('.pwd1').val()) {

                return "和上边不一致"
            }


        }




    })

    $('.btn_tijiao').on('submit', function(e) {
        e.preventDefault()
        $.ajax({
            method: 'post',
            url: "/my/updatepwd",
            data: $(this).serialize(),
            success: function(res) {
                if (res.status !== 0) {
                    return layer.msg('修改失败');
                } else {
                    layer.msg('修改成功');
                    $('.layui-form')[0].reset();

                }
            }



        })




    })





})