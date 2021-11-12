import React, { useState } from 'react'
import '../../style.css'
import { 
  Button,
  InputGroup,
  Form,
  FormControl,
  Accordion } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import California from '../../assets/california.jpg'
import Paris from '../../assets/paris.jpg'
import Dublin from '../../assets/dublin.jpg'
import Documentos from '../../assets/icons/passaporte.svg'
import Passagens from '../../assets/icons/passagens.svg'
import Translado from '../../assets/icons/translado.svg'
import Praias from '../../assets/icons/praias.svg'
import Bagagens from '../../assets/icons/bagagens.svg'
import Turismo from '../../assets/icons/turismo.svg'
import { goToPlan, goToContact } from '../../route/Coordinator'
import { useHistory } from "react-router-dom"
import ToTop from '../../components/ToTop/ToTop'

export const HomePage = () => {

  const [span, setSpan] = useState('')
  const history = useHistory()
  
  const signNewsletter = (event) => {
    event.preventDefault()
    event.target.reset()
    setSpan("E-mail cadastrado!")
    setTimeout(() => setSpan(''), 5000)
  }

  return (
    <div>
    <section className="container-fluid">
      <div className="row bg-dark text-white align-text">
        <div className="col-lg-7 p-0">
        <Carousel>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={California}
            alt="Califórnia"
          />
          <Carousel.Caption>
            <h3 className="display-3 text-shadow">Califórnia</h3>
            <p className="h5 text-shadow2">Pacote para 2 pessoas, com saída de São Paulo. (Voo + hospedagem + extras)</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={Paris}
            alt="Paris"
          />
          <Carousel.Caption>
          <h3 className="display-3 text-shadow">Paris</h3>
            <p className="h5 text-shadow2">Pacote para 2 pessoas, com saída de São Paulo. 12 noites (Voo + hospedagem + extras)</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={Dublin}
            alt="Dublin"
          />
          <Carousel.Caption>
          <h3 className="display-3 text-shadow">Dublin</h3>
            <p className="h5 text-shadow2">Pacote para 2 pessoas, com saída do Rio de Janeiro. 6 noites (Voo + hospedagem + extras)</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
        </div>

        <div className="col-lg-5 p-4 align-self-center">
          <h1 className="display-4">Realize a viagem dos seus sonhos.</h1>
          <p className="lead">Viaje hoje mesmo com a Caravan, a agência que possui mais de 5.000 excursões concluídas.</p>
          <Form onSubmit={signNewsletter}>
          <InputGroup hasValidation className="mb-3 input-group-lg">
          <FormControl
            required
            type="email"
            placeholder="Receber promoções"
            aria-label="email"
            aria-describedby="basic-addon2"
          />
          <Button type="submit" variant="primary" id="button-addon2">
            Enviar
          </Button>
        </InputGroup>
        </Form>
        <div className="newsletter-message">{span}</div>
        </div>
      </div>
    </section>

    <section className="py-5 bg-light text-center">
    <div className="container">
      <div className="my-3">
      <span className="h6 d-block">
        TUDO DE MELHOR PARA VOCÊ
        </span>
      <h2 className="display-4 text-primary mb-5">
        Aproveite as vantagens
        </h2>
        </div>
        <div class="row">
        <div className="col-xl-4 col-md-6">
          <div className="icon d-flex justify-content-center">
          <img src={Documentos} alt="Documentos" />
          </div>
          <h3>Documentos</h3>
          <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis magna nec libero sodales imperdiet.</p>
          </div>
          <div className="col-xl-4 col-md-6">
          <div className="icon d-flex justify-content-center">
          <img src={Passagens} alt="Passagens" />
          </div>
          <h3>Passagens</h3>
          <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis magna nec libero sodales imperdiet.</p>
          </div>
          <div className="col-xl-4 col-md-6">
          <div className="icon d-flex justify-content-center">
          <img src={Translado} alt="Translado" />
          </div>
          <h3>Translado</h3>
          <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis magna nec libero sodales imperdiet.</p>
          </div>

          <div className="col-xl-4 col-md-6">
          <div className="icon d-flex justify-content-center">
          <img src={Praias} alt="Praias" />
          </div>
          <h3>Praias</h3>
          <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis magna nec libero sodales imperdiet.</p>
          </div>
          <div className="col-xl-4 col-md-6">
          <div className="icon d-flex justify-content-center">
          <img src={Bagagens} alt="Bagagens" />
          </div>
          <h3>Bagagens</h3>
          <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis magna nec libero sodales imperdiet.</p>
          </div>
          <div className="col-xl-4 col-md-6">
          <div className="icon d-flex justify-content-center">
          <img src={Turismo} alt="Turismo" />
          </div>
          <h3>Turismo</h3>
          <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis magna nec libero sodales imperdiet.</p>
          </div>
        </div>

        <Button type="submit" variant="primary" className="btn-lg mt-1" onClick={() => goToPlan(history)}>
            Comprar plano
          </Button>
          </div>
        </section>

          <figure id="home-quote" className="p-md-5">
          <blockquote className="blockquote text-center text-white p-md-5 p-3">
            <p className="display-4"><em>"A felicidade não está na estrada que leva a algum lugar. A felicidade é a própria estrada."</em></p>
            <figcaption className="blockquote-footer text-white">Bob Dylan</figcaption>
            </blockquote>
        </figure>

        <section className="container">
          <div className="my-5 text-center">
            <span className="h6 d-block">
              AINDA ESTÁ COM DÚVIDAS?
              </span>
            <h2 className="display-4 text-primary">
              Perguntas Frequentes
             </h2>
           </div>
          <div className="row justify-content-center">
            <div className="col-xl-7 col-md-6">
            <Accordion>
              <Accordion.Item eventKey="0" className="border-0">
                <Accordion.Header><p className="lead text-primary mb-0 py-2">É possível cancelar a viagem?</p></Accordion.Header>
                <div class="dropdown-divider m-0"></div>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className="border-0">
                <Accordion.Header><p className="lead text-primary mb-0 py-2">Qual a garantia que eu tenho se perder o voo?</p></Accordion.Header>
                <div class="dropdown-divider m-0"></div>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" className="border-0">
                <Accordion.Header><p className="lead text-primary mb-0 py-2">Qual a principal forma de viagem?</p></Accordion.Header>
                <div class="dropdown-divider m-0"></div>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3" className="border-0">
                <Accordion.Header><p className="lead text-primary mb-0 py-2">Qual o melhor destino de viagem?</p></Accordion.Header>
                <div class="dropdown-divider m-0"></div>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4" className="border-0">
                <Accordion.Header><p className="lead text-primary mb-0 py-2">Vocês dão descontos para grupos grandes?</p></Accordion.Header>
                <div class="dropdown-divider m-0"></div>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            </div>
            <div className="my-5 text-center">
            <span className="h6 d-block">
              FALE CONOSCO PARA MAIS DÚVIDAS
              </span>
                <Button type="submit" variant="primary" className="btn-lg mt-1" onClick={() => goToContact(history)}>
                  Entre em contato
              </Button>
           </div>
          </div>
        </section>
        <ToTop />
    </div>
  )
}

export default HomePage
