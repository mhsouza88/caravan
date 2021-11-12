import '../../style.css'
import ToTop from '../../components/ToTop/ToTop'
import { Badge, Form, Button } from 'react-bootstrap'
import { goToSignUp } from '../../route/Coordinator'
import { useHistory } from "react-router-dom"

export const PlansPage = () => {
    const history = useHistory()
    return (
        <div>
           <section className="container">
                <div class="text-center my-5">
                <span className="h6 d-block">
                    SEU PLANO, SUA VIAGEM
                    </span>
                        <h2 className="display-4 text-primary">
                            Escolha um plano
                        </h2>
                </div>
            <div className="row">
                <div className="col-md mb-4">
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
                            <div className="col">
                                <div className="d-grid gap-2">
                                    <Button variant="primary" size="lg" onClick={() => goToSignUp(history)}>Escolher</Button>
                                </div>
                        </div>
                        <div className="col">
                                <span className="h4">R$5.000</span>
                            </div>
                        </div>

                     </div>
                        </div>
                    <div className="col-md mb-4">
                    <div className="bg-light rounded p-4 box-shadow mb-4">
                    <h3>Platinum <Badge pill bg="danger">Esgotado</Badge></h3>
                    <ul className="plan-list list-unstyled">
                        <li>→ 60 dias de viagem</li>
                        <li>→ 6 destinos diferentes</li>
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
                            <div className="col">
                                <div className="d-grid gap-2">
                                    <Button variant="primary" size="lg" disabled>Escolher</Button>
                                </div>
                        </div>
                        <div className="col">
                                <span class="h4">R$7.500</span>
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

export default PlansPage