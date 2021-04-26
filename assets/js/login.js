$(function() {

    getinfo()

})

function getinfo() {

    $.ajax({
        method: "GET",
        url: "http://api-breakingnews-web.itheima.net/my/userinfo",
        Header: {
            Authorization: 'BearereyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInBhc3N3b3JkIjoiIiwibmlja25hbWUiOiLms6Xlt7Tlt7QiLCJlbWFpbCI6Im5pYmFiYUBpdGNhc3QuY24iLCJ1c2VyX3BpYyI6IiIsImlhdCI6MTU3ODAzNjY4MiwiZXhwIjoxNTc4MDcyNjgyfQ.Mwq7GqCxJPK-EA8LNrtMG04llKdZ33S9KBL3XeuBxuI'
        },
        success: function(res) {
            console.log(res);

        }


    })

}