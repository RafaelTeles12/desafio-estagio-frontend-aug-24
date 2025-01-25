import { BrowserRouter } from 'react-router-dom';
import hyerdevLogo from '/logo-dark.svg';
import ChatList from './components/ChatList';
import ChatListSearch from './components/ChatListSearch';
import ChatListFilter from './components/ChatListFilter';

// Função principal do aplicativo que renderiza a interface
function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-t from-[#150d21] to-[#180f27] w-full flex flex-col md:flex-row">
        <div className="flex-1 max-w-lg h-screen p-4 flex flex-col">
          {/* Logotipo no topo*/}
          <div className="flex justify-center mb-6">
            <img src={hyerdevLogo} alt="Hyerdev Logo" className="w-[200px]" />
          </div>
          <div className="flex flex-col space-y-1 mb-4">
            <ChatListSearch />
            <ChatListFilter />
          </div>
          <div className="flex-1 overflow-y-auto">
            <ChatList />
          </div>
        </div>

        {/* Painel direito, logotipo como fundo*/}
        <div className="hidden md:flex justify-center items-center p-4 w-1/2">
          <img src={hyerdevLogo} alt="Hyerdev Logo" className="w-[300px]" />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
