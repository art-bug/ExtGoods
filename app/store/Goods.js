Ext.define('ExtGoods.store.Goods', {
    extend: 'Ext.data.Store',
    alias: 'store.goods',

    requires: [
        'ExtGoods.model.GoodsModel'
    ],

    storeId: 'goods',

    model: 'ExtGoods.model.GoodsModel',

    idProperty: 'id',

    fields: [
        'id', 'name', 'description', 'price', 'quantity'
    ],

    data: {
        items: [
            {
                id: 1,
                name: 'Ноутбук Lenovo',
                description: 'Ноутбук Thinkpad T460 14"FH',
                price: 100,
                quantity: 8
            },
            {
                id: 2,
                name: 'Клавиатура OKLICK',
                description: 'Клавиатура OKLICK 140M, USB 2.0, черный',
                price: 70.05,
                quantity: 0
            },
            {
                id: 3,
                name: 'Сетевой адаптер',
                description: 'Сетевой адаптер Wi-Fi D-Link',
                price: 200.45,
                quantity: 6
            },
            {
                id: 4,
                name: 'Видеокарта Nvidia',
                description: 'Видеокарта GIGABYTE GeForce GTX 1080 1657MHz PCI-E 3.0 8192MB 10010MHz 256 bit DVI HDMI HDCP',
                price: 400,
                quantity: 0
            }
        ]
    },

    autoLoad: true,

    proxy: {
        type: 'memory',
        format: 'json',
        reader: {
            rootProperty: 'items'
        },
        writer: {
            rootProperty: 'items'
        }
    }
})