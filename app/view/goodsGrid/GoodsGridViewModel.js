Ext.define('ExtGoods.view.goodsGrid.GoodsGridViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.goodsGridViewModel',

    requires: [
        'ExtGoods.view.goodsGrid.GoodsGridView'
    ],

    formulas: {
        currentProduct: {
            bind: '{refGoodsGrid.selection}',
            get: function (product) {
                this.set('currentRecord.product', product);
                return product;
            }
        }
    }
});