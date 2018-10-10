Ext.define("ExtGoods.model.GoodsModel", {
    extend: 'Ext.data.Model',
    
    fields: [
        {
            name: 'goodsID',
            type: 'number'
        }, {
            name: 'name',
            type: 'string',
            allowNull: false
        }, {
            name: 'description',
            type: 'string',
            allowNull: false
        }, {
            name: 'price',
            type: 'float',
            allowNull: false
        }, {
            name: 'quantity',
            type: 'int',
            allowNull: false
        }
    ]
});