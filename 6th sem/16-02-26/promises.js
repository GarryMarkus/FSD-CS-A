const myPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const success= Math.random() > 0.5;

        if(success){
            resolve("Success");
        }
        else{
            reject("Error");
        }
    });
});

myPromise
    .then((result)=>{
        console.log(result);
    })
    .catch((error)=>{
        console.log(error);
    });