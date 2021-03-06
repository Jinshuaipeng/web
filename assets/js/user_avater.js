$(function() {
    // 1.1 获取裁剪区域的 DOM 元素
    var $image = $('#image')
        // 1.2 配置选项
    const options = {
            // 纵横比
            aspectRatio: 1,
            // 指定预览区域
            preview: '.img-preview'
        }
        // 1.3 创建裁剪区域
    $image.cropper(options)
    $('#btn_sc').on('click', function() {
        $('#file').click()
    })

    var layer = layui.layer;

    $('#file').on('change', function(e) {

        var filest = e.target.files
        if (filest.length === 0) {
            return layer.msg('没有选择文件');


        } else {
            var file = filest[0]
            var newImgURL = URL.createObjectURL(file)
            $image
                .cropper('destroy') // 销毁旧的裁剪区域
                .attr('src', newImgURL) // 重新设置图片路径
                .cropper(options) // 重新初始化裁剪区域

        }
    })

    $('.layui-btn-danger').on('click', function() {
        var dataURL = $image
            .cropper('getCroppedCanvas', { // 创建一个 Canvas 画布
                width: 100,
                height: 100
            })
            .toDataURL('image/png')

        $.ajax({
            method: 'POST',
            url: '/my/update/avatar',
            data: {
                avatar: dataURL

            },
            success: function(res) {
                window.parent.getUserInfo()
                    // console.log(window.parent);

            }




        })




    })


})