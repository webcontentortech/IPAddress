$(document).ready(function () {
    validCheck();
    addDiv();
    subDiv();
    var ipCheck;
    var ip;
    var id=2;
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
        $('#button_pro').on('click','#add',function(){
            $(this).remove();
            var txtbox= '<div class="space" id="input_'+id+'"><input class="ip_address" placeholder="Enter IP Here" name="ip" type="text"><span><input type="button" value="Del" id="sub"  class="ip_valid"></span><span><input type="button" value="Add" id="add" class="ip_valid"></span></div>';
                $('#button_pro').append(txtbox); 
                id++;
                validCheck();  
        });
        $('#button_pro').on('click', '#sub', function(){
            var main=$(this).parent().prev().attr('id');
            var mainrm=$(this).parent().attr('id');
            $('#'+mainrm).slideUp('medium', function(){    
            });
            $('#input_'+id).remove();
        });
        console.log(button_pro);
    }
    
    function subDiv(){
        $('#button_pro').on('click', '#sub', function(){
            var main=$(this).parent().prev().attr('id');
            var mainrm=$(this).parent().attr('id');
            $('#'+mainrm).slideUp('medium', function(){
            });
            $('#input_'+id).remove();
        });
    }
});