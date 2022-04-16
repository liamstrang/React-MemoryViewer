/**
@author Liam Strang - 45426392
@description generates an array of images based on the username

@param username
@returns an array of images generated by "picsum"
*/
const GenerateImages = (username) => {
    let travelling = []
    let home = []
    let url = "https://picsum.photos/seed/";
    for(let i = 0; i < 10; i++){
      let image = url+username+i+"/400/400";
      travelling.push(image);
    }
    for(let i = 10; i < 20; i++){
      let image = url+username+i+"/400/400";
      home.push(image);
    }
    return {"Travelling": travelling, "Home_Country": home};
}

export default GenerateImages