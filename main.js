// variables
const btnLoad = document.querySelector('#load');
const Loading = document.querySelector('#loading'); 
const tbody = document.querySelector('#tbody');

// addEventListener
btnLoad.addEventListener('click', load );

// funciones
function load() {
    let inst = new XMLHttpRequest();
    inst.open('GET', 'https://api.npoint.io/29942967606e82d09a4d');
    inst.send();
    Loading.classList.remove('d-none');
    inst.onreadystatechange = function(){
        if (inst.readyState == 4 && inst.status == 200) {
            setTimeout(() => {
                Loading.classList.add('d-none');
            }, 3000);
        }
    }


    inst.onload = function(){
        setTimeout(() => {
            let data = JSON.parse(inst.responseText);
            let c = 1
            data.forEach(element => {
                let row = document.createElement('tr');
                row.innerHTML = `
                <th>${c}</th>
                <th>${element.name}</th>
                <th>${element.age}</th>
                <th>${element.pais}</th>
                <th>${element.email}</</th>
                `;
                c = c + 1;
                tbody.appendChild(row);
                btnLoad.classList.add('d-none');
            });
        }, 3500);
    }
}