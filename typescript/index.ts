import axios from 'axios';
const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then(response => {
    const todo = response.data as Todo;
    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;
    logTodo(id, title, completed);
})

const logTodo = (id: number, title: string, completed:boolean) => {
    console.log(`
        The Todo with ID: ${id}
        Has a title of: ${title}
        Is it finished? ${completed}
    `);
}

/*
    1. sudo npm install -g typescript ts-node
    2. npm init -y
    3. npm install axios
    4. ts-node index.ts

    *opcional, para compilar: tsc index.ts e gerar o index.js, 
    depois rodar: node index.js (passo 4 faz isso numa tacada só).
*/