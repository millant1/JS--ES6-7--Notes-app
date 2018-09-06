// Read existing notes from local storage
const getSavedNotes = function (){
   
    const notesJSON = localStorage.getItem('notes')
    if (notesJSON !== null){
    return JSON.parse(notesJSON)
    } else {
        return []
        }

}

// Generate the DOM structure for a note
const generateNoteDOM = function (note){
    const notesEl = document.createElement('p')

    if (note.title.length > 0){
        notesEl.textContent = note.title
     } else {
         notesEl.textContent = 'Unamed note'
     }
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

