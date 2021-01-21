const page_alert = document.getElementById("alert");
const trafficCanvas = document.getElementById("traffic-chart");
const dailyCanvas = document.getElementById("daily-chart");
const mobileCanvas = document.getElementById("mobile-chart");
const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");
const userField = document.querySelector("#userField");
const messageField = document.querySelector("#messageField");
const notify = document.querySelector(".insert-notifications");
const bell = document.querySelector(".bell-icon");
const right = document.querySelector(".right");
const hourly = document.querySelector(".hourly");

let trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
    "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
    data: [750, 1000, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
    2500],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
    }]
    };

hourly.addEventListener('click', ()=>{
    console.log('adsf');
     trafficData = {
        labels: ["123adf", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
        "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
        data: [750, 1000, 20, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
        2500],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
        }]
        };
});

    let trafficOptions = {
        aspectRatio: 2.5,
        animation: {
        duration: 0
        },
        scales: {
        yAxes: [{
        ticks: {
        beginAtZero:true
        }
        }]
        },
        legend : {
        display: false
        }
        };
const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
    label: '# of Users',
    data: [2000, 550, 500],
    borderWidth: 0,
    backgroundColor: [
    '#7477BF',
    '#78CF82',
    '#51B6C8'
    ]
    }]
    };
    const mobileOptions = {
        legend: {
        position: 'right',
        labels: {
        boxWidth: 20,
        fontStyle: 'bold'
        }
        }
        }


const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
    label: '# of Hits',
    data: [75, 115, 175, 125, 225, 200, 100],
    backgroundColor: '#7477BF',
    borderWidth: 1
    }]
    };
    const dailyOptions = {
    scales: {
    yAxes: [{
    ticks: {
    beginAtZero:true
    }
    }]
    },
    legend : {
    display: false
    }
    }

    let dailyChart = new Chart(dailyCanvas, {
        type: 'bar',
        data: dailyData,
        options: dailyOptions
        });
        let mobileChart = new Chart(mobileCanvas, {
            type: 'doughnut',
            data: mobileData,
            options: mobileOptions
            });

            let trafficChart = new Chart(trafficCanvas, {
                type: 'line',
                data: trafficData,
                options: trafficOptions
                });


page_alert.innerHTML =
`
<div class="alert-banner">
<p class="alert" style="color:white"><strong>Alert:</strong> You have <strong>6</strong> overdue tasks
to complete</p>
<p class="close">x</p>
</div>`;

page_alert.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("close")) {
    page_alert.style.display = "none"
}});











send.addEventListener('click', (e)=>{
    e.preventDefault();
    if(userField.value === '' && messageField.value !== ''){
        alert('Please fill in the user field');
    }else if (messageField.value === '' && userField.value !== ''){
        alert(`Please fill in the message field`);
    }else if (messageField.value === '' && userField.value === ''){
        alert(`Please fill in the message and user field`);
    }else{
        alert(`Message sent sucessfully to ${userField.value}`);
    }
});


bell.addEventListener('click' ,() => {
    notify.innerHTML =
    `
    <div class="notification">
    <div><p class="add-dot">You have 6 new messages<h2 class="closeX">X</h2></p></div>
    <div><p class="add-dot">You have 4 new comments<h2 class="closeX">X</h2></p></div>
    <div><p class="add-dot">You have 3 new followers<h2 class="closeX">X</h2></p></div>
    </div>`;
});


notify.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("closeX") || element.classList.contains("closeX1")) {
    const notification = element.parentNode.parentNode;
    element.parentNode.parentNode.removeChild(element.parentNode);
    inside = notification.innerHTML;
    }
});

bell.addEventListener('click', ()=>{
    console.log('sdf');
    dot = document.querySelector(".dot");
    dot.style.display = "none";
});





