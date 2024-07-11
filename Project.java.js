// document.addEventListener('DOMContentLoaded', function() {
//     const searchToggleBtn = document.getElementById('searchToggleBtn');
//     const searchBar = document.getElementById('searchBar');
//     const searchInput = document.getElementById('searchInput');
//     const searchSubmitBtn = document.getElementById('searchSubmitBtn');


//     searchToggleBtn.addEventListener('click', function(e) {
//         e.stopPropagation(); 
//         searchBar.classList.toggle('active');
//         if (searchBar.classList.contains('active')) {
//             searchInput.focus(); 
//         } else {
//             performSearch(); 
//         }
//     });


//     searchInput.addEventListener('keydown', function(event) {
//         if (event.key === 'Enter') {
//             event.preventDefault(); 
//             performSearch();
//         }
//     });

  
//     searchSubmitBtn.addEventListener('click', function() {
//         performSearch();
//     });


//     function performSearch() {
//         const searchTerm = searchInput.value.trim();
//         if (searchTerm !== '') {
      
//             console.log('Performing search for:', searchTerm);
   
//             searchInput.value = '';
//         } else {
         
//             console.log('Empty search term entered');
//         }
//     }

//     document.addEventListener('click', function(e) {
//         if (!searchBar.contains(e.target) && e.target !== searchToggleBtn) {
//             searchBar.classList.remove('active');
//         }
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    const searchToggleBtn = document.getElementById('searchToggleBtn');
    const searchBar = document.getElementById('searchBar');
    const searchInput = document.getElementById('searchInput');
    const searchSubmitBtn = document.getElementById('searchSubmitBtn');

    searchToggleBtn.addEventListener('click', function(e) {
        e.stopPropagation(); 
        searchBar.classList.toggle('active');
        if (searchBar.classList.contains('active')) {
            searchInput.focus(); 
        } else {
            performSearch(); 
        }
    });

    searchInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); 
            performSearch();
        }
    });

    searchSubmitBtn.addEventListener('click', function() {
        performSearch();
    });

    function performSearch() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm !== '') {
            console.log('Performing search for:', searchTerm);
            searchInput.value = '';
        } else {
            console.log('Empty search term entered');
        }
    }

    document.addEventListener('click', function(e) {
        if (!searchBar.contains(e.target) && e.target !== searchToggleBtn) {
            searchBar.classList.remove('active');
        }
    });
});

