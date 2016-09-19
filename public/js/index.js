$(function(){

    $('.reg-sub').on('click',function(){
        $.ajax({
            type: 'post',
            url: '/api/user/register',
            data: {
                "username": $('.reg-name').val(),
                "password": $('.reg-pass').val(),
            },
            dataType: 'json',
            success: function(data){
                console.log(data);
            }
        });
    });
});