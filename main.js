 fetch("data.json")
.then((response)=>{
return response.json();
}).then((data)=>{
    // console.log(data);
    display_info(data.basics);
})
var bodyElement=document.querySelector("#root");
function display_info(info){
    // card view
    let card=document.createElement("div");
    card.classList.add("card");
    // Heading
    let heading=document.createElement("h2");
    heading.textContent=info.name;
    
    bodyElement.append(card);
    card.append(heading);
    let line=document.createElement("hr");
    line.color="lightblue";
    card.append(line);
    // role
    let head=document.createElement("h2");
    head.textContent=info.role;
    card.append(head);
    let li=document.createElement("hr");
    li.color="lightblue";
    card.append(li);
    // email
    let he=document.createElement("a");
    he.href="mailto:"+info.email;
    he.textContent=info.email;
    // he.textContent=info.email;
    card.append(he);
    let lin=document.createElement("hr");
    lin.color="lightblue";
    card.append(lin);
    // mobile
    // without line we can use break tags as let br
    let h=document.createElement("a");
    h.href="tel:"+info.mobile;
    h.textContent=info.mobile;
    //h.textContent=info.mobile;
    card.append(h);
    let l=document.createElement("hr");
    l.color="lightblue";
    card.append(l);
//    kavali
    let view=document.createElement("h2");
    view.textContent="KAVALI";
    card.append(view);
    // button
    var button=document.createElement("a");
    button.textContent="View Profile";
    button.classList.add("btn");
    card.append(button);

}