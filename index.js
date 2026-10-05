let express = require('express');

let app = express();
let mongoose=require('mongoose')

let emproute = require('./routes/emp_route');
mongoose.connect("")
.then(()=>console.log("db connected successfully"))
.catch((err)=>console.log(err))

app.use(express.json()); // used to collect input from UI as JSON data

app.use("/api/emp", emproute);

// Employee Routes
// localhost:3000/api/emp/register => POST
// localhost:3000/api/emp/login => POST
// localhost:3000/api/emp/viewtask => GET
// localhost:3000/api/emp/updateprofile => PATCH

// HR Routes
// localhost:3000/api/hr/viewemp => GET
// localhost:3000/api/hr/login => POST
// localhost:3000/api/hr/deleteemp => DELETE
// localhost:3000/api/hr/viewtask => GET

app.use("/api/hr", require('./routes/hr_route'));

// Run server
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});