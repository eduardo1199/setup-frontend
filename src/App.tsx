import { Header } from './components/Header';
import { SummaryTables } from './components/SummaryTables';
import './styles/global.css';

function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
     <div className="w-full max-w-5xl px-6 flex flex-col gap-16">
      <Header />

      <SummaryTables />
     </div>
    </div>
  )
}

export default App
