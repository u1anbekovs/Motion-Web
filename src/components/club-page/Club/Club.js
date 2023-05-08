import React from "react";
import "../../../style/it-club/Club.scss";

const Club = () => {
    return (
        <section id="clubUs">
            <div className="container">
                <div className="clubUs">
                    <div className="clubUs--block">
                        <h1>Зачем вам <br/> IT-КЛУБ?</h1>
                        <p>Анализируя курсы в Бишкеке мы решили открыть клуб, который поможет студентам
                            подготовиться к реальным проектам. Участники не заканчивая курс смогут понять как
                            работать в команде, научатся презентовать свои работы и поймут какие проблемы бывают на
                            стадии разработки</p>
                    </div>

                    <div className="clubUs--block1">
                        <div>
                            <h1>3</h1>
                            <p>Месяца</p>
                        </div>
                        <div>
                            <h1>Talking club</h1>
                            <p>Каждую неделю</p>
                        </div>
                        <div>
                            <h1>3</h1>
                            <p>Проекта</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Club;