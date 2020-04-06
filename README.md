# canonical-cards

Display cards regarding design.

## Requirements
This project is using Canonical Vanilla CSS framework to display grid, and inject vanilla's own styles. 
Vanilla framework injected to the top of main.css file.   

Content in the cards was rendered regarding API response. URL was provided (`URL_TO_FETCH` constant in `index.js`).

All content wrapped into `div` tag with `app` id in the `index.html` file. All content generates in the  `src/index.js`
file. There are two functions: `getFromAPI` and `generateHtml`.

`getFromAPI` fetches the data from the URL which was provided, using browser's own fetch API  and returns two promises 
and invoke callback function with response data.

`generateHtml` function is basically generating HTML tags and content using response array from the provided API call.

Content is generated using vanilla js methods.


## Clone repository

```
git clone https://github.com/yevhensydorov/fe-canonical.git
```

## Install dependencies
To install dependencies you should run 
```
npm install
```
in the project folder

## Run project
To expose the project to url ``localhost:1234`` please run
```
npm start 
```

## Choice of dependencies

This project uses moment.js package to display date in the right format.