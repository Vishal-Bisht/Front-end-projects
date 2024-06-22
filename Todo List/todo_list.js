const TodoArray = [];

function addTodoList() {
    const input = {
        name: document.querySelector('.input').value,
        time: document.querySelector('.time').value,
        dueDate: document.querySelector('.date').value
    };
    TodoArray.push(input);
    document.querySelector('.input').value = '';
    document.querySelector('.time').value = '';

    TodoArray.forEach((listItem, index) => {
        const html = `<p>${listItem}</p>`
    });
}


function showList() {
    let newHTML = '';

    // Looping through array using forEach loop.
    TodoArray.forEach((Item, index) => {
        const { name, time, dueDate } = Item;
        const html =
            `
                <div>${name}</div> <div>${formatTime(time)}</div> <div>${dueDate}</div> <div><button class = "btn_dlt">Delete</button></div>
                `;
        newHTML += html;
    });
  
    document.querySelector('.listItems').innerHTML = newHTML;
    
    document.querySelectorAll('.btn_dlt')
        .forEach((dlt_btn, index) => {
            dlt_btn.addEventListener('click', () => {
                TodoArray.splice(index, 1);
                showList();
            });
        });
}

document.querySelector('.btn_add')
    .addEventListener('click', () => {
        if (document.querySelector('.input').value === '') {
            alert('Enter a task to add');
        }
        else if (document.querySelector('.time').value === '') {
            alert('Enter time to add');
        }
        else if (document.querySelector('.date').value === '') {
            alert('Enter date to add');
        }
        else {
            addTodoList();
            showList();
        }
    });


function formatTime(timeString) {
    let date = new Date(`2000-01-01T${timeString}`);

    let hours = date.getHours();
    let minutes = date.getMinutes();

    let period = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12;

    minutes = minutes < 10 ? '0' + minutes : minutes;

    return `${hours}:${minutes} ${period}`;
}
