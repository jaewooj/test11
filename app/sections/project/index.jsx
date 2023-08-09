import styles from './project.module.css'
export const Project = () => {
    return (
        <seciton id="project" className={`con ${styles.project}`} >
            <div className="inner">
                <h2>Projects</h2>
                <div>
                    <article>
                        <div className={styles.view} >
                            <div>
                                <img src="/projects/project1-1.gif" alt="" />
                            </div>
                            <ul>
                                <li> <img src="/projects/project1-1.gif" alt="" /></li>
                                <li> <img src="/projects/project1-1.gif" alt="" /></li>
                                <li> <img src="/projects/project1-1.gif" alt="" /></li>
                            </ul>
                        </div>
                        <div className={styles.detail}>
                            <h3> 바닐라스크립트 팀프로젝트 </h3>
                            <h4> 주제 : 세브란스병원 웹사이트 제작</h4>
                            <p>
                                <span>세브란스병원 홈페이지를 기반으로 서울대병원 홈페이지의 기능 요소들을 조합하여 웹사이트를 제작함</span>
                            </p>
                            <p>
                                <span></span>
                            </p>
                            <ul>
                                <li><b>메인페이지</b> : <strong> 조회, 덧글, 게시판, 상세페이지, 카카오 로그인 조회  </strong></li>
                                <li><b>기획서</b> : <strong> <a href="" target="_blank">바로가기</a> </strong></li>
                                <li><b>미리보기</b> : <strong> <a href="" target="_blank">바로가기</a> </strong></li>
                                <li><b>gitHub</b> : <strong> <a href="" target="_blank">바로가기</a></strong></li>
                                <li><b>frontend</b> : <strong> Redux toolkit, styled-component </strong></li>
                                <li><b>backend</b> : <strong> Node.js </strong></li>
                                <li><b>database</b> : <strong> MySQL </strong></li>
                                <li><b>deployment</b> : <strong> AWS </strong></li>
                            </ul>
                        </div>
                    </article>
                    {/*  */}
                </div>
            </div>
        </seciton>
    );
};