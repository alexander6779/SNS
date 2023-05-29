# Run the Web app

* To see how it works this small web app, you first need to install fast api and pydantic, it's required due to the API was done with FAST API and pydantic to create an object for the request.

* Secondly, after install all of this libraries, make sure you move the folder to your local server in my case I have used XAMPP and VS Code live server extension that's why the origins in my middleware are localhost,localhost:5500,etc.If this is not your case, assure you put in the origins the proper IP address from where you run the web or the simple and less secure way to test it is writing this => ["*"] which means, it will accept request from every IP address.

* Finally, when you finish the previous steps, you have to run the api, writing the next prompt in the command console => uvicorn main:app --reload, this is to run the api,so from here you can start testing the web app.

The preview.
<img width="450" alt="image" src="https://github.com/alexander6779/SNS/assets/114480388/45a76a55-5216-4456-9789-b2f27b593d62">

You can find part of this information here : https://fastapi.tiangolo.com/



