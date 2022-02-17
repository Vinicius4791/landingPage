import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Incentive from './components/Incentive';
import Steps from './components/Steps';
import CustomerReports from './components/CustomerReports';
import FAQ from './components/FAQ';
import EspecialistTeam from './components/EspecialistTeam';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Incentive />
      <Steps />
      <CustomerReports />
      <FAQ />
      <EspecialistTeam />
    </div>
  );
}

export default App;
