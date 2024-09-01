document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    const resultsDiv = document.getElementById('results');
    console.log('Script loaded');
  
    searchInput.addEventListener('input', async () => {
        const query = searchInput.value;
        console.log('Search query:', query);
  
        if (query.length > 3) {
            try {
                const response = await fetch(`/search?q=${encodeURIComponent(query)}`);
                const data = await response.json();
  
                // Clear previous results
                resultsDiv.innerHTML = '';
  
                if (data.length === 0) {
                    // Display message if no results found
                    resultsDiv.innerHTML = '<p class="paragraph ">Items not found</p>';
                    [].forEach.call(document.querySelectorAll('.hidden'), function (el) {
                        el.style.visibility = 'hidden';
                      });    
                } 
                else {
                    // Create a container for the new results
                    const imageContainer = document.createElement('div');
                    imageContainer.id = 'image'; // Apply the ID for styling
                    
                    // Display new results
                    data.forEach(item => {
                   
                        
                        const clothsDiv = document.createElement('div');
                        clothsDiv.classList.add('cloths'); // Apply the class for styling
  
                        clothsDiv.innerHTML = `
                            <img src="${item.image_url}" alt="${item.category_name}" />
                            <p>${item.category_name}</p> <!-- Display category name -->
                        `;
  
                        imageContainer.appendChild(clothsDiv);
                    });
                    [].forEach.call(document.querySelectorAll('.hidden'), function (el) {
                        el.style.visibility = 'hidden';
                      });
                    // Append the container to resultsDiv
                    resultsDiv.appendChild(imageContainer);
                }
            } catch (error) {
                console.error('Error fetching search results:', error);
            }
        } else {
            // Clear results if query length is 3 or less
            resultsDiv.innerHTML = '';
            [].forEach.call(document.querySelectorAll('.hidden'), function (el) {
                el.style.visibility = 'visible';
              });
        }
    });
});
