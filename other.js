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