function doSomething(){
    throw new Error("Something went wrong!");
}

function init(){
    try{
        doSomething();
    }
    catch(e){
        console.log(e);
    }

    console.log("After successfull error handling");
}

init();