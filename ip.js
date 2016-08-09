$(document).ready(function() {
    numbersOnly();
    clearAll();
    $("#clear").click(function(){
        clearAll();
    });
    $("#first_0").focus();
    $(".ip_valid").prop('disabled', true);
    $('#show').click(function () {
        $('#divShowAll').empty();        
        $.each(ipArray, function (key, object) {
            var divInner = document.createElement('div');
            var lbl = '';
            $.each(object, function (key, value) {
                // console.log(value);
                divInner.style.marginTop = '4px';
                lbl = lbl + '.' + value;
            })
            divInner.innerHTML = '<label>' + lbl.substring(1) + '</label>';
            var divMain = document.getElementById('divShowAll');
            divMain.appendChild(divInner);
        })
    });
 });
var ipArray = [];

var inputid = 0, button=0,subid = 0;

var ip = {};

var numbersOnly = function(){
    $('.val').keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which <= 48 || e.which >= 57)) {   
            return false;
        }
        console.log($(".val").val());
    });
}

function moveCursor(){
    $('.val').keyup(function(e){
        if($(this).val().length==$(this).attr('maxlength')){
            $(this).next('input').focus()
        }else if(e.which==190){
            $(this).next('input').focus()
        }
    });
}

var validateIp = function(val, key){
  var pattern = /\b(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/;
  var first = val['first_'+key];
  var second = val['second_'+key];
  var third = val['third_'+key]; 
  var fourth = val['fourth_'+key];
  var resut = first+'.'+second+'.'+third+'.'+fourth;
  console.log(resut);
  if(pattern.test(resut)){
    $('#add_'+key).prop('disabled',false);
    //alert('sucess');
  }else{
    //alert('Error');
  }  
}

var prepareIp = function(self){
  
    var val = $(self).val();
    var key = $(self).attr('key');
    var id = $(self).attr('id');

    if(_.isUndefined(ip[key])){
        ip[key] = {};
        ip[key][id] = val;
    }else{
        ip[key][id] = val;
    } 
    validateIp(ip[key], key);
    moveCursor();
}

var addDiv = function(self){
    $(this).prop('disabled', true);
    var index = $(self).attr('key');
    ipArray[index] = ip[index];
    console.log(ipArray);
    inputid++;
    var txtbox= '<div id="text_'+inputid+'" class="space">\
    <span id="textbox">\
        <input type="text" class="val" id="first_'+inputid+'"  key = "'+inputid+'" size="1" maxlength="3" onkeyup = "prepareIp(this)" />.\
        <input type="text" class="val" id="second_'+inputid+'" key = "'+inputid+'" size="1" maxlength="3" onkeyup = "prepareIp(this)" />.\
        <input type="text" class="val" id="third_'+inputid+'" key = "'+inputid+'" size="1"  maxlength="3" onkeyup = "prepareIp(this)" />.\
        <input type="text" class="val" id="fourth_'+inputid+'" key = "'+inputid+'" size="1" maxlength="3" onkeyup = "prepareIp(this)" />\
    </span>\
    <span>\
        <input type="button" value="Del" id="sub_'+inputid+'" key = "'+inputid+'" class="ip_valid" onclick = "deleteDiv(this)">\
        <input type="button" value="Add" id="add_'+inputid+'" key = "'+inputid+'"class="ip_valid" onclick = "addDiv(this)">\
    </span>\
        </div>';  
    $('#container').append(txtbox);
    numbersOnly();
    moveCursor();
    $("#first_"+inputid).focus();
    $('#add_'+inputid).prop('disabled',true);
    $('#sub_'+inputid).prop('disabled',true);
    $('#sub_'+button).prop('disabled',false);
    $('#add_'+button).prop('disabled',true);
    button++;
    deleteDiv();
    deleteDivfirst();
}

var deleteDiv = function (){
    $('.divi').on('click',"#sub_"+button,function(){
        $(this).parents('.space').slideUp('medium',function(){
            $(this).parents('.space').remove();
        });
        console.log(this.id);
    });
        
}
var deleteDivfirst = function (){
    $('.divi').on('click',"#sub_0",function(){
        $(this).parents('.space').slideUp('medium',function(){
            $(this).parents('.space').remove();
        });
        console.log(this.id);
    });
        
}

var clearAll = function(){
    for (var i = ipArray.length-1; i >=0; --i) {
        ipArray.pop();
    }
    $('#divShowAll').text("");
}