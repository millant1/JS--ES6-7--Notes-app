const notes = getSavedNotes()

const filters = {
    searchText: ''
}

renderedNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (e){
    const id = uuidv4()
    notes.push({
        id: id,
        title: '',
        body: ''
    })
    saveNotes(notes)
    
    // send user to edit page after they click create note
    location.assign(`/edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input', function (e){
    filters.searchText = e.target.value
    renderedNotes(notes, filters)

   })

document.querySelector('#filter-by').addEventListener('change', function (e){
    console.log(e.target.value)
})