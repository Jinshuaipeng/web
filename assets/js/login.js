$(function() {
    console.log(window);

    var layer = layui.layer
    getUserInfo()
    $('#btnout').on('click', function() {
        layer.confirm('确认退出?', { icon: 3, title: '提示' }, function(index) {
            localStorage.removeItem('token')
            location.href = "login.html"
            layer.close(index);
        });

    })














})


function getUserInfo() {
    $.ajax({
        type: "get",
        url: '/my/userinfo',
        success: function(res) {
            if (res.status !== 0) {
                layer.msg('失败');
            } else {
                layer.msg('成功');
                avatar(res.data)
            }

        },

    })

}

function avatar(user) {
    var name = user.nickname || user.username
    $('.avater').html("欢" + name)
    if (user.user_pic !== null) {
        $('.layui-nav-img').attr('src', user.user_pic).show()
        $('.text_active').hide()

    } else {
        $('.text_active').show()
        $('.layui-nav-img').hide()
        var frist = name[0].toUpperCase()
        $('.text_active').html(frist)

    }

}