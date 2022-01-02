var content = document.getElementById('links');
let template;
var find = document.getElementById('search').value;

function getMatch() {
    find = document.getElementById('search').value;
    // console.log(find)
    if (find == '') {
        check();
    } else {
        getData(find);
    }
}

check();

function check() {
    if (find == '') {
        fetch("db.json").then(res => {
            if (res.status === 200) {
                res.json().then(data => {
                    const yourData = data;
                    // console.log(yourData);
                    const values = yourData.data;
                    // console.log(values);
                    values.forEach(i => {
                        // console.log(i);
                        template = `
                                <div class="fixed-content card " data-aos="fade-up">
                                <h2>${i.Full_Name}</h2>
                                <h4>${i.Course}</h4>
                                <h4>${i.Roll_No}</h4>
                                <p>${i.Session}</p>
                                <a href="mailto:${i.Email}">${i.Email}</a>
                                <p>${i.Phone_number}</p>
                                <p>${i.Skills}</p>
                                </div>
                            `;
                        content.innerHTML += template;
                    });

                }).catch(err => console.log(err))
            }
            else {
                console.log("something went wrong!");
            }
        });
    } else {
        content.innerHTML = '';
    }
}


function getData(val) {
    // console.log(val);
    content.innerHTML = '';

    fetch("db.json").then(res => {
        if (res.status === 200) {
            // SUCCESS
            res.json().then(data => {
                const yourData = data;
                // console.log(yourData);
                const values = yourData.data;

                sortData(values, val);

                // if (sorted.length == 0) {
                //     // console.log(values);
                //     values.forEach(i => {
                //         // console.log(i);
                //         console.log(i.Full_Name);
                //         console.log(i.Course);
                //         console.log(i.Roll_No);
                //         console.log(i.Session);
                //         console.log(i.Email);
                //         console.log(i.Phone_number);
                //         console.log(i.Skills);
                //         template = `
                //             <h1>${i.Full_Name}</h1>
                //             <h4>${i.Course}</h4>
                //             <h4>${i.Roll_No}</h4>
                //             <h4>${i.Session}</h4>
                //             <h4>${i.Email}</h4>
                //             <h4>${i.Phone_number}</h4>
                //             <h4>${i.Skills}</h4>
                //         `;
                //         content.innerHTML += template;
                //     });
                // }

            }).catch(err => console.log(err))
        }
        else {
            console.log("something went wrong!");
        }
    })

}


function sortData(values, val) {
    const sorted = values.filter(value => value.Roll_No == val);
    // console.log(sorted);
    // console.log(sorted.length);


    sorted.forEach(i => {
        // console.log(element);
        // console.log(element.Full_Name);
        // console.log(element.Course);

        template = `
            <div class="fixed-content card " data-aos="fade-up">
            <h2>${i.Full_Name}</h2>
            <h4>${i.Course}</h4>
            <h4>${i.Roll_No}</h4>
            <p>${i.Session}</p>
            <p>${i.Email}</p>
            <p>${i.Phone_number}</p>
            <p>${i.Skills}</p>
            </div>
        `;

        content.innerHTML += template;


    });
}