const userData = () => {
    fetch('https://randomuser.me/api/?gender=female')
        .then(res => res.json())
        .then(data => displayData(data))
}

const displayData = (data) => {
    // display name
    const displayName = document.getElementById('name');
    const nameValue1 = data.results[0].name.title;
    const nameValue2 = data.results[0].name.first;
    const nameValue3 = data.results[0].name.last;
    const nameTotal = nameValue1 + ' ' + nameValue2 + ' ' + nameValue3;
    displayName.innerText = nameTotal;

    // display gender
    const displayGender = document.getElementById('gender');
    const genderValue = data.results[0].gender;
    displayGender.innerText = genderValue;


}

userData();