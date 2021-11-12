import React, { useState } from 'react'
import '../../style.css'
import { Navbar, 
  Container, 
  Nav, 
  NavDropdown,
  Button,
  } from 'react-bootstrap'
import Logo from '../../assets/caravan.svg'
import { useHistory } from "react-router-dom"
import { goToSignUp } from '../../route/Coordinator'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

export const Header = () => {
  const history = useHistory()
  const [show, setShow] = useState(false)
  const [show2, setShow2] = useState(false)

  const handleClose = () => 
    setShow(false)
  
  const handleShow = () => 
    setShow(true)

  const handleShow2 = () => {
    setShow2(true)
    if (setShow === true && setShow2 === true) {
      return setShow(false)
    } else {
      return setShow(false)
    }
  }
  const handleClose2 = () => {
    setShow2(false)
    if (setShow === true && setShow2 === false) {
      return setShow(false)
    } else {
      return setShow(false)
    }
  }
    return (
      <div>
      <Navbar className="fixed-top py-3 box-shadow " bg="light" expand="lg" >
        <Container>
          <Navbar.Brand href="/"><img src={Logo} alt="Logotipo"/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <NavDropdown title="Locais" id="basic-nav-dropdown">
                <NavDropdown.Item href="/locais/california">Califórnia</NavDropdown.Item>
                <NavDropdown.Item href="/locais/paris">Paris</NavDropdown.Item>
                <NavDropdown.Item href="/locais/dublin">Dublin</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link id="menu-link" href="/planos">Planos</Nav.Link>
                <Nav.Link id="menu-link" href="/contato">Contato</Nav.Link>
                <Nav.Link id="menu-link" onClick={handleShow}>Login</Nav.Link>
                <Button id="subscribe" variant="outline-primary" onClick={() => goToSignUp(history)}>Inscreva-se</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal
        show={show}
        onHide={handleClose}
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Entre na sua conta</Modal.Title>
           </Modal.Header>
             <Modal.Body>
             <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label for="email">E-mail</Form.Label>
                <Form.Control id="email" required type="email" placeholder="email@email.com" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label for="password">Senha</Form.Label>
                <Form.Control id="password" required type="password" placeholder="Senha" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Permanecer logado" />
              </Form.Group>
              <Button variant="primary" type="submit" onClick={handleClose}>
                Fazer login
              </Button>
              <Form.Text className="text-muted d-block mt-2">
                Esqueceu a sua senha? Clique <a href="#" variant="link" 
                rel="noreferrer" className="text-decoration-none" onClick={handleShow2}>aqui</a>.
              </Form.Text>
            </Form>
            </Modal.Body>
      </Modal>

      <Modal
        show={show2}
        onHide={handleClose2}
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Esqueci a minha senha</Modal.Title>
           </Modal.Header>
             <Modal.Body>
             <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label for="email">E-mail</Form.Label>
                <Form.Control id="email" required type="email" placeholder="email@email.com" />
                  <Form.Text className="text-muted">
                    Digite o seu e-mail. Uma nova senha será enviada em poucos minutos.
                  </Form.Text>
              </Form.Group>
              <Button variant="primary" onClick={handleClose2} type="submit">
                Enviar
              </Button>
            </Form>
            </Modal.Body>
      </Modal>
  </div>
  )
}

export default Header
