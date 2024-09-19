## Optix Technical Test

Use `docker-compose up` to run both the frontend app and the backend server 

Visit `localhost:5001` to see the frontend app

------------------------------------------------------------------------------------------------------------------------------------

Our developer was part way through developing the following feature but left the company and you are tasked with picking up where they left off.

The aim is to complete the piece of work by refactoring and improving the current code to get it to a working state that passes all A/C. Use material UI components and a form library where desirable.

Please return as a link to a public GIT store of your choice. e.g. Github

***A/C***
Must have(s)
[x] Display total number of movies.
[x] Table must show movie title, average review score to 1 decimal place and company that produces the film.
    [x] Movie company data comes from movieCompanies GET request.
    [x] Movies data comes from movies GET request.
[x] User must be able to select table row to leave a review with form appearing when there is a selected movie.
    [x] POST request to submitReview endpoint and display message returned on response.
    [x] Form must restrict message to 100 characters and show an error message if over 100 and not allow for submission in this instance.
[x] Highlight selected movie row when clicked.
[x] Handle error and loading states.

Should have(s)
[x] Review column should be sortable.
[x] Submit review form should appear in a modal on mobile devices or small breakpoints.

Could have(s)
[x] Add a button (or other mechanism) to refresh movies and movie companies.
[x] Containerise application using docker.
