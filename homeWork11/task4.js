// Завдання 4 (Опціонально)
// Створимо два класи, які реалізують методи для запитів:


class TodoFetcher {
    async fetchTodo() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return await response.json();
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    }
  }
  
  class UserFetcher {
    async fetchUser() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return await response.json();
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    }
  }
  
  const todoFetcher = new TodoFetcher();
  const userFetcher = new UserFetcher();
  
  async function fetchAll() {
    try {
      const [todo, user] = await Promise.all([todoFetcher.fetchTodo(), userFetcher.fetchUser()]);
      console.log('Promise.all results:', todo, user);
    } catch (error) {
      console.error('Error in Promise.all:', error);
    }
  }
  
  async function fetchRace() {
    try {
      const result = await Promise.race([todoFetcher.fetchTodo(), userFetcher.fetchUser()]);
      console.log('Promise.race result:', result);
    } catch (error) {
      console.error('Error in Promise.race:', error);
    }
  }
  
  fetchAll();
  fetchRace();