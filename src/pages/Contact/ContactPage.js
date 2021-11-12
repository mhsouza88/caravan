import React, { useState } from 'react'
import '../../style.css'
import ToTop from '../../components/ToTop/ToTop'
import { Form, Button } from 'react-bootstrap'
import Map from '../../assets/mapa.png'

export const ContactPage = () => {

    const [span, setSpan] = useState('')

    const sendMessage = (event) => {
        event.preventDefault()
        event.target.reset()
        setSpan("Mensagem enviada! Entremos em contato em breve.")
        setTimeout(() => setSpan(''), 5000)
      }    

    return (
        <div>
            <section className="container">
                <div class="text-center my-5">
                    <span className="h6 d-block">
                        POSSUI ALGUMA DÚVIDA?
                    </span>
                    <h2 className="display-4 text-primary">
                        Fale conosco
                    </h2>
                </div>
                <div className="row">
                    <div className="col-lg mb-5">
                    <Form className="bg-light rounded p-4 box-shadow" onSubmit={sendMessage}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label for="name">Nome</Form.Label>
                            <Form.Control required id="name" type="text" placeholder="Seu nome" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label for="email">E-mail</Form.Label>
                            <Form.Control required id="email" type="email" placeholder="email@email.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label for="message">Mensagem</Form.Label>
                            <Form.Control id="message" type="text" as="textarea" className="no-resize" rows="4" required placeholder="Sua mensagem" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Enviar mensagem
                        </Button>
                        </Form>
                        <div className="send-message">{span}</div>
                    </div>
                    <div className="col-lg mb-5">
                        <h2 className="h6 text-center">NOSSO ENDEREÇO</h2>
                            <img className="img-fluid box-shadow rounded mb-4" src={Map} alt="Mapa" />
                         <h2 className="h6 text-center">DADOS DE CONTATO</h2>
                         <ul className="list-unstyled text-secondary text-center">
                            <li>caravan@caravan.com.br</li>
                            <li>(21) 99235-1001</li>
                            <li>De Seg. à Sex. das 8h às 18h</li>
                        </ul>
                        <h2 className="h6 text-center">REDES SOCIAIS</h2>
                            <div className="row mt-3">
                            <div className="col align-social">
                            <div className="d-flex gap-2">
                        <Button variant="outline-secondary" href="http://www.facebook.com" target="_blank" size="sm">
                            Facebook
                        </Button>
                        <Button variant="outline-secondary" href="http://www.twitter.com" target="_blank" size="sm">
                            Twitter
                        </Button>
                        <Button variant="outline-secondary" href="http://www.youtube.com" target="_blank" size="sm">
                            YouTube
                        </Button>
                        </div>
                        </div>
                </div>
                </div>
                </div>
            </section>
        <ToTop />
    </div>
    )
}

export default ContactPage