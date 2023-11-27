function addData()
    {
        var fname = document.getElementById("firstname").value;
        var lname = document.getElementById("lastname").value;
        var uemail = document.getElementById("email").value;
        var upass = document.getElementById("password").value;   
        let object = { "firstname":fname, "lastname":lname, "useremail":uemail, "userpwd":upass };
        localStorage.setItem(uemail, JSON.stringify(object));
        alert("Sign In Successful! ");    
    }
function checkData()
    {
        var givenpass = document.getElementById("password").value;
        var givenemail = document.getElementById("email").value;
        var obj = localStorage.getItem(givenemail);
        if (obj == undefined) 
            {
                alert("Invalid Details! Try again or Sign In to create a new account.");
            }
            else{
                var existpass = JSON.parse(obj).userpwd;
                if(existpass == givenpass) {
                    var fullname = JSON.parse(obj).firstname + " " + JSON.parse(obj).lastname;
                    alert("Hurray! You have Log In Successfully!\nWelcome! " + fullname );
                }    
                else {
                    alert("Password is Incorrect");
                    window.location.href = "login.html";
                }
                }
       
    }