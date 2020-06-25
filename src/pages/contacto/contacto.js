import React from 'react'
import Main from './../main/main'
import './contacto.scss'

function Contacto ( props ) {

    return (
        <Main>
           <div className="container">

               <div className="row">
                   <div className="col m12">
                        <p className="contacto-title">Contacto</p>
                   </div>
               </div>

               <div className="row">
                   <div className="col m6 s12">
                        <div className="col m12 s6">
                            <p className="contacto-paragraph"><strong>Buenos Aires</strong></p>
                            <p className="contacto-paragraph">Sucre 632, 3er Piso</p>
                            <p className="contacto-paragraph">CABA, Argentina</p>
                            <br />
                        </div>
                        <div className="col m12 s6">
                            <p className="contacto-paragraph"><strong>Sao Paulo</strong></p>
                            <p className="contacto-paragraph">Rua Butanta 510</p>
                            <p className="contacto-paragraph">Pinheiros, Sao Paulo, Brasil</p>
                            <br />
                        </div>
                        <div className="col m12 s12">
                            <p className="contacto-paragraph"><strong>info@stadiumglobal.com</strong></p>
                            <p className="contacto-paragraph">+54 11 4787 8700</p>
                            <br />
                        </div>
                   </div>
                   <div className="col m6 s12">
                       <form>
                           <div className="input-field form-group">
                               <input className="form-control" type="text" name="nombre" />
                               <label>Nombre</label>
                           </div>

                           <div className="input-field form-group">
                                <input className="form-control" type="email" name="mail" required="required" />
                                <label>Mail *</label>
                           </div>

                            <div class="input-field">
                                <textarea id="textarea1" class="materialize-textarea"></textarea>
                                <label for="textarea1">Mensaje</label>
                            </div>

                            <div className="col m12 contacto-btn-submitter">
                                <button className="btn-flat contacto-link-enviar" type="submit">ENVIAR</button>
                            </div>                            
                       </form>
                   </div>
               </div>

           </div>
        </Main>
    );
}

export default Contacto;
