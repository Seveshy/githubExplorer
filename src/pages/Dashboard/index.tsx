import React from 'react'
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logoImg} alt="Github Explore" />
            <Title>Explore Repisotórios no Github</Title>

            <Form action="">
                <input placeholder="Digite o nome do repositório"/>
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories>
                <a href="">
                    <img src="https://avatars0.githubusercontent.com/u/33661573?s=460&u=493650a19ca37cb970a20c8d9e46fb80cc7c62f8&v=4"
                        alt="Daniel Major"
                    />
                    <div>
                        <strong>rocketseat/unform</strong>
                        <p>Descrição do repositório</p>
                    </div>

                    <FiChevronRight size={20} />

                </a>

                <a href="">
                    <img src="https://avatars0.githubusercontent.com/u/33661573?s=460&u=493650a19ca37cb970a20c8d9e46fb80cc7c62f8&v=4"
                        alt="Daniel Major"
                    />
                    <div>
                        <strong>rocketseat/unform</strong>
                        <p>Descrição do repositório</p>
                    </div>

                    <FiChevronRight size={20} />

                </a>


                <a href="">
                    <img src="https://avatars0.githubusercontent.com/u/33661573?s=460&u=493650a19ca37cb970a20c8d9e46fb80cc7c62f8&v=4"
                        alt="Daniel Major"
                    />
                    <div>
                        <strong>rocketseat/unform</strong>
                        <p>Descrição do repositório</p>
                    </div>

                    <FiChevronRight size={20} />

                </a>


            </Repositories>
        </>
    );
};

export default Dashboard;
