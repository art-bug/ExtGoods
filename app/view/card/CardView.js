Ext.define('ExtGoods.view.card.CardView', {
    extend: 'Ext.form.Panel',
    xtype: 'cardView',

    requires: [
        'ExtGoods.model.GoodsModel'
    ],

    controller: 'cardViewController',

    viewModel: {
        type: 'cardViewModel'
    },

    reference: 'cardView',

    bodyPadding: 10,

    items: [
        {
            xtype: 'displayfield',
            fieldLabel: 'ID',
            bodyPadding: 10,
            labelSeparator: '',
            anchor: '100%',
            bind: {
                value: '{currentRecord.product.id}'
            }
        }, {
            xtype: 'displayfield',
            fieldLabel: 'Наименование',
            bodyPadding: 10,
            labelSeparator: '',
            anchor: '100%',
            bind: {
                value: '{currentRecord.product.name}'
            }
        }, {
            xtype: 'numberfield',
            fieldLabel: 'Цена',
            cls: 'price',
            bodyPadding: 10,
            labelSeparator: '',
            anchor: '100%',
            regex: /^\d+(\.\d{1,2})?$/,
            regexText: 'Некорректный ввод',
            bind: {
                value: '{currentRecord.product.price}'
            },
            step: 0.01
        }, {
            xtype: 'numberfield',
            fieldLabel: 'Кол-во',
            cls: 'quantity',
            bodyPadding: 10,
            labelSeparator: '',
            anchor: '100%',
            regex: /^\d+$/,
            regexText: 'Некорректный ввод',
            bind: {
                value: '{currentRecord.product.quantity}'
            },
            step: 1
        }
    ],

    bbar: [
        {
            xtype: 'tbspacer',
            flex: 1
        },
        {
            xtype: 'button',
            text: 'Сохранить',
            handler: 'onSaveClick'
        }, {
            xtype: 'button',
            text: 'Отмена',
            style: {
                marginRight: '10px'
            },
            handler: 'onCancelClick'
        }
    ]
});