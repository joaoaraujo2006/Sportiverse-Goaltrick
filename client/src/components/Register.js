import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import icone from '../imgs/icones.png'
import './css/register.css';
import './css/index.css';

const Register = () => {
    return (
        <div className='container'>
            <motion.div
                initial={{ opacity: 0, y: -100 }}   // Começa invisível e acima
                animate={{ opacity: 1, y: 0 }}     // Anima para visível e posição normal
                transition={{ duration: 1 }}     // Duração do efeito
            ><div className='imagem-reg'></div>
            </motion.div>
            <div className='register column center'>

                <motion.div
                    initial={{ opacity: 0, y: 100 }}   // Começa invisível e acima
                    animate={{ opacity: 1, y: 0 }}     // Anima para visível e posição normal
                    transition={{ duration: 1.5 }}     // Duração do efeito
                    className='container-reg column'
                >
                    <div className='titulo-reg'>
                        <h2 className='titulo-register inter white'>Create your <span className='blue'>account</span></h2>
                    </div>
                    <div className='container-input-reg2 row center'>
                        <div className='column'>
                            <h5 className='input-text inter'>Full name:</h5>
                            <input className='input-reg' type="text" id="nome" name="nome"></input>
                        </div>
                    </div>
                    <div className='container-input-reg2 row center'>
                        <div className='column'>
                            <h5 className='input-text inter'>Email:</h5>
                            <input className='input-reg' type="text" id="email" name="email"></input>
                        </div>
                    </div>
                    <div className='container-input-reg2 row center'>
                        <div className='column'>
                            <h5 className='input-text inter'>Password:</h5>
                            <input className='input-reg' type="text" id="password" name="password"></input>
                        </div>
                    </div>
                    <div className='container-input-reg2 row center'>
                        <div className='column'>
                            <h5 className='input-text inter'>Confirm password:</h5>
                            <input className='input-reg' type="text" id="c-password" name="c-password"></input>
                        </div>
                    </div>
                    <div className='container-input-reg column center'>
                        <button className='botaoSport'>
                            <img src={icone} className='iconeBotao'></img>
                        </button>
                        <Link to="/feed"><button className='botaoEntrar inter'>Create</button></Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Register;
