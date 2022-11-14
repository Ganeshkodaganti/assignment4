// import ele from "index.js";
let params = new URLSearchParams(document.location.search);
ele = params.get("postId");

fetch(`https://jsonplaceholder.typicode.com/posts?userId=${ele}`).then(res => res.json())
    .then((data) => {
        // console.log(data)
        for (i = 1; i <= data.length; i++) {
            //creating a div element for card
            let divv = document.createElement('div');
            divv.setAttribute('id', `card${i}`);

            divv.innerHTML += (`<div class = 'fa fa-remove fa-2x' onclick = "(function(){
             if(confirm('are you sure want to delete?😢')) {
                document.getElementById('card${i}').remove();
            } else {
                alert('you cancelled the delete operation !😃👍');
            }
             })()"> </div>`);


            // divv.innerHTML += (`<div class = 'fa fa-remove fa-2x' onclick="document.getElementById('card${i}').remove()"> </div>`);
            divv.innerHTML += (`<input class="check" id="check${i}" type = 'checkbox'> </input>`);
            divv.innerHTML += (`<div class="fa fa-save fa-2x" onclick="document.getElementById('card${i}').contentEditable=false"></div>`);
            divv.innerHTML += (`<div class='fa fa-edit fa-2x' onclick="document.getElementById('card${i}').contentEditable=true"></div>`);
            divv.innerHTML += (`<br><br><b>TITLE ${(i)} : </b>${data[i-1].title}<br>`)
            divv.innerHTML += (`<b>BODY :</b> ${data[i-1].body}`)
            fetch(`https://jsonplaceholder.typicode.com/comments?postId=${i}`).then(res1 => res1.json())
                .then((data1) => {

                    for (j = 0; j < 3; j++) {
                        // divv1 = document.createElement('div');
                        // divv1.addAttribute('id', `comment${i}${j}`)
                        divv.innerHTML += (`<h2>COMMENT ${j+1}</h2>`)
                        divv.innerHTML += (`<b>NAME :</b>  ${data1[j].name}<br>`)
                        divv.innerHTML += (`<b>EMAIL : </b> ${data1[j].email}<br>`)
                        divv.innerHTML += (`<b>BODY : </b> ${data1[j].body}`)
                            // divv.appendChild(divv1);
                    }

                })
            document.body.append(divv);
        }
    })