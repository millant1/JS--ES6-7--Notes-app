const notes = getSavedNotes()

const filters = {
    searchText: ''
}

renderedNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (e){
    notes.push({
        title: '',
        body: ''
    })
    saveNotes(notes)
    renderedNotes(notes, filters)
})

document.querySelector('#search-text').addEventListener('input', function (e){
    filters.searchText = e.target.value
    renderedNotes(notes, filters)

   })

document.querySelector('#filter-by').addEventListener('change', function (e){
    console.log(e.target.value)
})