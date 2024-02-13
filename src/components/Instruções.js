
import Sidebar from "./Sidebar";
import { useData } from "../contexts/DataContext";
import HamburgerIcon from './HamburgerIcon';
import style from "./Instruções.module.css"

function Instruções(){
   const {isTablet} = useData();

    return (
    <div className="main-section">
       { isTablet ? <HamburgerIcon /> : <Sidebar  />}
        <div className="mainbar">
        <div className={style.instructionContainer}>
      <h1>Instruções de Uso do App</h1>

      <section>
        <h2>1. Adicionar Receitas e Despesas</h2>
        <p>
          Nas páginas de "Receitas" e "Despesas", clique no botão de adição (+) para inserir uma nova entrada. Preencha o valor, escolha uma categoria e adicione uma breve descrição.
        </p>
      </section>

      <section>
        <h2>2. Visualizar Relatório</h2>
        <p>
          Vá para a página "Dashboard" para visualizar um relatório completo de suas receitas e despesas. As informações são apresentadas em gráficos fáceis de entender para ajudar você a acompanhar suas finanças.
        </p>
      </section>

      <section>
        <h2>3. Apoio</h2>
        <p>
          Se precisar de ajuda ou tiver alguma dúvida, acesse a página de "Apoio". Lá, você encontrará um botão para entrar em contato diretamente pelo WhatsApp. Estamos aqui para ajudar!
        </p>
      </section>

      <p>
        Agradecemos por escolher nosso aplicativo de gerenciamento de despesas! Caso tenha alguma sugestão ou feedback, estamos sempre abertos para ouvir.
      </p>

      <p>
        Divirta-se acompanhando suas finanças!
      </p>
    </div>      
        </div>
    </div>)
}

export default Instruções;