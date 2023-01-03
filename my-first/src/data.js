import logo from './logo.svg';
import './App.css';

function App() {
  const users = [
    {name: "Josh", age: 21, imageUrl:"https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGh1bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"},
    {name: "Mike", age: 35, imageUrl:"https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aHVtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"},
    {name: "Sasha ", age: 41, imageUrl:"https://images.unsplash.com/photo-1601412436009-d964bd02edbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGh1bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"},
    {name: "Natasha", age: 18, imageUrl:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4470&q=80"},
    {name: "Ashley", age: 9, imageUrl:"https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aHVtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"},
  ] 
  let sum = 0;
  let average = 0

  for( let i = 0; i < users.length; i++){
    sum += users[i].age
    average = sum/users.length
  } 

  const UserCard = (props) =>{
  return (
    <div className='user'> 
      <div>
        <h3>Name: {props.name}</h3>
        <p>Age: {props.age}</p>
      </div>
      <img src= {props.image} alt=''></img>
    </div>

  )}

  return (
    <div>
      <h1>Average:{average}</h1>
      <div className='users'>
      {
        users.map((users) => (
          <UserCard name={users.name} age={users.age} image={users.imageUrl}/>
         )
      )
      }
      </div>
    </div>
  );
}

export default App;
