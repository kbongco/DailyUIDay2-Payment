import logo from './logo.svg';
import CardContainer from './CardContainer'
import Footer from './Footer'
import Form from './Form'
import './App.css';

function App() {
  return (
    <div className="App">
      <CardContainer />
      
      <div className='forms'>
        <Form/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
