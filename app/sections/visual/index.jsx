import styles from "./visual.module.css";

export const Visual = () => {
  return (
    <section id="visual" className={styles.visual}>
        <div className={`inner ${styles.visual_inner}`}>
            <h2>
                <span>jaewoos</span>
                <span>PORTFOLIO</span>
            </h2>
            <p>에너지 IT 분야를 이끌어 나갈 수 있는 풀스택 개발자가 되겠습니다.</p>
            <p>Next.js로 PORTFOLIO사이트를 제작했습니다.</p>
        </div>
    </section>
  );
};