/**
 * The reusable GoodsGridView
 */
Ext.define('ExtGoods.view.goodsGrid.GoodsGridView', {
    extend: 'Ext.grid.Panel',
    xtype: 'goodsGrid',

    requires: [
        'Ext.toolbar.Paging',
        'ExtGoods.store.Goods'
    ],

    controller: 'goodsGridViewController',

    viewModel: {
        type: 'goodsGridViewModel'
    },
    
    title: 'Список товаров',

    reference: 'refGoodsGrid',

    store: {
        type: 'goods'
    },

    tbar: {
        layout: {
            type: 'vbox',
            align: 'left'
        },
        items: [
            {
                xtype: 'textfield',
                fieldLabel: 'ID',
                labelSeparator: '',
                padding: '10 0 0 0',
                emptyText: 'Введите фильтр...',
                listeners: {
                    specialkey: 'onIDFilter'
                }
            }, {
                xtype: 'textfield',
                fieldLabel: 'Описание',
                labelSeparator: '',
                padding: '10 0 10 0',
                emptyText: 'Введите фильтр...',
                listeners: {
                    specialkey: 'onDescriptionFilter'
                }
            }
        ]
    },

    selType: 'rowmodel',

    columns: [
        {
            text: 'ID',
            dataIndex: 'id',
            flex: 1
        }, {
            text: 'Имя',
            dataIndex: 'name',
            flex: 1
        }, {
            text: 'Описание',
            dataIndex: 'description',
            flex: 1
        }, {
            text: 'Цена',
            dataIndex: 'price',
            flex: 1
        }, {
            text: 'Кол-во',
            dataIndex: 'quantity',
            flex: 1,
            renderer: function (value, meta) {
                if (parseInt(value) == 0) {
                    meta.style = 'background-color: red;';
                }

                return value;
            }
        }
    ],

    bbar: {
        xtype: 'pagingtoolbar',
        store: {
            type: 'goods'
        },
        pageSize: 5,
        displayInfo: true,
        beforePageText: 'Страница',
        afterPageText: 'из {0}',
        displayMsg: 'Отображаются записи {0} - {1} из {2}',
        emptyMsg: 'Нет записей для отображения'
    },

    listeners: {
        select: 'onItemSelected'
    }
});
