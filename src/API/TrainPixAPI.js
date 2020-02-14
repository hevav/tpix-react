let TrainPixAPI = {
    qsearch: async (request) => {
        let resp = await fetch('https://cors-anywhere.herokuapp.com/https://trainpix.org/ajax2.php?action=index-qsearch&exact=0&num=' + encodeURIComponent(request.name));
        return await resp.json();
    }
    /*
    search: (request) => {
        var state = 0;
        if(request.filter){
            state = request.filter;
        }

        return(osmosis.get('https://trainpix.org/vsearch.php?num=' + encodeURIComponent(request.name) + "&state=" + state)
            .set({"names": ["td.n > a"],
                "stats": ["tr@class"],
                "res": ".main b",
                "links": ['td.n > a@href']
            }));
    },
    train: (request) => {
        return(osmosis.get("https://trainpix.org/vehicle/" + request.id)
            .set({"name": "h1",
                "keys": ['.p0 tr.h21 > td.ds'],
                "props": ['.p0 tr.h21 > td.d'],
                "pics": ['a.prw@href']
            }));
    },
    photo: (request) => {
        return(osmosis.get("https://trainpix.org/photo/" + request.id)
            .set({"link": "#ph@src",
                "author": ".cmt_aname a"
            }));
    },
    random: () => {
        return(osmosis.get("https://trainpix.org/ph.php")
            .set({"link": "#ph@src",
                "author": ".cmt_aname a",
                "name": ".narrow a"
            }));
    }*/
};

export default TrainPixAPI;