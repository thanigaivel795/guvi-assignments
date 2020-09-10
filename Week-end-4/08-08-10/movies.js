class Movies{
    constructor(title,studio,rating='PG13'){
        this.title=title;
        this.studio=studio;
        this.rating=rating
    }
    static getPG(arr){
        return result = arr.filter((item)=>{
            if (item.rating==='PG13'){
                return item
            }
        })
    
    }
}


res=Movies.getPG([new Movies('Dark Knight','Warner Bros','R'),new Movies('Dictator','Warner Bros','PG13'),new Movies('Friends in Benifits','Warner Bros','PG13')])
console.log(res)

m = new Movies('The Casino Royale',"eon brothers","PG13")
console.log(m)