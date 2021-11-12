import '../../style.css'
import Foto01 from '../../assets/places/california/foto-1.jpg'
import Foto02 from '../../assets/places/california/foto-2.jpeg'
import Foto03 from '../../assets/places/california/foto-3.jpeg'
import Foto04 from '../../assets/places/california/foto-4.jpeg'
import Foto05 from '../../assets/places/california/foto-5.jpeg'
import Foto06 from '../../assets/places/california/foto-6.jpg'
import Foto07 from '../../assets/places/california/foto-7.jpg'
import Foto08 from '../../assets/places/california/foto-8.jpeg'
import { Table } from 'react-bootstrap'
import ToTop from '../../components/ToTop/ToTop'

export const CaliforniaPage = () => {
    return (
        <div>
            <section className="container">
                <div class="text-center my-5">
                <span className="h6 d-block">
                    APROVEITE A SUA VIAGEM AO MÁXIMO
                    </span>
                        <h2 className="display-4 text-primary">
                            Descubra a Califórnia
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
                    <img className="img-fluid mb-4" src={Foto06} alt="Foto 05" />
                </div>
                <div className="col-md">
                    <img className="img-fluid mb-4" src={Foto05} alt="Foto 06" />
                    <img className="img-fluid mb-4" src={Foto07} alt="Foto 07" />
                    <img className="img-fluid mb-4" src={Foto08} alt="Foto 08" />
                </div>
            </div>
            </section>

            <section className="container">
            <div class="text-center my-5">
                <span className="h6 d-block">
                    DESCUBRA O QUE ACONTECE POR LÁ
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
                            <td>14/10/21</td>
                            <td>Dead or Alive</td>
                            <td>The Observatory North Park - San Diego</td>
                            <td><a href="#" className="btn btn-outline-secondary btn-sm">Comprar ticket</a></td>
                            </tr>
                            <tr>
                            <td>21/12/21</td>
                            <td>Seal</td>
                            <td>Gallagher's Pub HB - Huntington Beach</td>
                            <td><a href="#" className="btn btn-outline-secondary btn-sm">Comprar ticket</a></td>
                            </tr>
                            <tr>
                            <td>09/01/22</td>
                            <td>Timecop1983</td>
                            <td>Dolby Theatre - Hollywood</td>
                            <td><a href="#" className="btn btn-outline-secondary btn-sm">Comprar ticket</a></td>
                            </tr>
                            <tr>
                            <td>29/03/22</td>
                            <td>Inugami Circus-dan</td>
                            <td>The Moroccan Lounge - Los Angeles</td>
                            <td><a href="#" className="btn btn-outline-secondary btn-sm">Comprar ticket</a></td>
                            </tr>
                        </tbody>
                        </Table>
            </section>
            <ToTop />
        </div>
    )
}

export default CaliforniaPage