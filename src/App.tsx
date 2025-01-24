import hyerdevLogo from "/logo-dark.svg";
import ChatList from "./components/ChatList";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-t from-[#150d21] to-[#180f27] w-full flex flex-col md:flex-row">
      {/* Painel esquerdo (Lista de chats e cabeçalho) */}
      <div className="flex-1 max-w-lg h-screen p-4 flex flex-col">
        {/* Logo no topo */}
        <div className="flex justify-center mb-6">
          <img src={hyerdevLogo} alt="Hyerdev Logo" className="w-[200px]" />
        </div>
        {/* Lista de Chats com rolagem */}
        <div className="flex-1 overflow-y-auto">
          <ChatList />
        </div>
      </div>
      {/* Painel direito (Fundo) */}
      <div className="hidden md:flex justify-center items-center p-4 w-1/2">
        <img src={hyerdevLogo} alt="Hyerdev Logo" className="w-[300px]" />
      </div>
    </div>
  );
}

export default App;
