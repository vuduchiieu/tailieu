import classNames from "classnames/bind";
import styles from "./listVideo.module.scss";
import { useAppContext } from "../../../components/context/AppContext";
import { useEffect, useRef, useState } from "react";

const cx = classNames.bind(styles);

function ListVideo({ lessonsData }) {
    const {
        selectedVideo,
        setSelectedVideo,
        selecTitle,
        setSelecTitle,
        active,
        setActive,
        handleOpen,
    } = useAppContext();
    const activeButtonRef = useRef(null);

    const [onOff, setOnOff] = useState(true);

    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleWindowResize = () => {
            const newWidth = window.innerWidth;
            setWidth(newWidth);
            if (newWidth < 739) {
                setOnOff(true);
            } else if (newWidth < 1570) {
                setOnOff(false);
            } else {
                setOnOff(true);
            }
        };
        window.addEventListener("resize", handleWindowResize);
        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, [width]);

    useEffect(() => {
        if (active === null) {
            setSelectedVideo(lessonsData[0].src);
            setSelecTitle(lessonsData[0].title);
            setActive(lessonsData[0].id);
        }
    }, [lessonsData]);
    useEffect(() => {
        if (activeButtonRef.current) {
            activeButtonRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [active, activeButtonRef]);

    return (
        <div className={cx("lessons")}>
            <div
                className={cx("main")}
                style={onOff ? { display: "flex" } : { display: "block" }}
            >
                <div className={cx("content")}>
                    <div className={cx("video")}>
                        {selectedVideo && (
                            <iframe
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                src={selectedVideo}
                            ></iframe>
                        )}
                    </div>
                    <div className={cx("title")}>
                        {selecTitle && <h3>{selecTitle}</h3>}
                        <p>Cập nhật tháng 11 năm 2023</p>
                    </div>
                </div>
                {onOff && (
                    <div className={cx("nav-bar")}>
                        {lessonsData.map((item) => (
                            <button
                                onClick={() =>
                                    handleOpen(item.src, item.id, item.title)
                                }
                                key={item.id}
                                className={cx("button", {
                                    active: item.id === active,
                                })}
                                ref={
                                    item.id === active ? activeButtonRef : null
                                }
                            >
                                <p>{item.title}</p>
                            </button>
                        ))}
                    </div>
                )}
            </div>
            <div className={cx("footer")}>
                <div
                    onClick={() => {
                        setOnOff(!onOff);
                    }}
                    className={cx("wrapper")}
                >
                    <p>{selecTitle}</p>
                    {onOff ? (
                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNiAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1LjMxMjUgMC41QzE0Ljk5NjEgMC41IDE0Ljc1IDAuNzgxMjUgMTQuNzUgMS4wNjI1VjEzLjQzNzVDMTQuNzUgMTMuNzUzOSAxNC45OTYxIDE0IDE1LjMxMjUgMTRDMTUuNTkzOCAxNCAxNS44NzUgMTMuNzUzOSAxNS44NzUgMTMuNDM3NVYxLjA2MjVDMTUuODc1IDAuNzgxMjUgMTUuNTkzOCAwLjUgMTUuMzEyNSAwLjVaTTcuODI0MjIgMS44MDA3OEM3LjYxMzI4IDEuNTg5ODQgNy4yMjY1NiAxLjU4OTg0IDcuMDE1NjIgMS44MDA3OEM2LjgwNDY5IDIuMDExNzIgNi44MDQ2OSAyLjM5ODQ0IDcuMDE1NjIgMi42MDkzOEwxMS4xMjg5IDYuNjg3NUgwLjY4NzVDMC4zNzEwOTQgNi42ODc1IDAuMTI1IDYuOTY4NzUgMC4xMjUgNy4yNUMwLjEyNSA3LjU2NjQxIDAuMzcxMDk0IDcuODEyNSAwLjY4NzUgNy44MTI1SDExLjEyODlMNy4wMTU2MiAxMS45MjU4QzYuODA0NjkgMTIuMTM2NyA2LjgwNDY5IDEyLjUyMzQgNy4wMTU2MiAxMi43MzQ0QzcuMjI2NTYgMTIuOTQ1MyA3LjYxMzI4IDEyLjk0NTMgNy44MjQyMiAxMi43MzQ0TDEyLjg4NjcgNy42NzE4OEMxMi45OTIyIDcuNTY2NDEgMTMuMDYyNSA3LjQyNTc4IDEzLjA2MjUgNy4yNUMxMy4wNjI1IDcuMTA5MzggMTIuOTkyMiA2Ljk2ODc1IDEyLjg4NjcgNi44NjMyOEw3LjgyNDIyIDEuODAwNzhaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfNjc2XzI5NDMpIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfNjc2XzI5NDMiIHgxPSItNCIgeTE9Ii01IiB4Mj0iLTQiIHkyPSIxOSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjNUVCQkZGIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ExNzRGRiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=" />
                    ) : (
                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTMiIHZpZXdCb3g9IjAgMCAxNiAxMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAuMTI1IDEuMDYyNUMwLjEyNSAwLjc4MTI1IDAuMzcxMDk0IDAuNSAwLjY4NzUgMC41SDE1LjMxMjVDMTUuNTkzOCAwLjUgMTUuODc1IDAuNzgxMjUgMTUuODc1IDEuMDYyNUMxNS44NzUgMS4zNzg5MSAxNS41OTM4IDEuNjI1IDE1LjMxMjUgMS42MjVIMC42ODc1QzAuMzcxMDk0IDEuNjI1IDAuMTI1IDEuMzc4OTEgMC4xMjUgMS4wNjI1Wk0wLjEyNSA2LjY4NzVDMC4xMjUgNi40MDYyNSAwLjM3MTA5NCA2LjEyNSAwLjY4NzUgNi4xMjVIMTUuMzEyNUMxNS41OTM4IDYuMTI1IDE1Ljg3NSA2LjQwNjI1IDE1Ljg3NSA2LjY4NzVDMTUuODc1IDcuMDAzOTEgMTUuNTkzOCA3LjI1IDE1LjMxMjUgNy4yNUgwLjY4NzVDMC4zNzEwOTQgNy4yNSAwLjEyNSA3LjAwMzkxIDAuMTI1IDYuNjg3NVpNMTUuMzEyNSAxMi44NzVIMC42ODc1QzAuMzcxMDk0IDEyLjg3NSAwLjEyNSAxMi42Mjg5IDAuMTI1IDEyLjMxMjVDMC4xMjUgMTIuMDMxMiAwLjM3MTA5NCAxMS43NSAwLjY4NzUgMTEuNzVIMTUuMzEyNUMxNS41OTM4IDExLjc1IDE1Ljg3NSAxMi4wMzEyIDE1Ljg3NSAxMi4zMTI1QzE1Ljg3NSAxMi42Mjg5IDE1LjU5MzggMTIuODc1IDE1LjMxMjUgMTIuODc1WiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzY1Ml8xNzc1KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzY1Ml8xNzc1IiB4MT0iLTQiIHkxPSItNSIgeDI9Ii00IiB5Mj0iMTkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzVFQkJGRiIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNBMTc0RkYiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K" />
                    )}
                </div>
            </div>
        </div>
    );
}

export default ListVideo;
