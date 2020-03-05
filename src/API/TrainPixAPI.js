import LanguageManager from "./LanguageManager";
import Cookies from 'js-cookie';

let TrainPixAPI = {
    search: async (request) => {
        if(request.name.length < 5)
            return [];
        let resp = await fetch('https://cors-anywhere.herokuapp.com/https://trainpix.org/ajax2.php?action=index-qsearch&exact=0&num=' + encodeURIComponent(request.name));
        let json = await resp.json();
        return json.slice(0, request.count);
    },
    photo: (request) => {
        let pid = request.id;
        let pid1 = Math.floor(pid/100000);
        let pid2 = Math.floor(pid/1000%100);
        let pid3 = Math.floor(pid/10%100);
        let url = 'https://trainpix.org/photo/';
        if(pid1 < 10)
            url+='0';
        url += pid1+'/';
        if(pid2 < 10)
            url+='0';
        url += pid2+'/';
        if(pid3 < 10)
            url+='0';
        url += pid3+'/'+pid;
        return {
            id: request.id,
            url: '/photo/'+request.id,
            image_url: url+'.jpg',
            thumbnail_url: url+'_s.jpg',
            shot_date: LanguageManager.getString("no_api"),
            pub_date: LanguageManager.getString("no_api"),
            license: LanguageManager.getString("no_api"),
            location: LanguageManager.getString("no_api"),
            author: TrainPixAPI.author({id: "no_api"}),
            train: TrainPixAPI.train({id: "no_api"})
        };
    },
    train: (request) => {
        return {
            id: request.id,
            name: LanguageManager.getString("model_no_api"),
            model: TrainPixAPI.model({id: "no_api"}),
            photos: [1, 12, 123, 1234, 12345, 123456],
            railway: TrainPixAPI.railway({id: "no_api"}),
            depot: TrainPixAPI.depot({id: "no_api"}),
            builder: TrainPixAPI.builder({id: "no_api"}),
            train_id: LanguageManager.getString("no_api"),
            serial: LanguageManager.getString("no_api"),
            built: "01/01/1970",
            category: LanguageManager.getString("no_api"),
            state: LanguageManager.getString("no_api"),
            note: LanguageManager.getString("no_api"),
            info: LanguageManager.getString("no_api"),
        };
    },
    model: (request) => {
        return {
            id: request.id,
            name: LanguageManager.getString("model_no_api"),
            trains: [1, 2],
        };
    },
    depot: (request) => {
        return {
            id: request.id,
            railway: 0,
            name: LanguageManager.getString("no_api"),
            trains: [1, 2],
        };
    },
    railway: (request) => {
        return {
            id: request.id,
            name: LanguageManager.getString("no_api"),
            depots: [1, 2],
        };
    },
    builder: (request) => {
        return {
            id: request.id,
            name: LanguageManager.getString("no_api"),
            trains: [1, 2],
        };
    },
    author: (request) => {
        return {
            id: request.id,
            name: LanguageManager.getString("no_api"),
            gender: LanguageManager.getString("no_api"),
            birthday: LanguageManager.getString("no_api"),
            nickname: "no_api",
            avatar: "https://sun9-70.userapi.com/c857132/v857132524/72069/vzqQQtXRFgc.jpg",
            desc: LanguageManager.getString("no_api"),
            links: ["https://vk.com/hevav"],
            photos: [1, 2],
        };
    },
    loginID: () => {
        let token = Cookies.get("token");
        if(token === undefined)
            return "Unauthorized";
        else
            return "no_api";
    },
    login: (request) => {
        Cookies.set("token", "no_api");
        window.location.reload();
    },
    register: (request) => {
        Cookies.set("token", "no_api");
        window.location.reload();
    },
    logout: (request) => {
        Cookies.remove("token");
        window.location.reload();
    }
};

export default TrainPixAPI;