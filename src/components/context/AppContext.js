import { createContext, useContext, useEffect, useState } from "react";
import img from "../../assets/img";
import axios from "axios";

export const AppContext = createContext();

export const Contexts = ({ children }) => {
    const [lessons, setLessons] = useState([
        {
            title: "Chậu hông",
            img: img.chauHong,
            length: 3,
            to: "/lessons/chauHong",
        },
        {
            title: "Chi dưới",
            img: img.chiDuoi,
            length: 5,
            to: "/lessons/chiDuoi",
        },
        {
            title: "Chi trên",
            img: img.chiTren,
            length: 4,
            to: "/lessons/chiTren",
        },
        {
            title: "Đầu mặt cổ",
            img: img.dauMatCo,
            length: 8,
            to: "/lessons/dauMatCo",
        },
        {
            title: "Lồng ngực",
            img: img.longNguc,
            length: 4,
            to: "/lessons/longNguc",
        },
        {
            title: "Thần kinh trung ương",
            img: img.tktw,
            length: 6,
            to: "/lessons/tktw",
        },
    ]);

    const [chauHong, setChauHong] = useState([
        {
            id: 0,
            title: "1. Mạch máu thần kinh bụng, chậu hông",
            src: "https://www.youtube.com/embed/6KomMohxEuU?si=LP33vJYKNlTxEihk",
            to: "/lessons/chauHong",
        },
        {
            id: 1,
            title: "2. Tạng bụng và chậu hông",
            src: "https://www.youtube.com/embed/atBoCN3eWQ4?si=Dg65ILiINvSgfQsE",
            to: "/lessons/chauHong",
        },
        {
            id: 2,
            title: "3. Thành bụng và chậu hông",
            src: "https://www.youtube.com/embed/8kQdtXbkmkI?si=S1IUu3jrQfJdv6Az",
            to: "/lessons/chauHong",
        },
    ]);

    const [chiDuoi, setChiDuoi] = useState([
        {
            id: 0,
            title: "1. Tổng quan cơ chi dưới",
            src: "https://www.youtube.com/embed/qjUk8yqnBAI?si=1KChVjN_tS2jYJtj",
            to: "/lessons/chiDuoi",
        },
        {
            id: 1,
            title: "2. Mạch chi dưới",
            src: "https://www.youtube.com/embed/yE_g2V21lgU?si=Cd9zxs3gCAgSFFl0",
            to: "/lessons/chiDuoi",
        },
        {
            id: 2,
            title: "3. Thần kinh chi dưới",
            src: "https://www.youtube.com/embed/HC7FrL53SKQ?si=I4IraIl4nMQgQ00-",
            to: "/lessons/chiDuoi",
        },
        {
            id: 3,
            title: "4. Tổng quan vận động chi dưới",
            src: "https://www.youtube.com/embed/K4fTBGvGyfk?si=BgLKV-a9u27W1A75",
            to: "/lessons/chiDuoi",
        },
        {
            id: 4,
            title: "5. Thiết đồ chi dưới",
            src: "https://www.youtube.com/embed/TUz6bbmG3d8?si=7mrxVsTHBGtndjUf",
            to: "/lessons/chiDuoi",
        },
    ]);

    const [chiTren, setChiTren] = useState([
        {
            id: 0,
            title: "1. Tổng quan cơ chi trên",
            src: "https://www.youtube.com/embed/ku7Q2g59IlQ?si=oBagOyP0Q9qW46Yv",
            to: "/lessons/chiTren",
        },
        {
            id: 1,
            title: "2. Thiết đồ chi trên",
            src: "https://www.youtube.com/embed/-7N_sommD0Q?si=r_WVZPgbRn35oHK_",
            to: "/lessons/chiTren",
        },
        {
            id: 2,
            title: "3. Tổng quan mạch chi trên",
            src: "https://www.youtube.com/embed/MsrrYm0bnWs?si=0ahpJm0a2BimLJkG",
            to: "/lessons/chiTren",
        },
        {
            id: 3,
            title: "4. Tổng quan thần kinh chi trên",
            src: "https://www.youtube.com/embed/Kjepduv99jY?si=AQuUVTNwZ7-OJLq0",
            to: "/lessons/chiTren",
        },
    ]);

    const [dauMatCo, setDauMatCo] = useState([
        {
            id: 0,
            title: "1. Xương cơ đầu mặt",
            src: "https://www.youtube.com/embed/eh11cpE7if8?si=IfG1dFZITTxwFzuX",
            to: "/lessons/dauMatCo",
        },
        {
            id: 1,
            title: "2. Mũi, hầu, thanh quản",
            src: "https://www.youtube.com/embed/eWTy4NUFQYk?si=LTfXVzl_W2RZ2hP4",
            to: "/lessons/dauMatCo",
        },
        {
            id: 2,
            title: "3. Thần kinh đầu cổ",
            src: "https://www.youtube.com/embed/ABVL3GMPXnk?si=gFket32KrBxiMDt_",
            to: "/lessons/dauMatCo",
        },
        {
            id: 3,
            title: "4. Động mạch dưới đòn",
            src: "https://www.youtube.com/embed/STNaKKJf0eM?si=0N8Ivy0hhNqgG3TH",
            to: "/lessons/dauMatCo",
        },
        {
            id: 4,
            title: "5. Miệng và cấu trúc phụ thuộc",
            src: "https://www.youtube.com/embed/iaJxkoHFzkE?si=OWkAc9atKP4CVG-E",
            to: "/lessons/dauMatCo",
        },
        {
            id: 5,
            title: "6. Động mạch cảnh và xoang tĩnh mạch sọ",
            src: "https://www.youtube.com/embed/MXacwDvmDZo?si=NPxsXuZZEu7INvVV",
            to: "/lessons/dauMatCo",
        },
        {
            id: 6,
            title: "7. Tai",
            src: "https://www.youtube.com/embed/tseHFOSSjPw?si=bsvJWfAittVrsY9R",
            to: "/lessons/dauMatCo",
        },
        {
            id: 7,
            title: "8. Mắt",
            src: "https://www.youtube.com/embed/kmMZqD0OzmY?si=boqwI-1rR7yPXBFN",
            to: "/lessons/dauMatCo",
        },
    ]);

    const [longNguc, setLongNguc] = useState([
        {
            id: 0,
            title: "1. Thành ngực",
            src: "https://www.youtube.com/embed/7J4YJjBNckI?si=75sV5aepZfCk4CGZ",
            to: "/lessons/longNguc",
        },
        {
            id: 1,
            title: "2. Phổi",
            src: "https://www.youtube.com/embed/KP2Ux1vwo6Y?si=cQc2C3n88nvqM0P-",
            to: "/lessons/longNguc",
        },
        {
            id: 2,
            title: "3. Tim",
            src: "https://www.youtube.com/embed/1ZHzBQwaZoQ?si=C6hrMNqWGinK2icD",
            to: "/lessons/longNguc",
        },
        {
            id: 3,
            title: "4. Trung thất",
            src: "https://www.youtube.com/embed/vCdPp6bsSFU?si=mxYG8PYuTs03otDg",
            to: "/lessons/longNguc",
        },
    ]);

    const [thanKinhTrungUong, setThanKinhTrungUong] = useState([
        {
            id: 0,
            title: "1. Dây thần kinh sọ não",
            src: "https://www.youtube.com/embed/84us9xLmn7M?si=Hiuctfqfy4HvZGmJ",
            to: "/lessons/tktw",
        },
        {
            id: 1,
            title: "2. Màn não tủy",
            src: "https://www.youtube.com/embed/5pzFQVyKc0A?si=D60jN7NF3LdhFhJz",
            to: "/lessons/tktw",
        },
        {
            id: 2,
            title: "3. Màn não tủy #2",
            src: "https://www.youtube.com/embed/p21hvWJh8do?si=bmpflyz85CYhbMLz",
            to: "/lessons/tktw",
        },
        {
            id: 3,
            title: "4. Dây truyền thần kinh",
            src: "https://www.youtube.com/embed/tPzYXxhtZjI?si=0ItJ5ovBwjDKQddj",
            to: "/lessons/tktw",
        },
        {
            id: 4,
            title: "5. Tổng quan thần kinh sọ",
            src: "https://www.youtube.com/embed/ffGnZ3GlSDs?si=6Iv9tchbfnKB5Ko_",
            to: "/lessons/tktw",
        },
        {
            id: 5,
            title: "6. Chất xám của não",
            src: "https://www.youtube.com/embed/I7Yi2L87IX4?si=ySY9WrWJxi31fINx",
            to: "/lessons/tktw",
        },
    ]);

    const [listGhiChu, setListGhiChu] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://be-linhzin.vercel.app/api/v1/ghichus"
                );
                setListGhiChu(response.data.data);
            } catch (error) {
                console.error("Error fetching existing users:", error);
            }
        };
        fetchData();
    }, []);

    const [selectedVideo, setSelectedVideo] = useState(null);
    const [selecTitle, setSelecTitle] = useState(null);
    const [active, setActive] = useState(0);
    const [ghichu, setGhiChu] = useState([]);
    const [chitiet, setChiTiet] = useState(false);

    const handleOpen = (src, id, title) => {
        setActive(id);
        setSelectedVideo(src);
        setSelecTitle(title);
    };

    return (
        <AppContext.Provider
            value={{
                lessons,
                chauHong,
                chiDuoi,
                chiTren,
                dauMatCo,
                longNguc,
                thanKinhTrungUong,
                listGhiChu,
                setListGhiChu,
                selectedVideo,
                setSelectedVideo,
                selecTitle,
                setSelecTitle,
                active,
                setActive,
                handleOpen,
                ghichu,
                setGhiChu,
                chitiet,
                setChiTiet,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    return useContext(AppContext);
};
