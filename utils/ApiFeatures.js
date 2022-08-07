class ApiFeatures {
    constructor(query, querystr) {
        this.query = query;
        this.querystr = querystr;
    }

    search() {


        const keyword = this.querystr.keyword ?
            {
                category: {
                    $regex: this.querystr.keyword,
                    $options: 'i'
                }
            }
            : {

            }


        this.query = this.query.find({ ...keyword })
        return this;
    }

    filter() {


        const titleKeyword = this.querystr.titleKeyword ?
            {
                title: {
                    $regex: this.querystr.titleKeyword,
                    $options: 'i'
                }
            }
            : {

            }


        this.query = this.query.find({ ...titleKeyword })
        return this;

    }


    pagination(resutPerPage) {
        const currentPage = Number(this.querystr.page) || 1;
        const skip = (resutPerPage) * (currentPage - 1);
        this.query = this.query.limit(resutPerPage).skip(skip)
        return this;
    }


}
module.exports = ApiFeatures