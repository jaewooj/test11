import { AiFillGithub } from "react-icons/ai";
import styles from "./about.module.css";

export const About = () => {
  return (
    <section id="about" className={`con`}>
        <div className="inner">
            <h2>About me</h2>
            <div>
                <div className={styles.about_wrap}>
                    <article className={styles.pic}>
                        <img src="/about/img1.jpg" alt="" />
                    </article>
                    <article className={styles.desc}>
                        <h3>정재우<span>JEONG JAE WOO</span></h3>
                        <ul>
                            <li><b>이름</b>:<strong>정재우</strong></li>
                            <li><b>연락처</b>:<strong>010-3670-0000</strong></li>
                            <li><b>생년월일</b>:<strong>91.00.00</strong></li>
                            <li><b>주소</b>:<strong>인천시 계양구</strong></li>
                            <li><b>이메일</b>:<strong>jjw1914@naver.com</strong></li>
                            <li><b>학력</b>:<strong>OO대학교(에너지자원공학과)</strong></li>
                            <li><b>자격증</b>:<strong>정보처리기사, 신재생발전설비기사, 캐드, 컴활, 워드 등 </strong></li>
                        </ul>
                        <p>
                            <a href="#" target="_blank"><i><AiFillGithub/></i></a>
                            <a href="#" target="_blank"><i><AiFillGithub/></i></a>
                        </p>
                    </article>
                </div>
                <div className={styles.about_bottom}>
                풀스택 개발자를 목표로 하는 주니어 개발자입니다.<br/>
                기존 에너지분야에서 EMS 구축 및 국가R&D사업을 담당하였으며, 이러한 경험을 기반으로 <br/> EMS 플랫폼 개발부터 시스템구축까지 전반적인 업무를 수행하겠습니다.<br/>
                
                </div>
            </div>
        </div>
    </section>
  );
};