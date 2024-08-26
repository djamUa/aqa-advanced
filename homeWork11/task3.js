// Реалізуємо завдання 2, але з використанням async/await:



async function fetchTodo() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const todo = await response.json();
      return todo;
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }
  
  async function fetchUser() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const user = await response.json();
      return user;
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }
  
  async function fetchAll() {
    try {
      const [todo, user] = await Promise.all([fetchTodo(), fetchUser()]);
      console.log('Promise.all results:', todo, user);
    } catch (error) {
      console.error('Error in Promise.all:', error);
    }
  }
  
  async function fetchRace() {
    try {
      const result = await Promise.race([fetchTodo(), fetchUser()]);
      console.log('Promise.race result:', result);
    } catch (error) {
      console.error('Error in Promise.race:', error);
    }
  }
  
  fetchAll();
  fetchRace();