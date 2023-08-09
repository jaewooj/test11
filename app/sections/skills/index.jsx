import styles from "./skills.module.css";
import './skills.css'

const skillList = [
    {id:1, text:'HTML', css:'html', per:'95%'},
    {id:2, text:'CSS', css:'css', per:'95%'},
    {id:3, text:'Vanilla JS/es6', css:'javascript', per:'90%'},
    {id:4, text:'ReactJS', css:'react', per:'90%'},
    {id:5, text:'Redux Toolkit', css:'redux', per:'70%'},
    {id:6, text:'Nextjs', css:'nextjs', per:'80%'},
    {id:7, text:'MySQL', css:'mysql', per:'50%'},
    {id:8, text:'NodeJS', css:'nodejs', per:'30%'},
    {id:9, text:'ExpressJS', css:'expressjs', per:'30%'}
]
const imgList = [
    {id:1, imgurl:'./skills/html5.png',text:'html'},
    {id:2, imgurl:'./skills/css.png',text:'css'},
    {id:3, imgurl:'./skills/java.png',text:'java'},
    {id:4, imgurl:'./skills/react.png',text:'react'},
    {id:5, imgurl:'./skills/redux.png',text:'redux'},
    {id:6, imgurl:'./skills/next.svg',text:'next'},
    {id:7, imgurl:'./skills/mysql.png',text:'mysql'},
    {id:8, imgurl:'./skills/node.png',text:'node'},
    {id:9, imgurl:'./skills/git.png',text:'git'},
    {id:10, imgurl:'./skills/aws.png',text:'aws'},
    {id:11, imgurl:'./skills/figma.png',text:'figma'},
    {id:12, imgurl:'./skills/js.png',text:'js'},
    {id:13, imgurl:'./skills/aws.png',text:'aws'},
    {id:14, imgurl:'./skills/sass.png',text:'sass'}
    // {id:9, imgurl:'./skills/',text:''},
]
export const Skills = () => {
    return (
        <section id="skills" className={`con ${styles.skills_wrap}` }>
            <div className="inner">
                <h2>Skills </h2>
                <div className={styles.skills_box}>
                <article>
                    {
                        skillList.map(item=><div className={styles.skill_box}>
                            <span className={styles.title}>{item.text}</span>
                            <div className={styles.skill_bar}>
                                <span className={`${styles.skill_per} ${item.css}`}>
                                    <span className={styles.tooltip}>{item.per}</span>
                                </span>
                            </div>
                        </div>)
                    }
                        
                  </article>
                  <article>
                    <ul className={styles.list}>
                        {
                            imgList.map(item=><li key={item.id}>
                                <img src={item.imgurl} alt="" />
                            </li>)
                        }
                    </ul>
                  </article>
                </div>
            </div>
        </section>
    );
};