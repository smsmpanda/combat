import { Mock } from "./mock";

var mock = new Mock();

function getByUserID(id: number) {
    return mock.GetUserById(id);
}

function getUserList() {
    return mock.GetUserList();
}

function renderView() {
    var tab = document.getElementById('kftable');
    mock.GetUserList().forEach(user => {
        let tr = document.createElement('tr');
        let tdForUserId = document.createElement('td');
        tdForUserId.innerText = user.ID.toString();
        let tdForUserName = document.createElement('td');
        tdForUserName.innerText = user.Name;
        let tdForUserSex = document.createElement('td');
        tdForUserSex.innerText = user.Sex;
        tr.appendChild(tdForUserId);
        tr.appendChild(tdForUserName);
        tr.appendChild(tdForUserSex);
        tab?.appendChild(tr);
    });
}

renderView()


const key = ['H', 'e', 'l', 'l', 'o']
const f = key.map(x => `${x}`);
console.log(f);
console.log('aad');