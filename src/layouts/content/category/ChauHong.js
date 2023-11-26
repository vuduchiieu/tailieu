import classNames from "classnames/bind";
import styles from "./category.module.scss";
import { CHAU_HONG } from "../../../components/categorys/categorys";

const cx = classNames.bind(styles);
function ChauHong() {
    return (
        <div className={cx("lits-lesson")}>
            {CHAU_HONG.map((item, i) => (
                <div key={i} className={cx("lesson")}>
                    <p>{item.title}</p>
                    <iframe
                        src={item.src}
                        width="950"
                        height="550"
                        frameborder="0"
                        allowfullscreen=""
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    ></iframe>
                </div>
            ))}
        </div>
    );
}

export default ChauHong;
