import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import icone from '../imgs/icones.png'


import './css/login.css';
import './css/index.css';

const Login = () => {
    const [texto, setTexto] = useState('');

    return (
        <div className='container'>
            <motion.div
                initial={{ opacity: 0, y: -100 }}   // Começa invisível e acima
                animate={{ opacity: 1, y: 0 }}     // Anima para visível e posição normal
                transition={{ duration: 1 }}     // Duração do efeito
            ><div className='imagem'></div>
            </motion.div>
            <div className='login column center'>

                <motion.div
                    initial={{ opacity: 0, y: 100 }}   // Começa invisível e acima
                    animate={{ opacity: 1, y: 0 }}     // Anima para visível e posição normal
                    transition={{ duration: 1.5 }}     // Duração do efeito
                    className='container-log column'>
                        <div className='container-titulo'>
                            <h1 className='titulo-login inter white'>Login</h1>
                        </div>
                        <div className='container-input row center'>
                            <div className='column'>
                                <h5 className='input-text inter'>Email:</h5>
                                <input className='input' type="text" id="nome" name="nome"></input>
                            </div>
                        </div>
                        <div className='container-input row center'>
                            <div className='column'>
                                <h5 className='input-text inter'>Password:</h5>
                                <input className='input' type="text" id="nome" name="nome"></input>
                            </div>
                        </div>
                        <div className='container-input2 column center'>
                            <Link to="/feed"><button className='botaoEntrar inter'>Enter</button></Link>
                            <button className='botaoSport'>
                                <img src={icone} className='iconeBotao'></img>
                            </button>
                            <Link to="/register"><h4 className='input-text e inter'>Create you account</h4></Link>
                        </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Login;
