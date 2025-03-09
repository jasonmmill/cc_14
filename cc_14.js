// Task 1: Creating Base// Task 1: Creating Base Structure (all in html file)

// Task 2: Adding Support Tickets Dynamically
const ticketContainerG = document.getElementById("ticketContainer") // select employee container
const ticketContainerQ = document.querySelector("ticketContainer") // select employee container

function createTicketCard(name, issue, cssClass, ticketClass, id) { // function to create employee card
    const newCard = document.createElement("div") // create div tag
    newCard.setAttribute("class", cssClass) // set id
    newCard.setAttribute("id", id) // set id

    const ticketName = document.createElement("h3") // create h3 to house name
    ticketName.textContent = name

    const ticketIssue = document.createElement("p") // create paragraph to house position
    ticketIssue.textContent = issue

    const ticketLabel = document.createElement("label")
    ticketLabel.textContent = ticketClass

    const ticketBr = document.createElement("br")
    const ticketBr2 = document.createElement("br")

    const deleteBtn = document.createElement("button") // create delete button 
    deleteBtn.textContent = "Resolve Ticket" // text to show in button
    deleteBtn.setAttribute("class", "btn") // set css class
    
    newCard.appendChild(ticketName) // append to new card
    newCard.appendChild(ticketIssue) // append to new card
    newCard.appendChild(ticketLabel) // append to new card
    newCard.appendChild(ticketBr) // append to new card
    newCard.appendChild(ticketBr2) // append to new card  
    newCard.appendChild(deleteBtn) // append to new card

// Task 4: Implementing Ticket Resolution with Event Bubbling 
    newCard.addEventListener("click", () => { // event listener
        console.log(`Clicked ${newCard.id}`) // log message with new card id on click
    })

    deleteBtn.addEventListener("click", (event) => { // event listener
        newCard.remove() // remove card on click
        event.stopPropagation() // stops bubbling
    })
// End Task 4

// Task 5: Additional Challenge - Inline Editing of Support Tickets
const editBtn = document.createElement("button") // create edit button
editBtn.textContent = "Edit Ticket Details" // text to show in button
editBtn.setAttribute("class", "btn") // set css class
newCard.appendChild(editBtn) // append to new card

editBtn.addEventListener("click", (event) => { // event listener

    event.stopPropagation() // stops bubbling 
    let nameInput = document.createElement("input") // input
    nameInput.value = newCard.children[0].textContent // input value starts at current value

    let issueInput = document.createElement("input") // input
    issueInput.value = newCard.children[1].textContent // input value starts at current value

    let labelInput = document.createElement("input") // input
    labelInput.value = newCard.children[2].textContent // input value starts at current value

    let saveBtn = document.createElement("button") // create save button
    saveBtn.textContent = "Save" // text to show in button
    saveBtn.setAttribute("class", "btn") // set css class

    newCard.innerHTML = "" // empty html
    newCard.appendChild(nameInput) // append to empty new card
    newCard.appendChild(issueInput) // append to empty new card
    newCard.appendChild(labelInput) // append to empty new card
    newCard.appendChild(saveBtn) // append to empty new card

    saveBtn.addEventListener("click", (event) => { // event listener
        event.stopPropagation() // stops bubbling
        newCard.innerHTML = `<h3>${nameInput.value}</h3><p>${issueInput.value}</p><label>${labelInput.value}</label><br><br>` // new html
        newCard.appendChild(editBtn) // append new input to new card
        newCard.appendChild(deleteBtn) // append new input to new card
    })});
// End Task 5

    ticketContainerG.appendChild(newCard) // append new card to ticket container
}

createTicketCard("Jason Miller", "Billing Issue", "high-priority-ticket-card", "High Priority", "ticket1") // creation of ticket1
createTicketCard("Galo Rebelo", "Return Policy", "medium-priority-ticket-card", "Medium Priority", "ticket2") // creation of ticket2
createTicketCard("Eric Torres", "Product Damage", "low-priority-ticket-card", "Low Priority", "ticket3") // creation of ticket3

// Task 3: Converting NodeLists to Arrays for Bulk Updates
const allHighPriorityTickets = document.querySelectorAll(".high-priority-ticket-card") // find all high priority ticket cards
allHighPriorityTicketsArray = Array.from(allHighPriorityTickets) // create array of all high priority cards

allHighPriorityTicketsArray.forEach(card => { // for each card in the array
    card.style.backgroundColor = "powderblue" // background color set to powderblue
})