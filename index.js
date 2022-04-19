var express = require('express')
var app = express()

app.use(express.json())

var data = {}



//POST 
app.post('/api/todolist', function(req, res) {
    const text = req.body.text
    if(text == ''){
        res.status(400).send('Error: empty text')
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
app.put('/api/todolist/:id', function(req,res) {
    const id = req.params.id;
    if(id in data) {
        const text = req.body.text
        const done = req.body.done

    if(text == ''){
        res.status(400).send('update ignore')
            
    } else {
        data[id]= {
            text: text,
            done: done
    }
        res.send('data updated')
        return;
    }
    
    }
    
});


// DELETE
app.delete('/api/todolist/:id', function(req,res) {
    
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