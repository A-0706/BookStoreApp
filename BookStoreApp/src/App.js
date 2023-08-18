import logo from './logo.svg';
import './App.css';
import BookList from './components/BookList';
import HomePage from './components/HomePage';
import NewArrival from './components/NewArrival';
import Form from './components/Form';
import {BrowserRouter,Routes,Route,NavLink} from 'react-router-dom';
import PageNotFound from './components/PageNotFound'
import { GlobalStyle } from './styles/GlobalStyles';
import { ThemeProvider, createTheme } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
  const name = "A-0706";
  const theme = createTheme({
    components:{
      MuiButton:{
        styleOverrides:{
          root:{
            backgroundColor:"red"
          }
        }
      }
    },
  })
  return (
    <div>
      {/* <img src= {logo} alt='logo' /> */}
    
    {/* <HomePage UserName = {name}/>
    <BookList/>
    <NewArrival/> */}
     
    <ThemeProvider theme={theme}>

    <BrowserRouter>
    <ToastContainer/>
    <div style={{
      ...GlobalStyle.navbar,
    }}
    //className='navbar'
    //  style={{
      // display:"flex",
      // padding:20,
      // justifyContent:'space-between',
      // width:200,
      // }}
      >
    <NavLink  to='/'>Home</NavLink> 
    <NavLink to='/Form'>Login</NavLink >
    <NavLink to='/Books'>Books</NavLink >
    <NavLink  to='/NewArrivals'>New-Arrivals</NavLink > 
    </div> 
    <Routes>
      <Route path='/' element={<HomePage UserName = {name}/>}></Route>
      <Route path='/Books' element={<BookList/>}></Route>
      <Route path='/NewArrivals' element={<NewArrival/>}></Route>
      <Route path='/Form' element={<Form/>}></Route>
      
      <Route path='*' element={<PageNotFound/>}></Route>
    </Routes>
    </BrowserRouter>
  </ThemeProvider>
    </div>
   
  );
}

export default App;
