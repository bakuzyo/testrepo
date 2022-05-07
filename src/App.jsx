import { Navbar, Welcome, Footer, Services, Transactions, Loader } from './components';

const App = () => {

  return (
    <div className="min-h-screen">
      <div className='bg-gradient-to-r from-cyan-500 to-blue-500'>
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  )
};

export default App;