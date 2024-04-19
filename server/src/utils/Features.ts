class Features{
    qry;
    qryfilter;
    constructor(qry,qryfilter){
        this.qry=qry;
        this.qryfilter=qryfilter;
    }
    search(){
        const keyword=this.qryfilter.keyword?{
                title:{
                    $regex:this.qryfilter.keyword,
                    $option:'i'
                }
            }:{};
        this.qry=this.qry.find({...keyword});
        return this;
    }
}
export default Features;