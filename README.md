<h1>Description:</h1>
<p>User Reviews of Food Restaurants that are listed in the Eat N Go facebook group page</p>
<hr>
<h1>TODO:</h1>
<ol>
    <li>Configure mongodb connection <input type="checkbox" checked></input></li>
    <li>Create models
        <ul>
            <li>Review <input type="checkbox" checked></input></li>
            <li>Shop <input type="checkbox" checked></input></li>
            <li>User <input type="checkbox" checked></input></li>
        </ul>
    </li>
    <li>Create Nodejs tests for http requests (maybe) I'm unsure how to create node js tests</li>
    <li>Create Model Authentications
        <ul>
            <li>Create HTTP requests for user authentication
                <ul>
                    <li>Post request for user login</li>
                    <li>Post request for user registration</li>
                </ul>
            </li>
            <li>Create HTTP requests for shops
                <ul>
                    <li>Get request for retrieving all of the shops</li>
                    <li>Post request for creating/submitting a shop</li>
                    <li>Delete request for deleting the shop that the user submitted</li>
                    <li>Put request for updating the title/description</li>
                </ul>
            </li>
            <li> Create HTTP requests for reviews
                <ul>
                    <li>Get request for retrieving all of the reviews according to the shop</li>
                    <li>Post request for creating a review to the shop</li>
                    <li>Delete request for deleting the review posted for that shop</li>
                    <li>Put request for updating your review</li>
                </ul>
            </li>
        </ul>
    </li>
    <li>Create middleware for jwt verification</li>
</ol>
<h1>Current Gif Example:</h1>
<img src="./documentation/v1.gif" alt="" width="70%"/>