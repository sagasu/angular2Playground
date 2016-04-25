System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Product;
    return {
        setters:[],
        execute: function() {
            // this class is not needed, it just illustrates what to do if we need to add a method to a contract described by the interface.
            Product = (function () {
                function Product(productId, productName, productCode, releaseDate, price, description, starRating, imageUrl) {
                    this.productId = productId;
                    this.productName = productName;
                    this.productCode = productCode;
                    this.releaseDate = releaseDate;
                    this.price = price;
                    this.description = description;
                    this.starRating = starRating;
                    this.imageUrl = imageUrl;
                }
                Product.prototype.calculateDiscount = function (precent) {
                    return this.price - (this.price * precent / 100);
                };
                return Product;
            }());
            exports_1("Product", Product);
        }
    }
});
//# sourceMappingURL=product.js.map