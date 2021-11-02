# Front-end Asynchronous Data (Monday)

Work together, within your team, on building out this code.

## Setup
Make sure you have one command prompt open and running `npm run server:root`. (Why?)

Make sure you have the back-end server running as well by executing `npm run server:json`. 

All work will be done in `rest-project/client`.

Don't forget to do your work on a branch!

## Part 1 - Browse

Update the Browse view to dynamically fetch data.  

### list.html
Use the CDN link detailed [here](https://axios-http.com/docs/intro) to include Axios via `list.html`. 

### list.js

Comment out line 1, where the `data` variable is imported.

Axios is globally available as `axios` in this JavaScript file.  

Questions to answer:
- What is the URL of the remote endpoint that you are going to access? 
- What data types do Axios methods return? 
- How do you access data fetched asynchronously?

Make an Axios request to the right endpoint, using the right HTTP method, to retrieve the list of students.

When Axios returns the list of students, pass that list to `generateRows()` so it can render said list of students.

Navigate to the Browse screen and see if it still works.

## Part 2 - Search

Update the search view to allow searching for a student by last name. Display values as a list similar to the last part.

### search.html

- Add a `script` tag to load Axios.  
- Add a `script` tag to load `search.js` as a module. 
- Add an ID to the table body so that you can target it in JavaScript.

### search.js

Add an event handler to the "Search" button.  
In the event handler:  
- Retrieve the value of the search name field
- Make an Axios request to the back-end URL
- Pass the search name value as a key-value pair to the above request. Axios docs for doing this are [here](https://axios-http.com/docs/req_config). (Keep in mind that you are searching on the `lastName` field in the data, with the value from the form field).
- Retrieve the results and render them to `#search-results`. You can largely repurpose code from `list.js` to do this. 
- Make the parent `table` for `#search-results` visible again. There are a number of ways you can tweak the `hidden` property. Experiment!

### Challenges
1. If you have time, modify the parameter search to do a [partial](https://github.com/typicode/json-server#operators), instead of an exact match. 
1. Implement a toggle option between exact and partial matches. Would you use a checkbox? Radio button set? Drop-down? 
1. Should there be any client-side validation for this form? 

## Part 3 - Add

Update the Add view to allow adding a student. 

If your `data/students.json` file is corrupted or has bad data after this part, remember that you can revert all the changes out via git. 

### add.html

- Create a `div` with the id "message-box". You will output the success or failure of adding a student here. The div should be hidden at first.   
- Add a `script` tag to load Axios.  
- Add a `script` tag to load `search.js` as a module. 

Note that both the form and its submit button have ID properties. 

### add.js

You will be working with the [FormData object](https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData). So you might want to brush up on it. 

- Get references to the elements with the following elements:
  - The form
  - The submit button for the form
  - The message box
- Add an event listener that triggers when the form is submitted. It should do the following:
  - Stop the form from submitting
  - Disable the submit button (prevent double-submits)
  - Gather the form data
  - Send the form data to the endpoint
  - Process the response

Those last two items are oversimplified. 

#### Send the form data to the endpoint

Questions:
- What MIME format is FormData always in?
- What MIME format does json-server, our endpoint, expect to receive?
- Can we [convert](https://stackoverflow.com/a/55874235) FormData to a different MIME type? 

When making the Axios request, make sure you use the right HTTP verb, send the form data under the right property, and include headers telling the endpoint what format the data is in. 

#### Process the response

What do we get back from the endpoint?  
When we get something back, generate output to `#message-box`. The output should include a link pointing to the newly-created student. The link can point to the endpoint for the new student, no need to create an HTML page. 
Don't forget to un-hide the message box

### Challenges

1. Under what circumstances should we re-enable the submit button?  
1. In the `style` block, there's an animation. Use the [Element.classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) API to add the `message-update` class to the message box when a response comes back. Don't forget to remove it if you implemented the challenge above.
1. What happens if something goes wrong? What changes should happen to the UI? 
1. Should there be any client-side validation for this form? 

## Part 4 - Edit

Update the Edit view to allow editing a student. 

### edit.html

Add a hidden field to the form. It should have a name of "id". No value.

### edit.js

Look over the code in edit.js. As it stands, most of it is from add.js, 
with the names changed as appropriate. Also, there's a reference to the
select list of students, `selectStudentDropDown`. 

### udpateStudentDropDown()

Add an `axios` call which
- Gets all the students
- Converts them into `option` elements
- Updates the list of options for the select list
- But preserves the hardcoded "Select a student to edit" option
- Unhides the list when finished

#### Select list

Set up an event listener for `change` events on the select list. In the event listener: 
- Retrieve the selected student by their ID
- Populate the form fields with the values from the student (e.g. `student.firstName` gets populated into the `firstName` form field). There are several ways to do this.

#### Submit event

In the `axios` call in the event listener for `submit` events
- Add the correct method
- Assign the correct URL
- Pass the data from the form 

Also note that there is a call to `updateStudentDropDown()` just after the call to `form.reset()`. 

### Challenges

1. We are using the PATCH HTTP command. How would we submit *only changed fields* in the `submit` event handler? 
1. Should there be any client-side validation for this form? 
