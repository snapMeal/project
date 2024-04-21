"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Features {
    constructor(qry, qryfilter) {
        this.qry = qry;
        this.qryfilter = qryfilter;
    }
    search() {
        const keyword = this.qryfilter.keyword ? {
            title: {
                $regex: this.qryfilter.keyword,
                $option: 'i'
            }
        } : {};
        this.qry = this.qry.find(Object.assign({}, keyword));
        return this;
    }
}
exports.default = Features;
