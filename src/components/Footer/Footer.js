import '../../style.css'
import {  
    Button
    } from 'react-bootstrap'

export const Footer = () => {
    return (
        <div className="bg-dark text-white">
        <div className="container py-4">
            <div className="row">
                <div className="col-md-3 col-6">
                    <h4 className="h6">PÁGINAS</h4>
                    <ul className="list-unstyled">
                    <li><a href="/planos" variant="link" className="text-decoration-none">Planos</a></li>
                    <li><a href="/contato" variant="link" className="text-decoration-none">Contato</a></li>
                    <li><a href="/cadastro" variant="link" className="text-decoration-none">Inscreva-se</a></li>
                    </ul>
                </div>
                <div className="col-md-3 col-6">
                    <h4 className="h6">LOCAIS</h4>
                    <ul className="list-unstyled">
                    <li><a href="/locais/california" variant="link" className="text-decoration-none">Califórnia</a></li>
                    <li><a href="/locais/paris" variant="link" className="text-decoration-none">Paris</a></li>
                    <li><a href="/locais/dublin" variant="link" className="text-decoration-none">Dublin</a></li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <h4 className="h6">DADOS DE CONTATO</h4>
                    <ul className="list-unstyled text-secondary">
                        <li>caravan@caravan.com.br</li>
                        <li>(21) 99235-1001</li>
                        <li>De Seg. à Sex. das 8h às 18h</li>
                    </ul>
                </div>
                <div class="col-md-2">
                <h4 className="h6 text-center">REDES SOCIAIS</h4>
                <div className="d-grid gap-2">
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
        <div className="bg-primary text-center py-3">
            <p className="mb-0">Caravan © 2021. Alguns direitos reservados. <a href="https://github.com/mhsouza88" rel="noreferrer" target="_blank">👩🏻‍💻</a></p>
        </div>
        </div>
    )
}

export default Footer