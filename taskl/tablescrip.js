function add()
{
    var a=prompt("enter Name");
    var b=prompt("enter ID");
    const table=document.getElementById("table");
    const tr=document.getElementById("last")
    var g=document.createElement("tr");
    var f=document.createElement("td");
    var d=document.createElement("td");
    f.innerText=a;
    d.innerText=b;
    g.appendChild(f);
    g.appendChild(d);
    table.appendChild(g);
}
function del()
{
    const table=document.getElementById("table");
    var a=prompt("Which row you want to Delete & it should be valid number indicating row position");
    const tr=document.getElementsByTagName("tr");
    a=parseInt(a);
  tr[a].remove();
}
function upd()
{
    var n=prompt("enter which row you want to update");
    const table=document.getElementById("table");
    const tr=document.getElementsByTagName("tr");
    var a=prompt("enter Name");
    var b=prompt("enter ID");
 tr[n].innerText=" "; 
 var f=document.createElement("td");
    var d=document.createElement("td");
    f.innerText=a;
    d.innerText=b;
    tr[n].appendChild(f);
    tr[n].appendChild(d);
 }
function red()
{
    var n=prompt("Which row data you want Read Specifically");
    var s="Name : Id<br>"
    const tr=document.getElementsByTagName("tr");
    for(let j=0;j<2;j++){
   var k= document.getElementById("table").rows[n].cells.item(j).innerHTML;
   if(j==1)
   s+=":";
   s+=k;
    }
    s+="<br>";
document.getElementById("id").innerHTML="<br><br>Content from table of specified row: "+n;
document.getElementById("ty").innerHTML=s;

   //alert(tr.length);
}