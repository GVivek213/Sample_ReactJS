import './App.css';
import CakeView from './Features/Cake/CakeView'
import IcecreamView from './Features/Icecream/IcecreamView'
import UserView from './Features/Users/UserView'
import TablePagination from './Table/TablePagination';
import FocusInput from './app/Formik/FocusInput';
import A from './app/Formik/A'
import RandomNumber from './app/Formik/RandomNumber'

function App() {
  return (
    <div className="App">
      {/* <CakeView />
      <IcecreamView />
      <UserView /> */}
      {/* <Theme /> */}
      {/* <FocusInput /> */}
      {/* <A  name = "A"/>
      <B name = "B"/> */}
      <RandomNumber/>
    </div>
  );
}

export default App;
