// Display the member list when the page loads
DisplayMemberList();

function DisplayMemberList() {
    let members = JSON.parse(localStorage.getItem("members")) || [];
    let memberList = document.getElementById("memberList");

    memberList.innerHTML = "";

    members.forEach(function(member, index) {
        let li = document.createElement("li");

        li.innerHTML = `
            <span>${member}</span>
            <button class="remove-btn" onclick="RemoveMember(${index})">
                Remove
            </button>
        `;

        memberList.appendChild(li);
    });
}

function AddMember() {
    let input = document.getElementById("memberName");
    let memberName = input.value.trim();

    if (memberName === "") {
        alert("Please enter a member name.");
        return;
    }

    let members = JSON.parse(localStorage.getItem("members")) || [];

    members.push(memberName);

    localStorage.setItem("members", JSON.stringify(members));

    input.value = "";

    // Display the updated list
    DisplayMemberList();
}

function RemoveMember(index) {
    let members = JSON.parse(localStorage.getItem("members")) || [];

    members.splice(index, 1);

    localStorage.setItem("members", JSON.stringify(members));

    // Display the updated list
    DisplayMemberList();
}
