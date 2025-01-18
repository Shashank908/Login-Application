********************Front End********************

Language used - HTML, CSS & JS

We have two pages - Registration and login

It is developed separately from laravel api - Registeration/login form data passes through Fetch API [https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
that runs Asynchronously.

UI Validations -

* password & confirm password should match - validation message comes and button disabled
* Data should be submiied by unqiue (same candidate can not register twice) - covered through api
*************************************************************************************************************************

*********************************API********************************

Language - Php 8.2

Framework - Laravel 11.31

Auth - OAuth 2.0 (passport 12.0)

Admin Panel - Orchid 14.44

DB - PostgreSQL

* Registeration API
  
End Point - /api/register

Body - name, email, password, c_password
API Call - POST

* Login API

End point - /api/login

Body - email, password

API Call - POST

* Create Product/post API

End point - /api/products

body - name, detail

Header -
Accept:application/json
Authorization:Bearer {token}

**************************Commands**************************
php artisan passport:client --personal => To generate client id/secret in local machine

npm install && npm run build

php artisan passport:keys

php artisan migrate

php artisan orchid:admin admin admin1@admin.com password

php artisan serve // to run application server only

composer run dev // it runs multiple servers 
