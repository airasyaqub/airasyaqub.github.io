$(document).ready(function () {
	/* body... */
     
    var regex=/[\.+\-*\/%]/;
    var regex1=/^-?\d+\.?(\d+)?$/;
    var flag=0;
    var str;
    var str1;
    var res1;

    $('button').click(function(){

             switch ($(this).attr('id')) {

             	case '0':
             		str=$('input').val();
             		if(flag==1&&regex1.test(str)){
                           flag=0;
                           $('input').val('');
                           $('input').val($('input').val()+'0');
                           break;
                       }
             	$('input').val($('input').val()+'0');
             		break;


                case '1':
             		str=$('input').val();
             		if(flag==1&&regex1.test(str)){ 
                           flag=0;
                            $('input').val('');
                           $('input').val($('input').val()+'1');
                           break;
                       }
             		$('input').val($('input').val()+'1');
             		break;


             	case '2':
             		str=$('input').val();
             		if(flag==1&&regex1.test(str)){
                           flag=0;
                            $('input').val('');
                           $('input').val($('input').val()+'2');
                           break;
                       }
             		$('input').val($('input').val()+'2');
             		break;


             	case '3':
             		str=$('input').val();
             		if(flag==1&&regex1.test(str)){
                           flag=0;
                            $('input').val('');
                           $('input').val($('input').val()+'3');
                           break;
                       }
             		$('input').val($('input').val()+'3');
             		break;


             	case '4':
             			str=$('input').val();
             		if(flag==1&&regex1.test(str)){
                           flag=0;
                            $('input').val('');
                           $('input').val($('input').val()+'4');
                           break;
                       }
             		$('input').val($('input').val()+'4');
             		break;


             	case '5':
             			str=$('input').val();
             		if(flag==1&&regex1.test(str)){
                           flag=0;
                            $('input').val('');
                           $('input').val($('input').val()+'5');
                           break;
                       }
             		$('input').val($('input').val()+'5');
             		break;


             	case '6':
             			str=$('input').val();
             		if(flag==1&&regex1.test(str)){
                           flag=0;
                            $('input').val('');
                           $('input').val($('input').val()+'6');
                           break;
                       }
             		$('input').val($('input').val()+'6');
             		break;


             	case '7':
             			str=$('input').val();
             		if(flag==1&&regex1.test(str)){
                           flag=0;
                            $('input').val('');
                           $('input').val($('input').val()+'7');
                           break;
                       }
             		$('input').val($('input').val()+'7');
             		break;


             	case '8':
             			str=$('input').val();
             		if(flag==1&&regex1.test(str)){          
                          flag=0;
                            $('input').val('');
                           $('input').val($('input').val()+'8');
                           break;
                       }
             		$('input').val($('input').val()+'8');
             		break;


             	case '9':
             			str=$('input').val();
             		if(flag==1&&regex1.test(str)){
                           flag=0;
                            $('input').val('');
                           $('input').val($('input').val()+'9');
                           break;
                       }
             		$('input').val($('input').val()+'9');
             		break;


             	case 'AC':
             		flag=0;
             		$('input').val('');
             		break;


             	case 'X':
             		   str=$('input').val();
                     if(regex.test(str[str.length-1])){
                       res1=str.slice(0,str.length-1);
                       $('input').val(res1+'*');
                       break;
                     }
             		$('input').val($('input').val()+'*');
             		break;


             	case '/':
             		str=$('input').val();
             		if(regex.test(str[str.length-1])){
                       res1=str.slice(0,str.length-1);
                       $('input').val(res1+'/');
                       break;
                     }
             		$('input').val($('input').val()+'/');
             		break;


             	case '+':
             		str=$('input').val();
             		if(regex.test(str[str.length-1])){
                       res1=str.slice(0,str.length-1);
                       $('input').val(res1+'+');
                       break;
                     }
             		$('input').val($('input').val()+'+');
             		break;


             	case '-':
             		str=$('input').val();
             		if(regex.test(str[str.length-1])){
                       res1=str.slice(0,str.length-1);
                       $('input').val(res1+'-');
                       break;
                     }
             		$('input').val($('input').val()+'-');
             		break;


             	case '%':
             		str=$('input').val();
             		if(regex.test(str[str.length-1])){
                       res1=str.slice(0,str.length-1);
                       $('input').val(res1+'%');
                       break;
                     }
             		$('input').val($('input').val()+'%');
             		break;


             	case '.':
             		flag=0;
             		str=$('input').val();
             		if(regex.test(str[str.length-1])){
                       res1=str.slice(0,str.length-1);
                       $('input').val(res1+'.');
                       break;
                     }
             		$('input').val($('input').val()+'.');
             		break;


             	case 'CE':
             		flag=0;
             		var str=$('input').val();
             		var res=str.substr(0,str.length-1);
             		$('input').val(res);
             		break;


             	case '=':
             		flag=1;
             		str=$('input').val();
             		var result=eval(str);
             		$('input').val(result);
             		break;
             }
    });
});