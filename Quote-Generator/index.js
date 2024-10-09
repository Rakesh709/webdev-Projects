


async function getQuotes(){
    try {
        let quotesAPI = await fetch("https://cors-anywhere.herokuapp.com/https://vs174405svc310856.mock.blazemeter.com/v1/quote");
        let quoteResp = await quotesAPI.json();
        console.log(quoteResp);
        
       
    } catch (error) {
        console.log("error",error);
        
    }
    
}

getQuotes()