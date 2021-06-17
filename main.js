var Guestname = document.getElementById("guestname").value;
name_of_people.push(Guestname)

function submit() {
    var diaplay
}

function namesearch() {
    var s = document.getElementById("s1").value;
    var found = 0;
    for (j = 0; j < names_of_people.lenght; j++) {

        if (s == names_of_people[j]) {
            found = found + 1;
        }
    }
    document.getElementById("p2").innerHTML = "name found" + found + "time/s";
    console
        .log("found name" + found + "time/s");
}

function sorting() {
    names_of_people.sort();
}
names_of_people