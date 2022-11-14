fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json())
    .finally(res => {
        window.tab = `<tr>
        <th>NAME</th>
        <th>EMAIL</th>
        <th>PHONE</th>
        <th>WEBSITE</th>
        <th>COMPANY NAME</th>
         </tr>`
    })
    .then(data => {
        // console.log(data);
        window.tr = "";
        for (let i = 0; i < data.length; ++i) {

            window.tr += `<tr onclick="func(${i+1})" class="row">
            <td>${data[i].name}</td>
            <td>${data[i].email}</td> 
            <td>${data[i].phone}</td>
            <td>${data[i].website}</td>
            <td>${data[i].company.name}</td>
            `;
        }

        document.getElementById("table").innerHTML = (tab + tr);
    })

function func(tp) {
    // alert(`clicked on ${tp}`);

    window.open('userposts/userposts.html?postId=' + tp);
}