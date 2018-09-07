// variables for elements on edit page
const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const buttonElement = document.querySelector('#remove-note')
// method to substring the ID from the URL
const noteId = location.hash.substring(1)
const notes = getSavedNotes()
// location of the note by id
const note = notes.find(function (note){
    return note.id === noteId
})
// return user to home page if url typed in has invaliud ID
if (note === undefined){
    location.assign('/index.html')
}

// set note title and body on reload of the page
titleElement.value = note.title
bodyElement.value = note.body

// input listner to update note title when user changes the title
titleElement.addEventListener('input', function (e){
    note.title = e.target.value
    saveNotes(notes)
})

// input listner to update note body when user changes the body
bodyElement.addEventListener('input', function (e){
    note.body = e.target.value
    saveNotes(notes)
})
// listner to remove the note and bring user back to home page when clicking remove note
buttonElement.addEventListener('click', function (e){
    removeNote(note.id)
    saveNotes(notes)
    location.assign('/index.html')
})

