{
    // a method to fetch the data (nb works without async but ts likes async)
    // here the generic type <T> means if we ask for User we get an array of User
    const fetchFromAPI = async (category = 'users', id) => {
        let param = '';
        if (0 >= id && id < 10) {
            param += id; // += overcomes the string-number data type problem
        }
        const api = `https://jsonplaceholder.typicode.com/${category}/${param}`;
        try {
            const response = await fetch(api); // defaults to 'get'
            // const { data } = await response.json() // we know this API returns json
            return response.json(); // ... as a promise i.e. an Array of items
        }
        catch (error) {
            if (error) {
                return error.message; // we know this PAI will return a message string
            }
        }
    };
    // we need to filter the users to leave just username, email and website
    // here we construct a set of HTML list items
    const listOfUsers = (users) => {
        const names = users.map(user => `<li>${user.name} ${user.email} ${user.website}</li>`).join("\n");
        return `<ul>${names}</ul>`;
    };
    // use the code to get all users    
    fetchFromAPI().then((d) => {
        const output = document.getElementById("output");
        console.log(`promise returned ${d}`);
        // make sure we have an array type
        if (typeof (d) != 'string') {
            const names = d.map(user => user.name).join("\n");
            console.log(names);
            // output.innerHTML = names;
            output.innerHTML = listOfUsers(d); // this is pretty
        }
    });
    // use the code to fetch photos
    const myURL = "https://jsonplaceholder.typicode.com/photos";
    const images = document.getElementById("images");
    images.innerHTML = "<p>Loading...</p>";
    fetch(myURL)
        .then((response) => response.json())
        .then((photos) => images.innerHTML = getListOfPhotos(photos));
    const getListOfPhotos = (photos) => {
        console.log(photos);
        const titles = photos
            .map((photo) => `<li>${photo['title']}</li>`)
            .join("\n");
        return `<ul>${titles}</ul>`;
    };
}
