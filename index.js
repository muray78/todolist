var express = require('express')
var app = express()

app.use(express.json())

var data = {}



//POST 
app.post('/api/todolist', function(req, res) {
    const text = req.body.text
    if(text == ''){
        res.status(400).send('Error: text is empty')
        return
    }
    const id = Math.floor((Math.random() * 100) + 1)
        data[id] = {
            text: text,
            done: false
        }
       
    res.send("todo added")
    
})

// PUT
app.put('/api/todos/:id', function(req,res) {
    const id = req.params.id;
    if(id in data) {
        const text = req.body.text
        const done = req.body.done

        data[id]= {
            text: text,
            done: done
        }
        res.send('data updated')
        return;
    }
    res.status(400).send('Error');
});


// DELETE
app.delete('/api/todos/:id', function(req,res) {
    
    const id = req.params.id
    if(id in data ) {
    delete data[id]
    res.send('data deleted')
    }
    res.status(400).send('Error');
});


// GET
app.get('/api/todolist', function(req, res){
    res.send(data)
})

app.listen(3600, ()=>{
    console.log("server running")
})