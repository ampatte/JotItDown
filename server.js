const express = require('express');
const path =require('path');
const fs = require('fs');



const app = express();

require('./Develop/routes/apiRoutes')(app);
require('./Develop/routes/htmlRoutes')(app);