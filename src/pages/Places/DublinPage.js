import '../../style.css'
import Foto01 from '../../assets/places/dublin/foto-1.jpg'
import Foto02 from '../../assets/places/dublin/foto-2.jpg'
import Foto03 from '../../assets/places/dublin/foto-3.jpg'
import Foto04 from '../../assets/places/dublin/foto-4.jpg'
import Foto05 from '../../assets/places/dublin/foto-5.jpg'
import Foto06 from '../../assets/places/dublin/foto-6.jpg'
import Foto07 from '../../assets/places/dublin/foto-7.jpg'
import { Table } from 'react-bootstrap'
import ToTop from '../../components/ToTop/ToTop'

export const DublinPage = () => {
    return (
        <div>
            <section className="container">
                <div class="text-center my-5">
                <span className="h6 d-block">
                    APROVEITE A SUA VIAGEM AO MÁXIMO
                    </span>
                        <h2 className="display-4 text-primary">
                            Descubra Dublin
                        </h2>
                </div>
            <div className="row">
                <div className="col-md">
                    <img className="img-fluid mb-4" src={Foto01} alt="Foto 01" />
                    <img className="img-fluid mb-4" src={Foto02} alt="Foto 02" />
                    <img className="img-fluid mb-4" src={Foto03} alt="Foto 03" />
                </div>
                <div className="col-md">
                    <img className="img-fluid mb-4" src={Foto04} alt="Foto 04" />
                    <img className="img-fluid mb-4" src={Foto05} alt="Foto 05" />
                </div>
                <div className="col-md">
                    <img className="img-fluid mb-4" src={Foto06} alt="Foto 06" />
                    <img className="img-fluid mb-4" src={Foto07} alt="Foto 07" />
                </div>
            </div>
            </section>

            <section className="container">
            <div class="text-center my-5">
                <span className="h6 d-block">
                    DESCUBRA O QUE ACONTECE NA CIDADE
                    </span>
                        <h2 className="display-4 text-primary">
                            Próximos eventos
                        </h2>
                    </div>
                        <Table hover responsive="md" className="mb-5">
                        <thead>
                            <tr>
                            <th>Data</th>
                            <th>Evento</th>
                            <th>Local</th>
                            <th>Ticket</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>23/10/21</td>
                            <td>The Dubliners</td>
                            <td>Shelbourne Hotel</td>
                            <td><a href="#" className="btn btn-outline-secondary btn-sm">Comprar ticket</a></td>
                            </tr>
                            <tr>
                            <td>02/01/22</td>
                            <td>U2</td>
                            <td>O2 Arena</td>
                            <td><a href="#" className="btn btn-outline-secondary btn-sm">Comprar ticket</a></td>
                            </tr>
                            <tr>
                            <td>12/02/22</td>
                            <td>Nine Inch Nails</td>
                            <td>Olympia Theater</td>
                            <td><a href="#" className="btn btn-outline-secondary btn-sm">Comprar ticket</a></td>
                            </tr>
                            <tr>
                            <td>26/02/22</td>
                            <td>BABYMETAL</td>
                            <td>National Concert Hall</td>
                            <td><a href="#" className="btn btn-outline-secondary btn-sm">Comprar ticket</a></td>
                            </tr>
                        </tbody>
                        </Table>
            </section>
            <ToTop />
        </div>
    )
}

export default DublinPage