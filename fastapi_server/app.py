from fastapi import FastAPI
app=FastAPI()
#http://localhost:8000/getStudents
@app.get("/getStudents")
def getStudents():
    return "get student method called"
#localhost:8000/addStudent => post
@app.post("/addStudent")
def addStudent():
    return "add student method called"
#localhost:8000/updateStudent => put
@app.put("/updateStudent")
def updateStudent():
    return "update student method called"
#localhost:8000/deleteStudent => delete
@app.delete("/deleteStudent")
def deleteStudent():
    return "delete student method called"