const input_field = document.getElementById("input_field");
const options = document.getElementById("options");

const first_list = document.getElementById("first_list");

const second_list = document.getElementById("second_list");
function add() {
    if (input_field && input_field.value !== "" && options && options.value !== "Select an Option") {
        const inputValue = input_field.value;

        const contentDiv = document.createElement("div");
        contentDiv.classList.add("content");

        const paragraph = document.createElement("p");
        paragraph.textContent = inputValue;

        const buttonDiv = document.createElement("div");
        buttonDiv.classList.add("buttn");
        const check = document.createElement("i");
        const edit = document.createElement("i");
        const trash = document.createElement("i");

        check.classList.add("bi", `bi-clipboard-check-fill`);
        edit.classList.add("bi", `bi-pencil-square`);
        trash.classList.add("bi", `bi-trash3-fill`);

        buttonDiv.appendChild(check);
        buttonDiv.appendChild(edit);
        buttonDiv.appendChild(trash);

        trash.addEventListener("click", () => {
            contentDiv.remove();
        });

        check.addEventListener("click", () => {
            edit.remove();
            check.remove();
            contentDiv.style.background = "green";
            paragraph.style.color = "white";
            trash.style.color = "white";
        });

        edit.addEventListener("click", () => {
            paragraph.contentEditable = true;
            paragraph.focus();
        });

        contentDiv.appendChild(paragraph);
        contentDiv.appendChild(buttonDiv);

        if (options.value === "priority1") {
            first_list.appendChild(contentDiv);
        } else if (options.value === "priority2") {
            second_list.appendChild(contentDiv);
        }

        input_field.value = "";
        options.value = "Select an Option";

    } else {
        console.log("Either input field is empty or an option is not selected.");
    }
}
