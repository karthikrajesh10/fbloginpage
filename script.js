$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            fname:{
                required:true,
                minlength:4,
                maxlength:20
            },
            sname:{
                required:true,
                minlength:4
            },
            emailaddress:{
                
                required:true,
                email:true 
                
            },
            password:{
                required:true,
                alphanumeric:true,
                minlength:8,
                


            },
            password_confirm:{

                required:true,
                minlength:8,
                equalTo: '[name="password"]'


            },
            day:{
                required:true,

            },
            month:{
                required:true
            },
            year:{
                required:true
            },
            gender:{
                required:true
            }


        },
        messages:{
            fname:"Enter your first name",
            sname:{
                required:"Enter your surname",
                minlength:"Minimum Number of Characters is 8"

            },
            emailaddress:"Please Enter A Valid Email Address",
            alphanumeric:"Please use both numbers and alphabets",
            
            
            password_confirm:{
                equalTo:"Password Mismatch"
            }

        }
        
    })
}
    )