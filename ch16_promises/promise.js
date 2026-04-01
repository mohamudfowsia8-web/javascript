const mypromise = new Promise(function (resolve,reject) {
    let success = false;
    
    if (success) {
    resolve ("The operation was successful!");
    }else {
    reject ("something went wrong.");
    }
});

    mypromise
    .then(function (result){
        console.log(result);
    })
    .catch(function (error){
        console.log(error);
    });
    
