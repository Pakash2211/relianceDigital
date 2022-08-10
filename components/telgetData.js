let telgetData = async(url) =>{

    try {
        let res = await fetch(url);
        let data = await res.json();
 return data;
        
    } catch (error) {
        console.log(error);
    }
}

export{telgetData};
