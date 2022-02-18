import logo from './logo.svg';
import classes from './App.module.css';
import Layout from './components/layout/Layout';
import BurgerBuilder from './containers/burgerBuilder/BurgerBuilder';
import style from './components/layout/Layout.module.css'

function App() {
  return (
    <Layout >
      <BurgerBuilder />
    </Layout>
  );
}

export default App;
