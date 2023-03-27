
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Aside from './Aside';
import Main from './Main';
import BootstrapCSS from './bootstrap/css/bootstrap.min.css';

function App() {
  return (
    <html> 
      <head>
        <title>Projeto Dia a Dia - Sua mais nova empresa de Tecnologia WEB</title>
        <link href={BootstrapCSS} rel="stylesheet"></link>
      </head>     
      <body>
        <div class = "row">
          <div class ="col-lg-12 header">
            <Header/>
          </div>
        </div>        
        <div class = "row">
          <div class ="col-lg-2 menu">        
            <Aside/>
          </div>
          <div class ="col-lg-10 content"> 
            <Main
            instagram = "instagram.com/xurrasco_021"
            whatsapp = ""/>    
          </div>
        </div>
        <div class = "row">
          <div class ="col-lg-4 footer">        
            <Footer/>
          </div>
        </div>     
      </body>
    </html> 
  );
}

export default App;
