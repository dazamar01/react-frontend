# React app

### For the first time maybe you need to install global "create-react-app", do it by typing (in Mac maybe you need to use the sudo prefix)

sudo npm install create-react-app -g

### Then you are ready to create the application:

create-react-app front-end

### Install the tools that we will nedd for our purpose (in fact, we just need to put the next dependencies over our package.json, on the "dependencies" section)

    "axios": "^0.16.2",
    "react-dom": "^16.0.0",
    "react-redux": "^5.0.6",
    "react-router-dom": "^4.2.2",
    "redux": "^3.7.2",
    "redux-thunk": "^2.2.0",

### Create the next structure (under the src folder)

    assets
    components
    containers
    hoc
    shared
    store
        actions
        reducers
    
