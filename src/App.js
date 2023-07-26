import 'bootstrap/dist/css/bootstrap.min.css';
import { createGlobalStyle } from 'styled-components';
import { Card } from './components/card';
import { Footer } from './components/footer';
import { Link } from './components/link';
import { social } from './mocks';

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
  }

  * {
    transition: 0.3s ease-in;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-12">
            <Card
              src="https://github.com/LucasLuisBorges.png"
              title="Lucas Luis Borges - 2xL"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis nunc tortor, eu gravida nunc consequat in. Nullam aliquam nisi et diam molestie molestie. Suspendisse in ante et est tincidunt placerat. In sapien ante, lacinia et mi non, sodales egestas sapien. Nulla commodo a felis ac commodo."
            />
            <div className="mt-5">
              {social.map((itens) => (
                <Link
                  key={itens.id}
                  text={itens.text}
                  url={itens.url}
                  className={`mb-3 ${itens.diff ? 'diff' : ''}`}
                />
              ))}
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
