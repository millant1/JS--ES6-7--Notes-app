// Read existing notes from local storage
const getSavedNotes = function (){
   
    const notesJSON = localStorage.getItem('notes')
    if (notesJSON !== null){
    return JSON.parse(notesJSON)
    } else {
        return []
        }

}
// remove a note function

const removeNote = function (id){
    const noteIndex = notes.findIndex(function (note){
        return note.id === id
    })
    if (noteIndex > -1){
        notes.splice(noteIndex, 1)
    } 
}

// Generate the DOM structure for a note
const generateNoteDOM = function (note){

    const notesEl = document.createElement('div')
    const textEl = document.createElement('a')
    const button = document.createElement('button')
    
// setup the remove note button
    button.textContent = 'x'
    notesEl.appendChild(button)
    button.addEventListener('click', function (e){
        removeNote(note.id)
        saveNotes(notes)
        renderedNotes(notes, filters)
        
    })
// setup the note title text
    if (note.title.length > 0){
        textEl.textContent = note.title
     } else {
        textEl.textContent = 'Unamed note'
     }
    
     notesEl.appendChild(textEl)
      // set note text to a URL that if clicked, brings user to the edit page 
      // also injects note edited id to url
      textEl.setAttribute('href', `/edit.html#${note.id}`)

     return notesEl
}

// Save the notes to Local Storage
const saveNotes =  function (notes) {
    localStorage.setItem('notes', JSON.stringify(notes))
}
// Render application notes

const renderedNotes = function (notes, filters){
    const filteredNotes = notes.filter(function (note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function (note){
        const notesEl = generateNoteDOM(note)
               
        document.querySelector('#notes').appendChild(notesEl)
    })
}

