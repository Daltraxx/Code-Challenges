class PaginationHelper {
    constructor(collection, itemsPerPage) {
        this.collection = collection;
        this.itemsPerPage = itemsPerPage;
        this.pageIndices = new Map();
    }

    itemCount() {
        return this.collection.length;
    }

    pageCount() {
        return Math.ceil(this.itemCount() / this.itemsPerPage);
    }

    pageItemCount(pageIndex) {
        if (pageIndex > this.pageCount() - 1 || pageIndex < 0) {
            return -1;
        } else if (pageIndex < this.pageCount() - 1 || this.itemCount() % this.itemsPerPage === 0) {
            return this.itemsPerPage;
        } else {
            return this.itemCount() % this.itemsPerPage;
        } 
    }

    pageIndex(itemIndex) {
        if (itemIndex < 0 || itemIndex > this.itemCount() - 1) return -1;

        return Math.floor(itemIndex / this.itemsPerPage);
    }
}

const helper = new PaginationHelper(new Array(54), 9);
console.log(helper.itemCount());
console.log(helper.pageCount());
console.log(helper.pageItemCount(-1));
// console.log(helper.pageIndices);
console.log(helper.pageIndex(5));