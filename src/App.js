import Header from "./components/Header";
import Cards from "./components/Cards";
import AddMovie from './components/AddMovie'
import {Route, Routes} from 'react-router-dom'
import Detail from './components/Detail';

      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/addmovie" element={<AddMovie />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
    </Appstate.Provider>
  );
}

export default App;
export {Appstate}
