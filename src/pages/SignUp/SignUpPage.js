import '../../style.css'
import ToTop from '../../components/ToTop/ToTop'
import { Form,
         Button, 
         Col, 
         Row, 
         Tabs,
         Tab, 
         } from 'react-bootstrap'
import React, { useState } from 'react'

export const SignUpPage = () => {
    
    const [span, setSpan] = useState('')

    const sendSignUp = (event) => {
        event.preventDefault()
        event.target.reset()
        setSpan("Compra efetuada! Enviamos um e-mail para você com mais informações.")
        setTimeout(() => setSpan(''), 5000)
      }

    return (
        <div>
            <section className="container">
                <div class="text-center my-5">
                    <span className="h6 d-block">
                        PROGRAME A VIAGEM DOS SEUS SONHOS
                    </span>
                    <h1 className="display-4 text-primary">
                        Inscreva-se
                    </h1>
                </div>

                <div className="row">
                    <Form className="col-md-6 mb-5" onSubmit={sendSignUp}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail" className="col-md-6 col-12">
                        <Form.Label for="name">Nome completo</Form.Label>
                        <Form.Control className="mb-3" id="name" type="text" placeholder="O seu nome" required />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPassword" className="col-md-6 col-12">
                        <Form.Label for="cpf">CPF</Form.Label>
                        <Form.Control id="cpf" required type="text" pattern="^\d{3}.?\d{3}.?\d{3}-?\d{2}$" 
                        title="Digite um CPF válido." placeholder="000.000.000-00" />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail" className="col-md-6 col-12">
                        <Form.Label for="email">E-mail</Form.Label>
                        <Form.Control className="mb-3" id="email" type="email" placeholder="email@email.com" required />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPassword" className="col-md-6 col-12">
                        <Form.Label for="password">Senha</Form.Label>
                        <Form.Control id="password" required type="password" placeholder="Senha de acesso" />
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3 col-12" controlId="formGridAddress1" >
                        <Form.Label for="address">Endereço</Form.Label>
                        <Form.Control id="address" placeholder="Rua/Avenida, número e bairro" />
                    </Form.Group>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity" className="col-md-6 col-12">
                        <Form.Label for="city">Cidade</Form.Label>
                        <Form.Control className="mb-3" id="city" placeholder="Cidade" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridState" className="col-md-3 col-12">
                        <Form.Label for="state">Estado</Form.Label>
                        <Form.Select className="mb-3" defaultValue="Selecionar" id="state">
                            <option>Selecionar</option>
                                <option value="AC">Acre</option>
                                <option value="AL">Alagoas</option>
                                <option value="AP">Amapá</option>
                                <option value="AM">Amazonas</option>
                                <option value="BA">Bahia</option>
                                <option value="CE">Ceará</option>
                                <option value="DF">Distrito Federal</option>
                                <option value="ES">Espírito Santo</option>
                                <option value="GO">Goiás</option>
                                <option value="MA">Maranhão</option>
                                <option value="MT">Mato Grosso</option>
                                <option value="MS">Mato Grosso do Sul</option>
                                <option value="MG">Minas Gerais</option>
                                <option value="PA">Pará</option>
                                <option value="PB">Paraíba</option>
                                <option value="PR">Paraná</option>
                                <option value="PE">Pernambuco</option>
                                <option value="PI">Piauí</option>
                                <option value="RJ">Rio de Janeiro</option>
                                <option value="RN">Rio Grande do Norte</option>
                                <option value="RS">Rio Grande do Sul</option>
                                <option value="RO">Rondônia</option>
                                <option value="RR">Roraima</option>
                                <option value="SC">Santa Catarina</option>
                                <option value="SP">São Paulo</option>
                                <option value="SE">Sergipe</option>
                                <option value="TO">Tocantins</option>
                        </Form.Select>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridZip" className="col-md-3 col-12">
                        <Form.Label for="zip">CEP</Form.Label>
                        <Form.Control id="zip" pattern="^\d{5}-\d{3}$" placeholder="00000-000" title="Digite um CEP válido."/>
                        </Form.Group>
                    </Row>
                        <Form.Group className="bg-light rounded box-shadow p-3">
                            <h2 className="h6 text-primary">FORMA DE PAGAMENTO</h2>
                            <Tabs defaultActiveKey="credit-card" id="uncontrolled-tab-example" className="mb-3" style={{borderBottom: 0}}>
                                <Tab eventKey="credit-card" title="Cartão de crédito">
                                <div className="row">
                            <div className="col-md-12 mb-2">
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label for="name">Nome</Form.Label>
                                <Form.Control className="mb-2" id="name" type="text" placeholder="Nome impresso no cartão" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword" className="col-md-6 col-12">
                                <Form.Label for="cc-number">Número do cartão</Form.Label>
                                <Form.Control id="cc-number" type="text" 
                                    placeholder="0000 0000 0000 0000" />
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group as={Col} controlId="formGridCity" className="col-md-4 col-12">
                                <Form.Label for="code">Código</Form.Label>
                                <Form.Control className="mb-2" id="code" placeholder="000"/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState" className="col-md-3 col-12">
                                <Form.Label for="month">Mês</Form.Label>
                                <Form.Select className="mb-2" defaultValue="Selecionar" id="month">
                                    <option>Mês de expiração</option>
                                        <option value="01">Janeiro</option>
                                        <option value="02">Fevereiro</option>
                                        <option value="03">Março</option>
                                        <option value="04">Abril</option>
                                        <option value="05">Maio</option>
                                        <option value="06">Junho</option>
                                        <option value="07">Julho</option>
                                        <option value="08">Agosto</option>
                                        <option value="09">Setembro</option>
                                        <option value="10">Outubro</option>
                                        <option value="11">Novembro</option>
                                        <option value="12">Dezembro</option>
                                </Form.Select>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridZip" className="col-md-3 col-12">
                                <Form.Label for="year">Ano</Form.Label>
                                <Form.Select className="mb-2" defaultValue="Selecionar" id="year">
                                    <option>Ano de expiração</option>
                                        <option value="2021">2021</option>
                                        <option value="2022">2022</option>
                                        <option value="2023">2023</option>
                                        <option value="2024">2024</option>
                                        <option value="2025">2025</option>
                                </Form.Select>
                                </Form.Group>
                            </Row>
                            </div>
                            </div>
                                </Tab>
                                <Tab eventKey="bank-slip" title="Boleto bancário">
                                <p class="lead">Clique em contratar plano e enviaremos um boleto para o seu e-mail.</p>
                                </Tab>
                                </Tabs>
                        </Form.Group>
                        <Form.Group className="mb-3 mt-3" id="formGridCheckbox">
                        <Form.Check type="checkbox" required title="É preciso concordar com os termos e condições para concluir a sua compra." 
                            label="Concordo com os termos e condições." />
                        </Form.Group>

                        <Button variant="primary" type="submit" size="lg">
                            Contratar plano
                        </Button>
                        <div className="send-signup">
                        {span}
                        </div>
                    </Form>
                    <div className="col-lg-5 mx-auto order-first order-lg-1 mb-5">
                        <h2 className="h6 text-primary">PLANO ESCOLHIDO</h2>
                        <div className="bg-light rounded p-4 box-shadow mb-4 pb-4">
                        <h3>Gold</h3>
                        <ul className="plan-list list-unstyled">
                            <li>→ 30 dias de viagem</li>
                            <li>→ 3 destinos diferentes</li>
                            <li>→ Tudo pago pela empresa</li>
                            <li>→ Ingressos para festas</li>
                        </ul>
                        <Form.Select className="bg-light" aria-label="Default select example">
                            <option>Selecione o lugar</option>
                            <option value="1">Califórnia</option>
                            <option value="2">Dublin</option>
                            <option value="3">Paris</option>
                            </Form.Select>
                            <div className="row align-items-center mt-4">
                            <div className="col text-center">
                                <span className="h4">R$5.000</span>
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

export default SignUpPage