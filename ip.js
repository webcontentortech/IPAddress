$(document).ready(function () {
    validCheck();
    addDiv();
    var ipCheck;
    var ip;
    var pattern=/\b(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/;
    $('.ip_address').mask('0ZZ.0ZZ.0ZZ.0ZZ', {
        translation: {
            'Z': {
            pattern: /[0-9]/, optional: true
            }
        }
    });
    function validCheck(){
            $('.ip_address').keypress(function (e) {
            }).keyup(function () {
                ipCheck = $(this);
                if (!pattern.test(ipCheck.val())) {
                    $(".ip_valid").prop('disabled', true);
                } else {
                    
                    ip = ipCheck.val().split('.');
                    if (ip.length == 4) {
                    $(".ip_valid").prop('disabled', false);
                    }
                }
            });
    }

    function addDiv(){
        $('#add').click(function(){
            $('#put').append('<input class="ip_address" placeholder="Enter IP Here" name="ip" type="text"/><span><input type="button" value="Del" id="delete" class="ip_valid"></span><span><input type="button" value="Add" id="add" class="ip_valid"></span>');   
        });

    }
});