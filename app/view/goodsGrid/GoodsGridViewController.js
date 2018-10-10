Ext.define('ExtGoods.view.goodsGrid.GoodsGridViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.goodsGridViewController',

    requires: [
        'ExtGoods.view.card.CardView'
    ],

    onIDFilter: function (textfield, e) {
        if (e.getKey() === e.ENTER) {
            var textfieldValue = textfield.getValue();
            var store = this.getView().getStore();

            if (textfieldValue.length === 0) {
                store.clearFilter();
            } else {
                store.addFilter([{
                    property: 'id',
                    value: textfieldValue
                }]);
            }
        }
    },

    onDescriptionFilter: function (textfield, e) {
        if (e.getKey() === e.ENTER) {
            var textfieldValue = textfield.getValue();
            var store = this.getView().getStore();

            if (textfieldValue.length === 0) {
                store.clearFilter();
            } else {
                store.addFilter([{
                    property: 'description',
                    operator: 'like',
                    value: textfieldValue
                }]);
            }
        }
    },

    onItemSelected: function (rowModel, currentRecord, index, eOpts) {
        Ext.create({
            xtype: 'window',
            width: '310pt',
            height: '230pt',
            resizable: false,
            closeAction: 'hide',
            bind: {
                title: 'Карточка товара: {currentRecord.product.name}'
            },
            items: {
                xtype: 'cardView'
            }
        }).show();
    }
});
