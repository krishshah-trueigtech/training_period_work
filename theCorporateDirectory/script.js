let employee = [];

async function fetchEmployee(){
    try{
        const data = await fetch("https://jsonplaceholder.typicode.com/users");
        if(!data.ok ) throw new Error(`HTTP status: ${data.status}`);

        let employeeData = await data.json();
        employee= [...employeeData];
    }
    catch(error){
        console.error("Critical Fetch error: ", error);
        return [];
    }
}

function createEmployeeCard({ name, email, address }){
    const {city = "Unkown city"}  = address;

    const card = document.createElement("div");
    card.className = "max-w-md rounded overflow-hidden shadow-lg";
    card.innerHTML = `
    <div class="px-6 py-4">
    <div class="justify-center font-bold text-xl mb-2"> ${name}</div>
    <p class="text-gray-700 text-base"><b>Email: </b> ${email}</p>
    <p class="text-gray-700 text-base"><b>City: </b>${city}</p>
    </div>
    `
    ;
    return card
}

async function init(){
    try{
        const container = document.getElementById("employeeContainer");
        container.innerHTML = "<p class='text-gray-400 m-8'>Loading Records...</p>";

        await fetchEmployee();
        renderEmployees(employee);
    }catch (error) {
        document.getElementById("employeeContainer").innerHTML = `<p class="text-red-500">Could not load employees. Please try again.</p>`;
    }
}

function renderEmployees(emps){
    const container = document.getElementById("employeeContainer");

    if (!container) return;

    container.innerHTML = "";
    container.className = "m-3 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full ";
    const fragement = document.createDocumentFragment();
    emps.forEach((emp)=> fragement.append(createEmployeeCard(emp)));
    container.appendChild(fragement);
    
}

document.addEventListener("DOMContentLoaded",init);

document.getElementById("searchBox").addEventListener("keyup",(e)=>{
    let input = e.target.value.toLowerCase();

    const filtered = employee.filter(emp => emp.name.toLowerCase().includes(input)); 
    renderEmployees(filtered);
});