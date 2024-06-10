var c=1;
function check()
{ 
    var a=document.getElementsByTagName("img");
    
    var rn=document.getElementById("usr").value;
   if(rn=="20a91a0578")
   {
    a[0].src="student.jpeg";
    document.getElementById("errmsg").style.color="green";
    document.getElementById("errmsg").innerHTML="<center><h3>Attendance Captured</h3></center>";
    document.getElementById("rno").innerHTML=rn;
    document.getElementById("name").innerHTML="Rajesh Eevana";
    document.getElementById("college").innerHTML="Aditya Engineering College";
    document.getElementById("bran").innerHTML="CSE";
    document.getElementById("pass").innerHTML="2024";
    document.getElementById("ate").innerHTML="78%";
    document.getElementById("mainsecsub1").style.boxShadow = "5px 5px 5px 5px green";
    var a=document.getElementsByClassName("td1");
    for(let i=0;i<a.length;i++)
    a[i].innerHTML="<b>Present</b>";
    setTimeout(rest,5000);
   }
   else
   {
    document.getElementById("errmsg").style.color="red";
    document.getElementById("errmsg").innerHTML="<center><h3> Try Again</h3></center>";
    document.getElementById("mainsecsub1").style.boxShadow = "5px 5px 5px 5px red";
    setTimeout(rest,2000);
   }
}
function clr()
{
    document.getElementById("errmsg").innerHTML=" ";
    document.getElementById("mainsecsub1").style.boxShadow="5px 5px 5px 5px rgb(54, 172, 183)";
    var a=document.getElementsByClassName("td1");
    for(let i=0;i<a.length;i++)
    a[i].innerHTML="<b>---</b>";
    
}
function rest()
{
    var a=document.getElementsByTagName("img");
    a[0].src="help.png";
    document.getElementById("usr").value="";
    document.getElementById("errmsg").innerHTML=" ";
    document.getElementById("rno").innerHTML=" ";
    document.getElementById("name").innerHTML=" ";
    document.getElementById("college").innerHTML=" ";
    document.getElementById("bran").innerHTML=" ";
    document.getElementById("pass").innerHTML=" ";
    document.getElementById("mainsecsub1").style.boxShadow="5px 5px 5px 5px rgb(54, 172, 183) ";
   
}